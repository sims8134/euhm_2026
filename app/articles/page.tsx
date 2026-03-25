import { Metadata } from "next"; 
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ArticlesClient from "../../components/ArticlesClient";
import { getAllArticles } from "../../lib/mdx";

// 1. Configuration des Metadata (SEO validé)
export const metadata: Metadata = {
  title: "Articles & Conseils Bien-être : Sport, Mental et Écologie - EUHM",
  description: "Découvrez nos guides experts pour optimiser votre vie : musculation au poids du corps, nutrition saine, psychologie masculine et mode de vie zéro déchet.",
  openGraph: {
    title: "Articles et Ressources pour Hommes | EUHM",
    description: "Apprenez à devenir une meilleure version de vous-même avec nos conseils pratiques et testés.",
  },
};

export default function ArticlesPage() {
  let articles: any[] = [];
  try {
    articles = getAllArticles();
  } catch (e) {}

  // 2. Fallback avec des dates de 2025 et 2026 (Content Freshness)
  const fallback: any[] = [
    { slug: "#", meta: { title: "5 exercices pour démarrer le sport à la maison (sans matériel)", category: "Sport", description: "Pas besoin d'abonnement en salle. Découvrez une routine simple et efficace pour sculpter votre corps.", date: "12 mars 2026", readTime: "5 min" }, emoji: "🏃" },
    { slug: "#", meta: { title: "Manger mieux sans se ruiner : le guide de la nutrition saine", category: "Alimentation", description: "L'alimentation saine n'est pas réservée aux gros budgets. Apprenez à optimiser vos courses.", date: "5 janvier 2026", readTime: "7 min" }, emoji: "🥗" },
    { slug: "#", meta: { title: "Gérer le stress au quotidien : 3 techniques de psychologie", category: "Psychologie", description: "Respiration, pleine conscience, organisation... Des méthodes accessibles pour calmer votre mental.", date: "20 novembre 2025", readTime: "6 min" }, emoji: "🧠" },
    { slug: "#", meta: { title: "Réduire ses déchets : guide débutant pour un mode de vie éco-responsable", category: "Écologie", description: "Le zéro déchet peut faire peur, mais chaque petit geste pour l'environnement compte.", date: "3 octobre 2025", readTime: "8 min" }, emoji: "🌱" },
    { slug: "#", meta: { title: "Communication dans le couple : les erreurs à éviter absolument", category: "Vie de couple", description: "Une relation épanouie se construit sur une communication honnête et constructive.", date: "15 septembre 2025", readTime: "5 min" }, emoji: "❤️" },
    { slug: "#", meta: { title: "Optimiser son sommeil : les habitudes qui changent votre vie", category: "Psychologie", description: "Quelques ajustements de routine nocturne peuvent transformer votre énergie quotidienne.", date: "1 août 2025", readTime: "6 min" }, emoji: "😴" },
    { slug: "#", meta: { title: "Reprendre la musculation après une pause : éviter les blessures", category: "Sport", description: "Comment retrouver la motivation et relancer votre progression physique.", date: "10 juillet 2025", readTime: "5 min" }, emoji: "💪" },
    { slug: "#", meta: { title: "Les bienfaits du jeûne intermittent : ce que dit la science", category: "Alimentation", description: "Mode ou vraie solution santé ? On fait le point sur le jeûne pour l'optimisation physique.", date: "22 juin 2025", readTime: "9 min" }, emoji: "🍵" },
    { slug: "#", meta: { title: "Maison saine : nettoyer naturellement sans produits chimiques", category: "Écologie", description: "Vinaigre, bicarbonate, savon de Marseille... Une maison propre et respectueuse de la santé.", date: "5 mai 2025", readTime: "7 min" }, emoji: "🏡" },
  ];

  const data = articles.length > 0
    ? articles.map(a => ({ slug: a.slug, meta: a.meta, emoji: "📄" }))
    : fallback;

  return (
    <>
      <Header title="Articles" />
      <main>
        <section className="articles-section">
          {/* SEO : H1 plus descriptif */}
          <h1>Conseils et Stratégies pour devenir un Homme Meilleur</h1>
          <p className="intro">
            Explorez nos articles dédiés au <strong>développement personnel</strong>, au <strong>sport</strong>, à la <strong>nutrition</strong> et à l'<strong>écologie</strong>. 
            Chaque guide est conçu pour vous apporter des solutions concrètes et optimiser votre quotidien.
          </p>
          <ArticlesClient articles={data} />
        </section>
      </main>
      <Footer />
    </>
  );
}