import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function TelechargementPage() {
  return (
    <>
      {/* SEO : Titre enrichi pour l'onglet et le référencement */}
      <Header title="Ressources Gratuites : Ebook & Guides Bien-être - EUHM" />
      <main>
        <section className="telechargement-section">
          {/* SEO : H1 puissant avec mot-clé de niche */}
          <h1>Guides & Ressources pour Être Un Homme Meilleur</h1>
          <p className="intro">
            Accédez à nos **ressources exclusives en téléchargement libre**. Des outils concrets pour booster votre **développement personnel**, votre **santé** et votre **mental** au quotidien.
          </p>

          <div className="dl-card">
            <div className="dl-icon">📘</div>
            <div className="dl-body">
              <div className="dl-badge">✅ Guide PDF Offert</div>
              {/* SEO : Titre H2 descriptif */}
              <h2>L&#39;Ebook EUHM : Le Guide de l'Optimisation</h2>
              <p>
                Découvrez la synthèse de 5 ans de recherches : **sport, alimentation saine, psychologie stoïcienne et écologie**. Un guide complet pour entamer votre transformation et devenir une meilleure version de vous-même.
              </p>
              {/* Note : Remplace le lien par ton PDF final dès qu'il est prêt */}
              <a href="/img/actualités/Cover.jpg" download className="btn">
                Télécharger l&#39;Ebook (Gratuit)
              </a>
            </div>
          </div>

          <div className="dl-card">
            <div className="dl-icon">📋</div>
            <div className="dl-body">
              <div className="dl-badge">✅ Outil Pratique</div>
              <h2>Checklist "Routine Bien-être" Quotidienne</h2>
              <p>
                Ne laissez plus votre progression au hasard. Une checklist simple à imprimer pour suivre vos piliers de vie : **sommeil réparateur, hydratation, activité physique et équilibre mental**.
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