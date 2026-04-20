# Pair App — Revamp Roadmap

## Project 1: Quick Cleanup
Small fixes that can ship as a single PR.

- [ ] **Remove API key from README** — Line 103 of README.md contains a hardcoded Edamam API key in the code example. Replace with a placeholder.
- [ ] **Fix manual URL encoding** — `App.js` manually replaces spaces with `%20` one at a time (and only the first space). Replace with `encodeURIComponent()`.
- [ ] **Remove console.logs** — Scattered `console.log` calls in App.js, RecipeRec.js, WineRec.js.

## Project 2: Migrate from Edamam to Spoonacular API
Edamam removed their free tier — the Recipe Search API now starts at $9/month. The app is broken on prod because of this. Spoonacular has a free tier (50 points/day, ~50 requests) which is sufficient for this low-traffic app.

### Research (completed)
- **Current usage**: `App.js` builds a query with two food-pairing factors joined by `AND`, fetches from `api.edamam.com/search`, and `RecipeRec.js` displays `hits[0].recipe.{image, label, url}`.
- **Spoonacular equivalent**: `GET https://api.spoonacular.com/recipes/complexSearch?query={food1} {food2}&addRecipeInformation=true&apiKey=KEY`
- **Response shape mapping**:
  | Edamam | Spoonacular |
  |--------|-------------|
  | `hits[0].recipe.label` | `results[0].title` |
  | `hits[0].recipe.image` | `results[0].image` |
  | `hits[0].recipe.url` | `results[0].sourceUrl` |
- **Auth**: Single `apiKey` query param (no separate app_id). Free tier requires no credit card when signing up directly at spoonacular.com. Backlink attribution is required on the free plan.
- **Rate limits (free)**: 50 points/day, 1 req/sec, 2 concurrent requests. Each `complexSearch` call costs ~1 point + 0.01 per result.

### Tasks
- [ ] **Sign up for Spoonacular API key** — Register at spoonacular.com, get a free API key.
- [ ] **Update API call in `App.js`** — Replace the Edamam URL with Spoonacular's `complexSearch` endpoint. Use `addRecipeInformation=true` to get `sourceUrl` in one call. Store API key in an env var (`REACT_APP_SPOONACULAR_KEY`).
- [ ] **Update `RecipeRec.js` response mapping** — Change `recipeRec.hits[0].recipe.image` → `recipeRec.results[0].image`, `.label` → `.title`, `.url` → `.sourceUrl`.
- [ ] **Add Spoonacular attribution** — Free plan requires a backlink. Add a small "Powered by Spoonacular" link to the recipe results page.
- [ ] **Add API error handling** — The fetch in `handleShowMeClick` has no try/catch, no loading state, and no error UI. Fix this while swapping the API.
- [ ] **Update README** — Replace Edamam references with Spoonacular. Update the code example.
- [ ] **Test on prod** — Deploy and verify recipes load correctly on https://pair-wine.netlify.app/.

## Project 3: Modernization & Cleanup
Upgrade tooling, consolidate files, and improve code quality.

- [ ] **Dependency cleanup** — Upgrade react-scripts (CRA 3 → 5 or migrate to Vite), React 16 → 18, React Router v5 → v6, and pin Node version via `.nvmrc` or `engines` field.
- [ ] **Consolidate duplicate data files** — `foodTypeData2.js` and `originalFoodData.js` contain overlapping pairing logic in different shapes. `foodTypeData2.js` is the active one. Remove `originalFoodData.js`.
- [x] **Remove duplicate component** — `FooterNav.js` and `FooterNav.tsx` — already resolved, neither file exists.
- [ ] **CSS organization** — All styles in one 540-line `App.css`. Migrate to CSS Modules or a scoped approach.
- [ ] **React Router v6 upgrade** — Replace `<Switch>` with `<Routes>`, `render` props with `element`, `useHistory` with `useNavigate`.
- [ ] **Image optimization** — 75 image assets bundled in `src/assets`. Move to a CDN or add an optimized image pipeline.

## Project 4: TypeScript Migration
Convert all `.js` components and data files to TypeScript.

- [ ] Define interfaces for wine types, food types, and pairing data structures.
- [ ] Convert all components from `.js` to `.tsx`.
- [ ] Convert data files to `.ts` with proper typing.
- [ ] Add strict type checking for pairing array logic.

## Project 5: Backend & Database
Add a lightweight backend with CRUD operations for pairing data.

- [ ] Choose stack (e.g., Express + SQLite/Postgres).
- [ ] Design schema for wines, food types, and pairing relationships.
- [ ] Build REST API for pairing data CRUD.
- [ ] Migrate hardcoded data files into the database.
- [ ] Update frontend to fetch pairing data from API.
- [ ] (Stretch) Admin UI for managing pairings.
