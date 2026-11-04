# BikeShop

Online shop that manages an inventory of bicycle parts and their stock availability.
Built for cycling enthusiasts who want to see at a glance which parts are in stock and which are not.

## Data model

| Field | Name in code | Type | Notes |
| :--- | :--- | :--- | :--- |
| name | `titlu` | text | required, max 100 chars |
| unavailable flag | `gata` | boolean | toggled from the list; `true` = out of stock, default `false` |
| part type (fixed tag) | `eticheta` | fixed values | `transmisie`, `franare`, `suspensie` (shown as Transmisie, Frânare, Suspensie) |
| category | `categorie` | relation | Downhill, Enduro, Road, BMX, Electric – the kind of bike the part fits (from week 10) |
| user | `owner` | relation | the owner of the item (from week 11) |

Sample data used across all stages:
1. Pinioane Shimano 11-42t, in stock (active), Transmisie, Enduro
2. Set plăcuțe frână hidraulică, unavailable (done), Frânare, Road
3. Furcă aer 100mm, in stock (active), Suspensie, Electric

## How to run

The React app lives in `frontend/` and needs Node.js 20+.

```
cd frontend
npm install
npm run api   # terminal 1: json-server, http://localhost:3001/piese
npm run dev   # terminal 2: Vite, http://localhost:5173
```

The stage 1–2 static mockup is kept in `mockup/`: open `mockup/index.html` in a browser (no build step, no server).

## AI usage

| Tool | Used for |
| :--- | :--- |
| Gemini | Stages 1–6: CSS Grid/Flexbox layout, immutable array functions, Vite setup, components and props, state and events, `useEffect` with json-server |
| ChatGPT | Stage 1: styling assistance |
| Claude (Cowork) | Stage 6: reviewing the project against the stage guides, fixing the CSS (single-column layout, dark theme variables, hover/focus), the README and the AI logs |

Details per stage: see the [ai-log/](ai-log/) folder.

## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [x] Stage 3: Vite and React project
- [x] Stage 4: components rendered from data
- [x] Stage 5: local state and events
- [x] Stage 6: data from a mock API
- [ ] Stage 7: form and validation

## Stage 1: static mockup
Plain HTML and CSS (now in `mockup/`): header with a counter, an add form (text + select), three cards with the sample data, two columns on desktop and one under 700px, visible focus and a dark theme built from CSS variables.

### Verification Table - Stage 1
| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S1-R1 | README: description, fields, sample data, how to run | [README.md#L1-L24](https://github.com/andreii806/BikeShop/blob/68b0ab7147aa2da50b64674c5808303c51551ad4/README.md?plain=1#L1-L24) | read |
| S1-R2 | AI usage section | [README.md#L18-L21](https://github.com/andreii806/BikeShop/blob/68b0ab7147aa2da50b64674c5808303c51551ad4/README.md?plain=1#L18-L21) | read |
| S1-R3 | AI log for stage 1 | [etapa-01.md](https://github.com/andreii806/BikeShop/blob/68b0ab7147aa2da50b64674c5808303c51551ad4/AI-log/etapa-01.md?plain=1#L1-L11) | read |
| S1-R4 | header, form (text + select), 3 cards with own data | [index.html#L9-L59](https://github.com/andreii806/BikeShop/blob/68b0ab7147aa2da50b64674c5808303c51551ad4/index.html#L9-L59) | open the page |
| S1-R5 | finished card looks different | [style.css#L288-L317 (.done)](https://github.com/andreii806/BikeShop/blob/68b0ab7147aa2da50b64674c5808303c51551ad4/style.css#L288-L317) | look at the card |
| S1-R6 | 2 columns on desktop, 1 under 700px | [style.css#L124-L135](https://github.com/andreii806/BikeShop/blob/68b0ab7147aa2da50b64674c5808303c51551ad4/style.css#L124-L135), [style.css#L329-L344 (@media)](https://github.com/andreii806/BikeShop/blob/68b0ab7147aa2da50b64674c5808303c51551ad4/style.css#L329-L344) | resize < 700px |
| S1-R7 | visible focus, readable dark theme | [style.css#L353-L361](https://github.com/andreii806/BikeShop/blob/f61c4629815d0f4a4038cf6deca85e582bf86b42/style.css#L353-L361) | Tab; dark mode |
| S1-R8 | commit "Stage 1" pushed | [68b0ab7](https://github.com/andreii806/BikeShop/commit/68b0ab7147aa2da50b64674c5808303c51551ad4) | commit history |

## Stage 2: data logic
Plain JavaScript, no DOM. `piese.js` (now in `mockup/`) holds the array and the functions that read and change it immutably. Results are printed in the browser console (F12).

### Verification Table - Stage 2
| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S2-R1 | JS file linked, logs on page load | [index.html#L64](https://github.com/andreii806/BikeShop/blob/9fc7dca032b7d37d20c5fde4a59349aec27679e2/index.html#L64) | open page, F12 |
| S2-R2 | 3+ items with id, name, state, tag | [piese.js#L6-L10](https://github.com/andreii806/BikeShop/blob/9fc7dca032b7d37d20c5fde4a59349aec27679e2/piese.js#L6-L10) | read |
| S2-R3 | list, count, search, add, toggle, delete | [piese.js#L12-L67](https://github.com/andreii806/BikeShop/blob/9fc7dca032b7d37d20c5fde4a59349aec27679e2/piese.js#L12-L67) | console output |
| S2-R4 | add rejects empty name and invalid tag | [piese.js#L34-L45](https://github.com/andreii806/BikeShop/blob/9fc7dca032b7d37d20c5fde4a59349aec27679e2/piese.js#L34-L45) | last 2 console lines |
| S2-R5 | original array unchanged after add | [piese.js#L54](https://github.com/andreii806/BikeShop/blob/9fc7dca032b7d37d20c5fde4a59349aec27679e2/piese.js#L54) | console line |
| S2-R6 | README Stage 2 section + AI log | [README.md#L42-L54](https://github.com/andreii806/BikeShop/blob/9fc7dca032b7d37d20c5fde4a59349aec27679e2/README.md?plain=1#L42-L54), [etapa-02.md](https://github.com/andreii806/BikeShop/blob/9fc7dca032b7d37d20c5fde4a59349aec27679e2/AI-log/etapa-02.md?plain=1#L1-L11) | read |
| S2-R7 | commit "Stage 2" pushed | [9fc7dca](https://github.com/andreii806/BikeShop/commit/9fc7dca032b7d37d20c5fde4a59349aec27679e2) | commit history |

## Stage 3: Vite and React project
The app now lives in `frontend/`, built with Vite. The data from stage 2 moved into the main component; the list was printed raw (JSON) until stage 4.

### Verification Table - Stage 3
| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S3-R1 | npm run dev starts without errors | [package.json#L6-L11](https://github.com/andreii806/BikeShop/blob/906233530ffe29e21e2137712aa705d0c778524c/frontend/package.json#L6-L11) | npm install, npm run dev |
| S3-R2 | app name and counter computed from data | [App.jsx#L10-L19](https://github.com/andreii806/BikeShop/blob/906233530ffe29e21e2137712aa705d0c778524c/frontend/src/App.jsx#L10-L19) | edit data, save |
| S3-R3 | data from README, not from the example | [App.jsx#L3-L7](https://github.com/andreii806/BikeShop/blob/906233530ffe29e21e2137712aa705d0c778524c/frontend/src/App.jsx#L3-L7) | compare with README |
| S3-R4 | stage 1 styles reused | [App.css](https://github.com/andreii806/BikeShop/blob/906233530ffe29e21e2137712aa705d0c778524c/frontend/src/App.css) | look at the page |
| S3-R5 | node_modules ignored, build passes | [.gitignore#L10-L11](https://github.com/andreii806/BikeShop/blob/906233530ffe29e21e2137712aa705d0c778524c/frontend/.gitignore#L10-L11) | npm run build |
| S3-R6 | README Stage 3 section + AI log | [README.md#L82-L83](https://github.com/andreii806/BikeShop/blob/41ad5491b58cabc49e507356a976d3a90b45fd18/README.md?plain=1#L82-L83), [etapa-03.md](https://github.com/andreii806/BikeShop/blob/41ad5491b58cabc49e507356a976d3a90b45fd18/ai-log/etapa-03.md?plain=1#L1-L24) | read |
| S3-R7 | commit "Stage 3" pushed | [9062335](https://github.com/andreii806/BikeShop/commit/906233530ffe29e21e2137712aa705d0c778524c) | commit history |

## Stage 4: components
The list is rendered from the data, through two components:
- `PiesaList` receives the whole array and renders one card per item
- `PiesaCard` receives a single item through props and displays it

### Verification Table - Stage 4
| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S4-R1 | 2+ components in src/components/ | [src/components/](https://github.com/andreii806/BikeShop/tree/536558592fea48b0af436575392a1862c091eb14/frontend/src/components) | open folder |
| S4-R2 | card receives data through props | [PiesaCard.jsx#L7-L21](https://github.com/andreii806/BikeShop/blob/536558592fea48b0af436575392a1862c091eb14/frontend/src/components/PiesaCard.jsx#L7-L21) | read |
| S4-R3 | map + key={id}, no console warnings | [PiesaList.jsx#L11-L15](https://github.com/andreii806/BikeShop/blob/536558592fea48b0af436575392a1862c091eb14/frontend/src/components/PiesaList.jsx#L11-L15) | F12, Console |
| S4-R4 | message for empty list | [PiesaList.jsx#L4-L7](https://github.com/andreii806/BikeShop/blob/536558592fea48b0af436575392a1862c091eb14/frontend/src/components/PiesaList.jsx#L4-L7) | set array to [] |
| S4-R5 | state changes the card look | [PiesaCard.jsx#L9](https://github.com/andreii806/BikeShop/blob/536558592fea48b0af436575392a1862c091eb14/frontend/src/components/PiesaCard.jsx#L9), [PiesaCard.jsx#L16-L18](https://github.com/andreii806/BikeShop/blob/536558592fea48b0af436575392a1862c091eb14/frontend/src/components/PiesaCard.jsx#L16-L18) | toggle a done flag |
| S4-R6 | README Stage 4 section + AI log | [README.md#L96-L99](https://github.com/andreii806/BikeShop/blob/41ad5491b58cabc49e507356a976d3a90b45fd18/README.md?plain=1#L96-L99), [etapa-04.md](https://github.com/andreii806/BikeShop/blob/41ad5491b58cabc49e507356a976d3a90b45fd18/ai-log/etapa-04.md?plain=1#L1-L24) | read |
| S4-R7 | commit "Stage 4" pushed | [5365585](https://github.com/andreii806/BikeShop/commit/536558592fea48b0af436575392a1862c091eb14) | commit history |

## Stage 5: local state and events
The list lives in React state. Checking and deleting work from the page, and the counters in the header follow automatically. A button in the header switches between light and dark mode. Changes are lost on refresh, which is what stage 6 and stage 10 fix.

### Verification Table - Stage 5
| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S5-R1 | list kept in useState, in App | [App.jsx#L18](https://github.com/andreii806/BikeShop/blob/8efd1e0c99487a7b4d0b036e05ee8e1b4f5fd337/frontend/src/App.jsx#L18) | read |
| S5-R2 | toggling changes state and card look | [App.jsx#L22-L26](https://github.com/andreii806/BikeShop/blob/8efd1e0c99487a7b4d0b036e05ee8e1b4f5fd337/frontend/src/App.jsx#L22-L26), [PiesaCard.jsx#L9-L15](https://github.com/andreii806/BikeShop/blob/8efd1e0c99487a7b4d0b036e05ee8e1b4f5fd337/frontend/src/components/PiesaCard.jsx#L9-L15) | click a checkbox |
| S5-R3 | delete removes the item | [App.jsx#L29-L31](https://github.com/andreii806/BikeShop/blob/8efd1e0c99487a7b4d0b036e05ee8e1b4f5fd337/frontend/src/App.jsx#L29-L31), [PiesaCard.jsx#L23-L29](https://github.com/andreii806/BikeShop/blob/8efd1e0c99487a7b4d0b036e05ee8e1b4f5fd337/frontend/src/components/PiesaCard.jsx#L23-L29) | click Șterge |
| S5-R4 | header counter derived, not in state | [App.jsx#L40-L41](https://github.com/andreii806/BikeShop/blob/8efd1e0c99487a7b4d0b036e05ee8e1b4f5fd337/frontend/src/App.jsx#L40-L41) | toggle, watch header |
| S5-R5 | immutable updates (no push, splice, assignment) | [App.jsx#L21-L31](https://github.com/andreii806/BikeShop/blob/8efd1e0c99487a7b4d0b036e05ee8e1b4f5fd337/frontend/src/App.jsx#L21-L31) | read |
| S5-R6 | light/dark toggle: state + data-theme on html | [App.jsx#L33-L38](https://github.com/andreii806/BikeShop/blob/8efd1e0c99487a7b4d0b036e05ee8e1b4f5fd337/frontend/src/App.jsx#L33-L38), [App.jsx#L46-L52](https://github.com/andreii806/BikeShop/blob/8efd1e0c99487a7b4d0b036e05ee8e1b4f5fd337/frontend/src/App.jsx#L46-L52), [App.css#L408-L426](https://github.com/andreii806/BikeShop/blob/f53a6acc57246bbf9560e12fc5eda9f0aab3fbf9/frontend/src/App.css#L408-L426) | click the button, both system themes |
| S5-R7 | no console warnings; README + AI log | [README.md#L112-L113](https://github.com/andreii806/BikeShop/blob/41ad5491b58cabc49e507356a976d3a90b45fd18/README.md?plain=1#L112-L113), [etapa-05.md](https://github.com/andreii806/BikeShop/blob/41ad5491b58cabc49e507356a976d3a90b45fd18/ai-log/etapa-05.md?plain=1#L1-L24) | F12, Console |
| S5-R8 | commit "Stage 5" pushed | [8efd1e0](https://github.com/andreii806/BikeShop/commit/8efd1e0c99487a7b4d0b036e05ee8e1b4f5fd337) | commit history |

## Stage 6: data from a mock API
The list is served by json-server from `db.json`. The app fetches it on load and shows a loading state and an error state.

```
npm run api   # terminal 1, http://localhost:3001
npm run dev   # terminal 2, http://localhost:5173
```

After a review against the stage guides, the CSS was cleaned up: one column until the form returns in stage 7, all state colors (hover, unavailable card, stock, error) moved into CSS variables so both themes stay readable, a hover effect on cards, a global `:focus-visible` outline and a style for the empty list message.

### Verification Table - Stage 6
| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S6-R1 | npm run api starts, route shows JSON | [package.json#L11](https://github.com/andreii806/BikeShop/blob/4cdb51013601a8e98b207c7c662cc6a2f0784e55/frontend/package.json#L11), [db.json](https://github.com/andreii806/BikeShop/blob/4cdb51013601a8e98b207c7c662cc6a2f0784e55/frontend/db.json) | open localhost:3001/piese |
| S6-R2 | data no longer in React code | [App.jsx#L11](https://github.com/andreii806/BikeShop/blob/4cdb51013601a8e98b207c7c662cc6a2f0784e55/frontend/src/App.jsx#L11) | read |
| S6-R3 | loading message while waiting | [App.jsx#L72](https://github.com/andreii806/BikeShop/blob/4cdb51013601a8e98b207c7c662cc6a2f0784e55/frontend/src/App.jsx#L72) | `npx json-server --watch db.json --port 3001 --delay 4000` |
| S6-R4 | error message when API is down | [App.jsx#L16-L32](https://github.com/andreii806/BikeShop/blob/4cdb51013601a8e98b207c7c662cc6a2f0784e55/frontend/src/App.jsx#L16-L32), [App.jsx#L73-L77](https://github.com/andreii806/BikeShop/blob/4cdb51013601a8e98b207c7c662cc6a2f0784e55/frontend/src/App.jsx#L73-L77) | stop npm run api, refresh |
| S6-R5 | fetch only in api.js, URL from env | [api.js#L1-L9](https://github.com/andreii806/BikeShop/blob/4cdb51013601a8e98b207c7c662cc6a2f0784e55/frontend/src/api.js#L1-L9), [.env.example](https://github.com/andreii806/BikeShop/blob/4cdb51013601a8e98b207c7c662cc6a2f0784e55/frontend/.env.example) | search for fetch |
| S6-R6 | README Stage 6 section + AI log | [README.md#L127-L135](https://github.com/andreii806/BikeShop/blob/41ad5491b58cabc49e507356a976d3a90b45fd18/README.md?plain=1#L127-L135), [etapa-06.md](https://github.com/andreii806/BikeShop/blob/41ad5491b58cabc49e507356a976d3a90b45fd18/ai-log/etapa-06.md?plain=1#L1-L26) | read |
| S6-R7 | commit "Stage 6" pushed | [4cdb510](https://github.com/andreii806/BikeShop/commit/4cdb51013601a8e98b207c7c662cc6a2f0784e55) | commit history |
