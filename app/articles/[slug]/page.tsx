import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
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
  return { title: article.meta.title, description: article.meta.description };
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
            <div className="article-page-img">
              <img
                src={article.meta.image}
                alt={article.meta.title}
                style={{width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '8px', marginBottom: '24px'}}
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