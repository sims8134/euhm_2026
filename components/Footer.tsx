import Image from "next/image";
import Link from "next/link";
import NewsletterForm from "./NewsletterForm";
import FollowBlock from "./FollowBlock";

export default function Footer() {
  return (
    <>
      <style>{`
        .newsletter-section {
          padding: 60px 20px;
          text-align: center;
          background: #faf5f0;
        }
        .newsletter-inner {
          max-width: 560px;
          margin: 0 auto;
        }
        .newsletter-tag {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: #f86613;
          margin-bottom: 12px;
        }
        .newsletter-heading {
          font-family: "Borsok", sans-serif;
          font-size: 1.8rem;
          color: #333;
          margin-bottom: 8px;
        }
        .newsletter-heading span {
          color: #f86613;
        }
        .newsletter-desc {
          font-size: 14px;
          color: #666;
          margin-bottom: 24px;
        }

        .site-footer {
          background: #f86613;
          color: white;
          margin-top: 0;
        }

        .footer-main {
          max-width: 1280px;
          margin: 0 auto;
          padding: 50px 40px 30px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 40px;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .footer-brand-logo {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .footer-brand-text {
          font-family: "Borsok", sans-serif;
          font-size: 2rem;
          color: white;
          text-transform: uppercase;
        }

        .footer-brand p {
          font-size: 1.35rem;
          color: #fff;
          line-height: 1.6;
          margin: 0;
        }

        .footer-nav h3,
        .footer-social h3 {
          font-family: "Borsok", sans-serif;
          font-size: 1.6rem;
          color: white;
          margin: 0 0 16px 0;
          text-transform: uppercase;
        }

        .footer-nav ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .footer-nav li { list-style: none; }

        .footer-nav a {
          color: #fff;
          text-decoration: none;
          font-size: 1.4rem;
          transition: color 0.2s ease;
        }

        .footer-nav a:hover { color: white; text-decoration: underline; }

        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.2);
          max-width: 1280px;
          margin: 0 auto;
          padding: 20px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 1.3rem;
          color: #fff;
          flex-wrap: wrap;
          gap: 12px;
        }

        .footer-bottom a {
          color: #fff;
          text-decoration: none;
        }

        .footer-bottom a:hover { color: white; text-decoration: underline; }

        .footer-bottom-links {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .footer-credit {
          border-top: 1px solid rgba(255,255,255,0.15);
          max-width: 1280px;
          margin: 0 auto;
          padding: 14px 40px 22px;
          font-size: 1.2rem;
          color: #fff;
        }

        .footer-credit a {
          color: #fff;
          text-decoration: none;
          font-weight: 700;
        }

        /* Texte blanc sur orange : en gras pour la lisibilité (taille inchangée) */
        .site-footer p,
        .site-footer a:not(.follow-btn),
        .footer-bottom,
        .footer-credit { font-weight: 700; }

        .footer-credit a:hover { color: white; text-decoration: underline; }

        @media (max-width: 900px) {
          .footer-main {
            grid-template-columns: 1fr 1fr;
            padding: 40px 24px 24px;
          }
          .footer-brand { grid-column: 1 / -1; }
          .footer-bottom { padding: 16px 24px; }
          .footer-credit { padding: 14px 24px 20px; }
        }

        @media (max-width: 600px) {
          .footer-main {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
          .footer-bottom-links { gap: 12px; }
        }
      `}</style>

      {/* Newsletter section */}
      <section className="newsletter-section">
        <div className="newsletter-inner">
          <p className="newsletter-tag">NEWSLETTER</p>
          <h2 className="newsletter-heading" style={{ color: "#2e7d3e" }}>RESTEZ <span>INFORMÉ</span>. DEVENEZ <span>MEILLEUR</span>.</h2>
          <p className="newsletter-desc">Recevez nos derniers articles et conseils. Pas de spam.</p>
          <NewsletterForm />
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-brand-logo">
              <Image src="/img/logo_euhm_half.png" alt="EUHM" width={50} height={50} />
              <div className="footer-brand-text">EUHM</div>
            </div>
            <p>Être Un Homme Meilleur : conseils bien-être, sport, alimentation, psychologie et écologie pour devenir une meilleure version de vous-même.</p>
          </div>

          <div className="footer-nav">
            <h3>Navigation</h3>
            <ul>
              <li><Link href="/">Accueil</Link></li>
              <li><Link href="/articles">Articles</Link></li>
              <li><Link href="/dossiers">Dossiers</Link></li>
              <li><Link href="/galerie">Galerie</Link></li>
              <li><Link href="/telechargement">Téléchargement</Link></li>
              <li><Link href="/apropos">À propos</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-social">
            <h3>Suivez-nous</h3>
            <FollowBlock variant="compact" />
          </div>
        </div>

        <div className="footer-bottom">
          <span>{new Date().getFullYear()} © euhm.fr. Tous droits réservés</span>
          <div className="footer-bottom-links">
            <Link href="/mentions-legales">Mentions légales</Link>
            <Link href="/cgu">CGU</Link>
            <Link href="/politique-confidentialite">Politique de confidentialité</Link>
          </div>
        </div>

        <div className="footer-credit">
          Site réalisé par{" "}
          <a href="https://sbcconception.com" target="_blank" rel="noopener">
            SBCConception
          </a>
        </div>
      </footer>
    </>
  );
}