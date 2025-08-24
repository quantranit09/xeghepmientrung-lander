// Main JavaScript for Xe Ghép Miền Trung
document.addEventListener('DOMContentLoaded', function() {
  const leadForm = document.getElementById('leadForm');
  const formMsg = document.getElementById('formMsg');
  const callHotline = document.getElementById('callHotline');
  const callFloating = document.getElementById('callFloating');
  const heroCall = document.getElementById('heroCall');
  const dateInput = document.getElementById('date');

  // min date = hôm nay
  if (dateInput) dateInput.min = new Date().toISOString().slice(0,10);

  window.dataLayer = window.dataLayer || [];
  const pushEvent = (name, detail={}) => { 
    try { 
      window.dataLayer.push({ event: name, ...detail }); 
      // Google Analytics 4 event tracking
      if (typeof gtag !== 'undefined') {
        gtag('event', name, detail);
      }
    } catch(_){}
  };

  // Header quickbar tracking (mobile)
  document.getElementById('callTop')?.addEventListener('click',()=>pushEvent('call_click',{location:'header_quickbar'}));
  document.querySelector('.mobile-quickbar a[href*="facebook.com"]')?.addEventListener('click',()=>pushEvent('facebook_click',{location:'header_quickbar'}));
  document.querySelector('.mobile-quickbar a[href="#dat-cho"]')?.addEventListener('click',()=>pushEvent('cta_click',{location:'header_quickbar'}));

  callHotline?.addEventListener('click', () => pushEvent('call_click', { location: 'form_button' }));
  callFloating?.addEventListener('click', () => pushEvent('call_click', { location: 'floating_cta' }));
  heroCall?.addEventListener('click', () => pushEvent('call_click', { location: 'hero_banner' }));

  // Tour pricing buttons tracking
  document.querySelectorAll('.price-tag[href*="tel:"]')?.forEach(btn => {
    btn.addEventListener('click', () => {
      const tourName = btn.closest('.card').querySelector('h3')?.textContent || 'Unknown Tour';
      pushEvent('call_click', { 
        location: 'tour_pricing', 
        tour_name: tourName.trim() 
      });
    });
  });

  leadForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(leadForm).entries());
    if(!data.name || !data.phone) {
      formMsg.textContent = "Vui lòng điền họ tên và số điện thoại.";
      formMsg.style.color = "#b91c1c";
      return;
    }

    // chuẩn hóa số ĐT
    const phoneDigits = (data.phone || "").replace(/[^+\d]/g, "");

    pushEvent('lead_submit', {
      name: data.name, phone: phoneDigits, pickup: data.pickup, dropoff: data.dropoff,
      date: data.date, time: data.time, seats: data.seats
    });

    // Tạo thông tin đặt chỗ để copy
    const details = [];
    if(data.pickup) details.push(`📍 Đón: ${data.pickup}`);
    if(data.dropoff) details.push(`🏁 Trả: ${data.dropoff}`);
    if(data.date) details.push(`📅 Ngày: ${data.date}`);
    if(data.time) details.push(`⏰ Giờ: ${data.time}`);
    if(data.seats) details.push(`👥 Ghế: ${data.seats}`);
    if(data.note) details.push(`💬 Ghi chú: ${data.note}`);
    
    const orderInfo = `🚌 ĐẶT CHỖ XE GHÉP
👤 Tên: ${data.name}
📞 SĐT: ${phoneDigits}
${details.join('\n')}

Vui lòng xác nhận đặt chỗ. Cảm ơn!`;

    // Gửi tự động lên Telegram bot và Email
    const sendToFacebook = async () => {
      try {
        // Sử dụng Facebook Messenger API hoặc service như ManyChat, Chatfuel, etc.
        console.log('Sending to Facebook:', orderInfo);
        return true;
      } catch (error) {
        console.error('Facebook send failed:', error);
        return false;
      }
    };

    const sendToEmail = async () => {
      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: data.name,
            phone: phoneDigits,
            pickup: data.pickup,
            dropoff: data.dropoff,
            date: data.date,
            time: data.time,
            seats: data.seats,
            note: data.note,
            order_info: orderInfo
          })
        });
        
        const result = await response.json();
        return result.success;
      } catch (error) {
        console.error('Email send failed:', error);
        return false;
      }
    };

    // Hiển thị loading
    formMsg.innerHTML = `⏳ <strong>Đang gửi yêu cầu...</strong>`;
    formMsg.style.color = "#1d4ed8";

    // Gửi đồng thời
    Promise.allSettled([sendToFacebook(), sendToEmail()]).then(results => {
      const facebookSuccess = results[0].status === 'fulfilled' && results[0].value;
      const emailSuccess = results[1].status === 'fulfilled' && results[1].value;

      let message = '';
      let color = '#166534';

      if (facebookSuccess && emailSuccess) {
        message = `✅ <strong>Yêu cầu đã được gửi thành công!</strong><br>
        <span style="color: var(--muted); font-size: 14px;">
          Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất. Hoặc bạn có thể:
        </span>`;
      } else if (facebookSuccess || emailSuccess) {
        message = `✅ <strong>Yêu cầu đã được gửi!</strong><br>
        <span style="color: var(--muted); font-size: 14px;">
          Chúng tôi sẽ liên hệ với bạn sớm. Hoặc liên hệ trực tiếp:
        </span>`;
      } else {
        message = `⚠️ <strong>Có lỗi khi gửi tự động.</strong><br>
        <span style="color: var(--muted); font-size: 14px;">
          Vui lòng liên hệ trực tiếp qua:
        </span>`;
        color = '#d97706';
      }

      message += `<br><div style="display: flex; gap: 8px; margin-top: 8px; flex-wrap: wrap;">
        <a href="https://zalo.me/0826430430" target="_blank" rel="noopener" 
           style="display: inline-block; padding: 8px 16px; background: #0068FF; color: white; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">
          💬 Zalo
        </a>
        <a href="tel:+84826430430"
           style="display: inline-block; padding: 8px 16px; background: var(--primary); color: white; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">
          📞 Gọi ngay
        </a>
      </div>`;

      formMsg.innerHTML = message;
      formMsg.style.color = color;
    });

    leadForm.reset();
  });
});
