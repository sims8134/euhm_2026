import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { getArticleBySlug, getAllArticles } from "../../../lib/mdx";

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

  return (
    <>
      <Header title={article.meta.title} />
      <main>
        <div className="article-page">
          <Link href="/articles" className="article-back">← Retour aux articles</Link>
          <div className="article-page-header">
            <div className="article-page-tag">{article.meta.category}</div>
            <h1>{article.meta.title}</h1>
            <div className="article-page-meta">{article.meta.date} · {article.meta.readTime} de lecture</div>
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
        </div>
      </main>
      <Footer />
    </>
  );
}