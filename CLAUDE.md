# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server on localhost:3000
npm run build    # Build for production
npm run start    # Start production server (uses $PORT env var, defaults to 3000)
npm run lint     # Run ESLint (next/core-web-vitals rules)
```

## Architecture

This is a single-page portfolio website built with Next.js 13 (App Router), TypeScript, and Tailwind CSS.

**Page structure:** `src/app/page.tsx` is the single page (`'use client'`), composed entirely of section components from `src/app/home/components/`. Sections render in order: Intro → WordsCarrousel → Skills → WorkExperience → Projects → Inspirations → Studies → Footer. Each section corresponds to a `#anchor` id used by the Navbar.

**Routing:** There is a `src/app/projects/[project-name].tsx` file, but the site is functionally a single-page app — all content is on `/` with hash-based navigation.

**External links:** All external URLs (LinkedIn, GitHub, Dribbble, Chimptok, etc.) are centralized in `externalLinks.json` at the project root. Import them as `import externalLinks from '@/../../externalLinks.json'`.

**Styling:** Tailwind CSS with a custom dark color palette defined in `tailwind.config.js`. Key custom colors: `lilac-600` (#9580F8), `dark-800`/`dark-900` for backgrounds, `grey-600` for body text. Global CSS in `src/app/globals.css` defines base typography (Poppins font, heading sizes) and two CSS animations — `fadeInUp-animation` and `animate` (horizontal scroll).

**Images:** All project images and skill/inspiration logos live in `public/`. `next.config.js` has `images.unoptimized: true`. The `output: 'export'` option is commented out — the app is deployed as a Node server (Railway), not as a static export.
