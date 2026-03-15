import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Accueil() {
  return (
    <>
      <Header title="Accueil" />
      <main>
        <div className="main-grid">
          <article className="bienvenue">
            <h1>Bienvenue sur euhm.fr</h1>
            <h4>EUHM c&#39;est quoi ?</h4>
            <p>
              Les lettres EUHM sont l&#39;abréviation de &quot; Être Un Homme Meilleur &quot;.<br /><br />
              Le site euhm.fr propose des articles et des dossiers ayant pour thématique générale le bien être.
              Ce site s&#39;adresse en particulier à un public en quête de savoir et d&#39;amélioration
              tout en sortant des sentiers battus et des clichés des coachs musculation et bien être qui pullulent sur la toile.<br /><br />
              Grâce à des conseils simples et compréhensibles par tous,
              vous retrouverez ici tout les outils nécessaire afin de développer votre bien être et de retrouver
              l&#39;harmonie nécessaire à votre épanouissement dans votre vie comme dans votre environnement.<br /><br />
              Sport, alimentation, psychologie, vie de couple mais aussi écologie et astuces ménagères,
              les informations disponibles sur ce site vous sont présentées uniquement à titre de partage.<br /><br />
              Je ne suis ni un coach en développement personnel, ni un moniteur de sport, ni un nutritionniste professionnel.
              Le site internet euhm.fr est la synthèse de plus de 5 années de travail en développement personnel.
              Toutes les astuces et conseils dont je fais part ont été préalablement testés par moi mais ne garantissent
              en rien une vérité absolue.
              Je vous invite donc à compléter votre travail en multipliant vos recherches, vos sources
              et en demandant conseil directement à un professionnel de santé.
            </p>
            <p>
              Vous avez une question, une suggestion ou vous voulez simplement entrer en contact avec moi ?
              Le bouton contact est fait pour ça !
            </p>
            <Link href="/contact" className="btn">Contact</Link>
          </article>

          <section id="actu" className="actualite">
            <h1>Actualités :</h1>
            <ul>
              <li>Hiver : Comment ne pas tomber malade</li>
              <Link href="/dossiers"><Image className="imgactu" src="/img/actualités/winter.jpg" alt="Hiver" width={260} height={180} /></Link>
              <li>Ebook : téléchargez gratuitement le livre EUHM !</li>
              <Link href="/articles"><Image className="imgbook" src="/img/actualités/Cover.jpg" alt="Ebook" width={200} height={160} /></Link>
              <li>Rentrée : Booster son dynamisme</li>
              <Link href="/dossiers"><Image className="imgactu" src="/img/actualités/rentrée.jpg" alt="Rentrée" width={260} height={180} /></Link>
              <li>Confinement : Faire du sport à la maison</li>
              <Link href="/dossiers"><Image className="imgactu" src="/img/actualités/sport.jpg" alt="Sport à la maison" width={260} height={180} /></Link>
            </ul>
          </section>

          <section id="shop" className="boutique">
            <h1>Quoi de neuf dans la boutique ?</h1>
            <h4>Boutique spéciale 0 déchet prochainement disponible !</h4>
            <ul>
              <li>Savon d&#39;Alep
                <Image className="imgshop" src="/img/boutique/savon d_alep.jpg" alt="Savon d'Alep" width={200} height={140} />
              </li>
              <li>Gourde en verre
                <Image className="imgshop" src="/img/boutique/gourde en verre.jpg" alt="Gourde en verre" width={200} height={140} />
              </li>
              <li>Brosse à dent bambou
                <Image className="imgshop" src="/img/boutique/brosse à dent bambou.jpg" alt="Brosse à dent bambou" width={200} height={140} />
              </li>
            </ul>
          </section>
        </div>

        <section className="don">
          <p>Vous souhaitez faire un don ? Celui-ci est garanti 100% réinjecté dans le projet euhm.fr</p>
          <form action="https://www.paypal.com/donate" method="post" target="_top" style={{display: "inline"}}>
            <input type="hidden" name="hosted_button_id" value="K8EWTET5MKTC6" />
            <input type="image" src="https://www.paypalobjects.com/fr_FR/FR/i/btn/btn_donateCC_LG.gif"
              name="submit" title="PayPal" alt="Donate with PayPal button" />
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
