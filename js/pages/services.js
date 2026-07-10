function renderFullServicesGroup(group) {
  return `
    <div class="qw-value-card">
      <h3 class="qw-display" style="margin-bottom:0.75rem;">${group.category}</h3>
      <ul style="margin:0; padding-left:1.1rem;">
        ${group.items.map((item) => `<li style="margin-bottom:0.35rem;">${item}</li>`).join("")}
      </ul>
    </div>`;
}

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
          <p class="qw-hero-eyebrow">${BRAND_POSITIONING}</p>
          <h1 class="qw-display qw-hero-title" style="font-size:34px;">A Pathway to Healing</h1>
          <p class="qw-hero-sub" style="margin-bottom:0;">
            Compassionate, neurodiversity-affirming care for every unique journey — tailored to
            children, couples, individuals, and families, delivered online worldwide.
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
        <!-- Community & organisational services -->
        <section style="margin-top: 3.5rem;">
          <p class="qw-eyebrow">Workshops &amp; consultation</p>
          <h2 class="qw-display qw-section-title" style="font-size:24px;">We Also Work With Organisations</h2>
          <div class="qw-grid-3-article">
            <div class="qw-card">
              <h3 class="qw-display">For Churches</h3>
              <p>Parent seminars, awareness sessions, and pastoral mental health support for congregations.</p>
              <button class="qw-learn-more" data-nav="churches">Learn more ${Icons.arrowRight(13)}</button>
            </div>
            <div class="qw-card">
              <h3 class="qw-display">For Schools</h3>
              <p>Teacher training, classroom behaviour support, and inclusion strategies for educators.</p>
              <button class="qw-learn-more" data-nav="schools">Learn more ${Icons.arrowRight(13)}</button>
            </div>
            <div class="qw-card">
              <h3 class="qw-display">For Professionals</h3>
              <p>Clinical supervision, case consultation, and professional development workshops.</p>
              <button class="qw-learn-more" data-nav="professionals">Learn more ${Icons.arrowRight(13)}</button>
            </div>
          </div>
        </section>
        <!-- Full services list -->
        <section id="full-services-list" style="margin-top: 3.5rem;">
          <p class="qw-eyebrow">The complete picture</p>
          <h2 class="qw-display qw-section-title" style="font-size:28px;">Our Full Range of Services</h2>
          <p class="qw-hero-sub" style="margin-bottom:1.5rem;">
            ${SERVICE_DELIVERY_NOTE}
          </p>
          <div class="qw-grid-3-article">
            ${FULL_SERVICES_LIST.map((group) => renderFullServicesGroup(group)).join("")}
          </div>
          <button class="qw-btn-primary" data-nav="pricing" style="margin-top:1.5rem;">
            View Pricing ${Icons.arrowRight(13)}
          </button>
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