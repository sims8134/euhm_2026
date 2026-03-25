import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function AproposPage() {
  return (
    <>
      {/* SEO : Un titre plus descriptif pour l'onglet du navigateur */}
      <Header title="À propos d'EUHM - Expertise Bien-être & Santé Masculine" />
      <main>
        <section className="apropos-section">
          <div className="apropos-hero">
            <div className="apropos-hero-logo">
              {/* SEO : Alt tag enrichi */}
              <Image src="/img/logo_euhm_half.png" alt="Logo Être Un Homme Meilleur - Bien-être masculin" width={160} height={160} />
            </div>
            <div className="apropos-hero-text">
              {/* SEO : H1 contenant les mots-clés de niche */}
              <h1>L'histoire d'EUHM : Être Un Homme Meilleur</h1>
              <p>Le portail dédié à l'**optimisation du bien-être** pour devenir une meilleure version de vous-même.</p>
            </div>
          </div>

          <div className="apropos-content">
            <h2>Qui est derrière EUHM ?</h2>
            <p>
              Je suis le créateur de **EUHM** — Être Un Homme Meilleur. Passionné depuis plus de **5 ans par le développement personnel** et l'**optimisation du mode de vie**, j'ai conçu ce site comme un laboratoire de partage. 
              <br /><br />
              Mon approche est simple : partager ce que j'ai réellement appris, testé et intégré dans mon quotidien. Ici, pas de théorie fumeuse, uniquement du concret. 
              <br /><br />
              <em>Note importante :</em> Je ne suis ni coach professionnel, ni nutritionniste, ni médecin. Je me définis comme un **explorateur du bien-être**. Mon but est de vous donner des pistes de réflexion et des outils testés, tout en vous encourageant à rester maître de votre santé en consultant des professionnels.
            </p>

            <h2>Mes piliers et valeurs</h2>
            <div className="apropos-valeurs">
              <div className="valeur-card">
                <div className="valeur-icon">💪</div>
                <h3>Honnêteté Radicale</h3>
                <p>Zéro promesse miracle. Chaque conseil ou astuce est le fruit d'une expérience vécue et honnête.</p>
              </div>
              <div className="valeur-card">
                <div className="valeur-icon">🌱</div>
                <h3>Écologie & Durabilité</h3>
                <p>Prendre soin de son corps et de son esprit en respectant l'environnement qui nous entoure.</p>
              </div>
              <div className="valeur-card">
                <div className="valeur-icon">🧠</div>
                <h3>Esprit Critique</h3>
                <p>Sortir des sentiers battus, tester de nouvelles approches et ne jamais cesser d'apprendre.</p>
              </div>
            </div>

            <h2>Collaborons ensemble</h2>
            <p>
              Vous avez une question sur un **dossier bien-être**, une suggestion d'article ou une envie de collaboration pro ? 
              Je lis tous vos messages avec attention. 
              <br /><br />
              N'hésitez pas à me contacter via la <Link href="/contact" className="link-seo">page contact dédiée</Link>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}