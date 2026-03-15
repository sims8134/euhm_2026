import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata: Metadata = { title: "CGU" };

export default function CguPage() {
  return (
    <>
      <Header title="CGU" />
      <main>
        <section className="legal-section">
          <h1>Conditions Générales d&apos;Utilisation</h1>
          <p className="date">Dernière mise à jour : 2020</p>

          <div className="legal-bloc">
            <h2>1. Objet</h2>
            <p>Les présentes CGU ont pour objet de définir les modalités et conditions dans lesquelles les utilisateurs accèdent au site <strong>euhm.fr</strong> et utilisent ses services. Tout accès au site implique l&apos;acceptation pleine et entière des présentes CGU.</p>
          </div>
          <div className="legal-bloc">
            <h2>2. Accès au site</h2>
            <p>Le site euhm.fr est accessible gratuitement à tout utilisateur disposant d&apos;un accès à internet. L&apos;éditeur se réserve le droit de modifier, suspendre ou interrompre l&apos;accès au site à tout moment, sans préavis ni indemnité.</p>
            <div className="highlight-box">L&apos;accès au site est gratuit et ne nécessite aucune inscription.</div>
          </div>
          <div className="legal-bloc">
            <h2>3. Contenu du site</h2>
            <p>Les articles, dossiers, conseils et informations publiés sur euhm.fr sont fournis à titre informatif et de partage personnel. Ils ne constituent pas des avis médicaux, sportifs ou nutritionnels professionnels.</p>
          </div>
          <div className="legal-bloc">
            <h2>4. Propriété intellectuelle</h2>
            <p>L&apos;ensemble des contenus du site sont protégés par le droit de la propriété intellectuelle et appartiennent à l&apos;éditeur du site. Toute reproduction, même partielle, est interdite sans autorisation écrite préalable.</p>
          </div>
          <div className="legal-bloc">
            <h2>5. Contact</h2>
            <div className="highlight-box"><a href="mailto:contact@euhm.fr">contact@euhm.fr</a></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
