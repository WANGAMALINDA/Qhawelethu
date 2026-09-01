// Cookie consent management

const COOKIE_KEY = 'qw_cookie_consent';
const COOKIE_EXPIRY_DAYS = 365;

function getCookieConsent() {
  const value = localStorage.getItem(COOKIE_KEY);
  return value ? JSON.parse(value) : null;
}

function setCookieConsent(consent) {
  localStorage.setItem(COOKIE_KEY, JSON.stringify(consent));
}

function hasCookieConsent() {
  return getCookieConsent() !== null;
}

function renderCookieBanner() {
  if (hasCookieConsent()) return '';

  return `
    <div class="qw-cookie-banner" id="qw-cookie-banner" role="alertdialog" aria-labelledby="cookie-banner-title" aria-describedby="cookie-banner-description">
      <div class="qw-cookie-content">
        <div>
          <h3 id="cookie-banner-title" class="qw-cookie-title">Cookie Settings</h3>
          <p id="cookie-banner-description" class="qw-cookie-text">
            We use cookies to enhance your browsing experience and analyze site traffic. By continuing to use our site, you consent to our use of cookies.
          </p>
        </div>
        <div class="qw-cookie-actions">
          <button class="qw-cookie-btn qw-cookie-accept" id="qw-cookie-accept">
            Accept
          </button>
          <button class="qw-cookie-btn qw-cookie-decline" id="qw-cookie-decline">
            Decline
          </button>
        </div>
      </div>
    </div>
  `;
}

function wireCookieBanner(root) {
  if (hasCookieConsent()) return;

  const acceptBtn = root.querySelector('#qw-cookie-accept');
  const declineBtn = root.querySelector('#qw-cookie-decline');
  const banner = root.querySelector('#qw-cookie-banner');

  if (acceptBtn) {
    acceptBtn.addEventListener('click', () => {
      setCookieConsent({ accepted: true, timestamp: new Date().toISOString() });
      if (banner) {
        banner.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => banner.remove(), 300);
      }
    });
  }

  if (declineBtn) {
    declineBtn.addEventListener('click', () => {
      setCookieConsent({ accepted: false, timestamp: new Date().toISOString() });
      if (banner) {
        banner.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => banner.remove(), 300);
      }
    });
  }
}

function renderBreadcrumbs(currentPageId) {
  const breadcrumbMap = {
    home: null, // No breadcrumbs for home
    about: [{ label: 'About', id: 'about' }],
    services: [{ label: 'Services', id: 'services' }],
    pricing: [{ label: 'Pricing', id: 'pricing' }],
    resources: [{ label: 'Resources', id: 'resources' }],
    faq: [{ label: 'FAQ', id: 'faq' }],
    churches: [{ label: 'For Churches', id: 'churches' }],
    schools: [{ label: 'For Schools', id: 'schools' }],
    professionals: [{ label: 'For Professionals', id: 'professionals' }],
    booking: [{ label: 'Book a Session', id: 'booking' }],
    contact: [{ label: 'Contact', id: 'contact' }],
  };

  const breadcrumbs = breadcrumbMap[currentPageId];
  if (!breadcrumbs) return '';

  const breadcrumbItems = [
    { label: 'Home', id: 'home' },
    ...breadcrumbs
  ];

  const breadcrumbHTML = breadcrumbItems.map((item, index) => {
    const isLast = index === breadcrumbItems.length - 1;
    if (isLast) {
      return `<span class="qw-breadcrumb-item active" aria-current="page">${item.label}</span>`;
    }
    return `<button class="qw-breadcrumb-item qw-breadcrumb-link" data-nav="${item.id}">${item.label}</button>`;
  }).join('<span class="qw-breadcrumb-separator" aria-hidden="true">/</span>');

  return `
    <nav class="qw-breadcrumbs" aria-label="Breadcrumb navigation">
      <div class="qw-breadcrumbs-inner">
        ${breadcrumbHTML}
      </div>
    </nav>
  `;
}

function wireBreadcrumbs(root) {
  const breadcrumbLinks = root.querySelectorAll('.qw-breadcrumb-link');
  breadcrumbLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navigateTo(link.getAttribute('data-nav'));
    });
  });
}
