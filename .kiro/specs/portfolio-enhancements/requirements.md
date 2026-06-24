# Requirements Document

## Introduction

This spec covers enhancements to Bhavishya Verma's React + Vite portfolio site. The changes fall into two categories: (A) new content features — dedicated case-study pages for two flagship projects, a live GitHub activity strip, and a "Now" section — and (B) cleanup tasks — removing the unused `gsap` dependency and updating the README to reflect the current theme and data structure.

## Glossary

- **Portfolio_App**: The React + Vite single-page portfolio application located in the workspace root.
- **Case_Study_Page**: A dedicated route/page presenting an in-depth breakdown of a single project (problem, architecture, screenshot/diagram, future improvements).
- **Project_Card**: The existing `<ProjectCard>` component that renders each project in the projects grid.
- **GitHub_Activity_Strip**: A lightweight UI element that fetches and displays the user's latest public GitHub commit or repository activity.
- **Now_Section**: A small content section describing what the user is currently learning or building.
- **Data_Module**: The `src/data.js` file that centralises all portfolio content.
- **Router**: A client-side routing solution (e.g. React Router) enabling multiple pages within the SPA.

## Requirements

### Requirement 1: Case-Study Page Routing

**User Story:** As a portfolio visitor, I want to navigate to dedicated case-study pages, so that I can read an in-depth breakdown of flagship projects without leaving the site.

#### Acceptance Criteria

1. THE Portfolio_App SHALL integrate a client-side Router that defines a route for each case-study page using a URL path pattern of `/case-study/<slug>`, where the supported slugs are `selfwinner` and `robot-voting-arena`.
2. WHEN a visitor navigates to a case-study route matching a supported slug, THE Router SHALL render the Case_Study_Page component populated with the data corresponding to that slug.
3. WHEN a visitor navigates to an undefined route, THE Router SHALL redirect the visitor to the root path (`/`) which renders the main portfolio page.
4. WHEN a visitor directly accesses a case-study URL via the browser address bar or page refresh, THE Router SHALL resolve the route and render the correct Case_Study_Page component without producing a server-side 404 error.

### Requirement 2: Case-Study Page Content — SelfWinner

**User Story:** As a portfolio visitor, I want to read a detailed case study of SelfWinner, so that I can understand the project's problem space, technical decisions, and evolution.

#### Acceptance Criteria

1. THE Case_Study_Page for SelfWinner SHALL display the following sections in order from top to bottom: problem statement, key architecture and technical decisions, screenshot or diagram, and "What I'd Improve Next."
2. THE Case_Study_Page for SelfWinner SHALL display a key architecture and technical decisions section listing at least 2 technical choices (e.g. payment integration, authentication strategy).
3. THE Case_Study_Page for SelfWinner SHALL display at least 1 screenshot or diagram illustrating a core flow (e.g. the payment flow), and each image SHALL include descriptive alt text.
4. THE Case_Study_Page for SelfWinner SHALL display a "What I'd Improve Next" section listing at least 2 planned or ideal improvements.
5. THE Case_Study_Page for SelfWinner SHALL use placeholder content for all text and imagery until the user provides final content, and placeholder text SHALL be clearly distinguishable from final content (e.g. prefixed with "Placeholder:" or using obvious lorem-style copy).
6. THE Case_Study_Page for SelfWinner SHALL source all section content from the Data_Module so that text and imagery references are centrally editable.
7. THE Case_Study_Page for SelfWinner SHALL display a navigation element that allows the visitor to return to the main portfolio page without using the browser back button.

### Requirement 3: Case-Study Page Content — Robot Voting Arena

**User Story:** As a portfolio visitor, I want to read a detailed case study of Robot Voting Arena, so that I can understand the project's real-time architecture and competitive design.

#### Acceptance Criteria

1. THE Case_Study_Page for Robot Voting Arena SHALL display a visible heading identifying the project name "Robot Voting Arena".
2. THE Case_Study_Page for Robot Voting Arena SHALL display a problem statement section containing at least one paragraph describing the challenge the project addresses.
3. THE Case_Study_Page for Robot Voting Arena SHALL display an architecture and technical decisions section listing at least 2 technical choices (e.g. WebSocket strategy, leaderboard logic).
4. THE Case_Study_Page for Robot Voting Arena SHALL display at least 1 screenshot or diagram illustrating a core flow (e.g. the leaderboard update flow), with descriptive alt text.
5. THE Case_Study_Page for Robot Voting Arena SHALL display a "What I'd Improve Next" section listing at least 2 planned or ideal improvements.
6. THE Case_Study_Page for Robot Voting Arena SHALL use placeholder content for all text and imagery until the user provides final content.
7. THE Case_Study_Page for Robot Voting Arena SHALL source its content from the Data_Module so that text and imagery references are centrally editable.
8. THE Case_Study_Page for Robot Voting Arena SHALL provide a navigation element that links back to the main portfolio page.

### Requirement 4: Case-Study Button on Project Cards

**User Story:** As a portfolio visitor, I want a "Case Study" button on the SelfWinner and Robot Voting Arena project cards, so that I can easily navigate to the in-depth page from the projects grid.

#### Acceptance Criteria

1. WHEN the Project_Card renders a project whose data object includes a case-study route path (a non-empty string property), THE Project_Card SHALL display a "CASE STUDY" button that links to that route path via client-side navigation.
2. THE "CASE STUDY" button SHALL render within the project actions area, after the "Live Demo" link and before the "View Code" link (if present).
3. WHEN the Project_Card renders a project whose data object does not include a case-study route path, THE Project_Card SHALL NOT display a "CASE STUDY" button.
4. THE portfolio data SHALL define a case-study route path only for the "SelfWinner" and "Robot Voting Arena" projects; all other projects SHALL have no case-study route path defined.
5. WHEN a visitor activates the "CASE STUDY" button, THE System SHALL navigate the visitor to the corresponding Case_Study_Page without a full page reload.

### Requirement 5: Live GitHub Activity Strip

**User Story:** As a portfolio visitor, I want to see recent GitHub activity on the site, so that I can tell the developer is actively building and shipping code.

#### Acceptance Criteria

1. THE GitHub_Activity_Strip SHALL fetch the most recent public event of type push or repository creation from the GitHub Events API endpoint (`https://api.github.com/users/bhavishyeah/events/public`) within a maximum request timeout of 5 seconds.
2. THE GitHub_Activity_Strip SHALL display the repository name, event type label (e.g. "Pushed to" or "Created"), and a relative timestamp using the largest applicable unit (seconds for <60 s, minutes for <60 min, hours for <24 h, days otherwise).
3. THE GitHub_Activity_Strip SHALL be rendered immediately above or within the Footer section of the Portfolio_App.
4. IF the GitHub API request fails, times out, or returns no matching events, THEN THE GitHub_Activity_Strip SHALL display a fallback message containing a hyperlink to `https://github.com/bhavishyeah` instead of showing an error or empty state.
5. THE GitHub_Activity_Strip SHALL cache the API response in the browser for a duration of 5 to 15 minutes before making a subsequent request.
6. WHILE the GitHub API request is in progress, THE GitHub_Activity_Strip SHALL display a non-interactive loading indicator in place of the activity content.

### Requirement 6: "Now" Section

**User Story:** As a portfolio visitor, I want to see what the developer is currently working on, so that I can understand their present focus and direction.

#### Acceptance Criteria

1. THE Portfolio_App SHALL display a Now_Section containing a brief description of current work and learning focus.
2. THE Now_Section SHALL source its content from the Data_Module so the text is easily editable.
3. THE Now_Section SHALL be placed between the About section and the Contact section within the page layout.
4. THE Now_Section content SHALL initially state: "Currently scaling and upgrading the SelfWinner platform."

### Requirement 7: Remove Unused gsap Dependency

**User Story:** As a developer maintaining this portfolio, I want unused dependencies removed, so that the project stays lean and the dependency tree is accurate.

#### Acceptance Criteria

1. THE Portfolio_App SHALL NOT list `gsap` in the `dependencies` or `devDependencies` fields of `package.json`.
2. IF `gsap` is present in `package-lock.json` as a direct dependency, THEN the lock file SHALL be regenerated so that no `gsap` entry appears under the top-level `packages` or `dependencies` mapping.
3. THE source code in `src/` SHALL NOT contain any `import` or `require` statement that resolves the `gsap` module (string literals mentioning "GSAP" as display text in data arrays or code comments are not considered imports).
4. WHEN `gsap` has been removed from `package.json` and the lock file has been regenerated, THE Portfolio_App SHALL complete the `npm run build` command with exit code 0 and produce no module-resolution errors.

### Requirement 8: Update README to Reflect Current Theme and Data Structure

**User Story:** As a developer or contributor reading the README, I want it to accurately describe the current light/blue theme and data.js exports, so that onboarding and maintenance are straightforward.

#### Acceptance Criteria

1. THE README.md SHALL describe the visual theme as a light, blue-accented design and SHALL NOT reference a dark lime/violet theme as the default or primary theme.
2. THE README.md SHALL list all current exported field names from `src/data.js` — specifically `profile`, `stats`, `education`, `facts`, `projects`, `experience`, `skillCategories`, `skillCategoriesScored`, `awards`, `workshops`, `volunteering`, `marqueeItems`, `nav`, `marqueeLogos`, `techIcons`, and `techSlug` — with a one-line description of each export's purpose.
3. THE README.md SHALL list the current tech stack (React 19, Vite, Framer Motion, Lenis, Tailwind CSS) and SHALL NOT reference libraries absent from `package.json` dependencies or devDependencies.
4. IF the README.md content already satisfies criteria 1–3, THEN THE Portfolio_App SHALL leave the README.md file unchanged (no byte modifications).
