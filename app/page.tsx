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
            {/* SEO : Un seul H1 par page, contenant le mot-clé principal */}
            <h1>Être Un Homme Meilleur : Bien-être, Sport et Psychologie</h1>
            
            <h2>EUHM c&#39;est quoi ?</h2>
            <p>
              Les lettres **EUHM** sont l&#39;abréviation de &quot; **Être Un Homme Meilleur** &quot;.<br /><br />
              Le site **euhm.fr** propose des articles et des dossiers experts sur la thématique du **bien-être masculin**. 
              Ce portail s&#39;adresse à un public en quête de savoir et d&#39;amélioration personnelle, 
              loin des clichés des coachs en musculation traditionnels.<br /><br />
              Grâce à des **conseils simples et concrets**, vous trouverez ici tous les outils pour développer votre santé, 
              votre mental et retrouver l&#39;harmonie nécessaire à votre épanouissement quotidien.<br /><br />
              **Sport, alimentation saine, psychologie, vie de couple, écologie** et astuces zéro déchet : 
              chaque information est un partage d&#39;expérience pour progresser ensemble.<br /><br />
              Le site internet euhm.fr est la synthèse de plus de 5 années de travail en **développement personnel**. 
              Toutes les astuces présentées ont été testées, mais ne remplacent en rien l&#39;avis d&#39;un professionnel de santé.
            </p>
            <p>
              Une question ou une suggestion pour améliorer le projet ? Contactez-moi directement.
            </p>
            <Link href="/contact" className="btn">Contactez-nous</Link>
          </article>

          <section id="actu" className="actualite">
            {/* SEO : H2 pour les sections secondaires */}
            <h2>Dernières Actualités Bien-être</h2>
            <ul>
              <li>
                <strong>Santé :</strong> Comment ne pas tomber malade en hiver
                <Link href="/dossiers">
                  <Image className="imgactu" src="/img/actualités/winter.jpg" alt="Conseils santé hiver homme" width={260} height={180} />
                </Link>
              </li>
              <li>
                <strong>Ebook Gratuit :</strong> Téléchargez le livre EUHM
                <Link href="/articles">
                  <Image className="imgbook" src="/img/actualités/Cover.jpg" alt="Ebook gratuit être un homme meilleur" width={200} height={160} />
                </Link>
              </li>
              <li>
                <strong>Dynamisme :</strong> Booster son énergie à la rentrée
                <Link href="/dossiers">
                  <Image className="imgactu" src="/img/actualités/rentrée.jpg" alt="Booster son dynamisme rentrée" width={260} height={180} />
                </Link>
              </li>
              <li>
                <strong>Sport Maison :</strong> S&#39;entraîner efficacement en intérieur
                <Link href="/dossiers">
                  <Image className="imgactu" src="/img/actualités/sport.jpg" alt="Programme sport maison sans matériel" width={260} height={180} />
                </Link>
              </li>
            </ul>
          </section>

          <section id="shop" className="boutique">
            <h2>Boutique Éco-responsable & Zéro Déchet</h2>
            <h4>Équipements prochainement disponibles</h4>
            <ul>
              <li>Savon d&#39;Alep Traditionnel
                <Image className="imgshop" src="/img/boutique/savon d_alep.jpg" alt="Savon d'Alep naturel boutique EUHM" width={200} height={140} />
              </li>
              <li>Gourde en verre durable
                <Image className="imgshop" src="/img/boutique/gourde en verre.jpg" alt="Gourde en verre écologique" width={200} height={140} />
              </li>
              <li>Brosse à dent en Bambou
                <Image className="imgshop" src="/img/boutique/brosse à dent bambou.jpg" alt="Brosse à dent bambou biodégradable" width={200} height={140} />
              </li>
            </ul>
          </section>
        </div>

        <section className="don">
          <p>Soutenez le projet : 100% des dons sont réinjectés dans le développement de euhm.fr</p>
          {/* ... reste du formulaire Paypal ... */}
        </section>
      </main>
      <Footer />
    </>
  );
}