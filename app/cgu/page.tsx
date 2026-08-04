import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation",
  description:
    "Conditions d'accès et d'utilisation du site euhm.fr : contenu éditorial, newsletter, ressources téléchargeables et propriété intellectuelle.",
  alternates: { canonical: "/cgu" },
};

export default function CguPage() {
  return (
    <>
      <Header title="CGU" />
      <main>
        <section className="legal-section">
          <h1>Conditions Générales d&apos;Utilisation</h1>
          <p className="date">
            Dernière mise à jour :{" "}
            {new Date().toLocaleDateString("fr-FR", { month: "long", year: "numeric" })}
          </p>

          <div className="legal-bloc">
            <h2>1. Objet</h2>
            <p>
              Les présentes CGU définissent les modalités et conditions dans lesquelles les
              utilisateurs accèdent au site <strong>euhm.fr</strong> et utilisent ses contenus.
              Le site est édité à titre personnel et non professionnel ; l&apos;identité de
              l&apos;éditeur figure dans les{" "}
              <a href="/mentions-legales">mentions légales</a>. Tout accès au site implique
              l&apos;acceptation pleine et entière des présentes conditions.
            </p>
          </div>

          <div className="legal-bloc">
            <h2>2. Accès au site</h2>
            <p>
              Le site euhm.fr est accessible gratuitement à tout utilisateur disposant d&apos;un accès
              à internet. L&apos;éditeur se réserve le droit de modifier, suspendre ou interrompre
              l&apos;accès au site à tout moment, sans préavis ni indemnité.
            </p>
            <div className="highlight-box">
              La consultation du contenu éditorial est gratuite et ne nécessite aucune inscription.
            </div>
          </div>

          <div className="legal-bloc">
            <h2>3. Contenu du site</h2>
            <p>
              Les articles, dossiers, conseils et informations publiés sur euhm.fr sont fournis à
              titre informatif et de partage d&apos;expérience personnelle.{" "}
              <strong>Ils ne constituent pas des avis médicaux, sportifs ou nutritionnels
              professionnels</strong> et ne remplacent pas la consultation d&apos;un professionnel de
              santé, seul à même d&apos;évaluer une situation individuelle.
            </p>
            <p>
              L&apos;utilisateur reste seul responsable de l&apos;usage qu&apos;il fait des
              informations publiées et des décisions qu&apos;il prend concernant sa santé.
            </p>
          </div>

          <div className="legal-bloc">
            <h2>4. Newsletter et alertes</h2>
            <p>
              En s&apos;inscrivant à la newsletter, en demandant à être prévenu d&apos;une
              publication ou en manifestant son intérêt pour un dossier, l&apos;utilisateur consent
              expressément à recevoir des communications électroniques relatives aux contenus du site
              euhm.fr. Chaque inscription est confirmée par un lien envoyé par email : sans cette
              confirmation, aucune communication n&apos;est adressée.
            </p>
            <div className="highlight-box">
              L&apos;utilisateur peut se désinscrire à tout moment via le lien présent dans chaque
              email, ou en écrivant à <a href="mailto:contact@euhm.fr">contact@euhm.fr</a>. Le
              traitement des données est détaillé dans la{" "}
              <a href="/politique-confidentialite">politique de confidentialité</a>.
            </div>
          </div>

          <div className="legal-bloc">
            <h2>5. Ressources téléchargeables</h2>
            <p>
              Les fiches pratiques proposées en téléchargement sont mises à disposition gratuitement,
              sans inscription. Elles sont destinées à un usage personnel : elles peuvent être
              imprimées et partagées telles quelles, mais toute reprise commerciale ou modification
              est soumise à autorisation écrite préalable.
            </p>
          </div>

          <div className="legal-bloc">
            <h2>6. Absence de vente en ligne</h2>
            <p>
              Le site euhm.fr ne propose actuellement <strong>aucun produit ni service à la
              vente</strong>. Les produits présentés sur la page boutique le sont à titre
              d&apos;information, sans possibilité d&apos;achat. Si une activité commerciale venait à
              être ouverte, elle serait encadrée par des Conditions Générales de Vente distinctes,
              accessibles avant toute transaction, et les présentes CGU seraient mises à jour en
              conséquence.
            </p>
          </div>

          <div className="legal-bloc">
            <h2>7. Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble des contenus du site (textes, images, logos, fiches téléchargeables)
              sont protégés par le droit de la propriété intellectuelle et appartiennent à leur
              auteur. Toute reproduction, même partielle, est interdite sans autorisation écrite
              préalable.
            </p>
          </div>

          <div className="legal-bloc">
            <h2>8. Liens externes</h2>
            <p>
              Le site peut contenir des liens vers des sites tiers, fournis à titre
              d&apos;information. Leur contenu n&apos;engage que leurs éditeurs respectifs, et
              l&apos;éditeur d&apos;euhm.fr n&apos;exerce aucun contrôle sur ces sites.
            </p>
          </div>

          <div className="legal-bloc">
            <h2>9. Modification des CGU</h2>
            <p>
              L&apos;éditeur se réserve le droit de modifier les présentes CGU à tout moment. Les
              utilisateurs sont informés de toute modification substantielle par la mise à jour de la
              date figurant en haut de cette page.
            </p>
          </div>

          <div className="legal-bloc">
            <h2>10. Droit applicable</h2>
            <p>
              Les présentes CGU sont soumises au droit français et au droit européen. En cas de
              litige, et après tentative de résolution amiable, les tribunaux français seront
              compétents.
            </p>
          </div>

          <div className="legal-bloc">
            <h2>11. Contact</h2>
            <div className="highlight-box">
              <a href="mailto:contact@euhm.fr">contact@euhm.fr</a>
            </div>
          </div>

        </section>
      </main>
      <Footer />
    </>
  );
}