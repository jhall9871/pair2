# Pair App — Revamp Roadmap

## Project 1: Quick Cleanup ✅
Small fixes that shipped as a single PR.

- [x] **Remove API key from README** — Replaced hardcoded Edamam API key with placeholder. (`cleanup/quick-fixes`)
- [x] **Fix manual URL encoding** — Replaced manual space-to-%20 logic with `encodeURIComponent()`. (`cleanup/quick-fixes`)
- [x] **Remove console.logs** — Removed 6 `console.log` calls from App.js, RecipeRec.js, WineRec.js. (`cleanup/quick-fixes`)

## Project 2: Modernization & Cleanup
Upgrade tooling, consolidate files, and improve code quality.

### Completed
- [x] **Consolidate duplicate data files** — Removed `foodTypeData.js`, pointed App.js to `foodTypeData2.js`. (`cleanup/duplicate-files`)
- [x] **Remove duplicate component** — Deleted `FooterNav.js`; `.tsx` version is canonical. (`cleanup/duplicate-files`)
- [x] **Pin Node version** — Added `.nvmrc`. (`cleanup/duplicate-files`)
- [x] **Migrate CRA → Vite** — Replaced `react-scripts` with Vite + `@vitejs/plugin-react`. Dev server starts in ~250ms, no more `NODE_OPTIONS=--openssl-legacy-provider` hack. `.nvmrc` now pins Node 22. (`cleanup/migrate-to-vite`)
  - Renamed all `.js` components to `.jsx`
  - Replaced `require()` with ES module imports / `import.meta.glob`
  - Env var prefix changed from `REACT_APP_` to `VITE_` (update in Netlify: `REACT_APP_EDAMAM_API_KEY` → `VITE_EDAMAM_API_KEY`)
  - Netlify build command: change to `npm run build` (remove `CI=false` prefix)
  - Removed CRA boilerplate: serviceWorker, setupTests, App.test, logo.svg

### Remaining
- [ ] **React Router v6 upgrade** — Replace `<Switch>` with `<Routes>`, `render` props with `element`, `useHistory` with `useNavigate`. (Unblocked now that CRA/TypeScript 3.9 is gone.)
- [ ] **Add API error handling** — The Edamam fetch in `handleShowMeClick` has no try/catch, no loading state, and no error UI.
- [ ] **CSS organization** — All styles in one 540-line `App.css`. Migrate to CSS Modules or a scoped approach.
- [ ] **Image optimization** — 75 image assets bundled in `src/assets`. Move to a CDN or add an optimized image pipeline.

## Project 3: TypeScript Migration
Convert all `.jsx` components and data files to TypeScript.

- [ ] Define interfaces for wine types, food types, and pairing data structures.
- [ ] Convert all components from `.jsx` to `.tsx`.
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
