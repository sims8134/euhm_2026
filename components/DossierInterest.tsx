"use client";

import { useState } from "react";

type Props = {
  /** Slug du dossier — sert à identifier la demande dans Supabase. */
  slug: string;
  /** Libellé du bouton fermé. */
  label?: string;
};

export default function DossierInterest({ slug, label = "Ça m'intéresse" }: Props) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState("idle" as "idle" | "loading" | "success" | "error" | "already");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    const trimmed = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmed || !emailRegex.test(trimmed)) {
      setStatus("error");
      return;
    }

    try {
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed, honeypot, source: `dossier-${slug}` }),
      });
      const data = await res.json();

      if (data.ok) {
        setStatus("success");
        setEmail("");
      } else if (data.error === "already_subscribed") {
        setStatus("already");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p style={{ color: "#22c55e", fontSize: "13px", margin: "8px 0 0" }}>
        C&#39;est noté — confirmez votre adresse dans le mail que vous venez de recevoir.
      </p>
    );
  }

  if (status === "already") {
    return (
      <p style={{ color: "#eab308", fontSize: "13px", margin: "8px 0 0" }}>
        Vous êtes déjà inscrit — votre vote est pris en compte.
      </p>
    );
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="btn"
        style={{ border: "none", cursor: "pointer", font: "inherit" }}
      >
        {label}
      </button>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "4px" }}>
      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Votre e-mail"
          required
          autoFocus
          style={{
            flex: "1 1 160px",
            minWidth: 0,
            padding: "10px 12px",
            border: "1px solid #e2e0d8",
            borderRadius: "6px",
            fontSize: "13px",
            outline: "none",
            background: "#fff",
            color: "#333",
          }}
        />
        <input
          type="text"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          style={{ position: "absolute", left: "-9999px", opacity: 0 }}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          style={{
            padding: "10px 16px",
            background: "#f86613",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "13px",
            fontWeight: 600,
            cursor: "pointer",
            opacity: status === "loading" ? 0.6 : 1,
            whiteSpace: "nowrap",
          }}
        >
          {status === "loading" ? "..." : "Valider"}
        </button>
      </div>
      {status === "error" && (
        <p style={{ color: "#ef4444", fontSize: "12px", margin: "6px 0 0" }}>
          Adresse invalide ou erreur — réessayez.
        </p>
      )}
    </form>
  );
}