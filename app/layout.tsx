import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://euhm.fr";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  verification: {
    google: "UwG_kI6DIiNh4OmL1rUELImqlTSmPRCdH0LPzivZJNI",
  },
  title: {
    default: "EUHM — Bien-être masculin : sport, alimentation, psychologie",
    template: "%s | EUHM — Être Un Homme Meilleur",
  },
  description:
    "Conseils pratiques de bien-être pour hommes : sport, alimentation équilibrée, psychologie, développement personnel et écologie. Guides gratuits et ressources testées.",
  keywords: [
    "bien-être homme",
    "développement personnel homme",
    "sport maison homme",
    "alimentation équilibrée homme",
    "psychologie masculine",
    "écologie zéro déchet",
    "être un homme meilleur",
    "santé homme",
  ],
  robots: { index: true, follow: true },
  icons: { icon: "/img/logo_euhm_half.png" },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "EUHM — Bien-être masculin : sport, alimentation, psychologie",
    description:
      "Conseils pratiques de bien-être pour hommes : sport, alimentation, psychologie et développement personnel.",
    url: BASE_URL,
    siteName: "EUHM — Être Un Homme Meilleur",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EUHM – Être Un Homme Meilleur : bien-être masculin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@euhmfr",
    title: "EUHM — Bien-être masculin : sport, alimentation, psychologie",
    description:
      "Conseils pratiques de bien-être pour hommes : sport, alimentation, psychologie et développement personnel.",
    images: ["/img/og-image.jpg"],
  },
};

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "EUHM — Être Un Homme Meilleur",
  url: BASE_URL,
  logo: `${BASE_URL}/img/logo_euhm_half.png`,
  description:
    "Plateforme de bien-être masculin : sport, alimentation, psychologie, développement personnel et écologie.",
  sameAs: [
    "https://www.facebook.com/profile.php?id=61577494686303",
    "https://x.com/euhmfr",
    "https://www.instagram.com/euhmfr",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
