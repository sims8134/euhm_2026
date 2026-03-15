# EUHM — Être Un Homme Meilleur

Site Next.js migré depuis HTML/CSS statique.

## Stack
- **Next.js 15** (App Router)
- **TypeScript**
- **gray-matter** — lecture des fichiers MDX
- **Vercel** — déploiement

## Démarrage

```bash
npm install
npm run dev
```

## Structure

```
app/
├── layout.tsx          → Layout racine + metadata SEO
├── page.tsx            → Accueil
├── articles/
│   ├── page.tsx        → Liste des articles
│   └── [slug]/page.tsx → Article individuel
├── dossiers/page.tsx
├── galerie/page.tsx
├── boutique/page.tsx
├── contact/page.tsx
├── apropos/page.tsx
├── telechargement/page.tsx
├── mentions-legales/page.tsx
├── cgu/page.tsx
├── politique-confidentialite/page.tsx
├── sitemap.ts
└── robots.ts

components/
├── Header.tsx
└── Footer.tsx

content/articles/       → Vos articles en .mdx
lib/mdx.ts              → Utilitaires lecture MDX
public/img/             → Toutes vos images (copiez le dossier img/ ici)
```

## Ajouter un article

Créez un fichier dans `content/articles/mon-article.mdx` :

```markdown
---
title: "Mon titre"
date: "2026-03-11"
category: "Sport"
description: "Description courte."
readTime: "5 min"
---

Votre contenu ici en Markdown...
```

L'article apparaît automatiquement sur /articles.

## Images

Copiez votre dossier `img/` dans `public/img/`.

## Déploiement Vercel

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/VOTRE_USER/euhm.git
git push -u origin main
```

Connectez ensuite le repo sur vercel.com.
