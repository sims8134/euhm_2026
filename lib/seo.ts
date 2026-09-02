import type { Metadata } from "next";

export const BASE_URL = "https://euhm.fr";
export const SITE_NAME = "EUHM — Être Un Homme Meilleur";

/** Image Open Graph par défaut du site (1200x630, format recommandé). */
export const DEFAULT_OG_IMAGES = [
  {
    url: "/img/og-image.jpg",
    width: 1200,
    height: 630,
    alt: "EUHM – Être Un Homme Meilleur : bien-être masculin",
  },
];

type PageOpenGraphInput = {
  title: string;
  description: string;
  /** Chemin absolu depuis la racine, ex. "/articles". Omis pour l'accueil. */
  url?: string;
};

/**
 * Bloc `openGraph` complet pour une page.
 *
 * Next.js ne fusionne PAS `openGraph` entre un layout et une page : dès qu'une
 * page déclare son propre bloc, celui du layout est remplacé EN ENTIER —
 * `images`, `siteName`, `locale` et `type` compris. Toute page qui personnalise
 * son titre ou sa description doit donc passer par ce helper, sinon elle perd
 * silencieusement son aperçu de partage.
 */
export function pageOpenGraph({
  title,
  description,
  url,
}: PageOpenGraphInput): Metadata["openGraph"] {
  return {
    siteName: SITE_NAME,
    locale: "fr_FR",
    type: "website",
    title,
    description,
    ...(url ? { url } : {}),
    images: DEFAULT_OG_IMAGES,
  };
}
