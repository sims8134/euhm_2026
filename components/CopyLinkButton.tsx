"use client";
import { useEffect, useState } from "react";

/** Bouton « Copier le lien » avec retour visuel de 2 secondes. */
export default function CopyLinkButton({ url }: { url: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
    } catch {
      // Navigateurs anciens ou contexte non sécurisé : repli sur execCommand.
      const input = document.createElement("input");
      input.value = url;
      input.setAttribute("readonly", "");
      input.style.position = "fixed";
      input.style.opacity = "0";
      document.body.appendChild(input);
      input.select();
      try {
        document.execCommand("copy");
        setCopied(true);
      } catch {
        /* rien de plus à tenter : le lien reste sélectionnable dans la barre d'adresse */
      }
      document.body.removeChild(input);
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className={`share-btn share-copy${copied ? " copied" : ""}`}
      aria-live="polite"
      aria-label={copied ? "Lien copié" : "Copier le lien de l'article"}
    >
      {copied ? (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
          <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
          <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
        </svg>
      )}
      <span>{copied ? "Lien copié" : "Copier le lien"}</span>
    </button>
  );
}
