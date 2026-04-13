# Pair App — Revamp Roadmap

## Project 1: Quick Cleanup
Small fixes that can ship as a single PR.

- [ ] **Remove API key from README** — Line 103 of README.md contains a hardcoded Edamam API key in the code example. Replace with a placeholder.
- [ ] **Fix manual URL encoding** — `App.js` manually replaces spaces with `%20` one at a time (and only the first space). Replace with `encodeURIComponent()`.
- [ ] **Remove console.logs** — Scattered `console.log` calls in App.js, RecipeRec.js, WineRec.js.

## Project 2: Modernization & Cleanup
Upgrade tooling, consolidate files, and improve code quality.

- [ ] **Dependency cleanup** — Upgrade react-scripts (CRA 3 → 5 or migrate to Vite), React 16 → 18, React Router v5 → v6, and pin Node version via `.nvmrc` or `engines` field.
- [ ] **Consolidate duplicate data files** — `foodTypeData.js` and `foodTypeData2.js` have the same pairing logic but different shapes. Consolidate into one.
- [ ] **Remove duplicate component** — `FooterNav.js` and `FooterNav.tsx` both exist. Remove the `.js` version.
- [ ] **Add API error handling** — The Edamam fetch in `handleShowMeClick` has no try/catch, no loading state, and no error UI.
- [ ] **CSS organization** — All styles in one 540-line `App.css`. Migrate to CSS Modules or a scoped approach.
- [ ] **React Router v6 upgrade** — Replace `<Switch>` with `<Routes>`, `render` props with `element`, `useHistory` with `useNavigate`.
- [ ] **Image optimization** — 75 image assets bundled in `src/assets`. Move to a CDN or add an optimized image pipeline.

## Project 3: TypeScript Migration
Convert all `.js` components and data files to TypeScript.

- [ ] Define interfaces for wine types, food types, and pairing data structures.
- [ ] Convert all components from `.js` to `.tsx`.
- [ ] Convert data files to `.ts` with proper typing.
- [ ] Add strict type checking for pairing array logic.

## Project 4: Backend & Database
Add a lightweight backend with CRUD operations for pairing data.

- [ ] Choose stack (e.g., Express + SQLite/Postgres).
- [ ] Design schema for wines, food types, and pairing relationships.
- [ ] Build REST API for pairing data CRUD.
- [ ] Migrate hardcoded data files into the database.
- [ ] Update frontend to fetch pairing data from API.
- [ ] (Stretch) Admin UI for managing pairings.
