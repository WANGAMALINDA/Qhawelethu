function renderFaqPage() {
  return `
    ${renderNavBar("faq")}
    <main class="page-main">
      <div>
        <!-- Hero -->
        <section class="qw-hero">
          <svg viewBox="0 0 400 400" class="qw-rings" style="right:-6rem; top:-6rem; width:380px; height:380px;" aria-hidden="true">
            ${[40,76,112,148,184].map((r,i)=>`<circle cx="200" cy="200" r="${r}" fill="none" stroke="#DCE6DE" stroke-width="${i===0?2:1}" opacity="${(0.14-i*0.02).toFixed(2)}"/>`).join("")}
          </svg>
          <p class="qw-hero-eyebrow">Questions, answered</p>
          <h1 class="qw-display qw-hero-title" style="font-size:34px;">Frequently Asked Questions</h1>
          <p class="qw-hero-sub" style="margin-bottom:0;">
            Everything you need to know before your first session with Qhawelethu Wellness
            Counselling, delivered online worldwide.
          </p>
        </section>

        <!-- FAQ list -->
        <section style="display:flex; flex-direction:column; gap:1rem;">
          ${FAQ_ITEMS.map(
            (item) => `
            <details class="qw-value-card" style="cursor:pointer;">
              <summary class="qw-display" style="font-size:16px; cursor:pointer; list-style:none;">${item.q}</summary>
              <p style="margin-top:0.75rem;">${item.a}</p>
            </details>`
          ).join("")}
        </section>

        <section style="margin-top: 2.5rem;">
          <p class="qw-hero-sub" style="margin-bottom:1rem;">Still have a question?</p>
          <button class="qw-btn-ochre" data-nav="contact">
            Contact Us ${Icons.arrowRight(16)}
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
