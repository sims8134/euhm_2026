import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { getArticleBySlug, getAllArticles } from "../../../lib/mdx";

const BASE_URL = "https://euhm.fr";
const AUTEUR = "Simon"; // ⚠️ Mets ici le nom sous lequel tu signes le site.

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  const url = `/articles/${slug}`;

  return {
    title: article.meta.title,
    description: article.meta.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: article.meta.title,
      description: article.meta.description,
      ...(article.meta.image && {
        images: [{ url: article.meta.image, width: 1200, height: 630, alt: article.meta.title }],
      }),
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  // Balisage schema.org Article — indispensable sur une thématique santé (E-E-A-T).
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.meta.title,
    description: article.meta.description,
    datePublished: article.meta.date,
    dateModified: article.meta.date,
    inLanguage: "fr-FR",
    articleSection: article.meta.category,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/articles/${slug}`,
    },
    author: {
      "@type": "Person",
      name: AUTEUR,
      url: `${BASE_URL}/apropos`,
    },
    publisher: {
      "@type": "Organization",
      name: "EUHM — Être Un Homme Meilleur",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/img/logo_euhm_half.png`,
      },
    },
    ...(article.meta.image && { image: `${BASE_URL}${article.meta.image}` }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header title={article.meta.title} />
      <main>
        <div className="article-page">
          <Link href="/articles" className="article-back">← Retour aux articles</Link>
          <div className="article-page-header">
            <div className="article-page-tag">{article.meta.category}</div>
            <h1>{article.meta.title}</h1>
            <div className="article-page-meta">
              Par <Link href="/apropos" style={{ color: "#f86613" }}>{AUTEUR}</Link>
              {" · "}{article.meta.date} · {article.meta.readTime} de lecture
            </div>
          </div>
          {article.meta.image && (
            <div
              className="article-page-img"
              style={{ position: "relative", width: "100%", height: "400px", marginBottom: "24px" }}
            >
              <Image
                src={article.meta.image}
                alt={article.meta.title}
                fill
                sizes="(max-width: 900px) 100vw, 800px"
                priority
                style={{ objectFit: "cover", borderRadius: "8px" }}
              />
            </div>
          )}
          <div className="article-page-content">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>

          {/* Encart auteur — signal E-E-A-T sur thématique santé */}
          <aside
            style={{
              marginTop: "48px",
              padding: "24px",
              background: "#faf5f0",
              border: "1px solid #f2e4d8",
              borderRadius: "12px",
            }}
          >
            <p style={{ margin: "0 0 8px", fontSize: "14px", color: "#333" }}>
              <strong>Écrit par {AUTEUR}</strong>
            </p>
            <p style={{ margin: 0, fontSize: "14px", color: "#666", lineHeight: 1.6 }}>
              Je ne suis ni coach ni professionnel de santé. Tout ce que je partage ici a été testé
              par moi, sur plusieurs années.{" "}
              <Link href="/apropos" style={{ color: "#f86613" }}>En savoir plus sur la démarche</Link>.
            </p>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}