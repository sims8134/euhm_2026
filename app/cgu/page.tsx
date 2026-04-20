import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata: Metadata = { title: "CGU — EUHM" };

export default function CguPage() {
  return (
    <>
      <Header title="CGU" />
      <main>
        <section className="legal-section">
          <h1>Conditions Générales d&apos;Utilisation</h1>
          <p className="date">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}</p>

          <div className="legal-bloc">
            <h2>1. Objet</h2>
            <p>Les présentes CGU ont pour objet de définir les modalités et conditions dans lesquelles les utilisateurs accèdent au site <strong>euhm.fr</strong>, édité par <strong>SOC TRADE BULGARIA EOOD</strong> (ЕИК 208209146), et utilisent ses services. Tout accès au site implique l&apos;acceptation pleine et entière des présentes CGU.</p>
          </div>

          <div className="legal-bloc">
            <h2>2. Accès au site</h2>
            <p>Le site euhm.fr est accessible gratuitement à tout utilisateur disposant d&apos;un accès à internet. L&apos;éditeur se réserve le droit de modifier, suspendre ou interrompre l&apos;accès au site à tout moment, sans préavis ni indemnité.</p>
            <div className="highlight-box">La consultation du contenu éditorial est gratuite et ne nécessite aucune inscription.</div>
          </div>

          <div className="legal-bloc">
            <h2>3. Contenu du site</h2>
            <p>Les articles, dossiers, conseils et informations publiés sur euhm.fr sont fournis à titre informatif et de partage. Ils ne constituent pas des avis médicaux, sportifs ou nutritionnels professionnels. L&apos;utilisateur est invité à consulter un professionnel de santé pour tout besoin spécifique.</p>
          </div>

          <div className="legal-bloc">
            <h2>4. Newsletter</h2>
            <p>En s&apos;inscrivant à la newsletter, l&apos;utilisateur consent expressément à recevoir des communications électroniques de la part de SOC TRADE BULGARIA EOOD relatives aux contenus et actualites du site euhm.fr.</p>
            <div className="highlight-box">
              Conformément au RGPD et à la loi française Informatique et Libertés, l&apos;utilisateur peut se désinscrire à tout moment via le lien de désinscription présent dans chaque email, ou en contactant <a href="mailto:contact@euhm.fr">contact@euhm.fr</a>.
            </div>
          </div>

          <div className="legal-bloc">
            <h2>5. Boutique & Produits</h2>
            <p>Le site euhm.fr propose ou proposera prochainement des produits à la vente. Toute transaction commerciale sera soumise à des Conditions Générales de Vente (CGV) distinctes, accessibles au moment de l&apos;achat. SOC TRADE BULGARIA EOOD se réserve le droit de modifier les prix et disponibilités des produits à tout moment.</p>
          </div>

          <div className="legal-bloc">
            <h2>6. Propriété intellectuelle</h2>
            <p>L&apos;ensemble des contenus du site sont protégés par le droit de la propriété intellectuelle et appartiennent à SOC TRADE BULGARIA EOOD. Toute reproduction, même partielle, est interdite sans autorisation écrite préalable.</p>
          </div>

          <div className="legal-bloc">
            <h2>7. Modification des CGU</h2>
            <p>SOC TRADE BULGARIA EOOD se réserve le droit de modifier les présentes CGU à tout moment. Les utilisateurs seront informés de toute modification substantielle par la mise à jour de la date en haut de cette page.</p>
          </div>

          <div className="legal-bloc">
            <h2>8. Droit applicable</h2>
            <p>Les présentes CGU sont soumises au droit français et au droit européen. En cas de litige, et après tentative de résolution amiable, les tribunaux français seront compétents.</p>
          </div>

          <div className="legal-bloc">
            <h2>9. Contact</h2>
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
