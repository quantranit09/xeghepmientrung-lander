// Serverless email endpoint for Vercel (Node runtime).
// Handles CORS, validates lead payloads, and sends booking emails via Gmail SMTP.

const nodemailer = require('nodemailer');

const DEFAULT_ALLOW_ORIGINS = [
  'https://xedanangquangtri.com',
  'https://www.xedanangquangtri.com',
  'https://xeghepmientrung.com',
  'https://www.xeghepmientrung.com',
  'http://localhost:3000',
  'http://localhost:3001',
  'http://127.0.0.1:3000',
  'http://127.0.0.1:3001',
];

const ALLOW_ORIGINS = Array.from(
  new Set([
    ...DEFAULT_ALLOW_ORIGINS,
    ...(process.env.ALLOW_ORIGINS || '')
      .split(',')
      .map((origin) => origin.trim())
      .filter(Boolean),
  ]),
);

function setCors(req, res) {
  const origin = req.headers.origin;
  if (origin && ALLOW_ORIGINS.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
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

function stringValue(value) {
  return String(value || '').trim();
}

function firstValue(...values) {
  return values.map(stringValue).find(Boolean) || '';
}

function validate(raw) {
  const data = {
    name: firstValue(raw.customerName, raw.name) || 'Khách chưa cung cấp tên',
    phone: firstValue(raw.contactPhone, raw.phone),
    pickup: firstValue(raw.pickup),
    dropoff: firstValue(raw.destination, raw.dropoff),
    date: firstValue(raw.travelDate, raw.date),
    time: firstValue(raw.travelTime, raw.time),
    passengers: firstValue(raw.passengerCount, raw.passengers, raw.seats),
    vehicle: firstValue(raw.vehiclePreference, raw.vehicle_type, raw.vehicleType),
    serviceType: firstValue(raw.service_type, raw.serviceType) || 'Xe riêng / xe hợp đồng / transfer',
    note: firstValue(raw.note),
    orderInfo: firstValue(raw.order_info, raw.message),
    source: firstValue(raw.source),
    formName: firstValue(raw.form_name, raw.formName) || 'trip_request',
    hp: firstValue(raw._hp, raw._gotcha),
  };

  const errors = {};
  if (!data.phone) errors.phone = 'Required';
  if (!data.pickup) errors.pickup = 'Required';
  if (!data.dropoff) errors.dropoff = 'Required';

  return { ok: Object.keys(errors).length === 0, errors, data };
}

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
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
}

function escapeHtml(value) {
  return stringValue(value).replace(/[&<>"]/g, (char) => {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
    }[char];
  });
}

function infoRow(label, value, strong = false) {
  return `
    <tr>
      <td class="label">${escapeHtml(label)}</td>
      <td class="${strong ? 'value value-strong' : 'value'}">${escapeHtml(value || 'Chưa cung cấp')}</td>
    </tr>
  `;
}

function createEmailTemplate(data, meta) {
  const routeText = `${data.pickup} ⇄ ${data.dropoff}`;

  return `
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body{margin:0;background:#f3f7fb;color:#10203f;font-family:Arial,Helvetica,sans-serif;line-height:1.5}
    .wrap{max-width:680px;margin:0 auto;padding:24px 14px}
    .card{overflow:hidden;border:1px solid #dbe7f5;border-radius:14px;background:#fff;box-shadow:0 14px 32px rgba(16,32,63,.08)}
    .header{background:#0057d9;color:#fff;padding:22px 24px}
    .brand{font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;opacity:.9}
    h1{margin:6px 0 0;font-size:22px;line-height:1.25}
    .sub{margin:8px 0 0;color:#dceaff;font-size:14px}
    .content{padding:22px 24px 24px}
    .summary{margin:0 0 18px;padding:14px 16px;border:1px solid #b7ddca;border-radius:12px;background:#f0fdf5;color:#07653c;font-size:15px;font-weight:700}
    table{width:100%;border-collapse:separate;border-spacing:0;border:1px solid #e5edf7;border-radius:12px;overflow:hidden}
    td{padding:12px 14px;border-bottom:1px solid #e5edf7;vertical-align:top;font-size:14px}
    tr:last-child td{border-bottom:0}
    .label{width:34%;background:#f8fbff;color:#4a5f7c;font-weight:700}
    .value{color:#10203f}
    .value-strong{font-weight:700;color:#0057d9}
    .note{margin-top:18px;padding:14px 16px;border-left:4px solid #079455;border-radius:10px;background:#f7fbff;color:#344863;font-size:14px}
    .raw{margin-top:16px;padding:14px 16px;border-radius:10px;background:#f8fafc;color:#344863;font-size:13px;white-space:pre-line}
    .meta{margin:18px 0 0;color:#70839f;font-size:12px}
    a{color:#0057d9}
  </style>
</head>
<body>
  <div class="wrap">
    <div class="card">
      <div class="header">
        <div class="brand">Bảo Trang Transport</div>
        <h1>Yêu cầu báo giá xe riêng</h1>
        <p class="sub">Xe riêng / xe hợp đồng / transfer 4, 5, 7 chỗ</p>
      </div>
      <div class="content">
        <p class="summary">${escapeHtml(routeText)}</p>
        <table role="presentation">
          ${infoRow('Tên khách', data.name)}
          ${infoRow('SĐT/Zalo', data.phone, true)}
          ${infoRow('Điểm đón tận nơi', data.pickup)}
          ${infoRow('Điểm trả tận nơi', data.dropoff)}
          ${infoRow('Ngày sử dụng xe', data.date)}
          ${infoRow('Giờ đón dự kiến', data.time)}
          ${infoRow('Số khách', data.passengers)}
          ${infoRow('Dòng xe mong muốn', data.vehicle)}
          ${infoRow('Dịch vụ', data.serviceType)}
          ${data.note ? infoRow('Ghi chú', data.note) : ''}
        </table>

        <div class="note">
          Khách đã để lại thông tin trên website. Vui lòng liên hệ lại qua SĐT/Zalo để xác nhận lịch trình và báo giá.
        </div>

        ${data.orderInfo ? `<div class="raw">${escapeHtml(data.orderInfo)}</div>` : ''}

        <p class="meta">
          Nguồn: ${escapeHtml(data.source || 'Website')}<br>
          IP: ${escapeHtml(meta.ip)}<br>
          UA: ${escapeHtml(meta.ua)}
        </p>
      </div>
    </div>
  </div>
</body>
</html>
`.trim();
}

function createPlainTextMessage(data, meta) {
  return [
    'BAO TRANG TRANSPORT - YEU CAU BAO GIA XE RIENG',
    '======================================',
    `Ten khach: ${data.name}`,
    `SDT/Zalo: ${data.phone}`,
    `Diem don tan noi: ${data.pickup}`,
    `Diem tra tan noi: ${data.dropoff}`,
    `Ngay su dung xe: ${data.date || 'Chua cung cap'}`,
    `Gio don du kien: ${data.time || 'Chua cung cap'}`,
    `So khach: ${data.passengers || 'Chua cung cap'}`,
    `Dong xe mong muon: ${data.vehicle || 'Chua cung cap'}`,
    `Dich vu: ${data.serviceType}`,
    data.note ? `Ghi chu: ${data.note}` : '',
    '',
    data.orderInfo || '',
    '',
    `Nguon: ${data.source || 'Website'}`,
    `IP: ${meta.ip}`,
    `UA: ${meta.ua}`,
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

    if (data.hp) return badRequest(res, 'Bot detected');
    if (!ok) return badRequest(res, 'Invalid payload', errors);

    const ip = getClientIp(req);
    const ua = stringValue(req.headers['user-agent']);
    const html = createEmailTemplate(data, { ip, ua });
    const text = createPlainTextMessage(data, { ip, ua });
    const transporter = makeTransporter();
    const routeText = `${data.pickup} ⇄ ${data.dropoff}`;

    const mailOptions = {
      from: `"Bảo Trang Transport" <${process.env.GMAIL_USER}>`,
      to: process.env.BOOKING_EMAIL_TO || process.env.GMAIL_USER,
      subject: `[Bảo Trang] Yêu cầu báo giá xe riêng ${routeText}`,
      html,
      text,
      headers: {
        'X-Form-Phone': data.phone,
        'X-Client-IP': ip,
        'X-Service-Type': data.serviceType,
      },
    };

    if (process.env.BOOKING_EMAIL_CC) {
      mailOptions.cc = process.env.BOOKING_EMAIL_CC;
    }

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Email send failed:', err);
    const message = err?.response?.toString?.() || err.message || 'Unknown error';
    return res.status(500).json({ success: false, error: message });
  }
};
