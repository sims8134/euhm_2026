import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const produits = [
  { img: "/img/boutique/savon d_alep.jpg", nom: "Savon d'Alep", desc: "Savon naturel 100% végétal, idéal pour la peau sensible.", prix: "8,90 €" },
  { img: "/img/boutique/gourde en verre.jpg", nom: "Gourde en verre", desc: "Gourde en verre borosilicate, sans BPA, 500ml.", prix: "14,90 €" },
  { img: "/img/boutique/brosse à dent bambou.jpg", nom: "Brosse à dent bambou", desc: "Brosse à dents biodégradable en bambou certifié.", prix: "4,90 €" },
];

export default function BoutiquePage() {
  return (
    <>
      <Header title="Boutique" />
      <main>
        <section className="boutique-section">
          <h1>La boutique EUHM</h1>
          <p className="intro">Des produits sélectionnés pour leur qualité et leur impact positif sur vous et la planète.</p>
          <p className="soon">🚧 Boutique spéciale 0 déchet — prochainement disponible !</p>
          <div className="boutique-grid">
            {produits.map((p, i) => (
              <div className="produit-card" key={i}>
                <Image className="produit-card-img" src={p.img} alt={p.nom} width={400} height={220} style={{objectFit:"cover"}} />
                <div className="produit-card-body">
                  <h2>{p.nom}</h2>
                  <p>{p.desc}</p>
                  <div className="produit-prix">{p.prix}</div>
                  <a href="#" className="btn">Voir le produit</a>
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
