import { Metadata } from "next"; // Ajout pour le SEO
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// 1. Configuration des Metadata : On donne du poids au domaine
export const metadata: Metadata = {
  title: "Dossiers Experts : Santé, Sport et Bien-être - EUHM",
  description: "Explorez nos dossiers thématiques approfondis : renforcement du système immunitaire, programme sport maison, nutrition et sommeil.",
  openGraph: {
    title: "Dossiers Thématiques Bien-être | EUHM",
    description: "Des guides complets pour optimiser votre santé et votre mental.",
  },
};

export default function DossiersPage() {
  return (
    <>
      {/* SEO : Titre de navigation enrichi */}
      <Header title="Dossiers Thématiques : Santé & Bien-être" />
      <main>
        <section className="dossiers-section">
          {/* SEO : H1 plus descriptif pour les robots */}
          <h1>Dossiers thématiques : Guides pour Être Un Homme Meilleur</h1>
          <p className="intro">
            Des **guides complets et approfondis** pour aller plus loin dans votre **développement personnel** et votre **optimisation physique**.
          </p>

          <div className="dossier-featured">
            <div className="dossier-featured-img">❄️</div>
            <div className="dossier-featured-body">
              <div className="dossier-badge">⭐ Dossier du moment</div>
              <div className="dossier-tag">Santé · Immunité</div>
              {/* SEO : H2 avec mot-clé fort */}
              <h2>Santé en Hiver : comment ne pas tomber malade</h2>
              <p>
                Rhumes, grippes, fatigue… l&#39;hiver met notre système immunitaire à rude épreuve. Dans ce **dossier complet**, découvrez les habitudes alimentaires, sportives et les outils naturels qui font la différence pour rester en forme.
              </p>
              <div className="dossier-meta">
                <span>📖 12 min de lecture</span>
                <span>📅 Novembre 2020</span>
              </div>
              <Link href="#" className="btn">Lire le dossier complet</Link>
            </div>
          </div>

          <div className="dossiers-grid">
            {[
              { emoji: "🏃", tag: "Sport · Maison", title: "Faire du sport à la maison : le dossier complet", desc: "Programme d'entraînement, motivation et équipement minimal pour rester en forme sans sortir de chez soi.", time: "15 min", date: "Avril 2020" },
              { emoji: "🎒", tag: "Psychologie · Motivation", title: "Rentrée : booster son dynamisme et son énergie", desc: "Fixer ses objectifs, reprendre de bonnes habitudes et aborder la nouvelle saison avec clarté mentale.", time: "10 min", date: "Septembre 2020" },
              { emoji: "🥦", tag: "Nutrition", title: "Alimentation équilibrée : construire son assiette idéale", desc: "Macronutriments, micronutriments, hydratation… Tout ce qu'il faut savoir pour manger intelligemment au quotidien.", time: "18 min", date: "Juillet 2020" },
              { emoji: "🧘", tag: "Développement Personnel", title: "Amélioration personnelle : par où commencer ?", desc: "Un dossier pour démystifier le développement personnel et identifier les premières actions concrètes à mettre en place.", time: "14 min", date: "Juin 2020" },
              { emoji: "♻️", tag: "Écologie · Durable", title: "Zéro déchet : le guide pratique pour débutants", desc: "Comment réduire ses déchets progressivement. Alternatives concrètes et accessibles pour un mode de vie durable.", time: "11 min", date: "Mai 2020" },
              { emoji: "😴", tag: "Santé · Sommeil", title: "Optimiser son sommeil pour une meilleure journée", desc: "Comprendre les cycles du sommeil et adopter les bonnes habitudes pour se réveiller reposé et concentré.", time: "13 min", date: "Mars 2020" },
            ].map((d, i) => (
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
                  <Link href="#" className="btn">Lire le dossier</Link>
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