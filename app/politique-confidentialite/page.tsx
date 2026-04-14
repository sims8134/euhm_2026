import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata: Metadata = { title: "Politique de confidentialité — EUHM" };

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <Header title="Confidentialité" />
      <main>
        <section className="legal-section">
          <h1>Politique de confidentialité</h1>
          <p className="date">Dernière mise à jour : Avril 2026</p>

          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span style={{ background: "rgb(248,102,19)", color: "white", borderRadius: "30px", padding: "8px 20px", fontSize: "1.4rem", fontWeight: 600 }}>
              🔒 Conforme RGPD & CNIL
            </span>
          </div>

          <div className="legal-bloc">
            <h2>1. Responsable du traitement</h2>
            <p>Le responsable du traitement des données collectées sur le site <strong>euhm.fr</strong> est :</p>
            <div className="highlight-box">
              <strong>SOC TRADE BULGARIA EOOD</strong><br />
              ЕИК : 208209146<br />
              64A ul. Maragidik, 1505 Sofia, Bulgarie<br />
              Email : <a href="mailto:contact@euhm.fr">contact@euhm.fr</a>
            </div>
          </div>

          <div className="legal-bloc">
            <h2>2. Données collectées</h2>
            <p>Nous collectons les données personnelles suivantes :</p>
            <div className="highlight-box">
              <strong>Via le formulaire de contact :</strong> prénom, nom, adresse email, contenu du message.<br /><br />
              <strong>Via la newsletter :</strong> adresse email uniquement, collectée avec votre consentement explicite.<br /><br />
              <strong>Via la boutique (à venir) :</strong> nom, prénom, adresse postale, email, et données de paiement (traitées par notre prestataire de paiement sécurisé — nous ne stockons jamais vos données bancaires).
            </div>
          </div>

          <div className="legal-bloc">
            <h2>3. Finalité du traitement</h2>
            <p>Vos données sont utilisées exclusivement pour :</p>
            <div className="highlight-box">
              — Répondre à vos demandes de contact<br />
              — Vous envoyer la newsletter à laquelle vous avez souscrit<br />
              — Traiter vos commandes (boutique)<br />
              — Respecter nos obligations légales
            </div>
            <p style={{ marginTop: "1rem" }}>Elles ne sont jamais revendues ni transmises à des tiers à des fins commerciales.</p>
          </div>

          <div className="legal-bloc">
            <h2>4. Base légale</h2>
            <p>Le traitement de vos données repose sur :</p>
            <div className="highlight-box">
              — <strong>Votre consentement</strong> (newsletter, formulaire de contact) — Art. 6.1.a RGPD<br />
              — <strong>L&apos;exécution d&apos;un contrat</strong> (commandes boutique) — Art. 6.1.b RGPD<br />
              — <strong>L&apos;obligation légale</strong> (facturation, comptabilité) — Art. 6.1.c RGPD
            </div>
          </div>

          <div className="legal-bloc">
            <h2>5. Durée de conservation</h2>
            <div className="highlight-box">
              — Données de contact : <strong>12 mois</strong> maximum<br />
              — Données newsletter : jusqu&apos;à désinscription<br />
              — Données de commande : <strong>10 ans</strong> (obligation comptable légale)
            </div>
          </div>

          <div className="legal-bloc">
            <h2>6. Cookies</h2>
            <p>Le site euhm.fr n&apos;utilise pas de cookies publicitaires, de traçage ou d&apos;analyse comportementale.</p>
            <div className="highlight-box">Aucun cookie publicitaire ou de suivi tiers n&apos;est utilisé sur ce site.</div>
          </div>

          <div className="legal-bloc">
            <h2>7. Vos droits (RGPD)</h2>
            <p>Conformément au RGPD et à la loi française Informatique et Libertés, vous disposez des droits suivants :</p>
            <div className="highlight-box">
              ✓ Droit d&apos;accès à vos données<br />
              ✓ Droit de rectification<br />
              ✓ Droit à l&apos;effacement (droit à l&apos;oubli)<br />
              ✓ Droit d&apos;opposition au traitement<br />
              ✓ Droit à la portabilité<br />
              ✓ Droit de retirer votre consentement à tout moment
            </div>
            <p style={{ marginTop: "1rem" }}>Pour exercer ces droits : <a href="mailto:contact@euhm.fr">contact@euhm.fr</a></p>
          </div>

          <div className="legal-bloc">
            <h2>8. Autorités de contrôle</h2>
            <p>En cas de réclamation, vous pouvez contacter :</p>
            <div className="highlight-box">
              🇫🇷 <strong>CNIL</strong> (France) — <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a><br /><br />
              🇧🇬 <strong>CPDP</strong> (Bulgarie) — <a href="https://www.cpdp.bg" target="_blank" rel="noopener noreferrer">www.cpdp.bg</a>
            </div>
          </div>

        </section>
      </main>
      <Footer />
    </>
  );
}
