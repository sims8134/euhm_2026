import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Fiches Pratiques & Ressources Gratuites",
  description:
    "Téléchargez librement les fiches pratiques EUHM : programme de sport à la maison, checklist hiver et routine énergie. Une page A4 à imprimer, sans inscription.",
  alternates: { canonical: "/telechargement" },
  openGraph: {
    title: "Fiches pratiques gratuites | EUHM",
    description:
      "Des fiches A4 à imprimer et à cocher : sport à la maison, résistance en hiver, routine énergie.",
    url: "/telechargement",
  },
};

const fiches = [
  {
    icon: "🏋️",
    badge: "Fiche 01 · Sport",
    titre: "Programme sport à la maison",
    desc: "Trois séances de 25 minutes par semaine, sans aucun matériel : les 4 exercices du circuit avec leur technique, la progression sur 4 semaines, une grille pour cocher chaque séance et le test avant/après à 30 jours.",
    fichier: "/fiches/euhm-fiche-programme-sport-maison.pdf",
    article: "/articles/confinement-faire-du-sport-a-la-maison",
  },
  {
    icon: "❄️",
    badge: "Fiche 02 · Santé",
    titre: "Checklist hiver : 6 habitudes",
    desc: "Les six gestes qui font la différence quand les températures chutent, chacun avec son repère chiffré — sommeil, lavage des mains, aération, activité physique, alimentation, chauffage — et une grille de suivi sur 7 jours.",
    fichier: "/fiches/euhm-fiche-checklist-hiver.pdf",
    article: "/articles/hiver-comment-ne-pas-tomber-malade",
  },
  {
    icon: "⚡",
    badge: "Fiche 03 · Énergie",
    titre: "Routine énergie : la journée type",
    desc: "Sept gestes minutés pour en finir avec le coup de barre de 15 h, du verre d'eau du réveil à la marche du soir. Avec le démarrage progressif sur 4 semaines et une grille d'auto-mesure de votre niveau d'énergie.",
    fichier: "/fiches/euhm-fiche-routine-energie.pdf",
    article: "/articles/rentree-booster-son-dynamisme",
  },
];

export default function TelechargementPage() {
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

          {fiches.map((f) => (
            <div className="dl-card" key={f.fichier}>
              <div className="dl-icon">{f.icon}</div>
              <div className="dl-body">
                <div className="dl-badge">{f.badge}</div>
                <h2>{f.titre}</h2>
                <p>{f.desc}</p>
                <a href={f.fichier} download className="btn">
                  Télécharger (PDF, 1 page)
                </a>
                <a
                  href={f.article}
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