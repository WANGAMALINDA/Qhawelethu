function renderPricingCard(p) {
  return `
    <div class="qw-value-card">
      <h3 class="qw-display">${p.title}</h3>
      <p style="margin:0 0 0.5rem; font-size:13px; opacity:0.75;">${p.duration}</p>
      <p class="qw-display" style="font-size:26px; margin:0 0 0.5rem; color: var(--ochre);">${p.price}</p>
      <p>${p.desc}</p>
    </div>`;
}

function renderPricingPage() {
  return `
    ${renderNavBar("pricing")}
    <main class="page-main">
      <div>
        <!-- Hero -->
        <section class="qw-hero">
          <svg viewBox="0 0 400 400" class="qw-rings" style="right:-6rem; top:-6rem; width:380px; height:380px;" aria-hidden="true">
            ${[40,76,112,148,184].map((r,i)=>`<circle cx="200" cy="200" r="${r}" fill="none" stroke="#DCE6DE" stroke-width="${i===0?2:1}" opacity="${(0.14-i*0.02).toFixed(2)}"/>`).join("")}
          </svg>
          <p class="qw-hero-eyebrow">Investing in your wellbeing</p>
          <h1 class="qw-display qw-hero-title" style="font-size:34px;">Pricing</h1>
          <p class="qw-hero-sub" style="margin-bottom:0;">
            All fees are displayed in United States Dollars (USD). We believe support should
            be accessible, transparent, and fair.
          </p>
        </section>

        <!-- Pricing cards -->
        <section class="qw-grid-3">
          ${PRICING_PLANS.map((p) => renderPricingCard(p)).join("")}
        </section>

        <p class="qw-form-note" style="margin-top:1.5rem; font-size:12px; color:var(--charcoal); opacity:0.75;">
          ${PRICING_NOTE}
        </p>

        <!-- What's included -->
        <section class="qw-value-card" style="background: var(--sage); margin-top: 2rem;">
          <h3 class="qw-display">Every Consultation Includes</h3>
          <div class="qw-spec-grid" style="grid-template-columns: repeat(2, 1fr); gap: 0.6rem; margin-top: 0.75rem;">
            <span class="qw-spec-pill" style="text-align:left;">50-minute session</span>
            <span class="qw-spec-pill" style="text-align:left;">Individualised support</span>
            <span class="qw-spec-pill" style="text-align:left;">Practical strategies</span>
            <span class="qw-spec-pill" style="text-align:left;">Resources where appropriate</span>
            <span class="qw-spec-pill" style="text-align:left;">Follow-up recommendations</span>
          </div>
        </section>

        <section style="margin-top: 2.5rem;">
          <button class="qw-btn-ochre" data-nav="booking">
            Book a Session ${Icons.arrowRight(16)}
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