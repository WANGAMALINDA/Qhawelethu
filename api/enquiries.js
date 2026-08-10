module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { name, email, message, created_at } = req.body || {};
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const supabaseUrl = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_KEY;
    if (!supabaseUrl || !key) {
      console.error('Missing SUPABASE_URL or SUPABASE_SERVICE_KEY');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    const payload = {
      name: String(name).trim(),
      email: String(email).trim(),
      message: String(message).trim(),
      created_at: created_at || new Date().toISOString(),
    };

    const resp = await fetch(`${supabaseUrl.replace(/\/$/, '')}/rest/v1/enquiries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: key,
        Authorization: `Bearer ${key}`,
        Prefer: 'return=representation',
      },
      body: JSON.stringify(payload),
    });

    const body = await resp.json().catch(() => null);

    if (!resp.ok) {
      console.error('Supabase insert error (enquiries):', resp.status, body);
      return res.status(resp.status).json({ error: body || 'Insert failed' });
    }

    // return the inserted row for reference
    return res.status(200).json({ ok: true, data: Array.isArray(body) ? body[0] : body });
  } catch (err) {
    console.error('API error (enquiries):', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
