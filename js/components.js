// Shared markup builders: NavBar, Footer, and reusable sidebar blocks.

function renderNavBar(currentPage) {
  const desktopLinks = NAV_ITEMS.map(
    (item) => `
      <button class="qw-nav-link ${item.id === currentPage ? "active" : ""}" data-nav="${item.id}" ${item.id === currentPage ? 'aria-current="page"' : ""}>
        ${item.label}
      </button>`
  ).join("");

  const mobileLinks = NAV_ITEMS.map(
    (item) => `
      <button class="qw-mobile-link ${item.id === currentPage ? "active" : ""}" data-nav="${item.id}" ${item.id === currentPage ? 'aria-current="page"' : ""}>
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
  return `
    <footer class="qw-footer">
      Qhawelethu Wellness Counselling · © ${new Date().getFullYear()}
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
  return `
    <div class="qw-side-card sage">
      <p class="qw-side-eyebrow">${eyebrow}</p>
      <div class="qw-counselor-row">
      <div class="qw-avatar qw-display">${typeof COUNSELOR_IMAGE !== 'undefined' && COUNSELOR_IMAGE ? `<img src="${COUNSELOR_IMAGE}" alt="Qhawe Romeo Themba"/>` : 'F'}</div>
        <div>
          <div class="qw-display qw-counselor-name">Qhawe Romeo Themba</div>
          <div class="qw-counselor-role">Neurodiversity Affirming Therapist</div>
          ${
            withBio
              ? `<p class="qw-counselor-bio">Qhawe brings over a decade of experience supporting neurodivergent individuals and families with a warm, client-centred approach.</p>`
              : `<div class="qw-counselor-reg">Experienced in supporting neurodivergent individuals and families with a warm, client-centred approach.</div>`
          }
        </div>
      </div>
      <p class="qw-spec-label">Specializations</p>
      <div class="qw-spec-grid">
        ${SPECIALIZATIONS.map((s) => `<span class="qw-spec-pill">${s}</span>`).join("")}
      </div>
    </div>

    <div class="qw-side-card sage">
      <p class="qw-side-eyebrow">${eyebrow}</p>
      <div class="qw-counselor-row">
      <div class="qw-avatar qw-display">${typeof COUNSELOR_IMAGE2 !== 'undefined' && COUNSELOR_IMAGE2 ? `<img src="${COUNSELOR_IMAGE2}" alt="Phethile Mokoena"/>` : 'F'}</div>
        <div>
          <div class="qw-display qw-counselor-name">Phethile Mokoena</div>
          <div class="qw-counselor-role">Wellness Therapist</div>
          ${
            withBio
              ? `<p class="qw-counselor-bio">Phethile Mokoena is an experienced director of the program implementation.</p>`
              : `<div class="qw-counselor-reg">Experienced in supporting neurodivergent individuals and families with a warm, client-centred approach.</div>`
          }
        </div>
      </div>
      <p class="qw-spec-label">Specializations</p>
      <div class="qw-spec-grid">
        ${SPECIALIZATIONS.map((s) => `<span class="qw-spec-pill">${s}</span>`).join("")}
      </div>
    </div>
    
  `;
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
    <div id="contact-mini" class="qw-side-card bordered qw-contact-mini">
      <div class="row">${Icons.phone(14, "var(--moss)")} +27 76 829 6508</div>
      <div class="row">${Icons.mail(14, "var(--moss)")} info@qhawelethuwc.co.za</div>
      <div class="row">${Icons.mapPin(14, "var(--moss)")} Benoni, Gauteng</div>
      <div class="qw-social-row">
        <div class="qw-social-circle">${Icons.messageCircle(14, "var(--ink)")}</div>
      </div>
    </div>
  `;
}
