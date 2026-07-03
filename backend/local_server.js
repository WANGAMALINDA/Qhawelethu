const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 4000;
const RATE_LIMIT_WINDOW_MS = 10 * 1000; // 10 seconds
const ipLastSeen = new Map();

function writeSubmission(data) {
  const file = path.join(__dirname, 'submissions.jsonl');
  const line = JSON.stringify({ received_at: new Date().toISOString(), data });
  fs.appendFile(file, line + '\n', (err) => {
    if (err) console.error('Failed to write submission', err);
  });
}

const server = http.createServer((req, res) => {
  if (req.method !== 'POST' || req.url !== '/local-submit') {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not found' }));
    return;
  }

  const ip = req.socket.remoteAddress || req.headers['x-forwarded-for'] || 'unknown';
  const now = Date.now();
  const last = ipLastSeen.get(ip) || 0;
  if (now - last < RATE_LIMIT_WINDOW_MS) {
    res.writeHead(429, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Rate limit exceeded' }));
    return;
  }
  ipLastSeen.set(ip, now);

  let body = '';
  req.on('data', (chunk) => (body += chunk));
  req.on('end', () => {
    try {
      const payload = JSON.parse(body || '{}');
      writeSubmission(payload);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: true }));
    } catch (err) {
      console.error('Invalid payload', err);
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Invalid JSON' }));
    }
  });
});

server.listen(PORT, () => console.log(`Local submission server running on http://localhost:${PORT}`));
