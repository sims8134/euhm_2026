import type { Metadata } from "next";
import { pageOpenGraph } from "../../lib/seo";

// La page contact est un composant client : ses métadonnées sont déclarées ici.
const description =
  "Une question, une suggestion, une idée ? Écrivez à EUHM par e-mail ou via le formulaire de contact. Je lis tous les messages.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: "/contact" },
  openGraph: pageOpenGraph({ title: "Contact", description, url: "/contact" }),
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
