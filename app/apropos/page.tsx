import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FollowBlock from "../../components/FollowBlock";
import { pageOpenGraph } from "../../lib/seo";

const BASE_URL = "https://euhm.fr";

// ⚠️ Doit correspondre exactement à la constante AUTEUR de app/articles/[slug]/page.tsx
const AUTEUR = "Simon";

// Photo de l'auteur : WebP servi en priorite, JPEG en repli (800px de large).
const PHOTO_WEBP = "/img/simon-auteur-euhm.webp";
const PHOTO_JPEG = "/img/simon-auteur-euhm.jpg";
const PHOTO_ALT = `${AUTEUR}, auteur d'EUHM`;

export const metadata: Metadata = {
  title: "À propos : qui écrit sur EUHM",
  description:
    "Qui est derrière EUHM : cinq ans d'expérimentation personnelle en sport, alimentation, psychologie et écologie. Ni coach, ni médecin : des méthodes testées et assumées.",
  alternates: { canonical: "/apropos" },
  openGraph: pageOpenGraph({
    title: "À propos : qui écrit sur EUHM",
    description:
      "Cinq ans d'expérimentation personnelle partagés sans promesse miracle. Ni coach, ni médecin.",
    url: "/apropos",
  }),
};

export default function AproposPage() {
  // Balisage Person : relie l'auteur des articles à cette page.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: AUTEUR,
    url: `${BASE_URL}/apropos`,
    image: `${BASE_URL}${PHOTO_JPEG}`,
    description:
      "Auteur d'EUHM (Être Un Homme Meilleur). Cinq ans d'expérimentation personnelle en sport, alimentation, psychologie et écologie.",
    knowsAbout: [
      "bien-être masculin",
      "sport à la maison",
      "alimentation équilibrée",
      "développement personnel",
      "mode de vie zéro déchet",
    ],
    worksFor: {
      "@type": "Organization",
      name: "EUHM : Être Un Homme Meilleur",
      url: BASE_URL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header title="À propos" />
      <main>
        <section className="apropos-section">
          <div className="apropos-hero">
            <div className="apropos-hero-logo">
              <picture>
                <source srcSet={PHOTO_WEBP} type="image/webp" />
                <img
                  src={PHOTO_JPEG}
                  alt={PHOTO_ALT}
                  width={160}
                  height={160}
                  decoding="async"
                />
              </picture>
            </div>
            <div className="apropos-hero-text">
              <h1>Qui écrit sur EUHM</h1>
              <p>
                Moi, c&apos;est <strong>{AUTEUR}</strong>. Cinq ans à tester des méthodes de
                bien-être sur moi-même, et à écrire ce qui a marché, comme ce qui n&apos;a pas marché.
              </p>
            </div>
          </div>

          <div className="apropos-content">
            <h2>Pourquoi ce site existe</h2>
            <p>
              Il y a cinq ans, j&apos;ai commencé à m&apos;intéresser sérieusement à mon hygiène de vie :
              le sport, le sommeil, l&apos;alimentation, la charge mentale. J&apos;ai lu beaucoup, essayé
              beaucoup, abandonné beaucoup. Et j&apos;ai surtout constaté une chose : entre les coachs qui
              vendent des transformations en trente jours et les articles génériques qui répètent
              « mangez équilibré, dormez bien », il manquait quelque chose.
              <br /><br />
              EUHM, c&apos;est ce qui manquait, pour moi en tout cas : des protocoles précis, avec des
              chiffres, des durées, un ordre de mise en place, et un moyen de vérifier si ça fonctionne,
              plutôt que des conseils qu&apos;on lit sans jamais rien en faire.
            </p>

            <h2>Ce que je ne suis pas</h2>
            <p>
              Je ne suis <strong>ni coach sportif, ni nutritionniste, ni professionnel de santé</strong>.
              Je n&apos;ai aucun diplôme dans ces domaines et je ne prétends à aucune autorité médicale.
              <br /><br />
              Ce que je partage, ce sont des expériences personnelles documentées. Elles ont fonctionné
              pour moi, dans mon contexte, avec mon corps. Elles peuvent ne pas vous convenir. Pour toute
              question de santé (douleur, fatigue persistante, traitement en cours), c&apos;est un médecin
              qu&apos;il faut consulter, pas un site de bien-être. Je le rappelle dans chacun de mes articles,
              et ce n&apos;est pas une formule de prudence : c&apos;est la limite réelle de ce que je peux vous apporter.
            </p>

            <h2>Mes trois règles d’écriture</h2>
            <div className="apropos-valeurs">
              <div className="valeur-card">
                <div className="valeur-icon">📏</div>
                <h3>Du concret, chiffré</h3>
                <p>Des durées, des quantités, un ordre d&apos;exécution. Si un conseil ne peut pas être appliqué demain matin, il ne mérite pas d&apos;être écrit.</p>
              </div>
              <div className="valeur-card">
                <div className="valeur-icon">🧪</div>
                <h3>Testé avant d’être publié</h3>
                <p>Je n&apos;écris pas sur ce que je n&apos;ai pas pratiqué moi-même, sur une durée suffisante pour en juger.</p>
              </div>
              <div className="valeur-card">
                <div className="valeur-icon">🚫</div>
                <h3>Aucune promesse miracle</h3>
                <p>Pas de transformation en trente jours, pas de secret que les autres vous cachent. Ce qui marche demande du temps, et je le dis.</p>
              </div>
            </div>

            <h2>Par où commencer</h2>
            <p>
              Le plus simple est de partir d&apos;un besoin concret :
            </p>
            <ul style={{ listStyle: "disc", paddingLeft: "22px", marginBottom: "20px" }}>
              <li style={{ listStyle: "disc", marginBottom: "10px" }}>
                Reprendre une activité physique sans matériel →{" "}
                <Link href="/articles/confinement-faire-du-sport-a-la-maison" style={{ color: "#c2410c", textDecoration: "underline" }}>
                  le programme de sport à la maison
                </Link>
              </li>
              <li style={{ listStyle: "disc", marginBottom: "10px" }}>
                Tenir la saison froide sans tomber malade →{" "}
                <Link href="/articles/hiver-comment-ne-pas-tomber-malade" style={{ color: "#c2410c", textDecoration: "underline" }}>
                  les six habitudes d&apos;hiver
                </Link>
              </li>
              <li style={{ listStyle: "disc", marginBottom: "10px" }}>
                En finir avec le coup de barre de l&apos;après-midi →{" "}
                <Link href="/articles/rentree-booster-son-dynamisme" style={{ color: "#c2410c", textDecoration: "underline" }}>
                  la routine énergie
                </Link>
              </li>
            </ul>
            <p>
              Chaque article a sa{" "}
              <Link href="/telechargement" style={{ color: "#c2410c", textDecoration: "underline" }}>
                fiche pratique à imprimer
              </Link>{" "}
              : une page A4 avec les gestes, les repères chiffrés et des cases à cocher.
            </p>

            <h2>Me contacter</h2>
            <p>
              Une question, une suggestion de sujet, une erreur à me signaler ? Je lis tous les messages.
              Écrivez-moi via la{" "}
              <Link href="/contact" style={{ color: "#c2410c", textDecoration: "underline" }}>
                page contact
              </Link>.
              Et si vous voulez peser sur les prochains sujets, les{" "}
              <Link href="/dossiers" style={{ color: "#c2410c", textDecoration: "underline" }}>
                dossiers en préparation
              </Link>{" "}
              se votent.
            </p>
          </div>
          <FollowBlock />
        </section>
      </main>
      <Footer />
    </>
  );
}