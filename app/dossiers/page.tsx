import { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Dossiers Bien-être Homme : Santé, Sport, Nutrition et Sommeil",
  description:
    "Explorez nos dossiers thématiques approfondis : renforcement immunitaire, programme sport maison, nutrition équilibrée, sommeil et développement personnel.",
  alternates: {
    canonical: "https://euhm.fr/dossiers",
  },
  openGraph: {
    title: "Dossiers Bien-être Homme | EUHM",
    description:
      "Des guides complets pour optimiser votre santé physique et mentale.",
  },
};

const DOSSIERS = [
  {
    emoji: "🏃",
    tag: "Sport · Maison",
    slug: "sport-maison",
    title: "Faire du sport à la maison : le dossier complet",
    desc: "Programme d'entraînement, motivation et équipement minimal pour rester en forme sans sortir de chez soi.",
    time: "15 min",
    date: "Février 2026",
    ready: false,
  },
  {
    emoji: "🎒",
    tag: "Psychologie · Motivation",
    slug: "booster-dynamisme",
    title: "Rentrée : booster son dynamisme et son énergie",
    desc: "Fixer ses objectifs, reprendre de bonnes habitudes et aborder la nouvelle saison avec clarté mentale.",
    time: "10 min",
    date: "Janvier 2026",
    ready: false,
  },
  {
    emoji: "🥦",
    tag: "Nutrition",
    slug: "alimentation-equilibree",
    title: "Alimentation équilibrée : construire son assiette idéale",
    desc: "Macronutriments, micronutriments, hydratation… Tout ce qu'il faut savoir pour manger intelligemment au quotidien.",
    time: "18 min",
    date: "Décembre 2025",
    ready: false,
  },
  {
    emoji: "🧘",
    tag: "Développement Personnel",
    slug: "developpement-personnel",
    title: "Amélioration personnelle : par où commencer ?",
    desc: "Un dossier pour démystifier le développement personnel et identifier les premières actions concrètes à mettre en place.",
    time: "14 min",
    date: "Novembre 2025",
    ready: false,
  },
  {
    emoji: "♻️",
    tag: "Écologie · Durable",
    slug: "zero-dechet",
    title: "Zéro déchet : le guide pratique pour débutants",
    desc: "Comment réduire ses déchets progressivement. Alternatives concrètes et accessibles pour un mode de vie durable.",
    time: "11 min",
    date: "Octobre 2025",
    ready: false,
  },
  {
    emoji: "😴",
    tag: "Santé · Sommeil",
    slug: "optimiser-sommeil",
    title: "Optimiser son sommeil pour une meilleure journée",
    desc: "Comprendre les cycles du sommeil et adopter les bonnes habitudes pour se réveiller reposé et concentré.",
    time: "13 min",
    date: "Septembre 2025",
    ready: false,
  },
];

export default function DossiersPage() {
  return (
    <>
      {/* heroAsH2 because we define our own H1 below */}
      <Header title="Dossiers Thématiques : Santé & Bien-être" heroAsH2 />
      <main>
        <section className="dossiers-section">
          <h1>Dossiers thématiques : Guides pour Être Un Homme Meilleur</h1>
          <p className="intro">
            Des <strong>guides complets et approfondis</strong> pour aller plus
            loin dans votre <strong>développement personnel</strong> et votre{" "}
            <strong>optimisation physique</strong>.
          </p>

          <div className="dossier-featured">
            <div className="dossier-featured-img">❄️</div>
            <div className="dossier-featured-body">
              <div className="dossier-badge">⭐ Dossier du moment</div>
              <div className="dossier-tag">Santé · Immunité</div>
              <h2>Santé en Hiver : comment ne pas tomber malade</h2>
              <p>
                Rhumes, grippes, fatigue… l&apos;hiver met notre système
                immunitaire à rude épreuve. Dans ce{" "}
                <strong>dossier complet</strong>, découvrez les habitudes
                alimentaires, sportives et les outils naturels qui font la
                différence pour rester en forme.
              </p>
              <div className="dossier-meta">
                <span>📖 12 min de lecture</span>
                <span>📅 Mars 2026</span>
              </div>
              {/* Link disabled until content is ready */}
              <span className="btn btn-disabled" aria-disabled="true">
                Bientôt disponible
              </span>
            </div>
          </div>

          <div className="dossiers-grid">
            {DOSSIERS.map((d, i) => (
              <div className="dossier-card" key={i}>
                <div className="dossier-card-img">{d.emoji}</div>
                <div className="dossier-card-body">
                  <div className="dossier-tag">{d.tag}</div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <div className="dossier-meta">
                    <span>📖 {d.time}</span>
                    <span>📅 {d.date}</span>
                  </div>
                  {d.ready ? (
                    <Link href={`/dossiers/${d.slug}`} className="btn">
                      Lire le dossier
                    </Link>
                  ) : (
                    <span className="btn btn-disabled" aria-disabled="true">
                      Bientôt disponible
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
