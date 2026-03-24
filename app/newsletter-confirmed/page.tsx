import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function NewsletterConfirmedPage() {
  return (
    <>
      <Header title="Newsletter" />
      <main>
        <section className="contact-section" style={{ textAlign: "center", padding: "80px 20px" }}>
          <p style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.2em", color: "#999", marginBottom: "16px" }}>Merci !</p>
          <div style={{ fontSize: "48px", marginBottom: "16px", color: "#22c55e" }}>&#10003;</div>
          <h1>Inscription confirmée</h1>
          <p style={{ color: "#666", marginTop: "12px" }}>Votre adresse a été confirmée. Vous recevrez nos prochaines publications.</p>
          <Link href="/" className="btn-submit" style={{ display: "inline-block", marginTop: "24px" }}>Retour à l&#39;accueil</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}