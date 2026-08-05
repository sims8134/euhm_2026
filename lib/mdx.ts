import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const articlesDir = path.join(process.cwd(), "content/articles");

/** En développement, les brouillons et les articles programmés restent visibles. */
const IS_DEV = process.env.NODE_ENV === "development";

export type ArticleMeta = {
  slug: string;
  title: string;
  date: string;
  category: string;
  description: string;
  image?: string;
  readTime?: string;
  /** Légende sous l'image de couverture (mention IA, crédit photo…). */
  imageCredit?: string;
  /** true = l'article reste dans le dépôt mais n'apparaît nulle part en production. */
  draft?: boolean;

  // --- Fiche pratique associée (facultatif) ---
  fiche?: string;
  ficheNumero?: string;
  ficheTitre?: string;
  ficheDesc?: string;
  ficheIcon?: string;
};

function toMeta(data: Record<string, unknown>, slug: string): ArticleMeta {
  return {
    slug,
    title: (data.title as string) ?? "Sans titre",
    date: (data.date as string) ?? "",
    category: (data.category as string) ?? "Général",
    description: (data.description as string) ?? "",
    image: data.image as string | undefined,
    readTime: (data.readTime as string) ?? "5 min",
    imageCredit: data.imageCredit as string | undefined,
    draft: data.draft === true,
    fiche: data.fiche as string | undefined,
    ficheNumero: data.ficheNumero as string | undefined,
    ficheTitre: data.ficheTitre as string | undefined,
    ficheDesc: data.ficheDesc as string | undefined,
    ficheIcon: data.ficheIcon as string | undefined,
  };
}

/**
 * Un article est publié s'il n'est pas en brouillon et si sa date est atteinte.
 * En développement, tout est visible pour pouvoir relire avant publication.
 */
export function isPublished(meta: ArticleMeta): boolean {
  if (IS_DEV) return true;
  if (meta.draft) return false;
  if (!meta.date) return true;

  const publication = new Date(meta.date);
  if (isNaN(publication.getTime())) return true;

  // Comparaison à la journée, pour éviter les effets de fuseau horaire.
  const aujourdhui = new Date();
  aujourdhui.setHours(23, 59, 59, 999);
  return publication <= aujourdhui;
}

/** Tous les articles du dossier, sans aucun filtre. Usage interne. */
function readAll(): ArticleMeta[] {
  if (!fs.existsSync(articlesDir)) return [];

  return fs
    .readdirSync(articlesDir)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(/\.(mdx|md)$/, "");
      const raw = fs.readFileSync(path.join(articlesDir, filename), "utf8");
      const { data } = matter(raw);
      return toMeta(data, slug);
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/** Les articles visibles : listing, accueil, sitemap. */
export function getAllArticles(): ArticleMeta[] {
  return readAll().filter(isPublished);
}

/** Les fiches pratiques des articles visibles, triées par numéro. */
export function getAllFiches(): ArticleMeta[] {
  return getAllArticles()
    .filter((a) => Boolean(a.fiche))
    .sort((a, b) => (a.ficheNumero ?? "").localeCompare(b.ficheNumero ?? ""));
}

/**
 * Le H1 de la page article est fourni par le template : tout H1 du corps
 * markdown est rétrogradé en H2 pour garantir un seul H1 par page.
 */
function demoteH1(html: string): string {
  return html.replace(/<h1(\s[^>]*)?>/g, "<h2$1>").replace(/<\/h1>/g, "</h2>");
}

export function getArticleBySlug(slug: string) {
  for (const ext of ["mdx", "md"]) {
    const filePath = path.join(articlesDir, `${slug}.${ext}`);
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(raw);
      const meta = toMeta(data, slug);
      // Un brouillon ou un article programmé n'est pas servi en production.
      if (!isPublished(meta)) return null;
      return { meta, content: demoteH1(marked(content) as string) };
    }
  }
  return null;
}