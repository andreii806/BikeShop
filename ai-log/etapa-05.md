# Stage 5: AI log

## Tools
- Gemini

## Conversations
- [<Gemini share link> (state, events and the theme toggle)](https://share.gemini.google/B5nOOVZQje61)

## Key requests

### 1. Toggle and delete from the card
- Asked: How a card can change the list that lives in `App`.
- Got: Keep the list in `useState` in `App`, write `handleToggle` / `handleDelete` with `setPiese((prev) => ...)` and pass them down as `onToggle` / `onDelete`.
- Changed or rejected: Used `onClick={() => onDelete(piesa.id)}` (not `onClick={onDelete(piesa.id)}`, which would run on render) and added an `aria-label` with the part name.

### 2. Light / dark toggle
- Asked: How to switch the theme from a button, regardless of the system setting.
- Got: Keep the theme in state, write `data-theme` on `<html>` and add `:root[data-theme="dark"]` plus `:root:not([data-theme="light"])` inside the system dark media query.
- Changed or rejected: The first version still had colors written directly, so some parts stayed light; I fixed the dark color scheme in a separate commit.

## What I learned / what did not work
- State must be updated immutably; changing the array in place does not re-render.
- The header counter is a derived value, computed on every render, not kept in its own state.
- A controlled checkbox needs both `checked` and `onChange`.
