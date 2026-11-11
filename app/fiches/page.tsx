import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getAllFichesPages } from "../../lib/fiches";
import { pageOpenGraph } from "../../lib/seo";
import { formatDateFr, isoDate } from "../../lib/dates";
import { typo } from "../../lib/typo";

const TITLE = "Fiches : un conseil concret par jour";
const DESCRIPTION =
  "Les fiches EUHM : un conseil concret et sourcé par fiche, en sport, alimentation, sommeil, psychologie et écologie. Les mêmes que sur Instagram et Facebook.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/fiches" },
  openGraph: pageOpenGraph({ title: TITLE, description: DESCRIPTION, url: "/fiches" }),
};

export default function FichesPage() {
  const fiches = getAllFichesPages();

  return (
    <>
      <Header title="Fiches" />
      <main>
        <section className="fiches-section">
          <h1>{typo(TITLE)}</h1>
          <p className="intro">
            Chaque fiche tient en quelques minutes de lecture : un conseil précis, ce qu’il faut
            faire, et les sources sur lesquelles il s’appuie.
          </p>

          {fiches.length === 0 ? (
            <p className="fiches-empty">Les premières fiches arrivent très bientôt.</p>
          ) : (
            <ul className="fiches-grid">
              {fiches.map((f) => (
                <li key={f.slug}>
                  <Link href={`/fiches/${f.slug}`} className="fiche-card">
                    <Image
                      src={f.cover.src}
                      alt=""
                      width={f.cover.width}
                      height={f.cover.height}
                      sizes="(max-width: 600px) 100vw, (max-width: 1100px) 50vw, 380px"
                      loading="lazy"
                    />
                    <div className="fiche-card-body">
                      {f.serie && <p className="article-tag">{f.serie}</p>}
                      <h2 className="fiche-card-title">{typo(f.title)}</h2>
                      <time dateTime={isoDate(f.date)}>{formatDateFr(f.date)}</time>
                      <p className="fiche-card-desc">{f.description}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
