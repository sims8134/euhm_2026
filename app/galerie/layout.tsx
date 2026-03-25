import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galerie Photos Nature & Bien-être | EUHM",
  description: "Découvrez notre collection d'images inspirantes : paysages, nature et sérénité. Un voyage visuel pour accompagner votre développement personnel.",
};

export default function GalerieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}