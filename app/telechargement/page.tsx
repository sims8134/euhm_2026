import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getAllFiches } from "../../lib/mdx";

export const metadata: Metadata = {
  title: "Fiches Pratiques & Ressources Gratuites",
  description:
    "Téléchargez librement les fiches pratiques EUHM : une page A4 à imprimer par article, avec les gestes concrets, les repères chiffrés et des cases à cocher. Sans inscription.",
  alternates: { canonical: "/telechargement" },
  openGraph: {
    title: "Fiches pratiques gratuites | EUHM",
    description:
      "Des fiches A4 à imprimer et à cocher, une par article : sport, sommeil, énergie, santé.",
    url: "/telechargement",
  },
};

export default function TelechargementPage() {
  const fiches = getAllFiches();

  return (
    <>
      <Header title="Ressources Gratuites" />
      <main>
        <section className="telechargement-section">
          <h1>Fiches pratiques à imprimer</h1>
          <p className="intro">
            Chaque fiche tient sur <strong>une page A4</strong> : les gestes concrets d&#39;un article,
            avec les repères chiffrés et des cases à cocher. Téléchargement libre, sans inscription.
          </p>

          {fiches.length === 0 && (
            <p style={{ textAlign: "center", color: "#666" }}>
              Les premières fiches arrivent très bientôt.
            </p>
          )}

          {fiches.map((f) => (
            <div className="dl-card" key={f.fiche}>
              <div className="dl-icon">{f.ficheIcon ?? "📄"}</div>
              <div className="dl-body">
                <div className="dl-badge">
                  {f.ficheNumero ? `Fiche ${f.ficheNumero} · ` : ""}{f.category}
                </div>
                <h2>{f.ficheTitre ?? f.title}</h2>
                <p>{f.ficheDesc ?? f.description}</p>
                <a href={f.fiche} download className="btn">
                  Télécharger (PDF, 1 page)
                </a>
                <a
                  href={`/articles/${f.slug}`}
                  style={{
                    display: "inline-block",
                    marginLeft: "16px",
                    color: "#f86613",
                    fontSize: "14px",
                    textDecoration: "underline",
                  }}
                >
                  Lire l&#39;article associé
                </a>
              </div>
            </div>
          ))}

          <p
            style={{
              marginTop: "2.5rem",
              textAlign: "center",
              fontSize: "0.9rem",
              color: "#666",
              lineHeight: 1.7,
            }}
          >
            De nouvelles fiches arrivent au rythme des articles. Inscrivez-vous à la newsletter
            ci-dessous pour être prévenu à chaque publication.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}