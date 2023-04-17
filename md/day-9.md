# Day 9: Lint Staged Setup | Config Validation | Loading States - https://youtu.be/oxrz3ueZzmo

1. Setup lint-staged

2. Setup loading state

3. Setup config loader (also validating)

Note:

- setup lint-staged typecheck ([ref](https://github.com/okonet/lint-staged#example-run-tsc-on-changes-to-typescript-files-but-do-not-pass-any-filename-arguments))

- to be able to use this kind of import `import { config } from '$/lib/config.server';`
  - we have to tell vite resolve path (vite.config.ts):
    ```ts
    resolve: {
      alias: {
        $: resolve('./src'),
      },
    },
    ```
  - and tell typescript resolve path (tsconfig.json):
    ```ts
    "paths": {
      "$/*": ["./src/*"],
    },
    ```
