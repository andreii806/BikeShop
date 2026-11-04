# Stage 6: AI log

## Tools
- Gemini
- Claude (Cowork)

## Conversations
- [<Gemini share link> (json-server, fetch with async/await, loading and error states)](https://share.gemini.google/B5nOOVZQje61)
- Claude Cowork session, no share link available

## Key requests

### 1. Loading data with useEffect
- Asked: How to load the parts from json-server when the page opens and show loading / error messages.
- Got: An `api.js` file with `fetchPiese` that checks `res.ok`, and a `useEffect` with an inner `async` function, `try / catch / finally` and an `ignore` flag for cleanup.
- Changed or rejected: Pinned `json-server` to version 0.17.4, because 1.x generates random text ids.

### 2. Review against the stage guides (Claude)
- Asked: Check if the project covers everything required in stages 1–6, then fix what is missing.
- Got: A list of issues: the leftover two-column media query squeezed the list into a 320px column, some colors were not variables (unavailable card, error box, stock text) so the dark theme was hard to read, the README status / how-to-run / data model were outdated, verification links pointed to `main` instead of permalinks, and the AI logs were missing key requests.
- Changed or rejected: Accepted the fixes: one column until stage 7, new CSS variables for every state color, hover on cards, global `:focus-visible`, a style for the empty list, "În stoc / Indisponibil" text back on the card, rewritten README and AI logs, `ai-log/` folder renamed to lowercase.

### 3. Extra features and visual polish (Claude)
- Asked: Add a price and a brand for each part, then improve the look of the shop and focus it on downhill, enduro and BMX.
- Got: `marca` and `pret` fields in `db.json`, a logo made from a bike line drawing (brand lettering removed from the frame, lines recolored and thickened so they stay visible at small size), a chain drawing turned into a seamless repeating tile under the header, an SVG favicon, an icon per part type (drawings used as CSS masks), header stats computed from the list, card animations and the footer back.
- Later added: sorting by price / name as a derived list, the theme saved in `localStorage` with `try / catch`, skeleton cards while loading and the bike drawing on the empty list. Search and filters were left for later, in case the next stage guides ask for them.
- Changed or rejected: Kept the three sample items unchanged, as the guide asks, and only replaced the two extra items in `db.json` with downhill / BMX parts.

## What I learned / what did not work
- Every load has three states (loading, success, error) and each one needs something on screen.
- `fetch` only throws when the server cannot be reached, so `res.ok` must be checked for 404 / 500.
- Permalinks must point to a commit, not to `main`, otherwise the line numbers drift as the code changes.
