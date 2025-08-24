// api/send-mail.js
// Serverless email endpoint for Vercel (Node runtime)
// - Handles CORS and OPTIONS preflight
// - Validates payload
// - Sends via Gmail SMTP (App Password required)

const nodemailer = require('nodemailer');

// Simple CORS allowlist (edit to your domain)
const ALLOW_ORIGINS = [
  'https://xeghepmientrung.com',
  'https://www.xeghepmientrung.com',
  'http://localhost:3000'
];

function setCors(req, res) {
  const origin = req.headers.origin;
  if (origin && ALLOW_ORIGINS.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin'); // important for caching
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
}

function badRequest(res, message, fields = {}) {
  return res.status(400).json({ success: false, error: message, fields });
}

function getClientIp(req) {
  return (
    req.headers['x-real-ip'] ||
    (Array.isArray(req.headers['x-forwarded-for'])
      ? req.headers['x-forwarded-for'][0]
      : (req.headers['x-forwarded-for'] || '').split(',')[0]) ||
    req.socket?.remoteAddress ||
    'unknown'
  );
}

// Parse JSON body robustly (Vercel may or may not parse depending on runtime)
async function readJsonBody(req) {
  if (req.body && typeof req.body === 'object') return req.body;

  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString('utf8').trim();
  if (!raw) return {};
  try {
    return JSON.parse(raw);
  } catch {
    throw new Error('Invalid JSON body');
  }
}

// Basic payload validation
function validate(data) {
  const errors = {};
  const isNonEmpty = (v) => typeof v === 'string' && v.trim().length > 0;

  if (!isNonEmpty(data.name)) errors.name = 'Required';
  if (!isNonEmpty(data.phone)) errors.phone = 'Required';

  // Optional fields
  const safe = {
    name: String(data.name || '').trim(),
    phone: String(data.phone || '').trim(),
    pickup: String(data.pickup || '').trim(),
    dropoff: String(data.dropoff || '').trim(),
    date: String(data.date || '').trim(),
    time: String(data.time || '').trim(),
    seats: String(data.seats || '').trim(),
    note: String(data.note || '').trim(),
    order_info: String(data.order_info || '').trim(),
    // Honeypot anti-bot field (should be empty)
    _hp: String(data._hp || '').trim(),
  };

  return { ok: Object.keys(errors).length === 0, errors, data: safe };
}

// Gmail transporter (App Password recommended)
function makeTransporter() {
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    throw new Error('Missing GMAIL_USER or GMAIL_APP_PASSWORD env vars');
  }
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD
    }
  });
}

function createEmailTemplate(data, meta) {
  const esc = (s) =>
    s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  return `
<!DOCTYPE html><html><head><meta charset="UTF-8">
<style>
  body{font-family:Arial,Helvetica,sans-serif;line-height:1.6;color:#1f2937;background:#f3f4f6}
  .container{max-width:640px;margin:24px auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb}
  .header{background:#2e7d32;color:#fff;padding:20px 24px}
  .title{margin:0;font-size:20px}
  .sub{margin:4px 0 0 0;opacity:.9}
  .content{padding:20px 24px}
  .row{display:flex;gap:8px;margin:8px 0;padding:10px;background:#f9fafb;border-radius:8px}
  .label{min-width:140px;font-weight:700;color:#2e7d32}
  .note{background:#fff3cd;border-left:4px solid #ffc107;padding:12px;border-radius:8px;margin-top:16px}
  .muted{color:#6b7280;font-size:12px;margin-top:16px}
</style>
</head><body>
  <div class="container">
    <div class="header">
      <h1 class="title">🚌 Đặt chỗ xe ghép</h1>
      <p class="sub">Tuyến Đà Nẵng ↔ Quảng Trị</p>
    </div>
    <div class="content">
      <div class="row"><div class="label">👤 Tên khách hàng</div><div>${esc(data.name)}</div></div>
      <div class="row"><div class="label">📞 Số điện thoại</div><div>${esc(data.phone)}</div></div>
      <div class="row"><div class="label">📍 Điểm đón</div><div>${esc(data.pickup || 'Không có')}</div></div>
      <div class="row"><div class="label">🏁 Điểm trả</div><div>${esc(data.dropoff || 'Không có')}</div></div>
      <div class="row"><div class="label">📅 Ngày đi</div><div>${esc(data.date || 'Không có')}</div></div>
      <div class="row"><div class="label">⏰ Giờ đi</div><div>${esc(data.time || 'Không có')}</div></div>
      <div class="row"><div class="label">👥 Số ghế</div><div>${esc(data.seats || 'Không có')}</div></div>
      ${data.note ? `<div class="row"><div class="label">💬 Ghi chú</div><div>${esc(data.note)}</div></div>` : ''}
      ${data.order_info ? `<div class="row" style="flex-direction:column">
        <div class="label">📋 Thông tin đặt chỗ</div>
        <div>${esc(data.order_info).replace(/\n/g, '<br>')}</div>
      </div>` : ''}

      <div class="note"><strong>⚠️ Lưu ý:</strong> Vui lòng liên hệ khách để xác nhận đặt chỗ sớm nhất.</div>
      <p class="muted">Email này được gửi từ form đặt chỗ • IP: ${esc(meta.ip)} • UA: ${esc(meta.ua)}</p>
    </div>
  </div>
</body></html>
`.trim();
}

function createPlainTextMessage(data, meta) {
  const line = '=====================================';
  return [
    '🚌 ĐẶT CHỖ XE GHÉP ĐÀ NẴNG ↔ QUẢNG TRỊ',
    line,
    '',
    `👤 Tên khách hàng: ${data.name}`,
    `📞 Số điện thoại: ${data.phone}`,
    `📍 Điểm đón: ${data.pickup || 'Không có'}`,
    `🏁 Điểm trả: ${data.dropoff || 'Không có'}`,
    `📅 Ngày đi: ${data.date || 'Không có'}`,
    `⏰ Giờ đi: ${data.time || 'Không có'}`,
    `👥 Số ghế: ${data.seats || 'Không có'}`,
    data.note ? `💬 Ghi chú: ${data.note}` : '',
    '',
    data.order_info || '',
    '',
    `IP: ${meta.ip}`,
    `UA: ${meta.ua}`
  ].filter(Boolean).join('\n');
}

module.exports = async function handler(req, res) {
  setCors(req, res);

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const body = await readJsonBody(req);
    const { ok, errors, data } = validate(body);

    // Honeypot check (bots often fill hidden field)
    if (data._hp) return badRequest(res, 'Bot detected');

    if (!ok) return badRequest(res, 'Invalid payload', errors);

    const ip = getClientIp(req);
    const ua = String(req.headers['user-agent'] || '');
    const html = createEmailTemplate(data, { ip, ua });
    const text = createPlainTextMessage(data, { ip, ua });

    const transporter = makeTransporter();

    const mailOptions = {
      from: `"Xe Ghép Miền Trung" <${process.env.GMAIL_USER}>`,
      to: process.env.BOOKING_EMAIL_TO || 'tranvantrieu.qt@gmail.com',
      cc: process.env.BOOKING_EMAIL_CC || 'quan.tran@emandai.net',
      subject: '🚌 Đặt chỗ xe ghép Đà Nẵng ↔ Quảng Trị',
      html,
      text,
      // Set reply-to to the phone wrapped in a fallback email (optional).
      // If you also collect customer email, prefer that:
      // replyTo: data.email || process.env.GMAIL_USER,
      headers: {
        'X-Form-Phone': data.phone,
        'X-Client-IP': ip
      }
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Email send failed:', err);
    const msg = err?.response?.toString?.() || err.message || 'Unknown error';
    return res.status(500).json({ success: false, error: msg });
  }
};
