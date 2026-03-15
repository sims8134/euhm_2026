"use client";
import { useState } from "react";
import Link from "next/link";

const CATEGORIES = ["Tous", "Sport", "Alimentation", "Psychologie", "Écologie", "Vie de couple"];

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
        {filtered.map((a, i) => (
          <div className="article-card" key={i}>
            <div className="article-card-img">{a.emoji || "📄"}</div>
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