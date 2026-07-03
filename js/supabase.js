// js/supabase.js
const SUPABASE_URL = "https://guerbgchojefhgljyake.supabase.co";

// Read the anon key from a runtime-injected meta tag or window variable.
// Fallback to hard-coded value for local dev only.
const SUPABASE_ANON_KEY =
  (typeof document !== 'undefined' && document.querySelector("meta[name=\"supabase-key\"]")?.getAttribute('content')) ||
  (typeof window !== 'undefined' && window.__SUPABASE_ANON_KEY) ||
  "sb_publishable_42zYBuYrbTwDxTVm_1TvaA_uaId6Bi1";

const supabaseClient = typeof supabase !== "undefined" ? supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;

function ensureSupabaseClient() {
  return supabaseClient;
}

function sendEnquiryMessage(payload) {
  const client = ensureSupabaseClient();
  if (!client) {
    return Promise.resolve({ error: { message: "Supabase client unavailable" } });
  }
  return client.from("enquiries").insert([payload]);
}

function sendBookingRequest(payload) {
  const client = ensureSupabaseClient();
  if (!client) {
    return Promise.resolve({ error: { message: "Supabase client unavailable" } });
  }
  return client.from("bookings").insert([payload]);
}

window.nySupabase = {
  sendEnquiryMessage,
  sendBookingRequest,
};