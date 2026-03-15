import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata: Metadata = { title: "Mentions légales" };

export default function MentionsLegalesPage() {
  return (
    <>
      <Header title="Mentions légales" />
      <main>
        <section className="legal-section">
          <h1>Mentions légales</h1>
          <p className="date">Dernière mise à jour : 2020</p>

          <div className="legal-bloc">
            <h2>1. Éditeur du site</h2>
            <p>Le site <strong>euhm.fr</strong> est un site personnel édité à titre non commercial.</p>
            <div className="highlight-box"><strong>Contact :</strong> <a href="mailto:contact@euhm.fr">contact@euhm.fr</a></div>
          </div>
          <div className="legal-bloc">
            <h2>2. Hébergement</h2>
            <p>Le site euhm.fr est hébergé sur Vercel. Pour toute question relative à l&apos;hébergement, vous pouvez contacter l&apos;éditeur à l&apos;adresse <a href="mailto:contact@euhm.fr">contact@euhm.fr</a>.</p>
          </div>
          <div className="legal-bloc">
            <h2>3. Propriété intellectuelle</h2>
            <p>L&apos;ensemble des contenus présents sur le site euhm.fr (textes, images, photographies, logos, etc.) sont la propriété exclusive de l&apos;éditeur du site. Toute reproduction sans autorisation préalable est strictement interdite.</p>
          </div>
          <div className="legal-bloc">
            <h2>4. Responsabilité</h2>
            <p>Les informations et conseils publiés sur euhm.fr sont fournis à titre informatif uniquement. Ils ne constituent en aucun cas des avis médicaux, nutritionnels ou sportifs professionnels.</p>
          </div>
          <div className="legal-bloc">
            <h2>5. Droit applicable</h2>
            <p>Le présent site et ses mentions légales sont soumis au droit français. En cas de litige, les tribunaux français seront compétents.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
