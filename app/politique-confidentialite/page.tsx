import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Comment euhm.fr collecte, utilise et protège vos données personnelles : newsletter, formulaire de contact, sous-traitants et exercice de vos droits RGPD.",
  alternates: { canonical: "/politique-confidentialite" },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <Header title="Confidentialité" />
      <main>
        <section className="legal-section">
          <h1>Politique de confidentialité</h1>
          <p className="date">Dernière mise à jour : août 2026</p>

          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span style={{ background: "rgb(248,102,19)", color: "white", borderRadius: "30px", padding: "8px 20px", fontSize: "1.4rem", fontWeight: 600 }}>
              🔒 Conforme RGPD &amp; CNIL
            </span>
          </div>

          <div className="legal-bloc">
            <h2>1. Responsable du traitement</h2>
            <p>Le responsable du traitement des données collectées sur le site <strong>euhm.fr</strong> est :</p>
            <div className="highlight-box">
              <strong>Simon Beltran</strong><br />
              Éditeur non professionnel du site euhm.fr<br />
              Email : <a href="mailto:contact@euhm.fr">contact@euhm.fr</a>
            </div>
            <p style={{ marginTop: "1rem" }}>
              euhm.fr est un projet personnel sans activité commerciale : aucun produit ni service
              n&apos;y est vendu, et aucune donnée n&apos;est exploitée à des fins publicitaires.
            </p>
          </div>

          <div className="legal-bloc">
            <h2>2. Données collectées</h2>
            <p>Nous collectons uniquement les données que vous nous transmettez volontairement :</p>
            <div className="highlight-box">
              <strong>Formulaire de contact :</strong> prénom, nom, adresse email, contenu du message.<br /><br />
              <strong>Inscription à la newsletter :</strong> adresse email uniquement. L&apos;inscription est
              confirmée par un lien envoyé à cette adresse (double opt-in) : sans cette confirmation,
              aucune communication ne vous est adressée.<br /><br />
              <strong>Alerte lancement de la boutique et intérêt pour un dossier :</strong> adresse email,
              accompagnée de l&apos;origine de la demande (par exemple « boutique » ou le nom du dossier
              concerné), afin de savoir quel contenu vous attendez.
            </div>
            <p style={{ marginTop: "1rem" }}>
              Aucune donnée bancaire n&apos;est collectée : le site ne propose aucune vente en ligne à ce jour.
            </p>
          </div>

          <div className="legal-bloc">
            <h2>3. Finalité du traitement</h2>
            <p>Vos données sont utilisées exclusivement pour :</p>
            <div className="highlight-box">
              — Répondre à vos demandes de contact<br />
              — Vous envoyer la newsletter à laquelle vous avez souscrit<br />
              — Vous prévenir de la sortie d&apos;un contenu ou de l&apos;ouverture de la boutique<br />
              — Orienter le choix des prochains sujets publiés<br />
              — Respecter nos obligations légales
            </div>
            <p style={{ marginTop: "1rem" }}>
              Elles ne sont jamais revendues ni transmises à des tiers à des fins commerciales.
            </p>
          </div>

          <div className="legal-bloc">
            <h2>4. Base légale</h2>
            <p>Le traitement de vos données repose sur :</p>
            <div className="highlight-box">
              — <strong>Votre consentement</strong>, pour l&apos;ensemble des traitements
              (newsletter, alertes, formulaire de contact) — Art. 6.1.a RGPD.<br /><br />
              Ce consentement est libre, spécifique et révocable à tout moment, sans conséquence.
            </div>
          </div>

          <div className="legal-bloc">
            <h2>5. Sous-traitants et hébergement</h2>
            <p>
              Pour fonctionner, le site fait appel aux prestataires suivants, qui peuvent traiter vos
              données pour notre compte et uniquement sur nos instructions :
            </p>
            <div className="highlight-box">
              <strong>Supabase</strong> — stockage des adresses inscrites à la newsletter.
              Serveurs situés dans l&apos;Union européenne (Irlande).<br /><br />
              <strong>LWS</strong> — hébergement de la messagerie et envoi des emails de confirmation
              et de désinscription. Serveurs situés en France.<br /><br />
              <strong>Vercel Inc.</strong> — hébergement du site (société établie aux États-Unis).
              À ce titre, des données techniques de connexion (adresse IP, en-têtes de requête)
              peuvent transiter par ses infrastructures.
            </div>
            <p style={{ marginTop: "1rem" }}>
              Les adresses email que vous nous confiez sont stockées et traitées au sein de
              l&apos;Union européenne. L&apos;hébergement du site étant assuré par une société
              américaine, un transfert de données techniques hors de l&apos;Union européenne est
              possible ; il est encadré par les clauses contractuelles types de la Commission
              européenne, sur lesquelles s&apos;appuie ce prestataire.
            </p>
          </div>

          <div className="legal-bloc">
            <h2>6. Durée de conservation</h2>
            <div className="highlight-box">
              — Messages reçus via le formulaire de contact : <strong>12 mois</strong> maximum<br />
              — Adresses inscrites à la newsletter : jusqu&apos;à votre désinscription<br />
              — Adresses en attente de confirmation (double opt-in) : supprimées après <strong>3 mois</strong> sans confirmation
            </div>
          </div>

          <div className="legal-bloc">
            <h2>7. Désinscription</h2>
            <p>
              Chaque email envoyé contient un lien de désinscription en un clic. Vous pouvez également
              écrire à <a href="mailto:contact@euhm.fr">contact@euhm.fr</a> : votre adresse est alors
              supprimée de la base, sans conservation d&apos;historique.
            </p>
          </div>

          <div className="legal-bloc">
            <h2>8. Cookies</h2>
            <p>
              Le site euhm.fr n&apos;utilise pas de cookies publicitaires, de traçage ni d&apos;analyse
              comportementale. Aucun bandeau de consentement n&apos;est donc nécessaire.
            </p>
            <div className="highlight-box">
              Aucun cookie publicitaire ou de suivi tiers n&apos;est utilisé sur ce site.
            </div>
          </div>

          <div className="legal-bloc">
            <h2>9. Sécurité</h2>
            <p>
              Le site est intégralement servi en HTTPS. L&apos;accès à la base de données est restreint
              et protégé par des clés d&apos;authentification. Les formulaires sont protégés contre les
              envois automatisés (piège anti-robot et limitation du nombre de soumissions).
            </p>
          </div>

          <div className="legal-bloc">
            <h2>10. Vos droits (RGPD)</h2>
            <p>
              Conformément au RGPD, vous disposez des droits suivants sur les données vous concernant :
            </p>
            <div className="highlight-box">
              ✓ Droit d&apos;accès à vos données<br />
              ✓ Droit de rectification<br />
              ✓ Droit à l&apos;effacement (droit à l&apos;oubli)<br />
              ✓ Droit d&apos;opposition au traitement<br />
              ✓ Droit à la portabilité<br />
              ✓ Droit de retirer votre consentement à tout moment
            </div>
            <p style={{ marginTop: "1rem" }}>
              Pour exercer ces droits : <a href="mailto:contact@euhm.fr">contact@euhm.fr</a>. Une réponse
              vous sera apportée dans un délai maximum d&apos;un mois.
            </p>
          </div>

          <div className="legal-bloc">
            <h2>11. Autorités de contrôle</h2>
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