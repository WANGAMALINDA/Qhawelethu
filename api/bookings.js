const { randomUUID } = require('crypto');

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const payload = req.body || {};

    // Basic validation - add more as needed
    if (!payload.service || !payload.booking_date || !payload.time_slot || !payload.full_name || !payload.email) {
      return res.status(400).json({ error: 'Missing required booking fields' });
    }

    const supabaseUrl = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_KEY;
    if (!supabaseUrl || !key) {
      console.error('Missing SUPABASE_URL or SUPABASE_SERVICE_KEY');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    const id = payload.id || (typeof randomUUID === 'function' ? randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`);
    const row = { id, ...payload };

    const resp = await fetch(`${supabaseUrl.replace(/\/$/, '')}/rest/v1/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: key,
        Authorization: `Bearer ${key}`,
        Prefer: 'return=representation',
      },
      body: JSON.stringify(row),
    });

    const body = await resp.json().catch(() => null);

    if (!resp.ok) {
      console.error('Supabase insert error (bookings):', resp.status, body);
      return res.status(resp.status).json({ error: body || 'Insert failed' });
    }

    return res.status(200).json({ ok: true, data: Array.isArray(body) ? body[0] : body });
  } catch (err) {
    console.error('API error (bookings):', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
