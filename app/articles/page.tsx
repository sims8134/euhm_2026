import { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ArticlesClient from "../../components/ArticlesClient";
import { getAllArticles } from "../../lib/mdx";

export const metadata: Metadata = {
  title: "Articles Bien-être Homme : Sport, Nutrition, Psychologie",
  description:
    "Découvrez nos guides experts pour optimiser votre vie : musculation au poids du corps, nutrition saine, psychologie masculine et mode de vie zéro déchet.",
  alternates: {
    canonical: "https://euhm.fr/articles",
  },
  openGraph: {
    title: "Articles et Ressources Bien-être pour Hommes | EUHM",
    description:
      "Apprenez à devenir une meilleure version de vous-même avec nos conseils pratiques et testés.",
  },
};

export default function ArticlesPage() {
  let articles: any[] = [];
  try {
    articles = getAllArticles();
  } catch (e) {}

  // Fallback articles — only those with real content get a link
  const fallback: any[] = [
    {
      slug: "sport-maison",
      meta: {
        title: "5 exercices pour démarrer le sport à la maison (sans matériel)",
        category: "Sport",
        description:
          "Pas besoin d'abonnement en salle. Découvrez une routine simple et efficace pour sculpter votre corps.",
        date: "12 mars 2026",
        readTime: "5 min",
      },
      emoji: "🏃",
    },
  ];

  const data =
    articles.length > 0
      ? articles.map((a) => ({ slug: a.slug, meta: a.meta, emoji: "📄" }))
      : fallback;

  return (
    <>
      {/* heroAsH2 because we define our own H1 below */}
      <Header title="Articles" heroAsH2 />
      <main>
        <section className="articles-section">
          <h1>Conseils et Stratégies pour devenir un Homme Meilleur</h1>
          <p className="intro">
            Explorez nos articles dédiés au{" "}
            <strong>développement personnel</strong>, au <strong>sport</strong>,
            à la <strong>nutrition</strong> et à l&apos;<strong>écologie</strong>
            . Chaque guide est conçu pour vous apporter des solutions concrètes
            et optimiser votre quotidien.
          </p>
          <ArticlesClient articles={data} />
        </section>
      </main>
      <Footer />
    </>
  );
}
