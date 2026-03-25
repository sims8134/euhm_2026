import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Accueil | EUHM — Être Un Homme Meilleur",
  description: "Conseils bien-être, sport, alimentation, psychologie et écologie pour devenir une meilleure version de vous-même.",
};

export default function Accueil() {
  return (
    <>
      <Header title="Accueil" />
      <main>
        <div className="main-grid">
          <article className="bienvenue">
            <h1>BIENVENUE SUR EUHM.FR</h1>
            
          <h2>EUHM C&apos;EST QUOI ?</h2>
            <p>
              Les lettres <strong>EUHM</strong> sont l&#39;abréviation de &quot; <strong>Être Un Homme Meilleur</strong> &quot;.<br /><br />
              Le site <strong>euhm.fr</strong> propose des articles et des dossiers experts sur la thématique du <strong>bien-être masculin</strong>. Ce portail s&#39;adresse à un particulier à un public en quête de savoir et d&#39;amélioration tout en sortant des sentiers battus et des clichés des coachs musculation et bien-être qui pullulent sur la toile.<br /><br />
              Grâce à des <strong>conseils simples et compréhensibles par tous</strong>, vous retrouverez ici tout les outils nécessaire afin de développer votre bien-être et de retrouver l&#39;harmonie nécessaire à votre épanouissement dans votre vie comme dans votre environnement.<br /><br />
              Sport, alimentation, psychologie, vie de couple mais aussi écologie et astuces ménagères, les informations disponibles sur ce site vous sont présentées uniquement à titre de partage.<br /><br />
              Je ne suis ni un coach en développement personnel, ni un moniteur de sport, ni un nutritionniste professionnel. Le site internet euhm.fr est la synthèse de plus de 5 années de travail en développement personnel. Toutes les astuces et conseils dont je fais part ont été préalablement testés par moi mais ne garantissent en rien une vérité absolue. Je vous invite donc à compléter votre travail en multipliant vos recherches, vos sources et en demandant conseil directement à un professionnel de santé.<br /><br />
              Vous avez une question, une suggestion ou vous voulez simplement entrer en contact avec moi ? Le bouton contact est fait pour ça !
            </p>
            <Link href="/contact" className="btn">Contactez-nous</Link>
          </article>

          <section id="actu" className="actualite">
            <h2>ACTUALITÉS :</h2>
            <ul>
              <li>
                <strong>Hiver : Comment ne pas tomber malade</strong>
                <Link href="/dossiers">
                  <Image className="imgactu" src="/img/actualités/winter.jpg" alt="Santé hiver" width={260} height={180} />
                </Link>
              </li>
              <li>
                <strong>Ebook : téléchargez gratuitement le livre EUHM !</strong>
                <Link href="/articles">
                  <Image className="imgbook" src="/img/actualités/Cover.jpg" alt="Ebook gratuit" width={200} height={160} />
                </Link>
              </li>
              <li>
                <strong>Rentrée : Booster son dynamisme</strong>
                <Link href="/dossiers">
                  <Image className="imgactu" src="/img/actualités/rentrée.jpg" alt="Dynamisme rentrée" width={260} height={180} />
                </Link>
              </li>
              <li>
                <strong>Confinement : Faire du sport à la maison</strong>
                <Link href="/dossiers">
                  <Image className="imgactu" src="/img/actualités/sport.jpg" alt="Sport maison" width={260} height={180} />
                </Link>
              </li>
            </ul>
          </section>

         <section id="shop" className="boutique" style={{ textAlign: 'center' }}>
  <h2>QUOI DE NEUF DANS LA BOUTIQUE ?</h2>
  <h4 style={{ color: '#ff6600', marginBottom: '20px' }}>BOUTIQUE SPÉCIALE ZÉRO DÉCHET PROCHAINEMENT DISPONIBLE !</h4>
  
  <ul style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    listStyle: 'none', 
    padding: 0, 
    gap: '20px',
    flexWrap: 'wrap' 
  }}>
    <li style={{ width: '200px' }}>
      <strong>Savon d&#39;Alep</strong>
      <Image className="imgshop" src="/img/boutique/savon d_alep.jpg" alt="Savon d'Alep" width={200} height={140} style={{ borderRadius: '10px' }} />
    </li>
    <li style={{ width: '200px' }}>
      <strong>Gourde en verre</strong>
      <Image className="imgshop" src="/img/boutique/gourde en verre.jpg" alt="Gourde en verre" width={200} height={140} style={{ borderRadius: '10px' }} />
    </li>
    <li style={{ width: '200px' }}>
      <strong>Brosse à dent bambou</strong>
      <Image className="imgshop" src="/img/boutique/brosse à dent bambou.jpg" alt="Brosse à dent" width={200} height={140} style={{ borderRadius: '10px' }} />
    </li>
  </ul>
</section>
        </div>
     <section className="don">
        <p>Vous souhaitez faire un don ? Celui-ci est garanti 100% réinjecté dans le projet euhm.fr</p>
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <a href="https://www.paypal.com/donate/?hosted_button_id=XXXXX" target="_blank" rel="noopener noreferrer">
            {/* 1. NOM EXACT : btn_donate.png (vu dans ton dossier img) */}
            <img 
              src="/img/btn_donate.png" 
              alt="Faire un don" 
              style={{ width: '150px', height: 'auto', marginBottom: '10px' }} 
            />
            <br />
            {/* 2. SI L'IMAGE DES CARTES EST MANQUANTE, ON NE L'AFFICHE PAS POUR EVITER LE 404 */}
            {/* <img 
              src="/img/paiement_cartes.png" 
              alt="Moyens de paiement" 
              style={{ width: '250px', height: 'auto' }} 
            /> */}
          </a>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}