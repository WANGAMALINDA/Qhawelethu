function renderHomePage() {
  return `
    ${renderNavBar("home")}
    <main class="page-main">
      <div>
        <!-- Hero -->
        <section class="qw-hero qw-hero-noncentered">
          <div class="qw-hero-image" style="background-image:url('assets/1.jpg?q=80&amp;w=900&amp;auto=format&amp;fit=crop');"></div>
          <p class="qw-hero-eyebrow">Family &amp; Individual Counselling — Gauteng</p>
          <h1 class="qw-display qw-hero-title">Every family finds its own rhythm again.</h1>
          <p class="qw-hero-sub">
            Compassionate, neurodiversity-affirming counselling for children, couples,
            individuals, and families — in person in Gauteng, or online.
          </p>
          <button class="qw-btn-ochre" data-nav="booking">
            Book a Session ${Icons.arrowRight(16)}
          </button>
        </section>

        <!-- Our approach -->
        <section style="margin-bottom: 3.5rem;">
          <h2 class="qw-display qw-section-title">Our Approach</h2>
          <div class="qw-grid-3">
            ${APPROACH_ITEMS.map(
              (item) => `
              <div class="qw-card">
                <div class="qw-card-icon-circle">
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="var(--moss)" stroke-width="2">${item.path}</svg>
                </div>
                <h3 class="qw-display">${item.title}</h3>
                <p>${item.desc}</p>
              </div>`
            ).join("")}
          </div>
        </section>

        <!-- Featured services -->
        <section>
          <h2 class="qw-display qw-section-title">Featured Services</h2>
          <div class="qw-grid-3" style="margin-bottom: 1.5rem;">
            ${FEATURED_SERVICES.map(
              (s) => `
              <div class="qw-feature-card">
                <img class="qw-feature-image" src="${s.image}" alt="${s.title}" />
                <div class="qw-feature-body">
                  <h3 class="qw-display">${s.title}</h3>
                  <p>${s.desc}</p>
                </div>
              </div>`
            ).join("")}
          </div>
          <button class="qw-btn-primary" data-nav="services">
            Explore All Services ${Icons.arrowRight(13)}
          </button>
        </section>
      </div>

      <!-- Sidebar -->
      <aside class="qw-aside">
        ${counselorCard()}
        ${testimonialsCard()}
        ${blogCard()}
        ${contactMiniCard()}
      </aside>
    </main>
    ${renderFooter()}
  `;
}
