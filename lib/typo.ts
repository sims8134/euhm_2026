/**
 * Typographie des titres.
 *
 * Dans la police des titres (Borsok), le glyphe de l'apostrophe droite (U+0027)
 * est le même dessin que la virgule, posé sur la ligne de base : « CE N'EST »
 * s'affiche « CE N,EST ». L'apostrophe typographique (U+2019) est, elle, bien
 * dessinée. On convertit donc l'une en l'autre dans tous les titres.
 */
export function typo(text: string): string {
  return text.replace(/'/g, "’");
}

/** Même conversion, appliquée au texte des balises <h1> à <h6> d'un HTML généré. */
export function typoHeadings(html: string): string {
  return html.replace(
    /<(h[1-6])(\s[^>]*)?>([\s\S]*?)<\/\1>/g,
    (_m, tag: string, attrs: string | undefined, inner: string) =>
      `<${tag}${attrs ?? ""}>${inner
        // apostrophes dans le texte uniquement, pas dans les attributs d'éventuelles balises internes
        .split(/(<[^>]+>)/)
        .map((part) => (part.startsWith("<") ? part : part.replace(/&#39;|&apos;|'/g, "’")))
        .join("")}</${tag}>`
  );
}
