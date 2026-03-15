import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function TelechargementPage() {
  return (
    <>
      <Header title="Téléchargement" />
      <main>
        <section className="telechargement-section">
          <h1>Téléchargements gratuits</h1>
          <p className="intro">Des ressources exclusives à télécharger gratuitement pour aller plus loin dans votre développement personnel.</p>

          <div className="dl-card">
            <div className="dl-icon">📘</div>
            <div className="dl-body">
              <div className="dl-badge">✅ Gratuit</div>
              <h2>L&#39;Ebook EUHM</h2>
              <p>Le guide complet pour commencer votre parcours vers une meilleure version de vous-même. Sport, alimentation, psychologie et écologie réunis dans un seul document.</p>
              <a href="/img/actualités/Cover.jpg" download className="btn">Télécharger l&#39;ebook (PDF)</a>
            </div>
          </div>

          <div className="dl-card">
            <div className="dl-icon">📋</div>
            <div className="dl-body">
              <div className="dl-badge">✅ Gratuit</div>
              <h2>Checklist bien-être quotidienne</h2>
              <p>Une checklist simple à imprimer pour suivre vos habitudes au jour le jour : hydratation, sommeil, activité physique, alimentation et bien-être mental.</p>
              <a href="#" className="btn">Télécharger la checklist (PDF)</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
