// Simple client-side router mapping page ids to render + wire functions.

const PAGES = {
  home: { render: renderHomePage, wire: null },
  about: { render: renderAboutPage, wire: null },
  services: { render: renderServicesPage, wire: null },
  resources: { render: renderResourcesPage, wire: null },
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
  document.title = pageTitleFor(pageId);
}

function pageTitleFor(pageId) {
  const titles = {
    home: "Qhawelethu Wellness Counselling",
    about: "About Us · Qhawelethu Wellness Counselling",
    services: "Services · Qhawelethu Wellness Counselling",
    resources: "Resources · Qhawelethu Wellness Counselling",
    booking: "Book a Session · Qhawelethu Wellness Counselling",
    contact: "Contact Us · Qhawelethu Wellness Counselling",
  };
  return titles[pageId] || titles.home;
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
