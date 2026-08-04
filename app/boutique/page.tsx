import { Metadata } from "next";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import NewsletterForm from "../../components/NewsletterForm";

export const metadata: Metadata = {
  title: "Boutique Zéro Déchet & Accessoires Bien-être",
  description: "La sélection zéro déchet EUHM arrive : savon d'Alep, gourde en verre, brosse à dents en bambou. Laissez votre e-mail pour être prévenu au lancement.",
  alternates: { canonical: "/boutique" },
  openGraph: {
    title: "Boutique Éco-responsable EUHM",
    description: "Équipez-vous pour devenir une meilleure version de vous-même tout en respectant la planète.",
    url: "/boutique",
  },
};

const produits = [
  {
    img: "/img/boutique/savon-alep.jpg",
    nom: "Savon d'Alep Traditionnel",
    desc: "Savon naturel 100% végétal à base d'huile d'olive et de laurier, idéal pour l'hygiène des peaux sensibles.",
    alt: "Savon d'Alep naturel artisanal boutique EUHM",
  },
  {
    img: "/img/boutique/gourde-en-verre.jpg",
    nom: "Gourde en verre durable",
    desc: "Gourde en verre borosilicate haute résistance, sans BPA, contenance 500ml pour une hydratation saine.",
    alt: "Gourde en verre écologique sans BPA",
  },
  {
    img: "/img/boutique/brosse-a-dent-bambou.jpg",
    nom: "Brosse à dents en Bambou",
    desc: "Brosse à dents biodégradable en bambou certifié. L'alternative parfaite au plastique pour votre routine zéro déchet.",
    alt: "Brosse à dents en bambou biodégradable",
  },
];

export default function BoutiquePage() {
  return (
    <>
      <Header title="Boutique Éco-responsable : Zéro Déchet & Santé" />
      <main>
        <section className="boutique-section">
          <h1>La Boutique Zéro Déchet : Équipements pour un Homme Meilleur</h1>
          <p className="intro">
            Une sélection rigoureuse d&#39;accessoires <strong>éco-responsables</strong> et de produits naturels pour optimiser votre quotidien et réduire votre empreinte carbone.
          </p>

          {/* Bloc de capture e-mail */}
          <div
            style={{
              background: "#faf5f0",
              border: "1px solid #f2e4d8",
              borderRadius: "12px",
              padding: "32px 24px",
              margin: "32px auto 48px",
              maxWidth: "640px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: "#f86613",
                marginBottom: "12px",
              }}
            >
              En préparation
            </p>
            <h2 style={{ fontSize: "1.6rem", color: "#333", marginBottom: "12px" }}>
              Soyez prévenu au lancement
            </h2>
            <p style={{ fontSize: "14px", color: "#666", marginBottom: "24px", lineHeight: 1.6 }}>
              La sélection est en cours de constitution. Laissez votre adresse : vous serez prévenu
              dès l&#39;ouverture, et vous recevrez les nouveaux articles en attendant. Pas de spam,
              désinscription en un clic.
            </p>
            <NewsletterForm
              source="boutique"
              buttonLabel="Prévenez-moi"
              successMessage="C'est noté. Vérifiez votre boîte mail pour confirmer votre inscription — pensez à regarder dans les spams."
            />
          </div>

          <h2 style={{ textAlign: "center", marginBottom: "8px" }}>Un aperçu de la sélection</h2>
          <p style={{ textAlign: "center", fontSize: "14px", color: "#666", marginBottom: "32px" }}>
            Trois produits testés au quotidien, qui feront partie des premiers disponibles.
          </p>

          <div className="boutique-grid">
            {produits.map((p, i) => (
              <div className="produit-card" key={i}>
                <Image
                  className="produit-card-img"
                  src={p.img}
                  alt={p.alt}
                  width={400}
                  height={220}
                  style={{ objectFit: "cover" }}
                />
                <div className="produit-card-body">
                  <h3>{p.nom}</h3>
                  <p>{p.desc}</p>
                  <span
                    style={{
                      display: "inline-block",
                      background: "#fff1e7",
                      color: "#f86613",
                      border: "1px solid #f9d4bb",
                      borderRadius: "999px",
                      padding: "7px 16px",
                      fontSize: "12px",
                      fontWeight: 600,
                      letterSpacing: "0.04em",
                    }}
                  >
                    Bientôt disponible
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}