"use client";
import { useState } from "react";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const PHOTOS = [
  "/img/galerie/arbrecascade.jpg",
  "/img/galerie/avionetvautour.jpg",
  "/img/galerie/Bergerie.jpg",
  "/img/galerie/cascadesombre.jpg",
  "/img/galerie/champignon.jpg",
  "/img/galerie/clocherdemontagne.jpg",
  "/img/galerie/criquetderoche.jpg",
  "/img/galerie/deuxchemins.jpg",
  "/img/galerie/eaucalme.jpg",
  "/img/galerie/eauenmouvement.jpg",
  "/img/galerie/elementbois.jpg",
  "/img/galerie/fenètreboisé.jpg",
  "/img/galerie/feuillefondblanc.jpg",
  "/img/galerie/feuillefondbleu.jpg",
  "/img/galerie/feuillefondorange.jpg",
  "/img/galerie/fleurhumide.jpg",
  "/img/galerie/foret.jpg",
  "/img/galerie/fougere.jpg",
  "/img/galerie/iglootoilearaigne.jpg",
  "/img/galerie/lacdemontagne.jpg",
  "/img/galerie/Lacdenuage.jpg",
  "/img/galerie/legrandvoltigeur.jpg",
  "/img/galerie/lezardobservateur.jpg",
  "/img/galerie/maisonbrumeuse.jpg",
  "/img/galerie/maitreduciel.jpg",
  "/img/galerie/montagnesombre.jpg",
  "/img/galerie/papillonsurfleurs.jpg",
  "/img/galerie/peaudelezard.jpg",
  "/img/galerie/petitoiseau.jpg",
  "/img/galerie/pisteenété.jpg",
  "/img/galerie/pontcascade.jpg",
  "/img/galerie/valléeparadisiaque.jpg",
  "/img/galerie/vautourlunaire.jpg",
  "/img/galerie/vautourplanant.jpg",
];

export default function GaleriePage() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <Header title="Galerie" />
      <main>
        <section className="galerie-section">
          <h1>Galerie photos</h1>
          <p className="intro">Une collection d&#39;images inspirantes autour du bien-être, de la nature et du quotidien.</p>

          <div className="galerie-grid">
            {PHOTOS.map((src, i) => (
              <div className="galerie-item" key={i} onClick={() => setLightbox(i)}>
                <img src={src} alt={`Photo galerie ${i + 1}`} loading="lazy" />
                <div className="galerie-overlay"><span>🔍</span></div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />

      {lightbox !== null && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}>✕</button>
          <button className="lightbox-prev" onClick={e => { e.stopPropagation(); setLightbox((lightbox - 1 + PHOTOS.length) % PHOTOS.length); }}>‹</button>
          <img src={PHOTOS[lightbox]} alt="Photo agrandie" onClick={e => e.stopPropagation()} />
          <button className="lightbox-next" onClick={e => { e.stopPropagation(); setLightbox((lightbox + 1) % PHOTOS.length); }}>›</button>
        </div>
      )}
    </>
  );
}
