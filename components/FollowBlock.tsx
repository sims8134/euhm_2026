import Image from "next/image";
import { SOCIAL_LINKS } from "../lib/seo";

/**
 * Bloc « Suivre » : simples liens https vers les comptes officiels.
 * Aucun script tiers, aucune iframe, aucune bibliothèque d'icônes.
 * Les styles sont dans app/globals.css (section FOLLOW BLOCK).
 *
 * - variant "full"    : fin d'article ou de page de contenu (logo, phrase, deux boutons)
 * - variant "compact" : pied de page (icônes et texte court)
 */

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.6" cy="6.4" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
    </svg>
  );
}

export default function FollowBlock({ variant = "full" }: { variant?: "full" | "compact" }) {
  const compact = variant === "compact";

  const buttons = (
    <div className="follow-actions">
      <a
        className="follow-btn follow-btn--primary"
        href={SOCIAL_LINKS.instagram}
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon />
        <span>{compact ? "Instagram" : "Suivre sur Instagram"}</span>
        <span className="follow-sr"> (nouvel onglet)</span>
      </a>
      <a
        className="follow-btn follow-btn--secondary"
        href={SOCIAL_LINKS.facebook}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FacebookIcon />
        <span>{compact ? "Facebook" : "Suivre sur Facebook"}</span>
        <span className="follow-sr"> (nouvel onglet)</span>
      </a>
    </div>
  );

  if (compact) {
    return <div className="follow-block follow-block--compact">{buttons}</div>;
  }

  return (
    <aside className="follow-block" aria-label="Suivre EUHM sur les réseaux sociaux">
      <Image
        className="follow-block-logo"
        src="/img/logo_euhm_half.png"
        alt="EUHM"
        width={64}
        height={64}
      />
      <p className="follow-block-text">Un conseil concret chaque jour sur Instagram et Facebook.</p>
      {buttons}
    </aside>
  );
}
