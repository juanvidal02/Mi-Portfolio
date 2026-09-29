# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Development Server:** `npm run dev` (or `astro dev --background`, managed with `astro dev status`, `astro dev stop`, `astro dev logs`)
- **Build:** `npm run build` (generates static site in `./dist/`)
- **Preview:** `npm run preview`
- **Generate OG Image:** `npm run og-image` (runs `node scripts/make-og-image.mjs`)

## Architecture & Structure

- **Framework:** Astro 7 with Tailwind CSS 4 (`@tailwindcss/vite`). Fully static output (zero browser JavaScript by default, HTML generated at build time).
- **Core Files & Directories:**
  - `src/data/portfolio.ts` — Single source of truth for portfolio content (profile, navigation, skills, projects, socials).
  - `src/pages/index.astro` — Main page combining header, sections, and footer.
  - `src/layouts/BaseLayout.astro` — Base HTML layout containing SEO tags, fonts, and global styling configuration.
  - `src/components/` — Reusable Astro components (Hero, Projects, ProjectCard, Skills, Contact, Header, Footer, ProfilePhoto, Icon).
  - `src/assets/` — Processed assets (e.g., `src/assets/images/mi-foto.jpeg` optimized via `astro:assets`).
  - `public/` — Static assets served as-is (favicons, pre-generated `og-image.jpg`).
  - `scripts/` — Node utility scripts (e.g., Open Graph image generation).
