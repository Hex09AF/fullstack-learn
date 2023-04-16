# Day 7: Locales DB Seed | New User On-boarding Flow - https://youtu.be/3UswI1hswxY

1. Migrate new schema for onboarding setting

2. Create `userSettings` when the first time user using the app ([ref](https://next-auth.js.org/configuration/events#createuser))

3. Extend auth user type (setting) for auto completion (in type.d.ts) ([ref](https://authjs.dev/getting-started/typescript))

4. Use settings when get session ([ref](https://next-auth.js.org/configuration/callbacks#session-callback))

5. Setup group route and middleware to redirecting unauth / auth / onboarded user

Note:

- Need eslint plugin (eslint-plugin-import-no-duplicates-prefix-resolved-path) to fix this kind of import:

```
  import { enhance } from '$app/forms';
  import { deserialize } from '$app/forms';
```

and

```
  import { enhance } from '$app/forms';
  import { goto } from '$app/navigation';
```
