import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// --- SEO : Métadonnées pour booster les téléchargements ---
export const metadata: Metadata = {
  title: "Ressources & Guides Gratuits | EUHM",
  description: "Accédez à nos ressources exclusives en téléchargement libre : Ebook bien-être, guides sportifs et checklists pour devenir une meilleure version de vous-même.",
};

export default function TelechargementPage() {
  return (
    <>
      {/* SEO : Le titre passé au Header reste pour l'affichage visuel */}
      <Header title="Ressources Gratuites" />
      <main>
        <section className="telechargement-section">
          {/* SEO : H1 puissant avec mot-clé de niche */}
          <h1>Guides & Ressources pour Être Un Homme Meilleur</h1>
          <p className="intro">
            Accédez à nos <strong>ressources exclusives en téléchargement libre</strong>. Des outils concrets pour booster votre <strong>développement personnel</strong>, votre <strong>santé</strong> et votre <strong>mental</strong> au quotidien.
          </p>

          <div className="dl-card">
            <div className="dl-icon">📘</div>
            <div className="dl-body">
              <div className="dl-badge">✅ Guide PDF Offert</div>
              <h2>L&#39;Ebook EUHM : Le Guide de l&#39;Optimisation</h2>
              <p>
                Découvrez la synthèse de 5 ans de recherches : <strong>sport, alimentation saine, psychologie stoïcienne et écologie</strong>. Un guide complet pour entamer votre transformation et devenir une meilleure version de vous-même.
              </p>
              {/* Note : Remplace le lien par ton PDF final dès qu'il est prêt */}
              <a href="/img/actualites/Cover.jpg" download className="btn">
                Télécharger l&#39;Ebook (Gratuit)
              </a>
            </div>
          </div>

          <div className="dl-card">
            <div className="dl-icon">📋</div>
            <div className="dl-body">
              <div className="dl-badge">✅ Outil Pratique</div>
              <h2>Checklist &quot;Routine Bien-être&quot; Quotidienne</h2>
              <p>
                Ne laissez plus votre progression au hasard. Une checklist simple à imprimer pour suivre vos piliers de vie : <strong>sommeil réparateur, hydratation, activité physique et équilibre mental</strong>.
              </p>
              <a href="#" className="btn">Télécharger la Checklist (PDF)</a>
            </div>
          </div>
          
          <p style={{marginTop: '2rem', textAlign: 'center', fontSize: '0.9rem', color: '#666'}}>
            *Toutes nos ressources sont garanties sans spam. Profitez-en pour évoluer à votre rythme.*
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}