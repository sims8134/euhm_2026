import { Metadata } from "next"; // Ajout pour le SEO
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ArticlesClient from "../../components/ArticlesClient";
import { getAllArticles } from "../../lib/mdx";

// 1. Configuration des Metadata pour cette page
export const metadata: Metadata = {
  title: "Articles",
  description: "Découvrez tous nos articles sur le sport, l'alimentation, la psychologie et l'écologie.",
  openGraph: {
    title: "Tous les articles | EUHM",
    description: "Conseils et astuces pour devenir une meilleure version de vous-même.",
  },
};

export default function ArticlesPage() {
  let articles: any[] = [];
  try {
    articles = getAllArticles();
  } catch (e) {}

  // 2. Ajout du type ": any[]" pour corriger l'erreur Vercel / TypeScript
  const fallback: any[] = [
    { slug: "#", meta: { title: "5 exercices pour démarrer le sport à la maison", category: "Sport", description: "Pas besoin d'abonnement en salle. Découvrez une routine simple et efficace.", date: "12 mars 2021", readTime: "5 min" }, emoji: "🏃" },
    { slug: "#", meta: { title: "Manger mieux sans se ruiner : le guide pratique", category: "Alimentation", description: "L'alimentation saine n'est pas réservée aux budgets confortables.", date: "5 janvier 2021", readTime: "7 min" }, emoji: "🥗" },
    { slug: "#", meta: { title: "Gérer le stress au quotidien : 3 techniques simples", category: "Psychologie", description: "Respiration, pleine conscience, organisation... Des méthodes accessibles à tous.", date: "20 novembre 2020", readTime: "6 min" }, emoji: "🧠" },
    { slug: "#", meta: { title: "Réduire ses déchets au quotidien : par où commencer ?", category: "Écologie", description: "Le zéro déchet peut faire peur, mais chaque petit geste compte.", date: "3 octobre 2020", readTime: "8 min" }, emoji: "🌱" },
    { slug: "#", meta: { title: "Communication dans le couple : les erreurs à éviter", category: "Vie de couple", description: "Une relation épanouie se construit sur une communication honnête.", date: "15 septembre 2020", readTime: "5 min" }, emoji: "❤️" },
    { slug: "#", meta: { title: "Mieux dormir : les habitudes qui changent tout", category: "Psychologie", description: "Quelques ajustements de routine peuvent transformer votre qualité de vie.", date: "1 août 2020", readTime: "6 min" }, emoji: "😴" },
    { slug: "#", meta: { title: "Reprendre le sport après une longue pause", category: "Sport", description: "Comment retrouver la motivation et éviter les blessures.", date: "10 juillet 2020", readTime: "5 min" }, emoji: "💪" },
    { slug: "#", meta: { title: "Les bienfaits du jeûne intermittent expliqués simplement", category: "Alimentation", description: "Mode ou vraie solution ? On fait le point sur ce que dit la science.", date: "22 juin 2020", readTime: "9 min" }, emoji: "🍵" },
    { slug: "#", meta: { title: "Astuces ménagères naturelles : adieu les produits chimiques", category: "Écologie", description: "Vinaigre, bicarbonate, savon de Marseille... Une maison propre sans produits nocifs.", date: "5 mai 2020", readTime: "7 min" }, emoji: "🏡" },
  ];

  const data = articles.length > 0
    ? articles.map(a => ({ slug: a.slug, meta: a.meta, emoji: "📄" }))
    : fallback;

  return (
    <>
      <Header title="Articles" />
      <main>
        <section className="articles-section">
          <h1>Tous les articles</h1>
          <p className="intro">Conseils, réflexions et astuces pour devenir une meilleure version de vous-même.</p>
          <ArticlesClient articles={data} />
        </section>
      </main>
      <Footer />
    </>
  );
}