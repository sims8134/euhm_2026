"use client";

import { useEffect, useRef } from "react";

/**
 * Barre de progression de lecture, décorative (aria-hidden).
 *
 * - position: fixed : aucun décalage de mise en page (pas de CLS).
 * - Placée juste sous l'en-tête collant (.site-header), qui reste visible au
 *   défilement ; sa hauteur est suivie (menu mobile ouvert, redimensionnement).
 * - Progression par transform: scaleX, mise à jour une fois par image
 *   (requestAnimationFrame) depuis un écouteur de défilement passif.
 * - Masquée si la page ne défile pas.
 */
export default function ReadingProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    let frame = 0;

    const update = () => {
      frame = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const header = document.querySelector(".site-header");
      bar.style.top = `${header ? Math.max(0, header.getBoundingClientRect().bottom) : 0}px`;
      if (max <= 0) {
        bar.style.visibility = "hidden";
        return;
      }
      bar.style.visibility = "visible";
      const ratio = Math.min(1, Math.max(0, window.scrollY / max));
      bar.style.transform = `scaleX(${ratio})`;
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });

    // Hauteur de page qui change (images chargées, menu mobile ouvert…)
    const observer = new ResizeObserver(schedule);
    observer.observe(document.body);
    const header = document.querySelector(".site-header");
    if (header) observer.observe(header);

    update();
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={barRef} className="reading-progress" aria-hidden="true" />;
}
