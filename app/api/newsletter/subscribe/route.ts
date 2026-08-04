import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { supabaseAdmin } from "../../../../lib/supabase-admin";
import { sendEmail } from "../../../../lib/email";
import { getConfirmationEmail } from "../../../../lib/newsletter-emails";

const SITE = "euhm";

/**
 * Filet de sécurité : si la base est injoignable (projet Supabase en pause,
 * panne réseau), l'adresse est envoyée par mail à l'admin au lieu d'être perdue.
 * Retourne true si le repli a fonctionné.
 */
async function fallbackToAdmin(email: string, source: string, reason: string) {
  const admin = process.env.ADMIN_EMAIL || process.env.SMTP_FROM;
  if (!admin) return false;

  try {
    await sendEmail({
      to: admin,
      subject: "[EUHM] Inscription à récupérer manuellement",
      html: `
        <p>La base est injoignable, une inscription n'a pas pu être enregistrée.</p>
        <ul>
          <li><strong>Adresse :</strong> ${email}</li>
          <li><strong>Source :</strong> ${source}</li>
          <li><strong>Date :</strong> ${new Date().toISOString()}</li>
          <li><strong>Motif :</strong> ${reason}</li>
        </ul>
        <p>À ajouter à la main dans la table subscribers une fois la base rétablie.</p>
      `,
    });
    return true;
  } catch (e) {
    console.error("[subscribe] Repli admin impossible :", e);
    return false;
  }
}

export async function POST(request: Request) {
  let trimmedEmail = "";
  let source = "newsletter";

  try {
    const body = await request.json();
    const { email, honeypot } = body;
    source = typeof body.source === "string" ? body.source.slice(0, 60) : "newsletter";

    if (honeypot) return NextResponse.json({ ok: true });

    if (!email || typeof email !== "string") {
      return NextResponse.json({ ok: false, error: "email_required" }, { status: 400 });
    }

    trimmedEmail = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return NextResponse.json({ ok: false, error: "email_invalid" }, { status: 400 });
    }

    const { data: existing } = await supabaseAdmin
      .from("subscribers")
      .select("id, confirmed")
      .eq("email", trimmedEmail)
      .eq("site", SITE)
      .single();

    if (existing?.confirmed) {
      return NextResponse.json({ ok: false, error: "already_subscribed" }, { status: 409 });
    }

    const confirmToken = randomUUID();
    const unsubToken = randomUUID();

    if (existing && !existing.confirmed) {
      await supabaseAdmin
        .from("subscribers")
        .update({ confirm_token: confirmToken, lang: "fr" })
        .eq("id", existing.id);
    } else {
      const { error: insertError } = await supabaseAdmin
        .from("subscribers")
        .insert({
          email: trimmedEmail,
          lang: "fr",
          site: SITE,
          confirmed: false,
          confirm_token: confirmToken,
          unsub_token: unsubToken,
          source,
        });

      if (insertError) {
        console.error("[subscribe] Insert error:", insertError);
        const saved = await fallbackToAdmin(trimmedEmail, source, insertError.message ?? "insert_error");
        if (saved) return NextResponse.json({ ok: true, fallback: true });
        return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 });
      }
    }

    const { subject, html } = getConfirmationEmail(confirmToken);
    await sendEmail({ to: trimmedEmail, subject, html });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[subscribe] Erreur:", error);

    if (trimmedEmail) {
      const saved = await fallbackToAdmin(
        trimmedEmail,
        source,
        error instanceof Error ? error.message : "unknown"
      );
      if (saved) return NextResponse.json({ ok: true, fallback: true });
    }

    return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 });
  }
}