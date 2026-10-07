# Stage 2: AI log
## Tools
- Gemini
## Conversations
- Guidance on implementing immutable array methods (map, filter, reduce) for bicycle parts data logic.
## Key requests
### 1. Immutable Add & ID Generation
- Asked: How to compute nextId using reduce safely after deletions.
- Got: Using reduce to find max id plus one instead of relying on array length.
## What I learned / what did not work
- Learned how pure functions and spread operators prevent side-effects on original arrays.