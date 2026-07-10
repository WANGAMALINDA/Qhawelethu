function renderSchoolsPage() {
  return `
    ${renderNavBar("schools")}
    <main class="page-main">
      <div>
        <!-- Hero -->
        <section class="qw-hero">
          <svg viewBox="0 0 400 400" class="qw-rings" style="right:-6rem; top:-6rem; width:380px; height:380px;" aria-hidden="true">
            ${[40,76,112,148,184].map((r,i)=>`<circle cx="200" cy="200" r="${r}" fill="none" stroke="#DCE6DE" stroke-width="${i===0?2:1}" opacity="${(0.14-i*0.02).toFixed(2)}"/>`).join("")}
          </svg>
          <p class="qw-hero-eyebrow">Partnering with educators</p>
          <h1 class="qw-display qw-hero-title" style="font-size:34px;">For Schools</h1>
          <p class="qw-hero-sub" style="margin-bottom:0;">
            Training, consultation, and classroom strategies that help teachers and schools
            support neurodivergent learners with confidence.
          </p>
        </section>

        <!-- Services -->
        <section class="qw-grid-2">
          ${SCHOOL_SERVICES.map(
            (s) => `
            <div class="qw-value-card" style="background: #c8e7dd;">
              <h3 class="qw-display" style="font-size:16px;">${s}</h3>
            </div>`
          ).join("")}
        </section>

        <section style="margin-top: 2.5rem;">
          <button class="qw-btn-ochre" data-nav="contact">
            Discuss Your School's Needs ${Icons.arrowRight(16)}
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
