# Fiches : format d'import et publication

Une fiche est une page courte du site, à l'adresse `/fiches/<slug>`, souvent accompagnée du carrousel publié sur Instagram et Facebook. Elle est listée dans la rubrique `/fiches` (menu « Fiches »), de la plus récente à la plus ancienne.

## 1. Préparer le dossier de la fiche

Un dossier par fiche, où vous voulez sur votre ordinateur :

```
ma-fiche/
  fiche.md        obligatoire
  cover.webp      obligatoire, 1200 x 630 px
  slides/         facultatif : 01.webp, 02.webp, 03.webp, ...
```

### fiche.md

En-tête YAML, puis le corps en Markdown :

```markdown
---
title: "L'heure du dernier café"
date: 2026-11-12
slug: heure-du-dernier-cafe
lang: fr
serie: Santé
description: "Pourquoi le dernier café compte pour le sommeil, et à quelle heure le placer."
---

Texte d'introduction.

## Une section

Texte, listes, **gras**, liens, et tableaux :

| Coucher | Dernier café |
|---|---|
| 23 h | 15 h |

## Sources

- Auteur, « Titre de l'étude », revue, année : https://adresse-de-la-source
- [Nom de la source](https://adresse-de-la-source)
```

| Champ | Règle |
|---|---|
| `title` | Titre de la fiche (H1 de la page, titre de partage). Les apostrophes sont converties automatiquement dans les titres. |
| `date` | Format `AAAA-MM-JJ`. La fiche n'apparaît sur le site qu'à partir de cette date : une date future programme la publication. |
| `slug` | Adresse de la page : minuscules sans accent, chiffres et tirets (`heure-du-dernier-cafe`). Refusé s'il se termine par `.pdf` ou s'il porte le nom d'un fichier de `public/fiches/` (les PDF à imprimer). |
| `lang` | Toujours `fr`. |
| `serie` | Thème de la fiche (`Santé`, `Sport`, `Alimentation`...). Sert d'étiquette et au bloc « À lire aussi ». |
| `description` | Une ou deux phrases : texte des cartes, description pour Google et pour l'aperçu de partage. |

Corps :

- Pas de titre `#` : le H1 est le titre de la fiche. Les sections commencent à `##`.
- La section `## Sources` est obligatoire et doit être la **dernière** du fichier. Elle est affichée à part, sous le corps ; ses liens s'ouvrent dans un nouvel onglet. Une adresse écrite seule (`https://...`) devient un lien automatiquement.
- Les tableaux défilent dans leur cadre sur mobile.
- Charte du site : pas de tiret long ni de tiret moyen (le script prévient s'il en trouve).

### Images

- `cover.webp` : exactement 1200 x 630 px, au format WebP. Image d'en-tête de la page, vignette de la carte et image de partage (Open Graph).
- `slides/` : les images du carrousel, au format WebP, numérotées sur deux chiffres sans trou (`01.webp`, `02.webp`...). Toutes les tailles sont acceptées ; garder la même taille pour toutes (1080 x 1350 px pour un carrousel Instagram). Sans dossier `slides/`, la page n'a pas de galerie.

## 2. Importer la fiche

À la racine du projet :

```bash
# vérifier le dossier sans rien écrire
npm run import-fiche -- "C:/chemin/vers/ma-fiche" --check

# importer
npm run import-fiche -- "C:/chemin/vers/ma-fiche"

# remplacer une fiche déjà importée (même slug)
npm run import-fiche -- "C:/chemin/vers/ma-fiche" --force
```

Le script ([scripts/import-fiche.mjs](scripts/import-fiche.mjs)) vérifie tous les points ci-dessus, refuse l'import en listant les erreurs s'il y en a, puis écrit :

| Fichier créé | Contenu |
|---|---|
| `content/fiches/<slug>/fiche.md` | copie de votre fichier |
| `content/fiches/<slug>/images.json` | chemins et dimensions des images (pour `width` et `height`) |
| `public/img/fiches/<slug>/cover.webp` | couverture ré-encodée, métadonnées retirées (EXIF, GPS) |
| `public/img/fiches/<slug>/slides/NN.webp` | slides ré-encodées, métadonnées retirées |

Il n'utilise que des outils déjà présents : `gray-matter` (dépendance du site) et `sharp` (fourni avec Next.js).

## 3. Vérifier et publier

```bash
npm run dev          # http://localhost:3000/fiches/<slug> (les fiches à date future sont visibles en local)
npm run build        # doit se terminer sans erreur
git add content/fiches/<slug> public/img/fiches/<slug>
git commit -m "fiche: <titre>"
git push origin main # Vercel publie automatiquement
```

La page, la rubrique, le menu et le sitemap se mettent à jour seuls.

## 4. Modifier ou retirer une fiche

- **Modifier le texte** : éditer `content/fiches/<slug>/fiche.md`, ou corriger le dossier source puis relancer l'import avec `--force`.
- **Changer une image** : corriger le dossier source puis relancer l'import avec `--force` (les dimensions sont recalculées).
- **Retirer une fiche** : supprimer `content/fiches/<slug>/` et `public/img/fiches/<slug>/`, puis commit et push.

## 5. Ce qu'affiche la page

Dans l'ordre : image d'en-tête, titre (H1) et ligne « Par Simon » avec la date, galerie du carrousel (si `slides/` existe), corps, sources, boutons de partage, bloc « Suivre », encadré « Écrit par Simon », puis « À lire aussi ».

- **Galerie** : une image à la fois, défilement au doigt sur mobile, flèches et compteur « 2 / 7 » sur ordinateur, flèches du clavier quand la galerie a le focus. Sans JavaScript, la galerie reste un simple défilement horizontal.
- **À lire aussi** : les autres fiches de la même `serie`, puis les articles dont la catégorie porte le même nom (trois au plus). Le bloc est masqué s'il n'y a rien à proposer.
- **Référencement** : Open Graph complet (image = `cover.webp`), carte `summary_large_image`, JSON-LD de type Article avec l'auteur.

## Fichiers du site concernés

| Fichier | Rôle |
|---|---|
| `lib/fiches.ts` | lecture des fiches, séparation des sources, « À lire aussi » |
| `lib/mdx.ts` (`renderMarkdown`) | chaîne Markdown commune avec les articles |
| `app/fiches/page.tsx` | rubrique `/fiches` |
| `app/fiches/[slug]/page.tsx` | page d'une fiche |
| `components/FicheCarousel.tsx` | galerie du carrousel |
| `components/Byline.tsx`, `components/AuthorBox.tsx` | ligne « Par Simon » et encadré auteur (communs avec les articles) |
