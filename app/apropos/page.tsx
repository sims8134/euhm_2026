import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function AproposPage() {
  return (
    <>
      <Header title="À propos" />
      <main>
        <section className="apropos-section">
          <div className="apropos-hero">
            <div className="apropos-hero-logo">
              <Image src="/img/logo_euhm_half.png" alt="Logo EUHM" width={160} height={160} />
            </div>
            <div className="apropos-hero-text">
              <h1>À propos d&#39;EUHM</h1>
              <p>Le blog bien-être pour devenir une meilleure version de vous-même.</p>
            </div>
          </div>

          <div className="apropos-content">
            <h2>Qui suis-je ?</h2>
            <p>
              Je suis le créateur d&#39;EUHM — Être Un Homme Meilleur. Passionné depuis plus de 5 ans
              par le développement personnel, j&#39;ai créé ce site pour partager ce que j&#39;ai appris,
              testé et vécu au quotidien. Je ne suis ni coach professionnel, ni nutritionniste,
              ni médecin : juste quelqu&#39;un qui a envie de partager des conseils qui marchent vraiment.
            </p>

            <h2>Mes valeurs</h2>
            <div className="apropos-valeurs">
              <div className="valeur-card">
                <div className="valeur-icon">💪</div>
                <h3>Honnêteté</h3>
                <p>Des conseils testés personnellement, sans promesses miraculeuses.</p>
              </div>
              <div className="valeur-card">
                <div className="valeur-icon">🌱</div>
                <h3>Écologie</h3>
                <p>Prendre soin de soi tout en respectant notre environnement.</p>
              </div>
              <div className="valeur-card">
                <div className="valeur-icon">🧠</div>
                <h3>Curiosité</h3>
                <p>Toujours chercher, apprendre et remettre en question ses habitudes.</p>
              </div>
            </div>

            <h2>Contact</h2>
            <p>
              Une question, une suggestion ou envie de collaborer ?
              N&#39;hésitez pas à me contacter via la <Link href="/contact">page contact</Link>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
