"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/articles", label: "Articles" },
  { href: "/dossiers", label: "Dossiers" },
  { href: "/galerie", label: "Galerie" },
  { href: "/telechargement", label: "Téléchargement" },
  { href: "/boutique", label: "Boutique" },
];

interface HeaderProps {
  title: string;
  /** Set to true when the page defines its own H1 — hero will render as H2 instead */
  heroAsH2?: boolean;
}

export default function Header({ title, heroAsH2 = false }: HeaderProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const HeroTag = heroAsH2 ? "h2" : "h1";

  return (
    <>
      <style>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: white;
          box-shadow: 0 2px 12px rgba(0,0,0,0.10);
        }

        .header-topbar {
          background: rgb(248, 102, 19);
          color: white;
          text-align: center;
          font-size: 1.2rem;
          font-weight: 500;
          padding: 6px 20px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .header-main {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 30px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .header-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          flex-shrink: 0;
        }

        .header-logo-text {
          font-family: "Borsok", sans-serif;
          font-size: 1.8rem;
          color: rgb(248, 102, 19);
          line-height: 1.1;
          text-transform: uppercase;
        }

        .header-logo-text span {
          display: block;
          font-size: 1.1rem;
          color: #888;
          font-family: "Roboto", sans-serif;
          font-weight: 400;
          text-transform: none;
          letter-spacing: 0.02em;
        }

        .header-nav ul {
          display: flex;
          align-items: center;
          gap: 6px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .header-nav li { list-style: none; }

        .header-nav a {
          display: block;
          padding: 8px 14px;
          border-radius: 8px;
          font-size: 1.4rem;
          font-weight: 500;
          color: #333;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          transition: all 0.2s ease;
        }

        .header-nav a:hover,
        .header-nav a.active {
          color: rgb(248, 102, 19);
          background: rgba(248, 102, 19, 0.08);
        }

        .header-burger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          flex-direction: column;
          gap: 5px;
        }

        .header-burger span {
          display: block;
          width: 24px;
          height: 2px;
          background: #333;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .header-burger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .header-burger.open span:nth-child(2) { opacity: 0; }
        .header-burger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        .header-mobile-menu {
          display: none;
          flex-direction: column;
          background: white;
          border-top: 1px solid #f0f0f0;
          padding: 12px 20px 20px;
        }

        .header-mobile-menu.open { display: flex; }

        .header-mobile-menu a {
          padding: 12px 16px;
          font-size: 1.5rem;
          font-weight: 500;
          color: #333;
          text-decoration: none;
          text-transform: uppercase;
          border-radius: 8px;
          transition: all 0.2s ease;
        }

        .header-mobile-menu a:hover,
        .header-mobile-menu a.active {
          color: rgb(248, 102, 19);
          background: rgba(248, 102, 19, 0.08);
        }

        .page-hero {
          background-color: #ededed;
          background-size: cover;
          background-position: center;
          animation: fondu 30s ease-in-out infinite both;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          padding: 100px 20px;
          text-align: center;
        }

        .page-hero h1,
        .page-hero h2 {
          font-size: 5.5rem;
          font-weight: 300;
          color: rgb(248, 102, 19);
          text-shadow: 2px 2px 20px rgba(0,0,0,0.5);
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        @media (max-width: 900px) {
          .header-nav { display: none; }
          .header-burger { display: flex; }
          .header-main { height: 60px; padding: 0 20px; }
          .header-logo-text { font-size: 1.5rem; }
          .page-hero { padding: 70px 20px; }
          .page-hero h1,
          .page-hero h2 { font-size: 3.5rem; }
        }

        @media (max-width: 480px) {
          .page-hero h1,
          .page-hero h2 { font-size: 2.5rem; }
          .header-topbar { font-size: 1.1rem; }
        }
      `}</style>

      <header className="site-header">
        <div className="header-topbar">être un homme meilleur</div>
        <div className="header-main">
          <Link href="/" className="header-logo">
            <Image src="/img/logo_euhm_half.png" alt="EUHM" width={44} height={44} />
            <div className="header-logo-text">
              EUHM
              <span>Être Un Homme Meilleur</span>
            </div>
          </Link>

          <nav className="header-nav" aria-label="Navigation principale">
            <ul>
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className={pathname === link.href ? "active" : ""}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className={`header-burger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>

        <nav className={`header-mobile-menu${menuOpen ? " open" : ""}`} aria-label="Menu mobile">
          {NAV_LINKS.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </header>

      <div className="page-hero">
        <HeroTag>{title}</HeroTag>
      </div>
    </>
  );
}
