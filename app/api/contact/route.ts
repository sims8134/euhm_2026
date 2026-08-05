import { NextResponse } from "next/server";
import { sendEmail } from "../../../lib/email";
import { rateLimit, getClientIp } from "../../../lib/rate-limit";
import { verifierTurnstile } from "../../../lib/turnstile";

// 3 messages par IP et par heure : largement suffisant pour un usage normal.
const IP_LIMIT = 3;
const WINDOW = 60 * 60 * 1000;

// Longueurs maximales, pour éviter les envois massifs via un seul formulaire.
const MAX_COURT = 120;
const MAX_MESSAGE = 5000;

/** Échappe les caractères HTML : le contenu du formulaire ne doit jamais
 *  être interprété comme du balisage dans l'email reçu. */
function echapper(valeur: unknown): string {
  return String(valeur ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Supprime les retours à la ligne : évite l'injection d'en-têtes dans le sujet. */
function nettoyerSujet(valeur: unknown): string {
  return String(valeur ?? "").replace(/[\r\n]+/g, " ").slice(0, MAX_COURT).trim();
}

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    if (!rateLimit(`contact:${ip}`, IP_LIMIT, WINDOW)) {
      console.warn(`[contact] Limite atteinte pour l'IP ${ip}`);
      return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
    }

    const body = await request.json();
    const { prenom, nom, email, sujet, message, honeypot, captcha } = body;

    if (honeypot) {
      return NextResponse.json({ ok: true });
    }

    // Vérification anti-robot avant tout envoi d'email.
    const humain = await verifierTurnstile(captcha, ip);
    if (!humain) {
      return NextResponse.json({ ok: false, error: "captcha_failed" }, { status: 403 });
    }

    if (!prenom || !email || !message) {
      return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (typeof email !== "string" || !emailRegex.test(email)) {
      return NextResponse.json({ ok: false, error: "email_invalid" }, { status: 400 });
    }

    if (String(message).length > MAX_MESSAGE) {
      return NextResponse.json({ ok: false, error: "message_too_long" }, { status: 400 });
    }

    const prenomSafe = echapper(String(prenom).slice(0, MAX_COURT));
    const nomSafe = echapper(String(nom ?? "").slice(0, MAX_COURT)) || "—";
    const emailSafe = echapper(String(email).slice(0, MAX_COURT));
    const sujetPropre = nettoyerSujet(sujet);
    const sujetSafe = echapper(sujetPropre) || "—";
    const messageSafe = echapper(String(message));

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:600px;">
        <h2 style="color:#f86613;">Nouveau message — EUHM.fr</h2>
        <p><strong>Prénom :</strong> ${prenomSafe}</p>
        <p><strong>Nom :</strong> ${nomSafe}</p>
        <p><strong>Email :</strong> ${emailSafe}</p>
        <p><strong>Sujet :</strong> ${sujetSafe}</p>
        <hr style="border:none;border-top:1px solid #ddd;margin:16px 0;" />
        <p><strong>Message :</strong></p>
        <p style="white-space:pre-wrap;">${messageSafe}</p>
      </div>
    `;

    await sendEmail({
      to: process.env.CONTACT_TO || "contact@euhm.fr",
      subject: `[EUHM] ${sujetPropre || "Message"} — ${String(prenom).slice(0, 40)}`,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact] Erreur :", error);
    return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 });
  }
}