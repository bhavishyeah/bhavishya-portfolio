# Bhavishya Verma — Portfolio

A polished, motion-driven personal portfolio built with **React + Vite**. The current
design is a **light, blue-accented** theme (with an optional persisted dark mode),
using **Clash Display** for headings and **Montserrat** for body text. It features a
retractable floating navbar, a hero typewriter, hollow-stroke section backdrops,
auto-play award carousels, a tabular skills grid, and a custom cursor + click sparkle.

## Stack
- React 19 + Vite
- Framer Motion (scroll reveals, hero sequence)
- Lenis (smooth scrolling)
- Plain CSS with a design-token system (`src/styles.css`)
- Tech/brand logos load at runtime from `cdn.simpleicons.org`
- Content lives in one place: `src/data.js`

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

## Theme

- Light is the default; a persisted **light/dark toggle** lives in the navbar and stores
  the choice in `localStorage` (with an inline pre-paint script in `index.html` to avoid
  a flash). Dark-theme overrides live under `[data-theme="dark"]` at the end of
  `src/styles.css`.

## Editing content

Open `src/data.js`:
- `profile` — name, role, location, email, phone, status, bio/summary, `links` (github, linkedin), `languages`
- `stats` — the credibility stat bar (value, suffix, label)
- `projects` — each project (`name`, `category`, `date`, `link`, `repo`, `gradient`, `description`, `tech[]`)
- `experience` — career entries (`period`, `role`, `company`, `bullets[]`)
- `skillCategories` — skill groups (`label`, `items[]` with `name`, `slug`, `level`);
  `skillCategoriesScored` adds the per-skill `/5` proficiency
- `awards` — milestone cards (`rank`, `title`, `event`, `date`, `images[]`)
- `workshops`, `volunteering`, `education`, `facts`
- `marqueeLogos` — the logo banner (`name`, `slug`)
- `techIcons` / `techSlug()` — maps tech names to simpleicons slugs for project tags
- `nav` — top navigation links

## SEO

- Open Graph + Twitter Card meta, a canonical link, and schema.org `Person` JSON-LD live in `index.html`.
- `public/robots.txt` and `public/sitemap.xml` cover the single root URL.
- Replace `public/og-image.png` and `public/resume.pdf` with the real assets.

## Notes
- The custom cursor and click sparkle are disabled on touch devices automatically.
- Respects `prefers-reduced-motion`.
