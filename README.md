# Bhavishya Verma — Portfolio

A premium, motion-driven personal portfolio built with **React + Vite**, inspired by the
layout pacing, typographic confidence, and award-show motion language of agency sites
like aerukart.com — remixed into a dark, editorial "developer studio" identity with a
lime/violet accent system, magnetic buttons, a custom cursor, scroll reveals, and a
looping marquee.

## Stack
- React 19 + Vite
- Framer Motion (scroll reveals, magnetic buttons, page-load sequence)
- Plain CSS with a design-token system (`src/styles.css`)
- Content lives in one place: `src/data.js` — edit this file to update copy, projects,
  experience, or stack without touching components.

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # optional: preview the production build locally
```

The production build is output to `dist/`, ready to deploy to Vercel, Netlify, or any
static host.

## Editing content

Open `src/data.js`:
- `profile` — name, role, tagline, bio, email, status
- `stats` — the three hero stat tiles
- `projects` — each project row (name, tagline, bullets, stack chips, accent color)
- `experience` — timeline entries
- `education`, `awards`
- `stack` — tech stack grid (icons load from `cdn.simpleicons.org/<icon-slug>`)
- `skillGroups` — the four skill-category cards
- `nav` — top navigation links

## Notes
- The custom cursor and magnetic buttons are disabled on touch devices automatically.
- Respects `prefers-reduced-motion`.
