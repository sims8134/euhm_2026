import { NextResponse } from "next/server";
import { supabaseAdmin } from "../../../../lib/supabase-admin";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");

  if (!token) return NextResponse.redirect(new URL("/", request.url));

  const { data: subscriber, error } = await supabaseAdmin
    .from("subscribers")
    .select("id, confirmed")
    .eq("confirm_token", token)
    .single();

  if (error || !subscriber) return NextResponse.redirect(new URL("/", request.url));

  if (!subscriber.confirmed) {
    await supabaseAdmin
      .from("subscribers")
      .update({ confirmed: true, confirm_token: null, confirmed_at: new Date().toISOString() })
      .eq("id", subscriber.id);
  }

  return NextResponse.redirect(new URL("/newsletter-confirmed", request.url));
}