// Shared markup builders: NavBar, Footer, and reusable sidebar blocks.

function renderNavBar(currentPage) {
  const featuredNavIds = new Set(["churches", "schools", "professionals", "faq"]);

  const desktopLinks = NAV_ITEMS.map(
    (item) => `
      <button class="qw-nav-link ${item.id === currentPage ? "active" : ""} ${featuredNavIds.has(item.id) ? "featured" : ""}" data-nav="${item.id}" ${item.id === currentPage ? 'aria-current="page"' : ""}>
        ${item.label}
      </button>`
  ).join("");

  const mobileLinks = NAV_ITEMS.map(
    (item) => `
      <button class="qw-mobile-link ${item.id === currentPage ? "active" : ""} ${featuredNavIds.has(item.id) ? "featured" : ""}" data-nav="${item.id}" ${item.id === currentPage ? 'aria-current="page"' : ""}>
        ${item.label}
      </button>`
  ).join("");

  return `
     <header class="qw-header">
      <div class="qw-header-inner">
        <button class="qw-logo-btn" data-nav="home" aria-label="Qhawelethu Wellness Counselling — home">
          <svg width="38" height="38" viewBox="0 0 38 38" aria-hidden="true">
            <circle cx="19" cy="19" r="17" fill="none" stroke="var(--moss)" stroke-width="2.5" />
            <circle cx="19" cy="19" r="10" fill="none" stroke="var(--ochre)" stroke-width="2" />
          </svg>
          <div>
            <div class="qw-display qw-logo-text-main">Qhawelethu</div>
            <div class="qw-logo-text-sub">Wellness Counselling</div>
          </div>
        </button>

        <nav class="qw-desktop-nav">${desktopLinks}</nav>

        <div class="qw-desktop-cta">
          <button class="qw-btn-primary" data-nav="booking">
            Book a Session ${Icons.arrowRight(15)}
          </button>
        </div>

        <button class="qw-mobile-toggle" id="qw-mobile-toggle" aria-label="Open menu" aria-expanded="false">
          ${Icons.menu(18)}
        </button>
      </div>

      <div class="qw-mobile-drawer" id="qw-mobile-drawer">
        ${mobileLinks}
        <button class="qw-mobile-cta" data-nav="booking">
          Book a Session ${Icons.arrowRight(15)}
        </button>
      </div>
    </header>
  `;
}

function renderFooter() {
  const featuredFooterIds = new Set(["churches", "schools", "professionals", "faq"]);
  const footerLinks = [
    { id: "churches", label: "For Churches" },
    { id: "schools", label: "For Schools" },
    { id: "professionals", label: "For Professionals" },
    { id: "faq", label: "FAQ" },
  ];
  return `
    <footer class="qw-footer">
      <div class="qw-footer-links" style="display:flex; flex-wrap:wrap; justify-content:center; gap:1.25rem; margin-bottom:0.75rem;">
        ${footerLinks.map((l) => `<button class="qw-footer-link" data-nav="${l.id}" style="background:none; border:none; padding:0; font-size:12px; color: #FFFFFF; cursor:pointer; text-decoration:underline;">${l.label}</button>`).join("")}
      </div>
      Qhawelethu Wellness Counselling · Online Worldwide · © ${new Date().getFullYear()}
    </footer>
  `;
}

function wireNavBar(root) {
  const toggleBtn = root.querySelector("#qw-mobile-toggle");
  const drawer = root.querySelector("#qw-mobile-drawer");

  if (toggleBtn && drawer) {
    toggleBtn.addEventListener("click", () => {
      const isOpen = drawer.classList.toggle("open");
      toggleBtn.setAttribute("aria-expanded", String(isOpen));
      toggleBtn.innerHTML = isOpen ? Icons.x(18) : Icons.menu(18);
      toggleBtn.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });
  }

  root.querySelectorAll("[data-nav]").forEach((el) => {
    el.addEventListener("click", () => {
      navigateTo(el.getAttribute("data-nav"));
      if (drawer) {
        drawer.classList.remove("open");
        if (toggleBtn) {
          toggleBtn.setAttribute("aria-expanded", "false");
          toggleBtn.innerHTML = Icons.menu(18);
          toggleBtn.setAttribute("aria-label", "Open menu");
        }
      }
    });
  });
}

/* ---------- Reusable sidebar blocks ---------- */

function counselorCard({ withBio = false, eyebrow = "Credentials & trust" } = {}) {
  const renderOne = (counselor, image) => `
    <div class="qw-side-card sage">
      <p class="qw-side-eyebrow">${eyebrow}</p>
      <div class="qw-counselor-row">
      <div class="qw-avatar qw-display">${image ? `<img src="${image}" alt="${counselor.name}"/>` : 'F'}</div>
        <div>
          <div class="qw-display qw-counselor-name">${counselor.name}</div>
          <div class="qw-counselor-role">${counselor.role}</div>
          ${
            withBio
              ? `<p class="qw-counselor-bio">${counselor.bio}</p>`
              : `<div class="qw-counselor-reg">${counselor.bio}</div>`
          }
        </div>
      </div>
      <p class="qw-spec-label">Specializations</p>
      <div class="qw-spec-grid">
        ${counselor.specializations.map((s) => `<span class="qw-spec-pill">${s}</span>`).join("")}
      </div>
    </div>`;

  return (
    renderOne(COUNSELOR_1, typeof COUNSELOR_IMAGE !== 'undefined' ? COUNSELOR_IMAGE : null) +
    renderOne(COUNSELOR_2, typeof COUNSELOR_IMAGE2 !== 'undefined' ? COUNSELOR_IMAGE2 : null)
  );
}

function testimonialsCard(items = TESTIMONIALS, linkLabel = "Read more stories") {
  return `
    <div class="qw-side-card bordered">
      <p class="qw-side-eyebrow">Testimonials</p>
      ${items
        .map(
          (t) => `
        <div class="qw-testimonial">
          <div class="qw-stars">${Array.from({ length: 5 }).map(() => Icons.star(12)).join("")}</div>
          <p>"${t.quote}"</p>
          <div class="qw-testimonial-name">${t.name}</div>
        </div>`
        )
        .join("")}
     
    </div>
  `;
}

function blogCard(posts = BLOG_POSTS, onNavigateResources = true) {
  return `
    <div class="qw-side-card bordered">
      <p class="qw-side-eyebrow">Latest from our blog</p>
      <div style="display:flex; flex-direction:column; gap:1rem;">
        ${posts
          .map(
            (p) => `
          <div class="qw-blog-row">
            <div class="qw-blog-thumb" ${p.image ? `style="background-image:url('${p.image}'); background-size:cover; background-position:center;"` : ''}>
              ${!p.image ? Icons.bookOpen(18, "var(--moss)") : ''}
            </div>
            <div>
              <div class="qw-blog-title">${p.title}</div>
              <div class="qw-blog-date">${p.date}</div>
            </div>
          </div>`
          )
          .join("")}
      </div>
      ${
        onNavigateResources
          ? `<button class="qw-view-all" data-nav="resources" style="background:none;">View all resources ${Icons.arrowRight(13)}</button>`
          : `<a href="#" class="qw-view-all" onclick="return false;">View all resources ${Icons.arrowRight(13)}</a>`
      }
    </div>
  `;
}

function contactMiniCard() {
  return `
  
  `;
}
