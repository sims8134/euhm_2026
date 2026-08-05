import { NextResponse } from "next/server";
import { supabaseAdmin } from "../../../../lib/supabase-admin";
import { rateLimit, getClientIp } from "../../../../lib/rate-limit";

/** 20 tentatives par IP et par heure : un visiteur légitime clique une fois. */
const LIMIT = 20;
const WINDOW = 60 * 60 * 1000;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");

  if (!token) return NextResponse.redirect(new URL("/", request.url));

  const ip = getClientIp(request);
  if (!rateLimit(`confirm:${ip}`, LIMIT, WINDOW)) {
    console.warn(`[confirm] Limite atteinte pour l'IP ${ip}`);
    return NextResponse.redirect(new URL("/", request.url));
  }

  const { data: subscriber, error } = await supabaseAdmin
    .from("subscribers")
    .select("id, confirmed")
    .eq("confirm_token", token)
    .eq("site", "euhm")
    .single();

  if (error || !subscriber) return NextResponse.redirect(new URL("/", request.url));

  if (!subscriber.confirmed) {
    const { error: majError } = await supabaseAdmin
      .from("subscribers")
      .update({ confirmed: true, confirm_token: null, confirmed_at: new Date().toISOString() })
      .eq("id", subscriber.id);

    if (majError) {
      console.error("[confirm] Mise à jour impossible :", majError.message);
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.redirect(new URL("/newsletter-confirmed", request.url));
}