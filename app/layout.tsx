import type { Metadata } from "next";
import "./globals.css";
import { BASE_URL, SITE_NAME, DEFAULT_OG_IMAGES, SOCIAL_LINKS } from "../lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  verification: {
    google: "UwG_kI6DIiNh4OmL1rUELImqlTSmPRCdH0LPzivZJNI",
  },
  title: {
    default: "EUHM — Bien-être masculin : sport, alimentation, psychologie",
    template: "%s | EUHM",
  },
  description:
    "Conseils pratiques de bien-être pour hommes : sport, alimentation équilibrée, psychologie, développement personnel et écologie. Guides gratuits et ressources testées.",
  robots: { index: true, follow: true },
  icons: { icon: "/img/logo_euhm_half.png" },
  openGraph: {
    siteName: SITE_NAME,
    locale: "fr_FR",
    type: "website",
    images: DEFAULT_OG_IMAGES,
  },
  twitter: {
    card: "summary_large_image",
    site: "@euhmfr",
  },
};

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: BASE_URL,
  logo: `${BASE_URL}/img/logo_euhm_half.png`,
  description:
    "Plateforme de bien-être masculin : sport, alimentation, psychologie, développement personnel et écologie.",
  sameAs: [SOCIAL_LINKS.facebook, SOCIAL_LINKS.instagram],
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