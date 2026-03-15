import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function DossiersPage() {
  return (
    <>
      <Header title="Dossiers" />
      <main>
        <section className="dossiers-section">
          <h1>Dossiers thématiques</h1>
          <p className="intro">Des guides complets et approfondis pour aller plus loin sur les sujets qui comptent vraiment.</p>

          <div className="dossier-featured">
            <div className="dossier-featured-img">❄️</div>
            <div className="dossier-featured-body">
              <div className="dossier-badge">⭐ Dossier du moment</div>
              <div className="dossier-tag">Santé · Hiver</div>
              <h2>Hiver : comment ne pas tomber malade</h2>
              <p>Rhumes, grippes, fatigue… l&#39;hiver met notre système immunitaire à rude épreuve. Dans ce dossier complet, découvrez les habitudes alimentaires, sportives et du quotidien qui font vraiment la différence pour passer l&#39;hiver en bonne santé.</p>
              <div className="dossier-meta">
                <span>📖 12 min de lecture</span>
                <span>📅 Novembre 2020</span>
              </div>
              <Link href="#" className="btn">Lire le dossier</Link>
            </div>
          </div>

          <div className="dossiers-grid">
            {[
              { emoji: "🏃", tag: "Sport · Confinement", title: "Faire du sport à la maison : le dossier complet", desc: "Programme d'entraînement, motivation et équipement minimal pour rester en forme sans sortir de chez soi.", time: "15 min", date: "Avril 2020" },
              { emoji: "🎒", tag: "Psychologie · Rentrée", title: "Rentrée : booster son dynamisme et sa motivation", desc: "Fixer ses objectifs, reprendre de bonnes habitudes et aborder la nouvelle saison avec énergie et clarté.", time: "10 min", date: "Septembre 2020" },
              { emoji: "🥦", tag: "Alimentation", title: "Alimentation équilibrée : construire son assiette idéale", desc: "Macronutriments, micronutriments, hydratation… Tout ce qu'il faut savoir pour manger intelligemment au quotidien.", time: "18 min", date: "Juillet 2020" },
              { emoji: "🧘", tag: "Psychologie · Bien-être", title: "Développement personnel : par où commencer ?", desc: "Un dossier pour démystifier le développement personnel et identifier les premières actions concrètes à mettre en place.", time: "14 min", date: "Juin 2020" },
              { emoji: "♻️", tag: "Écologie · Zéro déchet", title: "Zéro déchet : le guide pour débutants", desc: "Comment réduire ses déchets progressivement sans se prendre la tête. Alternatives concrètes et accessibles à tous.", time: "11 min", date: "Mai 2020" },
              { emoji: "😴", tag: "Santé · Sommeil", title: "Sommeil : optimiser ses nuits pour une meilleure journée", desc: "Comprendre les cycles du sommeil et adopter les bonnes habitudes pour se réveiller reposé et concentré chaque matin.", time: "13 min", date: "Mars 2020" },
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
