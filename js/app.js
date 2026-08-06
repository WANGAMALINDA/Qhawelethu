// Simple client-side router mapping page ids to render + wire functions.

const SITE_URL = "https://qhawelethuwc.co.za";
const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/qhawelethu-logo.jpg`;

const SEO_DATA = {
  home: {
    title: "Qhawelethu Wellness Counselling | Neurodiversity-Affirming Online Counselling",
    description:
      "Neurodiversity-affirming online counselling for children, adults, couples, and families. Autism, ADHD, parent coaching, and family therapy across South Africa and worldwide.",
    url: `${SITE_URL}/`,
  },
  about: {
    title: "About Qhawelethu Wellness Counselling | Meet Our Team",
    description:
      "Learn about Qhawelethu's neurodiversity-affirming approach, values, experience, and the counsellors supporting families, schools, churches, and professionals.",
    url: `${SITE_URL}/#/about`,
  },
  services: {
    title: "Services · Qhawelethu Wellness Counselling",
    description:
      "Explore child, adolescent, adult, couples, and family counselling, plus neurodiversity support, parent coaching, and consultation services.",
    url: `${SITE_URL}/#/services`,
  },
  pricing: {
    title: "Pricing · Qhawelethu Wellness Counselling",
    description:
      "View transparent counselling rates, session lengths, and workshop pricing for individuals, families, and organisations.",
    url: `${SITE_URL}/#/pricing`,
  },
  resources: {
    title: "Resources · Qhawelethu Wellness Counselling",
    description:
      "Browse mental health and neurodiversity resources, downloadable guides, webinars, and trusted external links.",
    url: `${SITE_URL}/#/resources`,
  },
  faq: {
    title: "FAQ · Qhawelethu Wellness Counselling",
    description:
      "Find answers about sessions, confidentiality, online counselling, and how to book with Qhawelethu Wellness Counselling.",
    url: `${SITE_URL}/#/faq`,
  },
  churches: {
    title: "For Churches · Qhawelethu Wellness Counselling",
    description:
      "Discover counselling, training, and pastoral support for churches and faith communities working with neurodivergent families.",
    url: `${SITE_URL}/#/churches`,
  },
  schools: {
    title: "For Schools · Qhawelethu Wellness Counselling",
    description:
      "Explore school consultation, teacher training, learner support, and inclusion strategies for education communities.",
    url: `${SITE_URL}/#/schools`,
  },
  professionals: {
    title: "For Professionals · Qhawelethu Wellness Counselling",
    description:
      "Find supervision, consultation, and professional wellbeing support for practitioners and workplace teams.",
    url: `${SITE_URL}/#/professionals`,
  },
  booking: {
    title: "Book a Session · Qhawelethu Wellness Counselling",
    description:
      "Book an online session or consultation with Qhawelethu Wellness Counselling for individuals, families, schools, churches, or professionals.",
    url: `${SITE_URL}/#/booking`,
  },
  contact: {
    title: "Contact Us · Qhawelethu Wellness Counselling",
    description:
      "Contact Qhawelethu Wellness Counselling by phone, email, or inquiry form for secure online support and bookings.",
    url: `${SITE_URL}/#/contact`,
  },
};

const PAGES = {
  home: { render: renderHomePage, wire: null },
  about: { render: renderAboutPage, wire: null },
  services: { render: renderServicesPage, wire: null },
  pricing: { render: renderPricingPage, wire: null },
  resources: { render: renderResourcesPage, wire: wireResourcesPage },
  faq: { render: renderFaqPage, wire: null },
  churches: { render: renderChurchesPage, wire: null },
  schools: { render: renderSchoolsPage, wire: null },
  professionals: { render: renderProfessionalsPage, wire: null },
  booking: { render: renderBookingPage, wire: wireBookingPage },
  contact: { render: renderContactPage, wire: wireContactPage },
};

const appRoot = document.getElementById("app");

function pageIdFromHash() {
  const hash = window.location.hash.replace(/^#\/?/, "");
  return PAGES[hash] ? hash : "home";
}

function navigateTo(pageId) {
  if (!PAGES[pageId]) pageId = "home";
  if (window.location.hash.replace(/^#\/?/, "") === pageId) {
    renderPage(pageId);
    return;
  }
  window.location.hash = `/${pageId}`;
}

function renderPage(pageId) {
  const page = PAGES[pageId] || PAGES.home;
  appRoot.innerHTML = page.render();
  wireNavBar(appRoot);
  if (page.wire) page.wire(appRoot);
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  updateSeoForPage(pageId);
}

function ensureMeta(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
    document.head.appendChild(element);
  }
  return element;
}

function updateSeoForPage(pageId) {
  const seo = SEO_DATA[pageId] || SEO_DATA.home;
  document.title = seo.title;

  ensureMeta('meta[name="description"]', { name: "description", content: seo.description }).setAttribute("content", seo.description);
  ensureMeta('meta[name="robots"]', { name: "robots", content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" }).setAttribute("content", "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1");
  ensureMeta('meta[property="og:title"]', { property: "og:title", content: seo.title }).setAttribute("content", seo.title);
  ensureMeta('meta[property="og:description"]', { property: "og:description", content: seo.description }).setAttribute("content", seo.description);
  ensureMeta('meta[property="og:image"]', { property: "og:image", content: DEFAULT_OG_IMAGE }).setAttribute("content", DEFAULT_OG_IMAGE);
  ensureMeta('meta[property="og:url"]', { property: "og:url", content: seo.url }).setAttribute("content", seo.url);
  ensureMeta('meta[property="og:type"]', { property: "og:type", content: "website" }).setAttribute("content", "website");
  ensureMeta('meta[property="og:site_name"]', { property: "og:site_name", content: "Qhawelethu Wellness Counselling" }).setAttribute("content", "Qhawelethu Wellness Counselling");
  ensureMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" }).setAttribute("content", "summary_large_image");
  ensureMeta('meta[name="twitter:title"]', { name: "twitter:title", content: seo.title }).setAttribute("content", seo.title);
  ensureMeta('meta[name="twitter:description"]', { name: "twitter:description", content: seo.description }).setAttribute("content", seo.description);
  ensureMeta('meta[name="twitter:image"]', { name: "twitter:image", content: DEFAULT_OG_IMAGE }).setAttribute("content", DEFAULT_OG_IMAGE);

  const canonicalLink = document.head.querySelector('link[rel="canonical"]') || document.createElement("link");
  canonicalLink.setAttribute("rel", "canonical");
  canonicalLink.setAttribute("href", `${SITE_URL}/`);
  if (!canonicalLink.parentNode) document.head.appendChild(canonicalLink);
}

function handleHashChange() {
  renderPage(pageIdFromHash());
}

window.addEventListener("hashchange", handleHashChange);
window.addEventListener("DOMContentLoaded", () => {
  if (!window.location.hash) {
    window.location.hash = "/home";
  } else {
    handleHashChange();
  }
});