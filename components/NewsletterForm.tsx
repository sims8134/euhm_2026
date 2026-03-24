"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState("idle" as "idle" | "loading" | "success" | "error" | "already");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const trimmed = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmed || !emailRegex.test(trimmed)) {
      setStatus("error");
      setErrorMsg("Veuillez entrer une adresse e-mail valide.");
      return;
    }

    try {
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed, honeypot }),
      });

      const data = await res.json();

      if (data.ok) {
        setStatus("success");
        setEmail("");
      } else if (data.error === "already_subscribed") {
        setStatus("already");
      } else {
        setStatus("error");
        setErrorMsg("Une erreur est survenue. Veuillez réessayer.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Une erreur est survenue. Veuillez réessayer.");
    }
  }

  if (status === "success") {
    return (
      <div style={{ textAlign: "center", padding: "16px 0" }}>
        <p style={{ color: "#22c55e", fontSize: "14px" }}>Vérifiez votre boîte mail pour confirmer votre inscription. Pensez à vérifier vos spams.</p>
      </div>
    );
  }

  if (status === "already") {
    return (
      <div style={{ textAlign: "center", padding: "16px 0" }}>
        <p style={{ color: "#eab308", fontSize: "14px" }}>Cette adresse est déjà inscrite.</p>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: "8px", maxWidth: "480px", margin: "0 auto" }}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Votre adresse e-mail"
          required
          style={{ flex: 1, padding: "12px 16px", border: "1px solid #e2e0d8", borderRadius: "6px", fontSize: "14px", outline: "none", background: "#fff", color: "#333" }}
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
          style={{ padding: "12px 24px", background: "#f86613", color: "white", border: "none", borderRadius: "6px", fontSize: "14px", fontWeight: 600, cursor: "pointer", opacity: status === "loading" ? 0.6 : 1, whiteSpace: "nowrap" }}
        >
          {status === "loading" ? "Envoi..." : "S'inscrire"}
        </button>
      </form>
      {status === "error" && errorMsg && (
        <p style={{ color: "#ef4444", fontSize: "12px", marginTop: "8px", textAlign: "center" }}>{errorMsg}</p>
      )}
    </div>
  );
}