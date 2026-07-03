const SUPABASE_URL = "https://guerbgchojefhgljyake.supabase.co";

// Read the anon key from a runtime-injected meta tag or a window variable.
// This keeps the publishable key out of source control. Deployers should inject
// the key into the HTML (see README_SUPABASE_ENV.md).
const SUPABASE_ANON_KEY =
  (typeof document !== 'undefined' && document.querySelector("meta[name=\"supabase-key\"]")?.getAttribute('content')) ||
  (typeof window !== 'undefined' && window.__SUPABASE_ANON_KEY) ||
  null;

const supabaseClient =
  typeof supabase !== 'undefined' && SUPABASE_ANON_KEY
    ? supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
    : null;

function sendEnquiryMessage(payload) {
  if (!supabaseClient) {
    return Promise.resolve({ error: { message: "Supabase client unavailable" } });
  }
  return supabaseClient.from("enquiries").insert([payload]);
}

function sendBookingRequest(payload) {
  if (!supabaseClient) {
    return Promise.resolve({ error: { message: "Supabase client unavailable" } });
  }
  return supabaseClient.from("bookings").insert([payload]);
}

window.nySupabase = {
  sendEnquiryMessage,
  sendBookingRequest,
};
