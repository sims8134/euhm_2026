"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const CATEGORIES = ["Tous", "Sport", "Santé", "Alimentation", "Psychologie", "Écologie", "Vie de couple", "Développement Personnel"];

export default function ArticlesClient({ articles }: { articles: any[] }) {
  const [active, setActive] = useState("Tous");

  const filtered = active === "Tous" ? articles : articles.filter(a => a.meta?.category === active);

  return (
    <>
      <div className="filtres">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            className={`filtre-btn${active === cat ? " actif" : ""}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="articles-grid">
        {filtered.map((a) => (
          <div className="article-card" key={a.slug}>
            <div className="article-card-img" style={{ position: "relative", overflow: "hidden" }}>
              {a.meta?.image || a.image ? (
                <Image
                  src={a.meta?.image || a.image}
                  alt={a.meta?.title || a.title}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 1100px) 50vw, 400px"
                  style={{ objectFit: "cover" }}
                />
              ) : (
                <span>{a.emoji || "📄"}</span>
              )}
            </div>
            <div className="article-card-body">
              <div className="article-tag">{a.meta?.category}</div>
              <h2>{a.meta?.title}</h2>
              <p>{a.meta?.description}</p>
              <div className="article-meta">{a.meta?.date} · {a.meta?.readTime} de lecture</div>
              <Link href={a.slug === "#" ? "#" : `/articles/${a.slug}`} className="btn">Lire l&#39;article</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}