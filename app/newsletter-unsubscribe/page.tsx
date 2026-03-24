import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

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