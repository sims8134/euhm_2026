import type { Metadata } from "next";
import { pageOpenGraph } from "../../lib/seo";

export const metadata: Metadata = {
  title: "Galerie Photos Nature & Bien-être",
  description: "Découvrez notre collection d'images inspirantes : paysages, nature et sérénité. Un voyage visuel pour accompagner votre développement personnel.",
  alternates: { canonical: "/galerie" },
  openGraph: pageOpenGraph({
    title: "Galerie Photos Nature & Bien-être",
    description: "Découvrez notre collection d'images inspirantes : paysages, nature et sérénité. Un voyage visuel pour accompagner votre développement personnel.",
    url: "/galerie",
  }),
};

export default function GalerieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}