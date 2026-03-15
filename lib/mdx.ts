import fs from "fs";
import path from "path";
import matter from "gray-matter";

const articlesDir = path.join(process.cwd(), "content/articles");

export type ArticleMeta = {
  slug: string;
  title: string;
  date: string;
  category: string;
  description: string;
  image?: string;
  readTime?: string;
};

export function getAllArticles(): ArticleMeta[] {
  if (!fs.existsSync(articlesDir)) return [];

  const files = fs.readdirSync(articlesDir).filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  return files
    .map((filename) => {
      const slug = filename.replace(/\.(mdx|md)$/, "");
      const filePath = path.join(articlesDir, filename);
      const raw = fs.readFileSync(filePath, "utf8");
      const { data } = matter(raw);

      return {
        slug,
        title: data.title ?? "Sans titre",
        date: data.date ?? "",
        category: data.category ?? "Général",
        description: data.description ?? "",
        image: data.image,
        readTime: data.readTime ?? "5 min",
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getArticleBySlug(slug: string) {
  const extensions = ["mdx", "md"];
  for (const ext of extensions) {
    const filePath = path.join(articlesDir, `${slug}.${ext}`);
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(raw);
      return { meta: data as ArticleMeta, content };
    }
  }
  return null;
}
