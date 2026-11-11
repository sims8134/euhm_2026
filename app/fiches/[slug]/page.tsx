import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ShareButtons from "../../../components/ShareButtons";
import FollowBlock from "../../../components/FollowBlock";
import Byline from "../../../components/Byline";
import AuthorBox from "../../../components/AuthorBox";
import FicheCarousel from "../../../components/FicheCarousel";
import { getAllFichesPages, getFicheBySlug, getRelated } from "../../../lib/fiches";
import { BASE_URL, SITE_NAME, articleJsonLd } from "../../../lib/seo";
import { formatDateFr, isoDate } from "../../../lib/dates";
import { typo } from "../../../lib/typo";

export async function generateStaticParams() {
  return getAllFichesPages().map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const fiche = getFicheBySlug(slug);
  if (!fiche) return {};
  const { meta } = fiche;
  const url = `/fiches/${slug}`;

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: url },
    openGraph: {
      // siteName et locale ne sont pas hérités du layout : Next.js remplace le bloc openGraph en entier.
      siteName: SITE_NAME,
      locale: "fr_FR",
      type: "article",
      url,
      title: meta.title,
      description: meta.description,
      publishedTime: meta.date,
      images: [{ url: meta.cover.src, width: meta.cover.width, height: meta.cover.height, alt: meta.title }],
    },
  };
}

export default async function FichePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const fiche = getFicheBySlug(slug);
  if (!fiche) notFound();
  const { meta } = fiche;
  const related = getRelated(meta);

  const jsonLd = articleJsonLd({
    headline: meta.title,
    description: meta.description,
    datePublished: meta.date,
    path: `/fiches/${slug}`,
    image: meta.cover.src,
    section: meta.serie || undefined,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header title={meta.title} heroCompact />
      <main>
        <article className="article-page fiche-page">
          <Link href="/fiches" className="article-back">← Retour aux fiches</Link>

          <figure className="fiche-cover">
            <Image
              src={meta.cover.src}
              alt={meta.title}
              width={meta.cover.width}
              height={meta.cover.height}
              sizes="(max-width: 900px) 100vw, 800px"
              priority
            />
          </figure>

          <div className="article-page-header">
            {meta.serie && <div className="article-page-tag">{meta.serie}</div>}
            <h1>{typo(meta.title)}</h1>
            <Byline date={meta.date} />
          </div>

          {meta.slides.length > 0 && <FicheCarousel slides={meta.slides} title={meta.title} />}

          <div className="article-page-content">
            <div dangerouslySetInnerHTML={{ __html: fiche.content }} />
          </div>

          {fiche.sources && (
            <section className="fiche-sources" aria-labelledby="fiche-sources-titre">
              <h2 id="fiche-sources-titre">Sources</h2>
              <div dangerouslySetInnerHTML={{ __html: fiche.sources }} />
            </section>
          )}

          <ShareButtons url={`${BASE_URL}/fiches/${slug}`} title={meta.title} />
          <FollowBlock />
          <AuthorBox />

          {related.length > 0 && (
            <section className="related" aria-labelledby="related-titre">
              <h2 id="related-titre">À lire aussi</h2>
              <ul className="related-list">
                {related.map((r) => (
                  <li key={r.href}>
                    <Link href={r.href} className="related-item">
                      {r.image && (
                        <Image src={r.image} alt="" width={120} height={63} sizes="120px" loading="lazy" />
                      )}
                      <span>
                        <span className="related-kind">{r.kind}</span>
                        <span className="related-title">{typo(r.title)}</span>
                        <time dateTime={isoDate(r.date)}>{formatDateFr(r.date)}</time>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
