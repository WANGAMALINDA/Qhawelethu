// js/supabase.js
const SUPABASE_URL = "https://guerbgchojefhgljyake.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_42zYBuYrbTwDxTVm_1TvaA_uaId6Bi1";

// Wait for Supabase to load before creating the client
const supabaseClient = (() => {
  if (typeof supabase !== "undefined" && supabase.createClient) {
    return supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
  return null;
})();

// Add a loader that retries client creation if it failed initially
function ensureSupabaseClient() {
  if (supabaseClient) return supabaseClient;
  if (typeof supabase !== "undefined" && supabase.createClient) {
    return supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
  return null;
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