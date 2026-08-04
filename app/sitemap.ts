import { MetadataRoute } from "next";
import { getAllArticles } from "../lib/mdx";

const BASE_URL = "https://euhm.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastMod = new Date();

  // Les articles sont lus depuis content/articles : tout nouvel article
  // apparaît automatiquement, avec sa vraie date de publication.
  const articles: MetadataRoute.Sitemap = getAllArticles().map((a) => ({
    url: `${BASE_URL}/articles/${a.slug}`,
    lastModified: a.date ? new Date(a.date) : lastMod,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const pages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: lastMod, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/articles`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/dossiers`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/telechargement`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/boutique`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/galerie`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/apropos`, lastModified: lastMod, changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: lastMod, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE_URL}/mentions-legales`, lastModified: lastMod, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/cgu`, lastModified: lastMod, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/politique-confidentialite`, lastModified: lastMod, changeFrequency: "yearly", priority: 0.3 },
  ];

  return [...pages, ...articles];
}