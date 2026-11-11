import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { renderMarkdown, getAllArticles } from "./mdx";

/**
 * Fiches : une fiche importée = un dossier content/fiches/<slug>/ contenant
 *   - fiche.md     (en-tête YAML + corps Markdown, section « ## Sources » en fin)
 *   - images.json  (dimensions des images, écrit par scripts/import-fiche.mjs)
 * Les images sont servies depuis public/img/fiches/<slug>/.
 * Procédure complète : FICHES.md à la racine du projet.
 */

const fichesDir = path.join(process.cwd(), "content/fiches");
const IS_DEV = process.env.NODE_ENV === "development";

export type FicheImage = { src: string; width: number; height: number };

export type FicheMeta = {
  slug: string;
  title: string;
  date: string;
  lang: string;
  serie: string;
  description: string;
  cover: FicheImage;
  slides: FicheImage[];
};

/** Une fiche est visible dès que sa date est atteinte (tout est visible en développement). */
function isVisible(date: string): boolean {
  if (IS_DEV) return true;
  const d = new Date(date);
  if (isNaN(d.getTime())) return false;
  const today = new Date();
  today.setHours(23, 59, 59, 999);
  return d <= today;
}

function readFiche(slug: string): { meta: FicheMeta; body: string } | null {
  const dir = path.join(fichesDir, slug);
  const mdPath = path.join(dir, "fiche.md");
  const imagesPath = path.join(dir, "images.json");
  if (!fs.existsSync(mdPath) || !fs.existsSync(imagesPath)) return null;

  const { data, content } = matter(fs.readFileSync(mdPath, "utf8"));
  const images = JSON.parse(fs.readFileSync(imagesPath, "utf8")) as { cover: FicheImage; slides: FicheImage[] };
  // gray-matter convertit une date YAML non entre guillemets en objet Date.
  const date = data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date ?? "");

  return {
    meta: {
      slug,
      title: String(data.title ?? "Sans titre"),
      date,
      lang: String(data.lang ?? "fr"),
      serie: String(data.serie ?? ""),
      description: String(data.description ?? ""),
      cover: images.cover,
      slides: images.slides ?? [],
    },
    body: content,
  };
}

/** Toutes les fiches visibles, de la plus récente à la plus ancienne. */
export function getAllFichesPages(): FicheMeta[] {
  if (!fs.existsSync(fichesDir)) return [];
  return fs
    .readdirSync(fichesDir, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => readFiche(e.name))
    .filter((f): f is { meta: FicheMeta; body: string } => f !== null && isVisible(f.meta.date))
    .map((f) => f.meta)
    .sort((a, b) => b.date.localeCompare(a.date));
}

/** Ajoute target/rel aux liens externes (sources). */
function externalLinks(html: string): string {
  return html.replace(/<a href="(https?:\/\/[^"]+)"/g, '<a href="$1" target="_blank" rel="noopener noreferrer"');
}

/** Une fiche : corps et sources séparés, déjà convertis en HTML. */
export function getFicheBySlug(slug: string) {
  const f = readFiche(slug);
  if (!f || !isVisible(f.meta.date)) return null;

  // La section « ## Sources » (dernière section du fichier) est affichée à part.
  const parts = f.body.split(/^##\s+Sources\s*$/m);
  const body = parts[0];
  const sources = parts.length > 1 ? parts.slice(1).join("\n") : "";

  return {
    meta: f.meta,
    content: renderMarkdown(body),
    sources: sources.trim() ? externalLinks(renderMarkdown(sources)) : "",
  };
}

export type RelatedItem = { href: string; title: string; date: string; image?: string; kind: "Fiche" | "Article" };

const normalize = (s: string) =>
  s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim();

/** true si le texte de l'article contient un lien vers la fiche. */
function articleLinksTo(articleSlug: string, ficheSlug: string): boolean {
  for (const ext of ["md", "mdx"]) {
    const p = path.join(process.cwd(), "content/articles", `${articleSlug}.${ext}`);
    if (fs.existsSync(p)) return fs.readFileSync(p, "utf8").includes(`/fiches/${ficheSlug}`);
  }
  return false;
}

/**
 * « À lire aussi », trois éléments au plus, dans cet ordre :
 *   1. les articles qui renvoient vers cette fiche (lien explicite dans les deux sens) ;
 *   2. les autres fiches de la même série ;
 *   3. les articles dont la catégorie porte le même nom que la série.
 */
export function getRelated(meta: FicheMeta, max = 3): RelatedItem[] {
  const serie = normalize(meta.serie);
  const toItem = (a: ReturnType<typeof getAllArticles>[number]): RelatedItem => ({
    href: `/articles/${a.slug}`, title: a.title, date: a.date, image: a.image, kind: "Article",
  });
  const allArticles = getAllArticles();
  const linked = allArticles.filter((a) => articleLinksTo(a.slug, meta.slug));
  const fiches: RelatedItem[] = serie
    ? getAllFichesPages()
        .filter((f) => f.slug !== meta.slug && normalize(f.serie) === serie)
        .map((f) => ({ href: `/fiches/${f.slug}`, title: f.title, date: f.date, image: f.cover.src, kind: "Fiche" }))
    : [];
  const sameCategory = serie
    ? allArticles.filter((a) => !linked.includes(a) && normalize(a.category) === serie)
    : [];
  return [...linked.map(toItem), ...fiches, ...sameCategory.map(toItem)].slice(0, max);
}
