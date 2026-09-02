/** Formatage des dates d'article, en français, sans dépendance externe. */

const FORMAT = new Intl.DateTimeFormat("fr-FR", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC", // les dates du frontmatter sont des jours, pas des instants
});

/**
 * "2026-09-01" -> "1er septembre 2026".
 * Renvoie la chaîne d'origine si elle n'est pas une date exploitable, pour ne
 * jamais casser l'affichage d'un article dont le frontmatter serait incomplet.
 */
export function formatDateFr(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (isNaN(d.getTime())) return iso;
  const texte = FORMAT.format(d);
  // En français, le premier du mois s'écrit « 1er ».
  return texte.replace(/^1 /, "1er ");
}

/** Valeur de l'attribut `datetime` : la date ISO seule (AAAA-MM-JJ). */
export function isoDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (isNaN(d.getTime())) return "";
  return d.toISOString().slice(0, 10);
}
