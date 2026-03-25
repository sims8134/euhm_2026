import type { Metadata } from "next";
import "./globals.css";

// FIX : Pas de www, c'est plus moderne et plus court
const BASE_URL = "https://euhm.fr";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  verification: {
    google: "UwG_kI6DIiNh4OmL1rUELImqlTSmPRCdH0LPzivZJNI",
  },
  title: {
    default: "EUHM — Être Un Homme Meilleur",
    template: "%s | EUHM",
  },
  description: "Conseils bien-être, sport, alimentation, psychologie et écologie pour devenir une meilleure version de vous-même.",
  keywords: ["bien-être", "développement personnel", "sport", "alimentation", "psychologie", "écologie", "homme", "santé"],
  robots: { index: true, follow: true },
  icons: { icon: "/img/logo_euhm_half.png" },
  
  // SEO Localisé France uniquement
  alternates: {
    canonical: BASE_URL,
  },

  openGraph: {
    title: "EUHM — Être Un Homme Meilleur",
    description: "Conseils bien-être simples et concrets pour progresser au quotidien.",
    url: BASE_URL,
    siteName: "EUHM",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EUHM – Être Un Homme Meilleur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EUHM — Être Un Homme Meilleur",
    description: "Conseils bien-être simples et concrets pour progresser au quotidien.",
    images: ["/img/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}