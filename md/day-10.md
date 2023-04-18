# Day 10: Create a List - https://youtu.be/yu0mVy3iIFk

1. Fix schema

2. Create form (actions, validate, insert, i18n)

Note:

- [svelte-check fact](https://dev.to/davipon/add-lint-staged-to-sveltekit-project-108l)

  - Why is there no option to only check specific files (for example only staged files)?
  - svelte-check: check only files mentioned as arguments #353

- `setLocale(locals.locale)` I just don't like this exist in server

- Also the create is so weird (client (create) --POST-> server --RESPONSE-> client (create) --REDIRECT-> client (detail) )
