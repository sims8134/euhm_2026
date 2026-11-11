import type { Metadata } from "next";
import { pageOpenGraph } from "../../lib/seo";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Désinscription",
  description: "Vous êtes désinscrit de la newsletter EUHM et ne recevrez plus d'e-mails de notre part.",
  alternates: { canonical: "/newsletter-unsubscribe" },
  // Page transactionnelle : hors des résultats de recherche.
  robots: { index: false, follow: true },
  openGraph: pageOpenGraph({
    title: "Désinscription",
    description: "Vous êtes désinscrit de la newsletter EUHM et ne recevrez plus d'e-mails de notre part.",
    url: "/newsletter-unsubscribe",
  }),
};

export default function NewsletterUnsubscribedPage() {
  return (
    <>
      <Header title="Newsletter" />
      <main>
        <section className="contact-section" style={{ textAlign: "center", padding: "80px 20px" }}>
          <div style={{ fontSize: "48px", marginBottom: "16px" }}>&#128075;</div>
          <h1>Désinscription</h1>
          <p style={{ color: "#666", marginTop: "12px" }}>Vous avez été retiré de notre liste. Vous ne recevrez plus d&#39;e-mails de notre part.</p>
          <Link href="/" className="btn-submit" style={{ display: "inline-block", marginTop: "24px" }}>Retour à l&#39;accueil</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}