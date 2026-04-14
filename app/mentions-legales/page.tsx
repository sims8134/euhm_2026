import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata: Metadata = { title: "Mentions légales — EUHM" };

export default function MentionsLegalesPage() {
  return (
    <>
      <Header title="Mentions légales" />
      <main>
        <section className="legal-section">
          <h1>Mentions légales</h1>
          <p className="date">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}</p>

          <div className="legal-bloc">
            <h2>1. Éditeur du site</h2>
            <p>Le site <strong>euhm.fr</strong> est édité par :</p>
            <div className="highlight-box">
              <strong>SOC TRADE BULGARIA EOOD</strong><br />
              Société à responsabilité limitée de droit bulgare<br />
              ЕИК (numéro d&apos;identification) : <strong>208209146</strong><br />
              Siège social : 64A ul. Maragidik, 1505 Sofia, Bulgarie<br />
              Email : <a href="mailto:contact@euhm.fr">contact@euhm.fr</a>
            </div>
          </div>

          <div className="legal-bloc">
            <h2>2. Directeur de la publication</h2>
            <p>Simon Beltran, en qualité de gérant de SOC TRADE BULGARIA EOOD.</p>
          </div>

          <div className="legal-bloc">
            <h2>3. Hébergement</h2>
            <p>Le site euhm.fr est hébergé par :</p>
            <div className="highlight-box">
              <strong>Vercel Inc.</strong><br />
              440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br />
              <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a>
            </div>
          </div>

          <div className="legal-bloc">
            <h2>4. Propriété intellectuelle</h2>
            <p>L&apos;ensemble des contenus présents sur le site euhm.fr (textes, images, photographies, logos, etc.) sont la propriété exclusive de SOC TRADE BULGARIA EOOD. Toute reproduction, même partielle, sans autorisation écrite préalable est strictement interdite et constitue une contrefaçon sanctionnée par le Code de la propriété intellectuelle.</p>
          </div>

          <div className="legal-bloc">
            <h2>5. Responsabilité</h2>
            <p>Les informations et conseils publiés sur euhm.fr sont fournis à titre informatif uniquement. Ils ne constituent en aucun cas des avis médicaux, nutritionnels ou sportifs professionnels. SOC TRADE BULGARIA EOOD ne saurait être tenu responsable de l&apos;utilisation faite des informations publiées sur ce site.</p>
          </div>

          <div className="legal-bloc">
            <h2>6. Droit applicable</h2>
            <p>Le présent site et ses mentions légales sont soumis au droit français et au droit européen. En cas de litige, les tribunaux français seront compétents.</p>
          </div>

          <div className="legal-bloc">
            <h2>7. Contact</h2>
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
