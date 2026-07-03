function renderServicesPage() {
  return `
    ${renderNavBar("services")}
    <main class="page-main">
      <div>
        <!-- Hero -->
        <section class="qw-hero">
            <svg viewBox="0 0 400 400" class="qw-rings" style="right:-6rem; top:-6rem; width:380px; height:380px;" aria-hidden="true">
            ${[40,76,112,148,184].map((r,i)=>`<circle cx="200" cy="200" r="${r}" fill="none" stroke="#DCE6DE" stroke-width="${i===0?2:1}" opacity="${(0.14-i*0.02).toFixed(2)}"/>`).join("")}
          </svg>
          <p class="qw-hero-eyebrow">Our Therapeutic Services</p>
          <h1 class="qw-display qw-hero-title" style="font-size:34px;">A Pathway to Healing</h1>
          <p class="qw-hero-sub" style="margin-bottom:0;">
            Compassionate care for every unique journey — tailored to children, couples,
            individuals, and families alike.
          </p>
        </section>

        <!-- Services grid -->
        <section class="qw-grid-2">
          ${SERVICES.map(
            (s) => `
            <div class="qw-value-card" style="background:${s.bg};">
              <div class="qw-value-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--moss)" stroke-width="1.8">${SERVICE_ICON_PATHS[s.key]}</svg>
              </div>
              <h3 class="qw-display">${s.title}</h3>
              <p>${s.desc}</p>
              <button class="qw-learn-more" data-nav="contact">Contact Us To Learn more ${Icons.arrowRight(13)}</button>
            </div>`
          ).join("")}
        </section>
      </div>

      <!-- Sidebar -->
      <aside class="qw-aside">
        ${counselorCard({ eyebrow: "Meet your counselor" })}
        ${testimonialsCard()}
        ${contactMiniCard()}
      </aside>
    </main>
    ${renderFooter()}
  `;
}
