# Pair — Wine Pairing App

## Overview
A React app that recommends wine/food pairings. Users either pick a wine and get recipe suggestions, or pick a food and get wine suggestions. Pairing logic is based on Wine Folly's pairing poster. Live at https://pair-wine.netlify.app/.

## Tech Stack (Legacy)
- **React 16** with Create React App 3 (react-scripts 3.4.1)
- **React Router v5** — uses `<Switch>`, `render` props, `useHistory`
- **Node 14** (see `.nvmrc`)
- **Edamam Recipe Search API** for recipe lookups
- **Netlify** — auto-deploys from `master`

## Project Structure
```
src/
├── App.js              # Main component — routing, state, API fetch logic
├── App.css             # All styles (single 540-line file)
├── wineTypeData.js     # Wine types + pairing arrays
├── foodTypeData2.js    # Food types + pairing arrays (active version)
├── originalFoodData.js # Original food data (legacy/duplicate)
├── Components/
│   ├── Welcome.js      # Landing page
│   ├── ModeSelect.js   # Choose wine→food or food→wine
│   ├── MenuWine.js     # Wine selection menu
│   ├── MenuFood.js     # Food selection menu
│   ├── WineRec.js      # Wine recommendation display
│   ├── RecipeRec.js    # Recipe recommendation display
│   ├── WineSelectRow.js # Wine option row component
│   └── FactorCard.js   # Pairing factor display card
```

## How Pairing Logic Works
1. Pairing data lives in `wineTypeData.js` and `foodTypeData2.js` as arrays of numeric scores (0/1/2).
2. When a wine is selected, `App.js` cross-references the wine's `pairingArray` against the flat list of food subtypes to find good matches (score of 2, or ≥1 for sparkling/rosé).
3. Two random food factors are selected and used to build an Edamam API query.
4. The reverse flow (food→wine) works similarly.

## Known Issues & Gotchas
- **Duplicate data files**: `foodTypeData2.js` and `originalFoodData.js` contain overlapping pairing logic in different shapes. `foodTypeData2.js` is the active one.
- **Manual URL encoding**: `App.js` replaces spaces with `%20` character-by-character (and only the first space). Should use `encodeURIComponent()`.
- **No API error handling**: The Edamam fetch in `handleShowMeClick` has no try/catch, loading state, or error UI.
- **Scattered console.logs**: Found in App.js, RecipeRec.js, WineRec.js.

## Roadmap
See `project-worksheet.md` for the full prioritized roadmap. Projects in order:
1. **Quick Cleanup** — remove API key from README, fix URL encoding, remove console.logs
2. **Migrate from Edamam to Spoonacular API** — Edamam's free tier is gone (starts at $9/mo). Spoonacular has a free tier (50 points/day). Response shape differs: `hits[0].recipe.{label,image,url}` → `results[0].{title,image,sourceUrl}`. See worksheet for full mapping.
3. **Modernization** — upgrade React/Router/CRA, consolidate data files, CSS modules
4. **TypeScript Migration** — convert all .js to .ts/.tsx with proper interfaces
5. **Backend & Database** — Express API, migrate hardcoded data to DB

## Commands
- `nvm use` — switch to Node 14
- `npm start` — dev server
- `npm run build` — production build
- `npm test` — run tests
