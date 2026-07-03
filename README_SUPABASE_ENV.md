Provide Supabase publishable key at deploy/build time

This project intentionally does not store the Supabase publishable (anon) key in source control.
The frontend looks for the key at runtime in one of two places (in order):

1. A meta tag in `index.html`:

   <meta name="supabase-key" content="sb_publishable_42zYBuYrbTwDxTVm_1TvaA_uaId6Bi1">

   Inject this meta tag at build or server-render time using your hosting provider or CI.

2. A global window variable set before the app scripts run:

   <script>
     window.__SUPABASE_ANON_KEY = sb_publishable_42zYBuYrbTwDxTVm_1TvaA_uaId6Bi1;
   </script>

Why this approach?
- Publishable keys are safe to expose to clients, but storing them in the repo makes rotation and secret management harder.
- By injecting at deploy time you can keep the repo free of keys and rotate them safely via environment secrets.

Local development
- For local testing you can add the meta tag temporarily to `index.html` or run a small build step that replaces the placeholder.

Server-side alternative (recommended for privileged ops)
- For any privileged operations or to keep tighter control, implement a server-side endpoint that talks to Supabase with a service role key and validates inputs before writing.
