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