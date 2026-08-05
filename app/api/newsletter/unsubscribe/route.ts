import { NextResponse } from "next/server";
import { supabaseAdmin } from "../../../../lib/supabase-admin";
import { rateLimit, getClientIp } from "../../../../lib/rate-limit";

const LIMIT = 20;
const WINDOW = 60 * 60 * 1000;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");

  if (!token) return NextResponse.redirect(new URL("/", request.url));

  const ip = getClientIp(request);
  if (!rateLimit(`unsub:${ip}`, LIMIT, WINDOW)) {
    console.warn(`[unsubscribe] Limite atteinte pour l'IP ${ip}`);
    return NextResponse.redirect(new URL("/", request.url));
  }

  const { data: subscriber, error } = await supabaseAdmin
    .from("subscribers")
    .select("id")
    .eq("unsub_token", token)
    .eq("site", "euhm")
    .single();

  // Jeton inconnu : on redirige quand même vers la page de confirmation.
  // Une adresse déjà désinscrite ne doit pas voir un message d'erreur.
  if (error || !subscriber) {
    return NextResponse.redirect(new URL("/newsletter-unsubscribed", request.url));
  }

  const { error: suppressionError } = await supabaseAdmin
    .from("subscribers")
    .delete()
    .eq("id", subscriber.id);

  if (suppressionError) {
    console.error("[unsubscribe] Suppression impossible :", suppressionError.message);
  }

  return NextResponse.redirect(new URL("/newsletter-unsubscribed", request.url));
}