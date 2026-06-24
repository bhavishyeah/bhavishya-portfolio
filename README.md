# Bhavishya Verma — Portfolio

A polished, motion-driven personal portfolio built with **React 19 + Vite**. The design
uses a **light, blue-accented** theme with **Clash Display** for headings and **Montserrat**
for body text. Features include a retractable floating navbar, hero typewriter animation,
hollow-stroke section backdrops, auto-play award carousels, a tabular skills grid, smooth
scrolling, and a custom cursor with click sparkle.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| UI Library | React 19 |
| Bundler | Vite |
| Animation | Framer Motion |
| Smooth Scroll | Lenis |
| Styling | Tailwind CSS |
| Routing | react-router-dom |

Tech and brand logos load at runtime from `cdn.simpleicons.org`.

## Getting Started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Build for Production

```bash
npm run build
npm run preview   # optional: preview the production build locally
```

The production build outputs to `dist/`, ready to deploy on Vercel, Netlify, or any
static host. Ensure SPA fallback is configured (Vercel handles this automatically).

## Project Structure

```
src/
├── App.jsx              # Home page layout (all sections)
├── main.jsx             # Entry point with BrowserRouter + routes
├── data.js              # Centralised content inventory
├── styles.css           # Design-token system + theme overrides
├── index.css            # Tailwind directives
├── components/          # UI components (Nav, Hero, Projects, etc.)
├── hooks/               # Custom hooks (useInView, usePrefersReducedMotion)
└── pages/               # Route pages (CaseStudyPage)
```

## Data Reference (`src/data.js`)

All portfolio content is centralised in a single module. Below are the exported fields:

| Export | Description |
|--------|-------------|
| `profile` | Name, role, location, email, phone, status, bio/summary, links (GitHub, LinkedIn), and languages |
| `stats` | Credibility stat bar entries (value, suffix, label, optional decimals) |
| `education` | Degree, school, expected graduation, and CGPA |
| `facts` | Quick-reference label/value pairs displayed in the About section |
| `projects` | Project cards array (name, category, date, links, gradient, description, tech stack, optional case-study path) |
| `experience` | Career entries (period, role, company, bullet points) |
| `skillCategories` | Skill groups with items containing name, simpleicons slug, and proficiency level |
| `skillCategoriesScored` | Same as `skillCategories` with a computed `/5` proficiency score per skill |
| `awards` | Milestone cards (rank, title, event, date, image URLs) |
| `workshops` | List of workshop and event coordination achievements |
| `volunteering` | NSS volunteering details (role, org, period, detail, stat) |
| `marqueeItems` | Text items for the scrolling marquee banner |
| `nav` | Top navigation link definitions (label, anchor href) |
| `marqueeLogos` | Logo banner entries (name, simpleicons slug) |
| `techIcons` | Map of technology names to simpleicons slugs for project tags |
| `techSlug` | Function that resolves a technology name to its simpleicons slug (or null) |
| `caseStudies` | Deep-dive case-study content keyed by project slug |
| `nowContent` | Brief description of current work/focus for the Now section |

## Theme

Light is the default. A persisted **light/dark toggle** lives in the navbar and stores
the user's choice in `localStorage`. An inline pre-paint script in `index.html` prevents
a flash on load. Dark-theme overrides live under `[data-theme="dark"]` in `src/styles.css`.

## Routing

The app uses `react-router-dom` with `BrowserRouter`:

- `/` — Main portfolio (home page with all sections)
- `/case-study/:slug` — Dedicated case-study pages (currently `selfwinner` and `robot-voting-arena`)
- `*` — Catch-all redirects to `/`

## Editing Content

Open `src/data.js` and modify any export. Changes are reflected immediately in dev mode.
See the **Data Reference** table above for what each export controls.

## SEO

- Open Graph + Twitter Card meta, a canonical link, and schema.org `Person` JSON-LD live in `index.html`.
- `public/robots.txt` and `public/sitemap.xml` cover the site URLs.
- Replace `public/og-image.png` and `public/resume.pdf` with real assets.

## Deploy Notes

- **Vercel** — zero-config SPA fallback works out of the box.
- **Netlify** — add a `_redirects` file: `/* /index.html 200`.
- **Other hosts** — configure SPA fallback so direct access to `/case-study/*` routes works.

## Notes

- The custom cursor and click sparkle are disabled on touch devices automatically.
- Respects `prefers-reduced-motion`.
