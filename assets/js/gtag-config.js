// Google Analytics (gtag.js) Configuration
// Tracking ID: AW-16682976859

// Initialize dataLayer
window.dataLayer = window.dataLayer || [];

// Define gtag function
function gtag() {
  dataLayer.push(arguments);
}

// Initialize Google Analytics
gtag('js', new Date());
gtag('config', 'AW-16682976859', {
  'page_title': 'Xe ghép Đà Nẵng ↔ Quảng Trị',
  'page_location': 'https://xeghepmientrung.com/',
  'custom_map': {
    'dimension1': 'service_type',
    'dimension2': 'location'
  }
});

// Enhanced event tracking function
window.pushEvent = function(name, detail = {}) {
  try {
    // Push to dataLayer
    window.dataLayer.push({ 
      event: name, 
      ...detail 
    });
    
    // Send to Google Analytics 4
    if (typeof gtag !== 'undefined') {
      gtag('event', name, detail);
    }
    
    // Console log for debugging (remove in production)
    console.log('Event tracked:', name, detail);
  } catch (error) {
    console.error('Error tracking event:', error);
  }
};

// Track page views
document.addEventListener('DOMContentLoaded', function() {
  // Track initial page load
  pushEvent('page_view', {
    page_title: document.title,
    page_location: window.location.href,
    page_referrer: document.referrer
  });
  
  // Track outbound links
  document.addEventListener('click', function(e) {
    const link = e.target.closest('a');
    if (link && link.hostname !== window.location.hostname) {
      pushEvent('click_external_link', {
        link_url: link.href,
        link_text: link.textContent.trim()
      });
    }
  });
  
  // Track phone number clicks
  document.addEventListener('click', function(e) {
    const phoneLink = e.target.closest('a[href^="tel:"]');
    if (phoneLink) {
      pushEvent('phone_click', {
        phone_number: phoneLink.href.replace('tel:', ''),
        location: phoneLink.closest('[class*="header"], [class*="hero"], [class*="floating"], [class*="form"]')?.className || 'unknown'
      });
    }
  });
  
  // Track form interactions
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
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
    });
  });
});

// Track scroll depth
let maxScroll = 0;
window.addEventListener('scroll', function() {
  const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
  if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
    maxScroll = scrollPercent;
    pushEvent('scroll_depth', {
      scroll_percentage: scrollPercent
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

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { gtag, pushEvent };
}
