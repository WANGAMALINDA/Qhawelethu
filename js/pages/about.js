function renderAboutPage() {
  return `
    ${renderNavBar("about")}
    <main class="page-main">
      <div>
        <!-- Hero -->
        <section class="qw-hero">
        <div class="qw-hero-image" style="background-image:url('assets/therapist1.jpg?q=80&amp;w=900&amp;auto=format&amp;fit=crop');"></div>
          <p class="qw-hero-eyebrow">Meet Qhawelethu Wellness</p>
          <h1 class="qw-display qw-hero-title" style="font-size:34px; margin-bottom:0.5rem;">Our Heart &amp; Our Story</h1>
          <p class="qw-display" style="position:relative; font-size:18px; margin:0 0 1rem; color: var(--ochre);">
            Supporting Minds. Strengthening Families. Empowering Futures.
          </p>
          <p class="qw-hero-sub" style="margin-bottom:0.75rem;">
            Qhawelethu was founded on a simple, guiding philosophy: every individual and family
            deserves care that meets them exactly where they are. We blend clinical expertise
            with genuine warmth, offering a practice built around neurodiversity-affirming
            support for children, adults, and the people who love them.
          </p>
          <p class="qw-hero-sub" style="margin-bottom:0;">
            "Qhawelethu" means "our heroes" — a name we carry as a daily commitment. We
            approach every session with compassion and curiosity, and we work to make sure
            each person who walks through our door feels truly welcomed and understood.
          </p>
        </section>

        <!-- Vision & Mission -->
        <section class="qw-grid-2" style="margin-bottom: 2.5rem;">
          <div class="qw-value-card" style="background: var(--sage);">
            <h3 class="qw-display">Our Vision</h3>
            <p>${VISION_TEXT}</p>
          </div>
          <div class="qw-value-card" style="background: #bad2cb;">
            <h3 class="qw-display">Our Mission</h3>
            <p>${MISSION_TEXT}</p>
          </div>
        </section>

        <!-- Values -->
        <section class="qw-grid-2">
          ${VALUES.map(
            (v) => `
            <div class="qw-value-card" style="background:${v.bg};">
              <div class="qw-value-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--moss)" stroke-width="1.8">${VALUE_ICON_PATHS[v.key]}</svg>
              </div>
              <h3 class="qw-display">${v.title}</h3>
              <p>${v.desc}</p>
            </div>`
          ).join("")}
        </section>
      </div>

      <!-- Sidebar -->
      <aside class="qw-aside">
        ${counselorCard({ withBio: true, eyebrow: "Meet our lead counsellor" })}
        ${testimonialsCard()}
        ${contactMiniCard()}
      </aside>
    </main>
    ${renderFooter()}
  `;
}