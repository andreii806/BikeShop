# Stage 7: AI log

## Tools
- Claude (Cowork)

## Conversations
- Claude (Cowork) session – no share link, Cowork sessions cannot be shared (stage 7: form, validation and saving every change on the server)

## Key requests

### 1. Form adapted to the bike shop
- Asked: Build the stage 7 form for my parts list, with the fields from my data model.
- Got: A controlled `PiesaForm` with name, part type, brand and price, each with `value` and `onChange`, `e.preventDefault()` on submit and a `valideaza` function that returns the wrong field and the message.
- Changed or rejected: Kept the name required (max 100 chars) and added my own extra rules: price greater than 0 and at most 100.000 lei, brand optional with max 50 chars. The wrong field gets `aria-invalid`, so it is outlined in red.

### 2. Server first, then state
- Asked: Move add, toggle and delete to json-server so changes survive a refresh.
- Got: A shared `request` function in `api.js` (JSON header, `res.ok` check, 204 handled) and `createPiesa`, `updatePiesa`, `deletePiesa`. `App` waits for the server and puts the object returned by the server in the list.
- Changed or rejected: `handleAdd` does not catch the error, so it reaches the form and the typed text is kept when the API is down. The list stays on screen when a toggle or delete fails, with the error above it.

### 3. Automatic check markers
- Asked: Prepare the app for the automatic check.
- Got: `tw.json` in the repository root (`piese`, `titlu`, `gata`, plus sample values for `eticheta`, `marca`, `pret`) and the `data-testid` attributes from table 7.3 on the form, cards, empty list, loading and error messages.
- Changed or rejected: Pinned json-server to exactly 0.17.4 in `package-lock.json` too, so `npm ci` on a clean clone installs the same version. Tested everything on a clean install: empty submit sends no request, a new part survives a refresh, toggle and delete survive a refresh, the button shows "Se salvează..." while waiting, and the typed text stays when the API is stopped.

## What I learned / what did not work
- A controlled field needs both `value` and `onChange`; without `onChange` it cannot be typed in.
- Clearing the form must happen after `await`, otherwise the text is lost when saving fails.
- The id of a new item should come from the server, not be invented in the frontend.
