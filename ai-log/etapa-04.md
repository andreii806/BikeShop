# Stage 4: AI log

## Tools
- Gemini

## Conversations
- [<Gemini share link> (splitting the list into components)](https://share.gemini.google/B5nOOVZQje61)

## Key requests

### 1. Card and list components
- Asked: How to split the list into a component for one part and one for the whole list.
- Got: `PiesaCard` receives one item through props, `PiesaList` maps over the array and renders a card per item.
- Changed or rejected: Added a label map (`ETICHETE_CATEGORIE`) so the data keeps values without diacritics while the screen shows the readable text.

### 2. The key warning
- Asked: Why the console shows "Each child in a list should have a unique key prop".
- Got: `key` must be on the element returned directly from `map`, with the item id as value.
- Changed or rejected: Put `key={piesa.id}` on `PiesaCard`, not on an element inside the card, and not the index.

## What I learned / what did not work
- Props are read-only; the card only displays what it receives.
- An early `return` handles the empty list before rendering the `<ul>`.
- A prop name must match on both sides, otherwise the child receives `undefined`.
