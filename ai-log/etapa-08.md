# Stage 8: AI log

## Tools
- Claude (Cowork)

## Conversations
- Claude (Cowork) session – no share link, Cowork sessions cannot be shared (stage 8: routing, detail page and CSS Modules)

## Key requests

### 1. Routes and a shared layout
- Asked: Split the app into pages with React Router, following the stage 8 guide, adapted to my parts list.
- Got: `BrowserRouter` in `main.jsx`, a route map in `App.jsx` (`/`, `/piese/:id`, `/despre`, `*`), a `Layout` with the header, `NavLink` navigation (`end` on the first link), the theme button and the footer, and the pages drawn in `<Outlet />`.
- Changed or rejected: The detail route uses the resource from `tw.json` (`/piese/:id`). The counter and the stats moved from the header into the list panel, because the header is now the same on every page. The theme state moved into `Layout`.

### 2. Detail page and error cases
- Asked: A detail page that reads the id from the URL and asks the server for that one part.
- Got: `fetchPiesa(id)` in `api.js` and `PiesaDetaliuPage` with `useParams`, an effect with `[id]` as dependency and cleanup with `ignore`, plus loading and error states.
- Changed or rejected: The page shows more than the card: a large icon drawing, the brand, the price and the product code. `/piese/999` shows an error with a way back, and an unknown URL shows a 404 page with the bike drawing.

### 3. CSS Modules
- Asked: Move the styles next to the components.
- Got: One `*.module.css` per component and page; `App.css` renamed to `index.css` with only the variables and shared classes.
- Changed or rejected: The card's category border now comes from a module class (`styles[piesa.eticheta]`) instead of `:has(.badge-...)`. A dark-theme rule for links (`:root[data-theme="dark"] a`) was too specific and turned the logo, menu and card titles blue; it was replaced with a `--link` color variable that the modules can override.

## What I learned / what did not work
- `NavLink` marks the current page by itself; without `end`, the link to `/` stays active everywhere.
- `useParams` returns text, and the effect needs `[id]` so going from one part to another loads the new one.
- With CSS Modules, a global rule with high specificity can still win over module classes, so shared colors are better kept in variables.
