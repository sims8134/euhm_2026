import { Metadata } from "next"; // Ajout pour le SEO
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// 1. Configuration des Metadata : On prépare le terrain pour la vente
export const metadata: Metadata = {
  title: "Boutique Zéro Déchet & Accessoires Bien-être - EUHM",
  description: "Découvrez notre sélection de produits éco-responsables : savon d'Alep naturel, gourdes en verre et brosses à dents en bambou pour un mode de vie sain.",
  openGraph: {
    title: "Boutique Éco-responsable EUHM",
    description: "Équipez-vous pour devenir une meilleure version de vous-même tout en respectant la planète.",
  },
};

const produits = [
  { 
    img: "/img/boutique/savon d_alep.jpg", 
    nom: "Savon d'Alep Traditionnel", 
    desc: "Savon naturel 100% végétal à base d'huile d'olive et de laurier, idéal pour l'hygiène des peaux sensibles.", 
    prix: "8,90 €",
    alt: "Savon d'Alep naturel artisanal boutique EUHM"
  },
  { 
    img: "/img/boutique/gourde en verre.jpg", 
    nom: "Gourde en verre durable", 
    desc: "Gourde en verre borosilicate haute résistance, sans BPA, contenance 500ml pour une hydratation saine.", 
    prix: "14,90 €",
    alt: "Gourde en verre écologique sans BPA"
  },
  { 
    img: "/img/boutique/brosse à dent bambou.jpg", 
    nom: "Brosse à dents en Bambou", 
    desc: "Brosse à dents biodégradable en bambou certifié. L'alternative parfaite au plastique pour votre routine zéro déchet.", 
    prix: "4,90 €",
    alt: "Brosse à dents en bambou biodégradable"
  },
];

export default function BoutiquePage() {
  return (
    <>
      <Header title="Boutique Éco-responsable : Zéro Déchet & Santé" />
      <main>
        <section className="boutique-section">
          {/* SEO : H1 contenant les mots-clés de business */}
          <h1>La Boutique Zéro Déchet : Équipements pour un Homme Meilleur</h1>
          <p className="intro">
            Une sélection rigoureuse d&#39;accessoires **éco-responsables** et de produits naturels pour optimiser votre quotidien et réduire votre empreinte carbone.
          </p>
          <p className="soon">🚧 Boutique spéciale 0 déchet — prochainement disponible !</p>
          
          <div className="boutique-grid">
            {produits.map((p, i) => (
              <div className="produit-card" key={i}>
                <Image 
                  className="produit-card-img" 
                  src={p.img} 
                  alt={p.alt} // SEO : Alt tags personnalisés pour Google Images
                  width={400} 
                  height={220} 
                  style={{objectFit:"cover"}} 
                />
                <div className="produit-card-body">
                  <h2>{p.nom}</h2>
                  <p>{p.desc}</p>
                  <div className="produit-prix">{p.prix}</div>
                  <a href="#" className="btn">Découvrir le produit</a>
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