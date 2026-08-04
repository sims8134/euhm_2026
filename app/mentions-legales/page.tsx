import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Éditeur, directeur de la publication, hébergeur et conditions d'utilisation du site euhm.fr.",
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Header title="Mentions légales" />
      <main>
        <section className="legal-section">
          <h1>Mentions légales</h1>
          <p className="date">
            Dernière mise à jour :{" "}
            {new Date().toLocaleDateString("fr-FR", { month: "long", year: "numeric" })}
          </p>

          <div className="legal-bloc">
            <h2>1. Éditeur du site</h2>
            <p>
              Le site <strong>euhm.fr</strong> est un projet personnel, édité à titre non
              professionnel par :
            </p>
            <div className="highlight-box">
              <strong>Simon Beltran</strong><br />
              Éditeur non professionnel<br />
              Contact : <a href="mailto:contact@euhm.fr">contact@euhm.fr</a>
            </div>
            <p style={{ marginTop: "1rem" }}>
              Le site ne poursuit aucun but commercial : il ne vend aucun produit ni service, ne
              diffuse aucune publicité et ne perçoit aucune rémunération. Conformément à
              l&apos;article 6-III-2 de la loi pour la confiance dans l&apos;économie numérique,
              l&apos;éditeur non professionnel peut préserver son anonymat vis-à-vis du public dès
              lors que son identité a été communiquée à l&apos;hébergeur, dont les coordonnées
              figurent ci-dessous.
            </p>
          </div>

          <div className="legal-bloc">
            <h2>2. Directeur de la publication</h2>
            <p>Simon Beltran.</p>
          </div>

          <div className="legal-bloc">
            <h2>3. Hébergement</h2>
            <p>Le site euhm.fr est hébergé par :</p>
            <div className="highlight-box">
              <strong>Vercel Inc.</strong><br />
              440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br />
              <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a>
            </div>
            <p style={{ marginTop: "1rem" }}>
              La messagerie et l&apos;envoi des emails sont assurés par <strong>LWS</strong> (France),
              et le stockage des adresses inscrites à la newsletter par <strong>Supabase</strong>
              (serveurs situés en Irlande). Le détail de ces traitements figure dans la{" "}
              <a href="/politique-confidentialite">politique de confidentialité</a>.
            </p>
          </div>

          <div className="legal-bloc">
            <h2>4. Conception et réalisation</h2>
            <div className="highlight-box">
              <strong>SBCConception</strong> — conception et développement web<br />
              <a href="https://sbcconception.com" target="_blank" rel="noopener noreferrer">sbcconception.com</a>
            </div>
          </div>

          <div className="legal-bloc">
            <h2>5. Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble des contenus présents sur le site euhm.fr (textes, images, photographies,
              logos, fiches pratiques téléchargeables) sont la propriété de leur auteur. Toute
              reproduction, même partielle, sans autorisation écrite préalable est interdite.
            </p>
            <p>
              Les fiches pratiques proposées en téléchargement sont libres d&apos;usage personnel et
              peuvent être imprimées et partagées telles quelles. Toute reprise commerciale ou
              modification reste soumise à autorisation.
            </p>
          </div>

          <div className="legal-bloc">
            <h2>6. Responsabilité</h2>
            <p>
              Les informations et conseils publiés sur euhm.fr sont fournis à titre informatif
              uniquement. Ils reposent sur l&apos;expérience personnelle de l&apos;auteur et{" "}
              <strong>ne constituent en aucun cas des avis médicaux, nutritionnels ou sportifs
              professionnels</strong>. Ils ne remplacent pas la consultation d&apos;un professionnel
              de santé qualifié, seul à même d&apos;évaluer votre situation individuelle.
            </p>
            <p>
              L&apos;éditeur ne saurait être tenu responsable de l&apos;utilisation faite des
              informations publiées sur ce site, ni des conséquences directes ou indirectes qui
              pourraient en résulter.
            </p>
          </div>

          <div className="legal-bloc">
            <h2>7. Liens externes</h2>
            <p>
              Le site peut contenir des liens vers des sites tiers. Ces liens sont fournis à titre
              d&apos;information : leur contenu n&apos;engage que leurs éditeurs respectifs, et
              l&apos;éditeur d&apos;euhm.fr n&apos;exerce aucun contrôle sur ces sites.
            </p>
          </div>

          <div className="legal-bloc">
            <h2>8. Droit applicable</h2>
            <p>
              Les présentes mentions sont soumises au droit français et au droit européen.
            </p>
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