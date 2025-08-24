import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const data = req.body;
    
    // Cấu hình SMTP Gmail
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      }
    });

    // Tạo email HTML
    const htmlContent = createEmailTemplate(data);
    const textContent = createPlainTextMessage(data);

    // Gửi email
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'taximientrung43@gmail.com',
      subject: '�� Đặt chỗ xe ghép Đà Nẵng ↔ Quảng Trị',
      html: htmlContent,
      text: textContent,
      replyTo: data.phone
    };

    await transporter.sendMail(mailOptions);
    
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email send failed:', error);
    res.status(500).json({ success: false, error: error.message });
  }
}

function createEmailTemplate(data) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #2e7d32; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
            .info-row { margin: 10px 0; padding: 10px; background: white; border-radius: 4px; }
            .label { font-weight: bold; color: #2e7d32; }
            .value { margin-left: 10px; }
            .highlight { background: #e8f5e8; padding: 15px; border-radius: 4px; margin: 15px 0; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>�� Đặt chỗ xe ghép</h1>
                <p>Đà Nẵng ↔ Quảng Trị</p>
            </div>
            <div class="content">
                <div class="highlight">
                    <strong>Thông tin khách hàng:</strong>
                </div>
                
                <div class="info-row">
                    <span class="label">👤 Tên khách hàng:</span>
                    <span class="value">${data.name}</span>
                </div>
                
                <div class="info-row">
                    <span class="label">📞 Số điện thoại:</span>
                    <span class="value">${data.phone}</span>
                </div>
                
                <div class="info-row">
                    <span class="label">📍 Điểm đón:</span>
                    <span class="value">${data.pickup || 'Không có'}</span>
                </div>
                
                <div class="info-row">
                    <span class="label">🏁 Điểm trả:</span>
                    <span class="value">${data.dropoff || 'Không có'}</span>
                </div>
                
                <div class="info-row">
                    <span class="label">📅 Ngày đi:</span>
                    <span class="value">${data.date || 'Không có'}</span>
                </div>
                
                <div class="info-row">
                    <span class="label">⏰ Giờ đi:</span>
                    <span class="value">${data.time || 'Không có'}</span>
                </div>
                
                <div class="info-row">
                    <span class="label">👥 Số ghế:</span>
                    <span class="value">${data.seats || 'Không có'}</span>
                </div>
                
                ${data.note ? `
                <div class="info-row">
                    <span class="label">💬 Ghi chú:</span>
                    <span class="value">${data.note}</span>
                </div>
                ` : ''}
                
                <div class="highlight">
                    <strong>📋 Thông tin đặt chỗ:</strong><br>
                    ${data.order_info ? data.order_info.replace(/\n/g, '<br>') : ''}
                </div>
                
                <div style="margin-top: 20px; padding: 15px; background: #fff3cd; border-radius: 4px; border-left: 4px solid #ffc107;">
                    <strong>⚠️ Lưu ý:</strong> Vui lòng liên hệ khách hàng để xác nhận đặt chỗ trong thời gian sớm nhất.
                </div>
            </div>
        </div>
    </body>
    </html>
  `;
}

function createPlainTextMessage(data) {
  let message = "�� ĐẶT CHỖ XE GHÉP ĐÀ NẴNG ↔ QUẢNG TRỊ\n";
  message += "=====================================\n\n";
  message += `�� Tên khách hàng: ${data.name}\n`;
  message += `📞 Số điện thoại: ${data.phone}\n`;
  message += `�� Điểm đón: ${data.pickup || 'Không có'}\n`;
  message += `🏁 Điểm trả: ${data.dropoff || 'Không có'}\n`;
  message += `📅 Ngày đi: ${data.date || 'Không có'}\n`;
  message += `⏰ Giờ đi: ${data.time || 'Không có'}\n`;
  message += `👥 Số ghế: ${data.seats || 'Không có'}\n`;
  
  if (data.note) {
    message += `💬 Ghi chú: ${data.note}\n`;
  }
  
  message += `\n${data.order_info || ''}\n\n`;
  message += "⚠️ Vui lòng liên hệ khách hàng để xác nhận đặt chỗ.";
  
  return message;
}
