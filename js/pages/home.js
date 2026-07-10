const HOME_QUICK_ACCESS = [
  {
    id: "churches",
    eyebrow: "Organisational support",
    title: "For Churches",
    desc: "Faith-based workshops, pastoral care support, and practical wellness guidance for ministries.",
  },
  {
    id: "schools",
    eyebrow: "Education support",
    title: "For Schools",
    desc: "Teacher training, learner support, and inclusion strategies for school communities.",
  },
  {
    id: "professionals",
    eyebrow: "Professional care",
    title: "For Professionals",
    desc: "Clinical supervision, case consultation, and development support for practitioners.",
  },
  {
    id: "faq",
    eyebrow: "Start here",
    title: "FAQ",
    desc: "Quick answers about sessions, services, and how to get started.",
  },
];

function renderHomePage() {
  return `
    ${renderNavBar("home")}
    <main class="page-main">
      <div>
        <!-- Hero -->
        <section class="qw-hero qw-hero-noncentered">
          <div class="qw-hero-image" style="background-image:url('assets/1.jpg?q=80&amp;w=900&amp;auto=format&amp;fit=crop');"></div>
          <p class="qw-hero-eyebrow">Available Worldwide via Secure Online Consultation</p>
          <h1 class="qw-display qw-hero-title">Neurodiversity-Affirming Counselling for Children, Families &amp; Adults</h1>
          <p class="qw-display" style="position:relative; font-size:17px; margin:0 0 0.85rem; color: var(--ochre);">
            Helping Neurodivergent Children Thrive. Empowering Families to Grow.
          </p>
          <p class="qw-hero-sub">
            Supporting individuals with Autism, ADHD, and other neurodivergent profiles through
            evidence-informed online counselling, consultation, and family support — serving
            clients across South Africa and internationally.
          </p>
          <button class="qw-btn-ochre" data-nav="booking">
            Book a Session ${Icons.arrowRight(16)}
          </button>
        </section>

        <!-- Quick access -->
        <section style="margin: 2.75rem 0 3.5rem;">
          <div style="display:flex; align-items:flex-end; justify-content:space-between; gap:1rem; margin-bottom:1rem; flex-wrap:wrap;">
            <div>
              <p class="qw-eyebrow">Quick access</p>
              <h2 class="qw-display qw-section-title" style="margin-bottom:0;">Popular paths, front and center</h2>
            </div>
            <button class="qw-btn-outline" data-nav="booking">Open Booking ${Icons.arrowRight(14)}</button>
          </div>
          <div class="qw-grid-2" style="gap:1rem;">
            ${HOME_QUICK_ACCESS.map(
              (item) => `
              <button class="qw-path-card" data-nav="${item.id}">
                <span class="qw-path-eyebrow">${item.eyebrow}</span>
                <span class="qw-display qw-path-title">${item.title}</span>
                <span class="qw-path-desc">${item.desc}</span>
                <span class="qw-path-cta">Open page ${Icons.arrowRight(13)}</span>
              </button>`
            ).join("")}
          </div>
        </section>

        <!-- Why choose us -->
        <section style="margin: 3.5rem 0;">
          <h2 class="qw-display qw-section-title">Why Families Choose Qhawelethu</h2>
          <div class="qw-spec-grid" style="grid-template-columns: repeat(2, 1fr); gap: 0.75rem;">
            ${WHY_CHOOSE_ITEMS.map((item) => `<span class="qw-spec-pill" style="text-align:left;">✓ ${item}</span>`).join("")}
          </div>
        </section>

        <!-- Our approach -->
        <section style="margin-bottom: 3.5rem;">
          <h2 class="qw-display qw-section-title">Our Approach</h2>
          <div class="qw-grid-3-article">
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
          <div class="qw-grid-3-article" style="margin-bottom: 1.5rem;">
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

        <!-- Closing call to action -->
        <section class="qw-hero qw-hero-centered" style="margin-top: 3.5rem; background: var(--sage);">
          <h2 class="qw-display qw-hero-title" style="font-size:28px;">Ready to Take the First Step?</h2>
          <p class="qw-hero-sub" style="margin-bottom:1.5rem;">
            Whether you're seeking support for yourself, your child, or your family, we're here
            to help. Book your first consultation today.
          </p>
          <button class="qw-btn-ochre" data-nav="booking">
            Book a Session ${Icons.arrowRight(16)}
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
