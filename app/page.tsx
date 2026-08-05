import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getAllArticles } from "../lib/mdx";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    title: "EUHM — Bien-être masculin : sport, alimentation, psychologie",
    description:
      "Conseils pratiques de bien-être pour hommes : sport, alimentation, psychologie et développement personnel.",
    url: "/",
  },
};

// ⚠️ Si tu avais modifié ce slug dans ta version précédente de page.tsx,
// reporte ta valeur ici avant de coller.
const SLUG_HIVER = "hiver-comment-ne-pas-tomber-malade";

export default function Accueil() {
  return (
    <>
      <Header title="Accueil" />
      <main>
        <div className="main-grid">
          <article className="bienvenue">
            <h1>Bien-être masculin : devenez un homme meilleur</h1>

            <h2>EUHM c'est quoi ?</h2>
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
            <h2>actualités</h2>
            <ul>
              {getAllArticles().slice(0, 3).map((a) => (
                <li key={a.slug}>
                  <Link href={`/articles/${a.slug}`}>
                    <strong>{a.title}</strong>
                    {a.image && (
                      <Image
                        className="imgactu"
                        src={a.image}
                        alt={a.title}
                        width={260}
                        height={180}
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
          <section id="shop" className="boutique" style={{ textAlign: "center" }}>
            <h2>La boutique arrive</h2>
            <p style={{ maxWidth: "540px", margin: "0 auto 24px", color: "#666", lineHeight: 1.6 }}>
              Une sélection zéro déchet, testée au quotidien. Laissez votre adresse et vous serez
              prévenu dès l&apos;ouverture.
            </p>

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
                <Link href="/boutique">
                  <Image className="imgshop" src="/img/boutique/savon-alep.jpg" alt="Savon d'Alep naturel zéro déchet" width={200} height={140} style={{ borderRadius: "10px" }} />
                </Link>
                <strong style={{ display: "block", marginTop: "8px" }}>Savon d&apos;Alep</strong>
              </li>
              <li style={{ width: "200px" }}>
                <Link href="/boutique">
                  <Image className="imgshop" src="/img/boutique/gourde-en-verre.jpg" alt="Gourde en verre réutilisable écologique" width={200} height={140} style={{ borderRadius: "10px" }} />
                </Link>
                <strong style={{ display: "block", marginTop: "8px" }}>Gourde en verre</strong>
              </li>
              <li style={{ width: "200px" }}>
                <Link href="/boutique">
                  <Image className="imgshop" src="/img/boutique/brosse-a-dent-bambou.jpg" alt="Brosse à dents en bambou biodégradable" width={200} height={140} style={{ borderRadius: "10px" }} />
                </Link>
                <strong style={{ display: "block", marginTop: "8px" }}>Brosse à dent bambou</strong>
              </li>
            </ul>

            <Link href="/boutique" className="btn" style={{ marginTop: "28px", display: "inline-block" }}>
              Être prévenu au lancement
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}