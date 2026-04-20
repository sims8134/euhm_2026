import { NextResponse } from "next/server";
import { supabaseAdmin } from "../../../../lib/supabase-admin";
import { sendEmail } from "../../../../lib/email";
import { getNewsletterEmail } from "../../../../lib/newsletter-emails";

const SEND_SECRET = process.env.NEWSLETTER_SEND_SECRET;

export async function POST(request: Request) {
  try {
    const authHeader = request.headers.get("authorization");
    if (!SEND_SECRET || authHeader !== `Bearer ${SEND_SECRET}`) {
      return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
    }

    const { title, description, slug, image } = await request.json();

    if (!title || !slug) {
      return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
    }

    const { data: subscribers } = await supabaseAdmin
      .from("subscribers")
      .select("email, unsub_token")
      .eq("site", "euhm")
      .eq("confirmed", true);

    if (!subscribers || subscribers.length === 0) {
      return NextResponse.json({ ok: true, sent: 0 });
    }

    let sent = 0;
    for (const sub of subscribers) {
      const { subject, html } = getNewsletterEmail(
        { title, description, slug, image },
        sub.unsub_token
      );
      await sendEmail({ to: sub.email, subject, html });
      sent++;
    }

    return NextResponse.json({ ok: true, sent });
  } catch (error) {
    console.error("Send newsletter error:", error);
    return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 });
  }
}