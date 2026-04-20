import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "EUHM — Bien-être masculin : sport, alimentation, psychologie",
  description:
    "Conseils pratiques de bien-être pour hommes : sport, alimentation équilibrée, psychologie, développement personnel et écologie. Guides gratuits et ressources testées.",
  alternates: {
    canonical: "https://euhm.fr",
  },
};

export default function Accueil() {
  return (
    <>
      {/* heroAsH2 = true because this page defines its own H1 below */}
      <Header title="Accueil" heroAsH2 />
      <main>
        <div className="main-grid">
          <article className="bienvenue">
            <h1>Bien-être masculin : devenez un homme meilleur</h1>

            <h2>EUHM c&apos;est quoi ?</h2>
            <p>
              Les lettres <strong>EUHM</strong> sont l&apos;abréviation de &quot;<strong>Être Un Homme Meilleur</strong>&quot;.
              <br /><br />
              Le site <strong>euhm.fr</strong> propose des articles et des dossiers experts sur la thématique du <strong>bien-être masculin</strong>. Ce portail s&apos;adresse en particulier à un public en quête de savoir et d&apos;amélioration tout en sortant des sentiers battus et des clichés des coachs musculation et bien-être qui pullulent sur la toile.
              <br /><br />
              Grâce à des <strong>conseils simples et compréhensibles par tous</strong>, vous retrouverez ici tous les outils nécessaires afin de développer votre bien-être et de retrouver l&apos;harmonie nécessaire à votre épanouissement dans votre vie comme dans votre environnement.
              <br /><br />
              <strong>Sport</strong>, <strong>alimentation</strong>, <strong>psychologie</strong>, vie de couple mais aussi <strong>écologie</strong> et astuces ménagères, les informations disponibles sur ce site vous sont présentées uniquement à titre de partage.
              <br /><br />
              Je ne suis ni un coach en développement personnel, ni un moniteur de sport, ni un nutritionniste professionnel. Le site internet euhm.fr est la synthèse de plus de 5 années de travail en développement personnel. Toutes les astuces et conseils dont je fais part ont été préalablement testés par moi mais ne garantissent en rien une vérité absolue. Je vous invite donc à compléter votre travail en multipliant vos recherches, vos sources et en demandant conseil directement à un professionnel de santé.
            </p>
            <Link href="/contact" className="btn">Contactez-nous</Link>
          </article>

          <section id="actu" className="actualite">
            <h2>actualites</h2>
            <ul>
              <li>
                <strong>Hiver : Comment ne pas tomber malade</strong>
                <Link href="/dossiers">
                  <Image className="imgactu" src="/img/actualites/winter.jpg" alt="Conseils santé hiver : renforcer son immunité naturellement" width={260} height={180} />
                </Link>
              </li>
              <li>
                <strong>Ebook : téléchargez gratuitement le livre EUHM !</strong>
                <Link href="/telechargement">
                  <Image className="imgbook" src="/img/actualites/Cover.jpg" alt="Ebook gratuit bien-être masculin EUHM" width={200} height={160} />
                </Link>
              </li>
              <li>
                <strong>Rentrée : Booster son dynamisme</strong>
                <Link href="/dossiers">
                  <Image className="imgactu" src="/img/actualites/rentrée.jpg" alt="Booster sa motivation et son énergie à la rentrée" width={260} height={180} />
                </Link>
              </li>
              <li>
                <strong>Confinement : Faire du sport à la maison</strong>
                <Link href="/articles/sport-maison">
                  <Image className="imgactu" src="/img/actualites/sport.jpg" alt="Programme sport à la maison sans matériel" width={260} height={180} />
                </Link>
              </li>
            </ul>
          </section>

          <section id="shop" className="boutique" style={{ textAlign: "center" }}>
            <h2>Quoi de neuf dans la boutique ?</h2>
            <h3 style={{ color: "#ff6600", marginBottom: "20px" }}>
              Boutique spéciale zéro déchet prochainement disponible !
            </h3>

            <ul
              style={{
                display: "flex",
                justifyContent: "center",
                listStyle: "none",
                padding: 0,
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              <li style={{ width: "200px" }}>
                <strong>Savon d&apos;Alep</strong>
                <Image className="imgshop" src="/img/boutique/savon d_alep.jpg" alt="Savon d'Alep naturel zéro déchet" width={200} height={140} style={{ borderRadius: "10px" }} />
              </li>
              <li style={{ width: "200px" }}>
                <strong>Gourde en verre</strong>
                <Image className="imgshop" src="/img/boutique/gourde en verre.jpg" alt="Gourde en verre réutilisable écologique" width={200} height={140} style={{ borderRadius: "10px" }} />
              </li>
              <li style={{ width: "200px" }}>
                <strong>Brosse à dent bambou</strong>
                <Image className="imgshop" src="/img/boutique/brosse à dent bambou.jpg" alt="Brosse à dents en bambou biodégradable" width={200} height={140} style={{ borderRadius: "10px" }} />
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
