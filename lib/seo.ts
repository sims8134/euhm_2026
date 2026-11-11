import type { Metadata } from "next";

export const BASE_URL = "https://euhm.fr";
export const SITE_NAME = "EUHM : Être Un Homme Meilleur";

/** Comptes sociaux officiels : source unique pour le pied de page, le bloc Suivre et le JSON-LD. */
export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/euhmfr/",
  facebook: "https://www.facebook.com/profile.php?id=61577494686303",
} as const;

/** Image Open Graph par défaut du site (1200x630, format recommandé). */
export const DEFAULT_OG_IMAGES = [
  {
    url: "/img/og-image.jpg",
    width: 1200,
    height: 630,
    alt: "EUHM, Être Un Homme Meilleur : bien-être masculin",
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

/* ------------------------------------------------------------------ */
/* Auteur et JSON-LD Article (articles et fiches)                      */
/* ------------------------------------------------------------------ */

export const AUTHOR = {
  name: "Simon",
  /** Photo carrée 400 px (page À propos, JSON-LD). */
  photo: "/img/simon.webp",
  /** Photo carrée 128 px (encadré auteur et ligne « Par Simon »). */
  photoSmall: "/img/simon-128.webp",
  alt: "Simon, auteur d'EUHM",
  page: "/apropos",
} as const;

/** Objet Person de l'auteur, en adresses absolues. */
export const AUTHOR_PERSON = {
  "@type": "Person",
  name: AUTHOR.name,
  image: `${BASE_URL}${AUTHOR.photo}`,
  url: `${BASE_URL}${AUTHOR.page}`,
} as const;

type ArticleJsonLdInput = {
  headline: string;
  description: string;
  datePublished: string;
  /** Chemin de la page, ex. "/articles/mon-article". */
  path: string;
  /** Chemin de l'image ; à défaut, l'image Open Graph du site. */
  image?: string;
  section?: string;
};

/** Bloc JSON-LD de type Article, commun aux articles et aux fiches. */
export function articleJsonLd({ headline, description, datePublished, path, image, section }: ArticleJsonLdInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    datePublished,
    dateModified: datePublished,
    inLanguage: "fr-FR",
    ...(section ? { articleSection: section } : {}),
    mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE_URL}${path}` },
    image: `${BASE_URL}${image ?? DEFAULT_OG_IMAGES[0].url}`,
    author: AUTHOR_PERSON,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: `${BASE_URL}/img/logo_euhm_half.png` },
    },
  };
}
