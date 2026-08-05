"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => string;
      reset: (id?: string) => void;
      remove: (id?: string) => void;
    };
    onTurnstileLoad?: () => void;
  }
}

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
const SCRIPT_ID = "cf-turnstile-script";

type Props = {
  /** Appelé quand le visiteur est validé : reçoit le jeton à envoyer au serveur. */
  onVerify: (token: string) => void;
  /** Appelé si le défi expire ou échoue : remet le jeton à vide. */
  onExpire?: () => void;
  theme?: "auto" | "light" | "dark";
};

/**
 * Widget Cloudflare Turnstile.
 * Si NEXT_PUBLIC_TURNSTILE_SITE_KEY n'est pas défini (développement local),
 * le composant ne rend rien et valide immédiatement : les formulaires
 * restent utilisables sans configuration.
 */
export default function Turnstile({ onVerify, onExpire, theme = "light" }: Props) {
  const conteneur = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);

  useEffect(() => {
    if (!SITE_KEY) {
      onVerify("dev-sans-turnstile");
      return;
    }

    let annule = false;

    function afficher() {
      if (annule || !conteneur.current || !window.turnstile) return;
      if (widgetId.current) return;

      widgetId.current = window.turnstile.render(conteneur.current, {
        sitekey: SITE_KEY,
        theme,
        language: "fr",
        callback: (token: string) => onVerify(token),
        "expired-callback": () => onExpire?.(),
        "error-callback": () => onExpire?.(),
      });
    }

    if (window.turnstile) {
      afficher();
    } else if (!document.getElementById(SCRIPT_ID)) {
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      script.onload = afficher;
      document.head.appendChild(script);
    } else {
      // Le script est déjà en cours de chargement : on attend qu'il soit prêt.
      const timer = setInterval(() => {
        if (window.turnstile) {
          clearInterval(timer);
          afficher();
        }
      }, 200);
      return () => {
        annule = true;
        clearInterval(timer);
      };
    }

    return () => {
      annule = true;
      if (widgetId.current && window.turnstile) {
        window.turnstile.remove(widgetId.current);
        widgetId.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!SITE_KEY) return null;

  return <div ref={conteneur} style={{ margin: "0 auto 16px", display: "flex", justifyContent: "center" }} />;
}
