/* js/supabase.js
   This file previously contained the Supabase project URL and anon key which were embedded
   in the client bundle. Those credentials have been removed and database writes now go
   through server-side endpoints (see /api/enquiries and /api/bookings).

   THIS FILE IS NOW ARCHIVED IN-PLACE TO AVOID EXPOSED CREDENTIALS. Do NOT restore secrets
   here. If you need the original file for reference, recover it from git history, then
   rotate any keys that were committed.

   Recommended next steps:
   1. Rotate the Supabase anon and service_role keys in the Supabase dashboard.
   2. Ensure SUPABASE_URL and SUPABASE_SERVICE_KEY are set as environment variables in Vercel.
   3. Remove this file completely from the repository if you do not need it in history (note: history will still contain previous commits).
*/

// Intentionally left blank to prevent accidental client-side DB access
