import { NextResponse } from "next/server";
import { supabaseAdmin } from "../../../lib/supabase-admin";

/**
 * Route de maintien en vie : une requête légère sur la base suffit à empêcher
 * la mise en pause automatique du projet Supabase (plan gratuit).
 * Appelée une fois par jour par le cron Vercel (voir vercel.json).
 */
export const dynamic = "force-dynamic";

export async function GET() {
  const start = Date.now();

  const { error } = await supabaseAdmin
    .from("subscribers")
    .select("id", { count: "exact", head: true });

  if (error) {
    console.error("[health] Base injoignable :", error.message);
    return NextResponse.json(
      { ok: false, db: "unreachable", error: error.message },
      { status: 503 }
    );
  }

  return NextResponse.json({ ok: true, db: "up", ms: Date.now() - start });
}