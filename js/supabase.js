const SUPABASE_URL = "https://guerbgchojefhgljyake.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_42zYBuYrbTwDxTVm_1TvaA_uaId6Bi1";

const supabaseClient = typeof supabase !== "undefined" ? supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;

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
