# Implementation Plan: Portfolio Enhancements

## Overview

Transform the existing single-page React + Vite portfolio into a multi-page application with client-side routing, dedicated case-study pages, a live GitHub activity strip, a "Now" section, dependency cleanup, and README updates. Implementation uses react-router-dom for routing, and adds vitest + fast-check for testing.

## Tasks

- [x] 1. Install dependencies and set up routing infrastructure
  - [x] 1.1 Install react-router-dom and configure BrowserRouter in main.jsx
    - Run `npm install react-router-dom`
    - Modify `src/main.jsx` to wrap the app in `BrowserRouter` with `Routes` and `Route` definitions
    - Define routes: `/` → `<App />`, `/case-study/:slug` → `<CaseStudyPage />`, `*` → `<Navigate to="/" replace />`
    - Create placeholder `src/pages/CaseStudyPage.jsx` that exports an empty component (to be implemented in task 3)
    - _Requirements: 1.1, 1.2, 1.3_

- [x] 2. Add case study data and project path references
  - [x] 2.1 Add caseStudies object and nowContent export to src/data.js
    - Add the `caseStudies` object with `selfwinner` and `robot-voting-arena` keys containing: slug, name, problem, decisions array, media array, and improvements array (all using placeholder content prefixed with "Placeholder:")
    - Add `export const nowContent = 'Currently scaling and upgrading the SelfWinner platform.'`
    - Add `caseStudyPath: '/case-study/selfwinner'` to the SelfWinner project entry in the `projects` array
    - Add `caseStudyPath: '/case-study/robot-voting-arena'` to the Robot Voting Arena project entry in the `projects` array
    - No other projects should have `caseStudyPath`
    - _Requirements: 2.5, 2.6, 3.6, 3.7, 4.4, 6.2, 6.4_

- [x] 3. Create CaseStudyPage component
  - [x] 3.1 Implement src/pages/CaseStudyPage.jsx
    - Use `useParams()` to read `:slug` from URL
    - Import `caseStudies` from `../data`
    - If `slug` not found in `caseStudies`, render `<Navigate to="/" replace />`
    - Call `window.scrollTo(0, 0)` on mount via `useEffect`
    - Render sections in order: project heading, problem statement, architecture/decisions list, media/screenshots with descriptive alt text, "What I'd Improve Next" list
    - Include a `<Link to="/">` element for navigating back to home
    - Style with appropriate CSS classes matching existing site aesthetic
    - _Requirements: 1.2, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8_

- [x] 4. Modify ProjectCard for CASE STUDY button
  - [x] 4.1 Add conditional CASE STUDY button to src/components/ProjectCard.jsx
    - Import `Link` from `react-router-dom`
    - Inside the `.project-actions` div, after the "Live Demo" link and before the "View Code" link, conditionally render a `<Link>` with text "CASE STUDY" when `project.caseStudyPath` is a non-empty string
    - Use className `"project-link case-study-link"` for consistent styling
    - The `to` prop must exactly equal `project.caseStudyPath`
    - _Requirements: 4.1, 4.2, 4.3, 4.5_

- [x] 5. Checkpoint — Verify routing and case study pages work
  - Ensure the app builds without errors (`npm run build` exits 0), ask the user if questions arise.

- [x] 6. Create GitHubActivity component
  - [x] 6.1 Implement src/components/GitHubActivity.jsx
    - On mount, check `sessionStorage` key `gh_activity` for cached data; if cache timestamp < 10 min old, use cached data
    - Otherwise fetch `https://api.github.com/users/bhavishyeah/events/public` with a 5-second `AbortController` timeout
    - Filter response for first event with type `PushEvent` or `CreateEvent`
    - Display: repo name, action label ("Pushed to" / "Created"), relative timestamp
    - Implement `formatRelativeTime(dateString)` utility: <60s → "Xs ago", <60min → "Xm ago", <24h → "Xh ago", else "Xd ago"
    - On success, store `{ data: event, timestamp: Date.now() }` in `sessionStorage` under key `gh_activity`
    - On failure/timeout/empty: render fallback link "See my latest work on GitHub →" pointing to `https://github.com/bhavishyeah`
    - While loading: render a pulsing skeleton placeholder
    - Render the component inside or immediately above the Footer in `src/App.jsx`
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6_

- [x] 7. Create Now section component
  - [x] 7.1 Implement src/components/Now.jsx and integrate into App.jsx
    - Import `nowContent` from `../data` and `Reveal` from `./Reveal`
    - Render a `<section id="now">` with container, section-label ("Now / 06"), section-title ("What I'm building now."), and body paragraph with `nowContent`
    - In `src/App.jsx`, import `Now` and place it between `<About />` and `<Contact />` in the JSX
    - _Requirements: 6.1, 6.2, 6.3, 6.4_

- [x] 8. Remove gsap dependency
  - [x] 8.1 Remove gsap from package.json and verify no gsap imports exist in src/
    - Remove `gsap` from `dependencies` and `devDependencies` in `package.json` (if present)
    - Search all files in `src/` for `import ... from 'gsap'` or `require('gsap')` statements — remove or replace any found (note: string references like `'GSAP'` in data arrays are fine to keep)
    - Run `npm install` to regenerate `package-lock.json` without gsap
    - Verify `npm run build` exits with code 0
    - _Requirements: 7.1, 7.2, 7.3, 7.4_

- [x] 9. Update README
  - [x] 9.1 Rewrite README.md to reflect current theme, stack, and data exports
    - Describe the visual theme as light, blue-accented design (remove any dark lime/violet references)
    - List tech stack: React 19, Vite, Framer Motion, Lenis, Tailwind CSS, react-router-dom (do not list libraries absent from package.json)
    - List all exported field names from `src/data.js`: `profile`, `stats`, `education`, `facts`, `projects`, `experience`, `skillCategories`, `skillCategoriesScored`, `awards`, `workshops`, `volunteering`, `marqueeItems`, `nav`, `marqueeLogos`, `techIcons`, `techSlug`, `caseStudies`, `nowContent` — with a one-line description each
    - _Requirements: 8.1, 8.2, 8.3_

- [x] 10. Checkpoint — Verify build and functionality
  - Ensure `npm run build` completes with exit code 0, no module-resolution errors. Ask the user if questions arise.

- [x] 11. Set up test framework and write tests
  - [x] 11.1 Install and configure vitest, @testing-library/react, and fast-check
    - Run `npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom fast-check`
    - Add `"test": "vitest --run"` script to `package.json`
    - Create `vitest.config.js` (or add test config to existing `vite.config.js`) with `environment: 'jsdom'` and setup files
    - Create `src/setupTests.js` importing `@testing-library/jest-dom`
    - _Requirements: (testing infrastructure for all requirements)_

  - [ ]* 11.2 Write property test for case study button conditional rendering
    - **Property 1: Case study button conditional rendering**
    - Create `src/__tests__/ProjectCard.property.test.jsx`
    - Use fast-check to generate random project objects with and without `caseStudyPath`
    - Assert: button renders iff `caseStudyPath` is non-empty string; link target equals `caseStudyPath` value exactly
    - **Validates: Requirements 4.1, 4.3**

  - [ ]* 11.3 Write property test for GitHub event type filtering
    - **Property 2: GitHub event type filtering**
    - Create `src/__tests__/GitHubActivity.property.test.jsx`
    - Extract the event filter logic into a testable function
    - Use fast-check to generate random arrays of event objects with various `type` values
    - Assert: filter returns first PushEvent/CreateEvent or null
    - **Validates: Requirements 5.1**

  - [ ]* 11.4 Write property test for relative time formatting
    - **Property 3: Relative time formatting**
    - Create `src/__tests__/formatRelativeTime.property.test.js`
    - Extract `formatRelativeTime` as a standalone utility in `src/utils/formatRelativeTime.js`
    - Use fast-check to generate random past timestamps
    - Assert: output ends with "ago", unit matches delta range, numeric value equals floor(delta / unit_duration)
    - **Validates: Requirements 5.2**

  - [ ]* 11.5 Write property test for cache freshness determination
    - **Property 4: Cache freshness determination**
    - Create `src/__tests__/cacheFreshness.property.test.js`
    - Extract cache freshness check as a testable function in `src/utils/cacheFreshness.js`
    - Use fast-check to generate random elapsed-time values (0 to 30 min)
    - Assert: returns true when elapsed < 600000 ms, false when elapsed >= 600000 ms
    - **Validates: Requirements 5.5**

  - [ ]* 11.6 Write unit tests for CaseStudyPage and Now components
    - Create `src/__tests__/CaseStudyPage.test.jsx` — verify section order, content sourced from data, back link, heading, media alt text, redirect on invalid slug
    - Create `src/__tests__/Now.test.jsx` — verify renders `nowContent` text from data
    - **Validates: Requirements 2.1–2.7, 3.1–3.8, 6.1–6.4**

- [x] 12. Final checkpoint — Ensure all tests pass and build succeeds
  - Run `npm run build` and `npm test` to verify zero errors. Ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties from the design document
- Unit tests validate specific examples and edge cases
- The project uses React 19 + Vite with Tailwind CSS; all new components should follow existing patterns (Reveal wrapper, section/container structure, grain class usage)
- Case study content uses "Placeholder:" prefix so incomplete content is clearly visible

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1"] },
    { "id": 1, "tasks": ["2.1"] },
    { "id": 2, "tasks": ["3.1", "4.1"] },
    { "id": 3, "tasks": ["6.1", "7.1", "8.1"] },
    { "id": 4, "tasks": ["9.1"] },
    { "id": 5, "tasks": ["11.1"] },
    { "id": 6, "tasks": ["11.2", "11.3", "11.4", "11.5", "11.6"] }
  ]
}
```
