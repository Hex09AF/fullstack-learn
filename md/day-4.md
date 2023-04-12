# day 4 : Contributing Guides | Internationalization (i18n) - https://youtu.be/tR7CJAFdcGo

- [x] Setup i18n:

  - Research options (i18next, typesafe-18n)
  - Install / setup
  - Use dictionaries on landing page

- [ ] Setup Auth:

  - Install
  - Setup @auth/core

- [ ] Deploy:

  - Free Tier:

    - Serverless / Sdge function support:
      - Connection pooling
    - Hasura
    - Fly.io
    - Supabase
    - Railway
    - Elephantsql

  - Paid:

    - Heroku
    - AWS RDS

Note:

- hooks.server.js
- https://blog.encodeart.dev/typesafe-i18n-with-sveltekit
- i18n issue between server and client (https://youtu.be/tR7CJAFdcGo?t=18227) => pass the locals through entire app (hooks.server => layout.server => layout.ts => layout.sevelte)
