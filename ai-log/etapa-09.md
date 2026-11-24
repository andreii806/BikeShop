# Stage 9: AI log

## Tools
- Claude (Cowork)

## Conversations
- Claude (Cowork) session – no share link, Cowork sessions cannot be shared (stage 9: own backend with Node.js and Express)

## Key requests

### 1. Express API for the parts list
- Asked: Replace json-server with my own Express server, following the stage 9 guide, for the `/piese` resource.
- Got: A `backend/` project (`"type": "module"`, Express 5, cors) with `server.js` separate from `app.js`, a `Router` in `routes/piese.js` with GET, GET by id, POST, PATCH and DELETE, a `/health` route, a 404 route and a central error handler.
- Changed or rejected: The data in memory are the same five parts as in the old `db.json`, so the app looks the same. Added a clear 400 message ("Corpul cererii nu este JSON valid") when the body is not valid JSON, instead of the parser's technical message.

### 2. Server side validation
- Asked: Validate on the server with the same rules as the form.
- Got: `valideazaPiesa` with a whitelist of fields and a `partial` mode for PATCH: name required (max 100), part type from the fixed list, price a number greater than 0 and at most 100.000, brand optional (max 50), `gata` boolean.
- Changed or rejected: Checked that the sample in `tw.json` (`franare`, `Shimano`, `199`) passes, and that an empty body or an empty name returns 400 with `{ "error": "..." }`. Tested every route with curl: 200, 201, 200, 200, 204, then 404 on the deleted id.

### 3. Frontend and removing json-server
- Asked: Connect the React app and remove json-server.
- Got: `api.js` now reads `body.error`, so the page shows the server's message ("Piesa nu există"). Removed the `api` script, the json-server package and `db.json`.
- Changed or rejected: Removed json-server from `package-lock.json` too, so `npm ci` stays in sync. Re-ran the stage 7 and 8 checks on the built app against the Express server: add, toggle, delete and refresh still work, with no CORS errors in the console.

## What I learned / what did not work
- CORS is decided by the server: the browser blocks responses from another port unless the server allows that origin.
- Validation in the form is not enough; anyone can call the API directly with curl.
- The order in `app.js` matters: middleware, routes, the 404 route, then the error handler with four parameters.
