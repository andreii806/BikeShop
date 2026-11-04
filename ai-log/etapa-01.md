# Stage 1: AI log

## Tools
- Gemini


## Conversations
- [<Gemini share link> (CSS Grid layout and responsive behaviour)](https://share.gemini.google/B5nOOVZQje61)


## Key requests

### 1. Two-column layout
- Asked: How to structure a 2-column page with an add form on the left and a card list on the right.
- Got: `display: grid` on the main container with `grid-template-columns: 1fr 2fr` and a `@media (max-width: 700px)` rule that switches to one column.
- Changed or rejected: I used a fixed 320px column for the form (`320px 1fr`) so the form does not grow on wide screens; the page stays on one column under 700px.

### 2. Dark theme
- Asked: How to add a dark theme without rewriting every rule.
- Got: Define all colors as CSS variables in `:root` and redefine only the variables inside `@media (prefers-color-scheme: dark)`.
- Changed or rejected: Kept the idea, but picked my own palette (aluminium / frame-blue / hi-vis yellow) to match the bike shop theme.

## What I learned / what did not work
- CSS custom properties make a dark theme a matter of changing a few values, not duplicating rules.
- Colors written directly (for example `#fff`) stay the same in dark mode, so they have to become variables too.
- `:focus-visible` gives a visible outline for keyboard users without showing it on mouse clicks.
