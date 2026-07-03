// ---------------------------------------------------------------------------
// Qhawelethu Wellness — Supabase connection
// Loads a single, persistent client and exposes it on window.nySupabase
// so booking.js and contact.js can insert directly into the database.
// ---------------------------------------------------------------------------

const SUPABASE_URL = "https://guerbgchojefhgljyake.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_42zYBuYrbTwDxTVm_1TvaA_uaId6Bi1";

let supabaseClient = null;

function initSupabaseClient() {
  if (typeof supabase === "undefined") {
    console.error(
      "[Supabase] SDK not found on window. Make sure the Supabase CDN script " +
      "is included BEFORE supabase.js, e.g.:\n" +
      '<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>\n' +
      '<script src="supabase.js"></script>'
    );
    return null;
  }

  try {
    const client = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      },
    });
    console.log("[Supabase] Client connected:", SUPABASE_URL);
    return client;
  } catch (err) {
    console.error("[Supabase] Failed to create client:", err);
    return null;
  }
}

function getClient() {
  if (!supabaseClient) {
    supabaseClient = initSupabaseClient();
  }
  return supabaseClient;
}

// Initialize immediately on script load
supabaseClient = initSupabaseClient();

async function sendEnquiryMessage(payload) {
  const client = getClient();
  if (!client) {
    return { error: { message: "Database connection unavailable. Please refresh and try again." } };
  }
  // No .select() here on purpose: the anon role is only granted INSERT on
  // this table, not SELECT. Chaining .select() makes PostgREST try to read
  // the row back after inserting it, which RLS blocks for anon — and that
  // gets reported as a false "row violates row-level security policy" error
  // even though the insert itself succeeded.
  const { error } = await client.from("enquiries").insert([payload]);
  if (error) console.error("[Supabase] sendEnquiryMessage error:", error);
  return { error };
}

async function sendBookingRequest(payload) {
  const client = getClient();
  if (!client) {
    return { error: { message: "Database connection unavailable. Please refresh and try again." } };
  }
  // Same reasoning as sendEnquiryMessage — no .select() after insert.
  const { error } = await client.from("bookings").insert([payload]);
  if (error) console.error("[Supabase] sendBookingRequest error:", error);
  return { error };
}

window.nySupabase = {
  sendEnquiryMessage,
  sendBookingRequest,
  getClient,
};