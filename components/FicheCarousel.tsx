"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { FicheImage } from "../lib/fiches";

/**
 * Galerie du carrousel Instagram d'une fiche.
 * Sans JavaScript : simple défilement horizontal avec scroll-snap (au doigt ou au trackpad).
 * Avec JavaScript : flèches précédent / suivant (ordinateur), compteur « 2 / 7 »,
 * flèches du clavier quand la galerie a le focus.
 */
export default function FicheCarousel({ slides, title }: { slides: FicheImage[]; title: string }) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [ready, setReady] = useState(false);
  const [index, setIndex] = useState(0);
  const total = slides.length;

  useEffect(() => {
    setReady(true);
    const track = trackRef.current;
    if (!track) return;
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const w = track.clientWidth || 1;
        setIndex(Math.min(total - 1, Math.max(0, Math.round(track.scrollLeft / w))));
      });
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [total]);

  const goTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const target = Math.min(total - 1, Math.max(0, i));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({ left: target * track.clientWidth, behavior: reduce ? "auto" : "smooth" });
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") { e.preventDefault(); goTo(index + 1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); goTo(index - 1); }
  };

  return (
    <section className="carousel" aria-roledescription="carrousel" aria-label={`Carrousel : ${title}`}>
      <ul className="carousel-track" ref={trackRef} tabIndex={0} onKeyDown={onKeyDown}>
        {slides.map((s, i) => (
          <li className="carousel-slide" key={s.src} aria-roledescription="diapositive" aria-label={`${i + 1} sur ${total}`}>
            <Image
              src={s.src}
              alt={`Slide ${i + 1} sur ${total} : ${title}`}
              width={s.width}
              height={s.height}
              sizes="(max-width: 580px) 100vw, 540px"
              loading={i === 0 ? "eager" : "lazy"}
            />
          </li>
        ))}
      </ul>

      {ready && total > 1 && (
        <div className="carousel-controls">
          <button
            type="button"
            className="carousel-btn"
            onClick={() => goTo(index - 1)}
            disabled={index === 0}
            aria-label="Image précédente"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
              <path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <p className="carousel-counter" aria-live="polite">
            {index + 1} / {total}
          </p>
          <button
            type="button"
            className="carousel-btn"
            onClick={() => goTo(index + 1)}
            disabled={index === total - 1}
            aria-label="Image suivante"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
              <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
