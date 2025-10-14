function gtag(){dataLayer.push(arguments)}
window.dataLayer = window.dataLayer || [];
gtag('js', new Date());
gtag('config', 'AW-16682976859', {
  page_title: 'Xe ghép Đà Nẵng đi Quảng Trị, Quảng Bình từ 350.000đ',
  page_location: 'https://xeghepmientrung.com/',
  custom_map: {
    'dimension1': 'service_type',
    'dimension2': 'location'
  }
});

// Enhanced event tracking function
window.pushEvent = function(eventName, eventData = {}) {
  try {
    window.dataLayer.push({
      event: eventName,
      ...eventData
    });
    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, eventData);
    }
    console.log('Event tracked:', eventName, eventData);
  } catch (error) {
    console.error('Error tracking event:', error);
  }
};

// Conversion tracking function
window.trackConversion = function(conversionType, transactionId = '') {
  try {
    switch (conversionType) {
      case 'purchase':
        gtag('event', 'conversion', {
          'send_to': 'AW-16682976859/kyfECNWsieEZENuMiJM-',
          'transaction_id': transactionId
        });
        break;
      case 'contact':
        gtag('event', 'conversion', {
          'send_to': 'AW-16682976859/JYXJCLGIhqQaENuMiJM-'
        });
        break;
      case 'zalo':
        gtag('event', 'conversion', {
          'send_to': 'AW-16682976859/RP8eCLSIhqQaENuMiJM-'
        });
        break;
      case 'mail':
        gtag('event', 'conversion', {
          'send_to': 'AW-16682976859/y6EqCNWIhqQaENuMiJM-'
        });
        break;
      case 'facebook':
        gtag('event', 'conversion', {
          'send_to': 'AW-16682976859/ai7OCNiIhqQaENuMiJM-'
        });
        break;
      case 'booking':
        gtag('event', 'conversion', {
          'send_to': 'AW-16682976859/K57LCNuIhqQaENuMiJM-'
        });
        break;
      default:
        gtag('event', 'conversion_event_contact', {
          // <event_parameters>
        });
    }
    console.log('Conversion tracked:', conversionType, transactionId);
  } catch (error) {
    console.error('Error tracking conversion:', error);
  }
};

// Initialize tracking when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Track page view
  pushEvent('page_view', {
    page_title: document.title,
    page_location: window.location.href,
    page_referrer: document.referrer
  });

  // Track external link clicks
  document.addEventListener('click', function(e) {
    const link = e.target.closest('a');
    if (link && link.hostname !== window.location.hostname) {
      pushEvent('click_external_link', {
        link_url: link.href,
        link_text: link.textContent.trim()
      });
    }
  });

  // Track phone clicks and trigger contact conversion
  document.addEventListener('click', function(e) {
    const phoneLink = e.target.closest('a[href^="tel:"]');
    if (phoneLink) {
      pushEvent('phone_click', {
        phone_number: phoneLink.href.replace('tel:', ''),
        location: phoneLink.closest('[class*="header"], [class*="hero"], [class*="floating"], [class*="form"]')?.className || 'unknown'
      });
      trackConversion('contact');
    }
  });

  // Track Zalo clicks and trigger zalo conversion
  document.addEventListener('click', function(e) {
    const zaloLink = e.target.closest('a[href*="zalo.me"]');
    if (zaloLink) {
      pushEvent('zalo_click', {
        link_url: zaloLink.href
      });
      trackConversion('zalo');
    }
  });

  // Track email clicks and trigger mail conversion
  document.addEventListener('click', function(e) {
    const emailLink = e.target.closest('a[href^="mailto:"]');
    if (emailLink) {
      pushEvent('email_click', {
        email: emailLink.href.replace('mailto:', '')
      });
      trackConversion('mail');
    }
  });

  // Track Facebook clicks and trigger facebook conversion
  document.addEventListener('click', function(e) {
    const facebookLink = e.target.closest('a[href*="facebook.com"]');
    if (facebookLink) {
      pushEvent('facebook_click', {
        link_url: facebookLink.href
      });
      trackConversion('facebook');
    }
  });

  // Track form submissions and trigger booking conversion
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
      const formData = new FormData(form);
      const formFields = {};
      for (let [key, value] of formData.entries()) {
        formFields[key] = value;
      }
      
      pushEvent('form_submit', {
        form_id: form.id || 'unknown',
        form_fields: Object.keys(formFields)
      });
      trackConversion('booking');
    });
  });
});

// Track scroll depth
let maxScroll = 0;
window.addEventListener('scroll', function() {
  const scrollPercentage = Math.round(
    window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100
  );
  
  if (scrollPercentage > maxScroll && scrollPercentage % 25 === 0) {
    maxScroll = scrollPercentage;
    pushEvent('scroll_depth', {
      scroll_percentage: scrollPercentage
    });
  }
});

// Track time on page
let startTime = Date.now();
window.addEventListener('beforeunload', function() {
  const timeOnPage = Math.round((Date.now() - startTime) / 1000);
  pushEvent('time_on_page', {
    seconds: timeOnPage
  });
});

// Export for Node.js if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    gtag: gtag,
    pushEvent: pushEvent,
    trackConversion: trackConversion
  };
}