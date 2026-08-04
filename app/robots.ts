import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Les routes techniques n'ont rien à faire dans l'index.
      disallow: ["/api/", "/newsletter-confirmed", "/newsletter-unsubscribe"],
    },
    sitemap: "https://euhm.fr/sitemap.xml",
  };
}