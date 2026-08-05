/**
 * Limiteur de débit en mémoire — sans dépendance ni service externe.
 *
 * Limite : la mémoire n'est pas partagée entre instances serverless, donc un
 * attaquant distribué peut passer entre les mailles. Ça suffit largement à
 * bloquer le scénario réel : un bot qui martèle le formulaire et fait exploser
 * le quota SMTP.
 */

type Hit = { count: number; resetAt: number };

const buckets = new Map<string, Hit>();

/**
 * @param key      identifiant (IP, email…)
 * @param limit    nombre de tentatives autorisées dans la fenêtre
 * @param windowMs durée de la fenêtre en millisecondes
 * @returns true si la requête est autorisée, false si la limite est atteinte
 */
export function rateLimit(key: string, limit: number, windowMs: number): boolean {
  const now = Date.now();
  const hit = buckets.get(key);

  if (!hit || now > hit.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (hit.count >= limit) return false;

  hit.count += 1;
  return true;
}

/** Récupère l'IP du client derrière un proxy (Vercel, Cloudflare, nginx). */
export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

/** Purge périodique pour éviter que la Map ne grossisse indéfiniment. */
setInterval(() => {
  const now = Date.now();
  for (const [key, hit] of buckets) {
    if (now > hit.resetAt) buckets.delete(key);
  }
}, 10 * 60 * 1000).unref?.();
