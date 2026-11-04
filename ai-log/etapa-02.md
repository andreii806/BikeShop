# Stage 2: AI log

## Tools
- Gemini

## Conversations
- [<Gemini share link> (immutable array functions for the parts list)](https://share.gemini.google/B5nOOVZQje61)

## Key requests

### 1. Safe id for new items
- Asked: How to compute the id of a new part so it stays unique after deletions.
- Got: Use `reduce` to find the maximum existing id and add one, instead of `lista.length + 1`.
- Changed or rejected: Kept it as a separate `nextId` function, reused by `adaugaPiesa`.

### 2. Immutable add, toggle and delete
- Asked: How to add, toggle and delete items without changing the original array.
- Got: `[...lista, nou]` for add, `map` with `{ ...t, gata: !t.gata }` for toggle and `filter` for delete.
- Changed or rejected: Renamed everything for my theme (`piese`, `CATEGORII`, `adaugaPiesa`, `comutaStare`, `stergePiesa`) and added validation for an empty name and an invalid category, with messages in the console.

## What I learned / what did not work
- Functions that return new arrays keep the original data intact; the console test proves the original still has 3 items.
- `toLowerCase()` on both texts is needed for a case-insensitive search.
- An arrow function with braces needs an explicit `return`, otherwise it returns `undefined`.
