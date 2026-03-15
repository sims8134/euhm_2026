import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata: Metadata = { title: "Politique de confidentialité" };

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <Header title="Confidentialité" />
      <main>
        <section className="legal-section">
          <h1>Politique de confidentialité</h1>
          <p className="date">Dernière mise à jour : 2020</p>

          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span style={{ background: "rgb(248,102,19)", color: "white", borderRadius: "30px", padding: "8px 20px", fontSize: "1.4rem", fontWeight: 600 }}>
              🔒 Conforme RGPD
            </span>
          </div>

          <div className="legal-bloc">
            <h2>1. Responsable du traitement</h2>
            <p>Le responsable du traitement des données collectées sur le site <strong>euhm.fr</strong> est l&apos;éditeur du site.</p>
            <div className="highlight-box"><strong>Contact :</strong> <a href="mailto:contact@euhm.fr">contact@euhm.fr</a></div>
          </div>
          <div className="legal-bloc">
            <h2>2. Données collectées</h2>
            <p>Les seules données susceptibles d&apos;être collectées sont celles que vous transmettez volontairement via le formulaire de contact : prénom, nom, adresse email, et contenu du message. Aucune donnée n&apos;est collectée automatiquement à des fins de profilage.</p>
          </div>
          <div className="legal-bloc">
            <h2>3. Cookies</h2>
            <p>Le site euhm.fr n&apos;utilise pas de cookies de traçage, de publicité ou d&apos;analyse comportementale.</p>
            <div className="highlight-box">Aucun cookie publicitaire ou de suivi n&apos;est utilisé sur ce site.</div>
          </div>
          <div className="legal-bloc">
            <h2>4. Vos droits (RGPD)</h2>
            <p>Conformément au RGPD, vous disposez des droits d&apos;accès, de rectification, d&apos;effacement, d&apos;opposition et de portabilité de vos données. Pour exercer ces droits : <a href="mailto:contact@euhm.fr">contact@euhm.fr</a></p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
