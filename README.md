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