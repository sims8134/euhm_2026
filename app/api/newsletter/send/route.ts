import { NextResponse } from "next/server";
import { timingSafeEqual } from "crypto";
import { supabaseAdmin } from "../../../../lib/supabase-admin";
import { sendEmail } from "../../../../lib/email";
import { getNewsletterEmail } from "../../../../lib/newsletter-emails";

const SEND_SECRET = process.env.NEWSLETTER_SEND_SECRET;

/** Nombre d'envois par appel : au-delà, on renvoie un curseur pour relancer. */
const LOT = 40;
/** Pause entre deux envois, pour ne pas saturer le serveur SMTP. */
const PAUSE_MS = 400;

/** Laisse le temps à la fonction de terminer ses envois (Vercel Pro et au-delà). */
export const maxDuration = 60;

function comparerSecret(fourni: string, attendu: string): boolean {
  const a = Buffer.from(fourni);
  const b = Buffer.from(attendu);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

const attendre = (ms: number) => new Promise((r) => setTimeout(r, ms));

export async function POST(request: Request) {
  try {
    const authHeader = request.headers.get("authorization") ?? "";
    if (!SEND_SECRET || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
    }
    if (!comparerSecret(authHeader.slice(7), SEND_SECRET)) {
      return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
    }

    const { title, description, slug, image, apres } = await request.json();

    if (!title || !slug) {
      return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
    }

    // Pagination par email croissant : « apres » est le dernier email traité au
    // tour précédent. Permet de reprendre sans jamais renvoyer deux fois.
    let requete = supabaseAdmin
      .from("subscribers")
      .select("email, unsub_token")
      .eq("site", "euhm")
      .eq("confirmed", true)
      .order("email", { ascending: true })
      .limit(LOT);

    if (typeof apres === "string" && apres) {
      requete = requete.gt("email", apres);
    }

    const { data: subscribers, error } = await requete;

    if (error) {
      console.error("[send] Lecture impossible :", error.message);
      return NextResponse.json({ ok: false, error: "db_error" }, { status: 500 });
    }

    if (!subscribers || subscribers.length === 0) {
      return NextResponse.json({ ok: true, envoyes: 0, termine: true });
    }

    let envoyes = 0;
    const echecs: string[] = [];
    let dernier = "";

    for (const sub of subscribers) {
      dernier = sub.email;
      try {
        const { subject, html } = getNewsletterEmail(
          { title, description, slug, image },
          sub.unsub_token
        );
        await sendEmail({ to: sub.email, subject, html });
        envoyes++;
      } catch (e) {
        // Un destinataire en échec ne doit jamais interrompre la campagne.
        console.error(`[send] Échec pour ${sub.email} :`, e);
        echecs.push(sub.email);
      }
      await attendre(PAUSE_MS);
    }

    const termine = subscribers.length < LOT;

    console.log(
      `[send] Lot terminé : ${envoyes} envoyés, ${echecs.length} échecs, ` +
        (termine ? "campagne terminée." : `reprendre avec apres="${dernier}"`)
    );

    return NextResponse.json({
      ok: true,
      envoyes,
      echecs,
      termine,
      // À repasser tel quel dans le prochain appel si termine vaut false.
      apres: termine ? null : dernier,
    });
  } catch (error) {
    console.error("[send] Erreur :", error);
    return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 });
  }
}