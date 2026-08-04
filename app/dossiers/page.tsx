import { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DossierInterest from "../../components/DossierInterest";

export const metadata: Metadata = {
  title: "Dossiers Bien-être Homme : Santé, Sport, Nutrition et Sommeil",
  description:
    "Les dossiers thématiques EUHM en préparation : immunité, sport à la maison, nutrition, sommeil, zéro déchet. Dites-nous lequel vous voulez lire en premier.",
  alternates: { canonical: "/dossiers" },
  openGraph: {
    title: "Dossiers Bien-être Homme",
    description:
      "Des guides complets pour optimiser votre santé physique et mentale — en cours d'écriture.",
    url: "/dossiers",
  },
};

const DOSSIERS = [
  {
    emoji: "❄️",
    tag: "Santé · Immunité",
    slug: "immunite-hiver",
    title: "Santé en hiver : comment ne pas tomber malade",
    desc: "Le dossier complet derrière l'article : immunité, alimentation, activité physique et outils naturels pour traverser la saison froide.",
  },
  {
    emoji: "🏃",
    tag: "Sport · Maison",
    slug: "sport-maison",
    title: "Faire du sport à la maison : le dossier complet",
    desc: "Programme d'entraînement, motivation et équipement minimal pour rester en forme sans sortir de chez soi.",
  },
  {
    emoji: "🎒",
    tag: "Psychologie · Motivation",
    slug: "booster-dynamisme",
    title: "Rentrée : booster son dynamisme et son énergie",
    desc: "Fixer ses objectifs, reprendre de bonnes habitudes et aborder la nouvelle saison avec clarté mentale.",
  },
  {
    emoji: "🥦",
    tag: "Nutrition",
    slug: "alimentation-equilibree",
    title: "Alimentation équilibrée : construire son assiette idéale",
    desc: "Macronutriments, micronutriments, hydratation… Tout ce qu'il faut savoir pour manger intelligemment au quotidien.",
  },
  {
    emoji: "🧘",
    tag: "Développement Personnel",
    slug: "developpement-personnel",
    title: "Amélioration personnelle : par où commencer ?",
    desc: "Un dossier pour démystifier le développement personnel et identifier les premières actions concrètes à mettre en place.",
  },
  {
    emoji: "♻️",
    tag: "Écologie · Durable",
    slug: "zero-dechet",
    title: "Zéro déchet : le guide pratique pour débutants",
    desc: "Comment réduire ses déchets progressivement. Alternatives concrètes et accessibles pour un mode de vie durable.",
  },
  {
    emoji: "😴",
    tag: "Santé · Sommeil",
    slug: "optimiser-sommeil",
    title: "Optimiser son sommeil pour une meilleure journée",
    desc: "Comprendre les cycles du sommeil et adopter les bonnes habitudes pour se réveiller reposé et concentré.",
  },
];

export default function DossiersPage() {
  return (
    <>
      <Header title="Dossiers" />
      <main>
        <section className="dossiers-section">
          <h1>Dossiers thématiques : les guides en préparation</h1>
          <p className="intro">
            Contrairement aux articles, un dossier prend du temps à écrire. Voici les sept sujets
            au programme — <strong>dites-moi lequel vous voulez lire en premier</strong>, j&#39;écris
            celui qui est le plus demandé et vous serez prévenu à sa sortie.
          </p>

          <div className="dossiers-grid">
            {DOSSIERS.map((d) => (
              <div className="dossier-card" key={d.slug}>
                <div className="dossier-card-img">{d.emoji}</div>
                <div className="dossier-card-body">
                  <div className="dossier-tag">{d.tag}</div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <DossierInterest slug={d.slug} />
                </div>
              </div>
            ))}
          </div>

          <p
            style={{
              marginTop: "2.5rem",
              textAlign: "center",
              fontSize: "0.9rem",
              color: "#666",
              lineHeight: 1.7,
            }}
          >
            En attendant, les <a href="/articles" style={{ color: "#f86613" }}>articles</a> et les{" "}
            <a href="/telechargement" style={{ color: "#f86613" }}>fiches pratiques à imprimer</a>{" "}
            sont déjà disponibles.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}