/**
 * Vérification côté serveur d'un jeton Cloudflare Turnstile.
 *
 * Si TURNSTILE_SECRET_KEY n'est pas défini, la vérification est ignorée
 * (utile en développement local). Un avertissement est journalisé.
 */
const SECRET = process.env.TURNSTILE_SECRET_KEY;
const ENDPOINT = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export async function verifierTurnstile(token: unknown, ip?: string): Promise<boolean> {
  if (!SECRET) {
    console.warn("[turnstile] TURNSTILE_SECRET_KEY absent — vérification ignorée.");
    return true;
  }

  if (!token || typeof token !== "string") {
    console.warn("[turnstile] Jeton absent dans la requête.");
    return false;
  }

  try {
    const body = new URLSearchParams({ secret: SECRET, response: token });
    if (ip) body.append("remoteip", ip);

    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });

    const data = (await res.json()) as { success: boolean; "error-codes"?: string[] };

    if (!data.success) {
      console.warn("[turnstile] Échec de vérification :", data["error-codes"]?.join(", "));
    }
    return data.success === true;
  } catch (e) {
    console.error("[turnstile] Erreur de vérification :", e);
    // On refuse plutôt que de laisser passer en cas de panne réseau.
    return false;
  }
}
