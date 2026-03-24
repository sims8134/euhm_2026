import { NextResponse } from "next/server";
import { sendEmail } from "../../../lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { prenom, nom, email, sujet, message, honeypot } = body;

    if (honeypot) {
      return NextResponse.json({ ok: true });
    }

    if (!prenom || !email || !message) {
      return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ ok: false, error: "email_invalid" }, { status: 400 });
    }

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:600px;">
        <h2 style="color:#f86613;">Nouveau message — EUHM.fr</h2>
        <p><strong>Prénom :</strong> ${prenom}</p>
        <p><strong>Nom :</strong> ${nom || "—"}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Sujet :</strong> ${sujet || "—"}</p>
        <hr style="border:none;border-top:1px solid #ddd;margin:16px 0;" />
        <p><strong>Message :</strong></p>
        <p style="white-space:pre-wrap;">${message}</p>
      </div>
    `;

    await sendEmail({
      to: process.env.CONTACT_TO || "contact@euhm.fr",
      subject: `[EUHM] ${sujet || "Message"} — ${prenom} ${nom || ""}`,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact error:", error);
    return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 });
  }
}