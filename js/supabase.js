// Robust environment detection for Vite (import.meta.env), runtime (window.__ENV), and Node/SSR (process.env)
let envFromImportMeta = {};
try {
  // import.meta is only available in module contexts. Access it inside try so failing environments fall back cleanly.
  // Using import.meta directly inside try avoids the problematic `typeof import` check which can cause
  // SyntaxError in some parsers/environments.
  envFromImportMeta = (import.meta && import.meta.env) ? import.meta.env : {};
} catch (e) {
  envFromImportMeta = {};
}
const envFromWindow = (typeof window !== 'undefined' && window.__ENV) ? window.__ENV : {};
const envFromProcess = (typeof process !== 'undefined' && process.env) ? process.env : {};
const env = Object.assign({}, envFromImportMeta, envFromWindow, envFromProcess);

const SUPABASE_URL = env.VITE_SUPABASE_URL || env.SUPABASE_URL || '';
const SUPABASE_ANON_KEY = env.VITE_SUPABASE_ANON_KEY || env.SUPABASE_SERVICE_KEY || '';

let supabaseClient = null;
let supabaseLib = (typeof supabase !== 'undefined') ? supabase : null; // may be global from CDN

async function ensureSupabaseLib() {
  if (supabaseLib) return supabaseLib;
  // Try to dynamically import the library (works when bundled / available)
  try {
    const mod = await import('@supabase/supabase-js');
    // library exposes createClient as a named export in modern bundles
    supabaseLib = mod?.createClient ? mod : (mod?.default ? mod.default : null);
    return supabaseLib;
  } catch (err) {
    // dynamic import failed — fall back to global (if present) or null
    supabaseLib = (typeof supabase !== 'undefined') ? supabase : null;
    return supabaseLib;
  }
}

async function initSupabaseClient() {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
    console.error(
      "[Supabase] Missing configuration. Ensure environment variables are set:\n" +
      "  VITE_SUPABASE_URL\n" +
      "  SUPABASE_SERVICE_KEY"
    );
    console.debug('[Supabase] Computed env:', { SUPABASE_URL, SUPABASE_ANON_KEY, rawEnv: envFromImportMeta || envFromWindow || envFromProcess });
    return null;
  }

  const lib = await ensureSupabaseLib();
  if (!lib) {
    console.error(
      "[Supabase] SDK not found. Either include the Supabase CDN script before this script, or make sure @supabase/supabase-js is bundled/available for dynamic import. Example CDN usage:\n" +
      '<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>\n' +
      '<script src="/js/supabase.js" type="module"></script>'
    );
    return null;
  }

  try {
    // lib may be the module namespace (with createClient) or the global supabase object
    const createClient = lib.createClient || (lib.supabase && lib.supabase.createClient) || (typeof supabase !== 'undefined' && supabase.createClient);
    if (!createClient) {
      console.error('[Supabase] createClient not found on the Supabase module/object.');
      return null;
    }

    const client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      },
    });
    console.log("[Supabase] Client connected");
    return client;
  } catch (err) {
    console.error("[Supabase] Failed to create client:", err);
    return null;
  }
}

function getClient() {
  if (!supabaseClient) {
    // initSupabaseClient may be async if it needs to import; ensure we handle that
    // but keep the API synchronous for callers by returning the already initialized client when possible
    // For first-time callers, initSupabaseClient will have been kicked off by the immediate init below
    return supabaseClient;
  }
  return supabaseClient;
}

// Initialize immediately on script load. This kicks off dynamic import if needed.
// Note: initSupabaseClient is async; we capture the promise result into supabaseClient once resolved.
initSupabaseClient().then(client => { supabaseClient = client; }).catch(err => { console.error('[Supabase] init error', err); });

async function sendEnquiryMessage(payload) {
  const client = getClient();
  if (!client) {
    return { error: { message: "Database connection unavailable. Please refresh and try again." } };
  }
  // Insert without SELECT so anon role (INSERT-only) works with RLS
  const { error } = await client.from("enquiries").insert([payload]);
  if (error) console.error("[Supabase] sendEnquiryMessage error:", error);
  return { error };
}

// bookings should behave like enquiry forms: simple INSERT of payload
async function sendBookingRequest(payload) {
  const client = getClient();
  if (!client) {
    return { error: { message: "Database connection unavailable. Please refresh and try again." } };
  }
  const { error } = await client.from("bookings").insert([payload]);
  if (error) console.error("[Supabase] sendBookingRequest error:", error);
  return { error };
}

async function sendIntakeForm(payload) {
  const client = getClient();
  if (!client) {
    return { error: { message: "Database connection unavailable. Please refresh and try again." } };
  }
  // Insert without SELECT so anon role (INSERT-only) works with RLS
  const { error } = await client.from("intake_forms").insert([payload]);
  if (error) console.error("[Supabase] sendIntakeForm error:", error);
  return { error };
}

window.nySupabase = {
  sendEnquiryMessage,
  sendBookingRequest,
  sendIntakeForm,
  getClient,
};
