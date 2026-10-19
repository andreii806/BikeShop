# BikeShop
Online store managing bicycle parts inventory and availability for cycling enthusiasts.

## Data model
| Field | Type | Notes |
| :--- | :--- | :--- |
| name | text | required, max 100 chars |
| status | boolean | toggled from the list, default false |
| category | fixed values | Transmisie, Franare, Suspensie |
| itemType | relation | part type |
| owner | relation | user (from week 11) |

Sample data used across all stages:
1. Pinioane Shimano 11-42t, active, Transmisie
2. Set plăcuțe frână hidraulică, done, Franare
3. Furcă aer 100mm, active, Suspensie

## AI usage
Tool | Used for
--- | ---
ChatGPT / Gemini | Structure styling assistance and CSS Grid layout generation.

## How to run
Open index.html in a browser. No build step, no server.

## Status
- [x] Stage 1: static mockup
- [ ] Stage 2: data logic in JavaScript

## Verification Table
| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S1-R1 | README: description, fields, sample data, how to run | [README.md](https://github.com/andreii806/BikeShop/blob/68b0ab7147aa2da50b64674c5808303c51551ad4/README.md?plain=1#L1-L24) | read |
| S1-R2 | AI usage section | [README.md](https://github.com/andreii806/BikeShop/blob/68b0ab7147aa2da50b64674c5808303c51551ad4/README.md?plain=1#L18-L21) | read |
| S1-R3 | AI log for stage 1 | [ai-log/etapa-01.md](https://github.com/andreii806/BikeShop/blob/68b0ab7147aa2da50b64674c5808303c51551ad4/AI-log/etapa-01.md?plain=1#L1-L11) | read |
| S1-R4 | header, form (text + select), 3 cards with own data | [index.html](https://github.com/andreii806/BikeShop/blob/68b0ab7147aa2da50b64674c5808303c51551ad4/index.html#L9-L59) | open the page |
| S1-R5 | finished card looks different | [style.css (.done)](https://github.com/andreii806/BikeShop/blob/68b0ab7147aa2da50b64674c5808303c51551ad4/style.css#L288-L317) | look at the card |
| S1-R6 | 2 columns on desktop, 1 under 700px | [style.css (@media)](https://github.com/andreii806/BikeShop/blob/68b0ab7147aa2da50b64674c5808303c51551ad4/style.css#L124-L135  https://github.com/andreii806/BikeShop/blob/68b0ab7147aa2da50b64674c5808303c51551ad4/style.css#L329-L344) | resize < 700px |
| S1-R7 | visible focus, readable dark theme | [style.css](https://github.com/andreii806/BikeShop/blob/f61c4629815d0f4a4038cf6deca85e582bf86b42/style.css#L353-L361) | Tab; dark mode |
| S1-R8 | commit "Stage 1" pushed | [Commit history](https://github.com/andreii806/BikeShop/commit/68b0ab7147aa2da50b64674c5808303c51551ad4) | commit history |

## Stage 2: data logic
Plain JavaScript, no DOM. piese.js holds the array and functions that read and change it immutably. Results are printed in the browser console (F12).

## Verification Table - Stage 2
| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S2-R1 | JS file linked, logs on page load | [index.html](https://github.com/andreii806/BikeShop/blob/9fc7dca032b7d37d20c5fde4a59349aec27679e2/index.html#L64) | open page, F12 |
| S2-R2 | 3+ items with id, name, state, tag | [piese.js](https://github.com/andreii806/BikeShop/blob/9fc7dca032b7d37d20c5fde4a59349aec27679e2/piese.js#L6-L10) | read |
| S2-R3 | list, count, search, add, toggle, delete | [piese.js](https://github.com/andreii806/BikeShop/blob/9fc7dca032b7d37d20c5fde4a59349aec27679e2/piese.js#L12-L67) | console output |
| S2-R4 | add rejects empty name and invalid tag | [piese.js](https://github.com/andreii806/BikeShop/blob/9fc7dca032b7d37d20c5fde4a59349aec27679e2/piese.js#L34-L45) | last 2 console lines |
| S2-R5 | original array unchanged after add | [piese.js](https://github.com/andreii806/BikeShop/blob/9fc7dca032b7d37d20c5fde4a59349aec27679e2/piese.js#L54) | console line |
| S2-R6 | README Stage 2 section + AI log | [README.md](https://github.com/andreii806/BikeShop/blob/9fc7dca032b7d37d20c5fde4a59349aec27679e2/README.md?plain=1#L42-L54  https://github.com/andreii806/BikeShop/blob/9fc7dca032b7d37d20c5fde4a59349aec27679e2/AI-log/etapa-02.md?plain=1#L1-L11) | read |
| S2-R7 | commit "Stage 2" pushed | [Commit history](https://github.com/andreii806/BikeShop/commit/9fc7dca032b7d37d20c5fde4a59349aec27679e2) | commit history |

## Stage 3: Vite and React project
The app now lives in frontend/, built with Vite. The data from stage 2 moved into the main component; the list is still printed raw.

## How to run
cd frontend
npm install
npm run dev

## Verification Table - Stage 3
| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S3-R1 | npm run dev starts without errors | https://github.com/andreii806/BikeShop/blob/main/frontend/package.json | npm install, npm run dev |
| S3-R2 | app name and counter computed from data | https://github.com/andreii806/BikeShop/blob/main/frontend/src/App.jsx | edit data, save |
| S3-R3 | data from README, not from the example | https://github.com/andreii806/BikeShop/blob/main/frontend/src/App.jsx | compare with README |
| S3-R4 | stage 1 styles reused | https://github.com/andreii806/BikeShop/blob/main/frontend/src/App.css | look at the page |
| S3-R5 | node_modules ignored, build passes | https://github.com/andreii806/BikeShop/blob/main/frontend/.gitignore | npm run build |
| S3-R6 | README Stage 3 section + AI log | https://github.com/andreii806/BikeShop/blob/main/README.md?plain=1  https://github.com/andreii806/BikeShop/tree/main/AI-log | read |
| S3-R7 | commit "Stage 3" pushed | https://github.com/andreii806/BikeShop/commit/906233530ffe29e21e2137712aa705d0c778524c | commit history |

## Stage 4: components
The list is rendered from the data, through two components:
- PiesaList receives the whole array and renders one card per item
- PiesaCard receives a single item through props and displays it

## Verification Table - Stage 4
| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S4-R1 | 2+ components in src/components/ | https://github.com/andreii806/BikeShop/tree/main/frontend/src/components | open folder |
| S4-R2 | card receives data through props | https://github.com/andreii806/BikeShop/blob/536558592fea48b0af436575392a1862c091eb14/frontend/src/components/PiesaCard.jsx#L7-L21 | read |
| S4-R3 | map + key={id}, no console warnings | https://github.com/andreii806/BikeShop/blob/536558592fea48b0af436575392a1862c091eb14/frontend/src/components/PiesaList.jsx#L12-L14 | F12, Console |
| S4-R4 | message for empty list | https://github.com/andreii806/BikeShop/blob/536558592fea48b0af436575392a1862c091eb14/frontend/src/components/PiesaList.jsx#L5-L7 | set array to [] |
| S4-R5 | state changes the card look | https://github.com/andreii806/BikeShop/blob/536558592fea48b0af436575392a1862c091eb14/frontend/src/components/PiesaCard.jsx#L9 | toggle a done flag |
| S4-R6 | README Stage 4 section + AI log | https://github.com/andreii806/BikeShop/blob/4585008cef2226c496241b8d2b75eab3ee9e76c6/README.md?plain=1#L75-L89 / https://github.com/andreii806/BikeShop/blob/cbbcea01eb3e1066c1633e495506a13f8d6c3dc7/AI-log/etapa-04.md?plain=1#L1-L7 | read |
| S4-R7 | commit "Stage 4" pushed | https://github.com/andreii806/BikeShop/commits/main/ | commit history |