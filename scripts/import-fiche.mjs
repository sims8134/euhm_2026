#!/usr/bin/env node
/**
 * Import d'une fiche dans le site.
 *
 *   npm run import-fiche -- "<chemin du dossier>"            valide puis importe
 *   npm run import-fiche -- "<chemin du dossier>" --check    valide seulement, n'écrit rien
 *   npm run import-fiche -- "<chemin du dossier>" --force    remplace une fiche déjà importée
 *
 * Dossier attendu (voir FICHES.md) :
 *   fiche.md     en-tête YAML (title, date, slug, lang, serie, description) + corps Markdown,
 *                avec une section « ## Sources » en fin de fichier
 *   cover.webp   image d'en-tête, 1200 x 630 px
 *   slides/      facultatif : 01.webp, 02.webp, ... (carrousel Instagram)
 *
 * Résultat :
 *   content/fiches/<slug>/fiche.md       copie du fichier source
 *   content/fiches/<slug>/images.json    chemins et dimensions des images
 *   public/img/fiches/<slug>/cover.webp  et slides/NN.webp (métadonnées retirées)
 *
 * Aucune dépendance ajoutée : gray-matter (déjà utilisé par le site) et sharp (fourni avec Next.js).
 */
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import sharp from "sharp";

const ROOT = process.cwd();
const args = process.argv.slice(2);
const CHECK = args.includes("--check");
const FORCE = args.includes("--force");
const source = args.find((a) => !a.startsWith("--"));

const errors = [];
const warnings = [];
const fail = (msg) => errors.push(msg);
const warn = (msg) => warnings.push(msg);

if (!source) {
  console.error('Usage : npm run import-fiche -- "<chemin du dossier>" [--check] [--force]');
  process.exit(1);
}
const src = path.resolve(source);
if (!fs.existsSync(src) || !fs.statSync(src).isDirectory()) {
  console.error(`Dossier introuvable : ${src}`);
  process.exit(1);
}

/* ---------- fiche.md ---------- */
const mdPath = path.join(src, "fiche.md");
let data = {};
let body = "";
if (!fs.existsSync(mdPath)) {
  fail("fiche.md est absent du dossier.");
} else {
  try {
    ({ data, content: body } = matter(fs.readFileSync(mdPath, "utf8")));
  } catch (e) {
    fail(`En-tête YAML illisible dans fiche.md : ${e.message}`);
  }
}

for (const key of ["title", "date", "slug", "lang", "serie", "description"]) {
  if (data[key] === undefined || String(data[key]).trim() === "") fail(`Champ « ${key} » manquant ou vide dans l'en-tête.`);
}

// date : AAAA-MM-JJ (gray-matter convertit une date sans guillemets en objet Date)
const date = data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date ?? "");
if (date && (!/^\d{4}-\d{2}-\d{2}$/.test(date) || isNaN(new Date(date).getTime()))) {
  fail(`Date invalide « ${date} » : format attendu AAAA-MM-JJ.`);
}

if (data.lang && String(data.lang) !== "fr") fail(`Langue « ${data.lang} » : le site est uniquement en français (lang: fr).`);

// slug : minuscules, chiffres et tirets ; jamais .pdf ; jamais le nom d'un fichier de public/fiches/
const slug = String(data.slug ?? "").trim();
if (slug) {
  if (/\.pdf$/i.test(slug)) fail(`Slug refusé « ${slug} » : il ne doit pas se terminer par .pdf.`);
  else if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) fail(`Slug invalide « ${slug} » : lettres minuscules sans accent, chiffres et tirets uniquement.`);

  const pdfDir = path.join(ROOT, "public/fiches");
  if (fs.existsSync(pdfDir)) {
    const taken = fs.readdirSync(pdfDir).find((f) => f.toLowerCase() === slug.toLowerCase() || path.parse(f).name.toLowerCase() === slug.toLowerCase());
    if (taken) fail(`Slug refusé « ${slug} » : il correspond déjà au fichier public/fiches/${taken}.`);
  }
  if (!FORCE && fs.existsSync(path.join(ROOT, "content/fiches", slug))) {
    fail(`La fiche « ${slug} » existe déjà. Relancez avec --force pour la remplacer.`);
  }
}

// corps : une section « ## Sources » en fin de fichier
const h2 = [...body.matchAll(/^##\s+(.+?)\s*$/gm)].map((m) => m[1]);
if (!h2.includes("Sources")) fail("Section « ## Sources » absente.");
else if (h2[h2.length - 1] !== "Sources") fail("La section « ## Sources » doit être la dernière section du fichier.");
if (/^#\s/m.test(body)) warn("Le corps contient un titre « # » : il sera affiché en H2 (le H1 est le titre de la fiche).");

const textForDashes = `${data.title ?? ""}\n${data.description ?? ""}\n${body}`;
const dashes = (textForDashes.match(/[\u2013\u2014]/g) || []).length; // tirets moyen et long
if (dashes) warn(`${dashes} tiret(s) long(s) ou moyen(s) dans le texte : la charte du site les évite.`);

/* ---------- images ---------- */
async function inspect(file, label) {
  try {
    const meta = await sharp(file).metadata();
    if (meta.format !== "webp") fail(`${label} : format ${meta.format}, WebP attendu.`);
    return meta;
  } catch {
    fail(`${label} : image illisible.`);
    return null;
  }
}

const coverPath = path.join(src, "cover.webp");
let cover = null;
if (!fs.existsSync(coverPath)) fail("cover.webp est absent du dossier.");
else {
  cover = await inspect(coverPath, "cover.webp");
  if (cover && (cover.width !== 1200 || cover.height !== 630)) fail(`cover.webp mesure ${cover.width} x ${cover.height} px : 1200 x 630 px attendus.`);
}

const slidesDir = path.join(src, "slides");
const slides = [];
if (fs.existsSync(slidesDir)) {
  const files = fs.readdirSync(slidesDir).filter((f) => !f.startsWith(".")).sort();
  const bad = files.filter((f) => !/^\d{2}\.webp$/.test(f));
  if (bad.length) fail(`slides/ : noms refusés (${bad.join(", ")}). Format attendu : 01.webp, 02.webp, ...`);
  const good = files.filter((f) => /^\d{2}\.webp$/.test(f));
  good.forEach((f, i) => {
    const expected = String(i + 1).padStart(2, "0") + ".webp";
    if (f !== expected) fail(`slides/ : numérotation discontinue, ${expected} attendu au lieu de ${f}.`);
  });
  if (files.length === 0) warn("slides/ est vide : la fiche n'aura pas de galerie.");
  for (const f of good) {
    const meta = await inspect(path.join(slidesDir, f), `slides/${f}`);
    if (meta) slides.push({ file: f, width: meta.width, height: meta.height });
  }
}

/* ---------- bilan ---------- */
for (const w of warnings) console.warn(`Attention : ${w}`);
if (errors.length) {
  console.error(`\nImport refusé (${errors.length} erreur${errors.length > 1 ? "s" : ""}) :`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
if (CHECK) {
  console.log(`\nDossier valide : « ${data.title} » (${slug}), ${slides.length} slide(s). Rien n'a été écrit (--check).`);
  process.exit(0);
}

/* ---------- écriture ---------- */
const contentDir = path.join(ROOT, "content/fiches", slug);
const publicDir = path.join(ROOT, "public/img/fiches", slug);
fs.rmSync(contentDir, { recursive: true, force: true });
fs.rmSync(publicDir, { recursive: true, force: true });
fs.mkdirSync(contentDir, { recursive: true });
fs.mkdirSync(path.join(publicDir, slides.length ? "slides" : ""), { recursive: true });

fs.copyFileSync(mdPath, path.join(contentDir, "fiche.md"));

// Ré-encodage WebP : retire toutes les métadonnées (EXIF, GPS, XMP).
const reencode = (from, to) => sharp(from).webp({ quality: 85 }).toFile(to);
await reencode(coverPath, path.join(publicDir, "cover.webp"));
for (const s of slides) await reencode(path.join(slidesDir, s.file), path.join(publicDir, "slides", s.file));

const images = {
  cover: { src: `/img/fiches/${slug}/cover.webp`, width: cover.width, height: cover.height },
  slides: slides.map((s) => ({ src: `/img/fiches/${slug}/slides/${s.file}`, width: s.width, height: s.height })),
};
fs.writeFileSync(path.join(contentDir, "images.json"), JSON.stringify(images, null, 2) + "\n");

console.log(`\nFiche importée : « ${data.title} »`);
console.log(`  page     : /fiches/${slug} (visible à partir du ${date})`);
console.log(`  contenu  : content/fiches/${slug}/`);
console.log(`  images   : public/img/fiches/${slug}/ (couverture + ${slides.length} slide(s))`);
console.log("\nÉtape suivante : npm run build pour vérifier, puis commit et push (voir FICHES.md).");
