function renderContactPage() {
  return `
    ${renderNavBar("contact")}
    <main class="page-main">
      <div>
        <!-- Hero -->
        <section class="qw-hero">
          <svg viewBox="0 0 400 400" class="qw-rings" style="right:-5rem; top:-5rem; width:340px; height:340px;" aria-hidden="true">
            ${[40,76,112,148,184].map((r,i)=>`<circle cx="200" cy="200" r="${r}" fill="none" stroke="#DCE6DE" stroke-width="${i===0?2:1}" opacity="${(0.14-i*0.02).toFixed(2)}"/>`).join("")}
          </svg>
          <p class="qw-hero-eyebrow">Get in touch</p>
          <h1 class="qw-display qw-hero-title" style="font-size:34px;">We're here to listen.</h1>
          <p class="qw-hero-sub" style="margin-bottom:0;">
            Starting your wellness journey or simply have a question? Our compassionate team
            usually replies within one business day.
          </p>
        </section>

        <!-- Contact methods -->
        <section class="qw-grid-3" style="margin-bottom: 3rem;">
          <div class="qw-contact-method">
            <div class="icon-circle">${Icons.phoneCall(20, "var(--moss)")}</div>
            <div class="label">Call or message us</div>
            <div class="qw-display value">+27 76 829 6508</div>
            <p class="hint">For immediate support and queries</p>
          </div>
          <div class="qw-contact-method">
            <div class="icon-circle">${Icons.mail(20, "var(--moss)")}</div>
            <div class="label">Send a secure email</div>
            <div class="qw-display value" style="font-size:16px;">info@qhawelethuwc.co.za</div>
            <p class="hint">For detailed, private inquiries</p>
          </div>
        </section>

        <!-- Inquiry form -->
        <section class="qw-form-card">
          <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.5rem;">
            ${Icons.lock(15, "var(--moss)")}
            <p class="qw-eyebrow" style="margin:0;">Online inquiry form</p>
          </div>
          <h2 class="qw-display qw-section-title">Tell us what brings you here</h2>
          <form id="qw-contact-form">
            <div class="qw-form-grid">
              <div>
                <label class="qw-form-label">Name</label>
                <input class="qw-input" name="name" placeholder="Your full name" />
              </div>
              <div>
                <label class="qw-form-label">Email address</label>
                <input class="qw-input" name="email" placeholder="you@email.com" />
              </div>
            </div>
            <label class="qw-form-label">Message</label>
            <textarea class="qw-textarea" name="message" rows="4" placeholder="Share as much or as little as you'd like" style="margin-bottom:1.25rem;"></textarea>
            <button type="submit" class="qw-btn-primary" style="padding:0.75rem 1.75rem; font-size:14px;">
              Send Inquiry ${Icons.send(14)}
            </button>
          </form>
          <p class="qw-form-note" style="margin-top:1rem; font-size:12px; color:var(--charcoal); opacity:0.75;">${Icons.lock(11, "var(--moss)")}
            By submitting this form you accept the <a class="qw-terms-link" href="assets/T&C's.pdf" target="_blank" rel="noopener noreferrer">T&C's</a> provided by this website.
          </p>
        </section>

        <!-- Professional disclaimer -->
        <section class="qw-value-card" style="margin-top: 2rem;">
          <h3 class="qw-display" style="font-size:16px;">Please Note</h3>
          <ul style="margin:0.5rem 0 0; padding-left:1.1rem; font-size:13px; color:var(--charcoal); opacity:0.85; line-height:1.7;">
            ${DISCLAIMER_ITEMS.map((d) => `<li style="margin-bottom:0.4rem;">${d}</li>`).join("")}
          </ul>
        </section>
      </div>

      <!-- Sidebar -->
      <aside class="qw-aside">
        ${counselorCard({ eyebrow: "Meet your counselor" })}
        ${testimonialsCard(CONTACT_TESTIMONIALS)}
      </aside>
    </main>
    ${renderFooter()}
  `;
}

function wireContactPage(root) {
  const form = root.querySelector("#qw-contact-form");
  if (!form) return;
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    const payload = {
      name: data.name?.trim(),
      email: data.email?.trim(),
      message: data.message?.trim(),
      created_at: new Date().toISOString(),
    };

    const btn = form.querySelector('button[type="submit"]');
    const original = btn.innerHTML;
    btn.disabled = true;

    if (!payload.name || !payload.email || !payload.message) {
      btn.innerHTML = "Complete all fields";
      setTimeout(() => {
        btn.disabled = false;
        btn.innerHTML = original;
      }, 2200);
      return;
    }

    btn.innerHTML = "Sending...";
    const result = await window.nySupabase?.sendEnquiryMessage(payload);

    if (result?.error) {
      console.error("Inquiry save failed:", result.error);
      btn.innerHTML = "Try again";
      setTimeout(() => {
        btn.disabled = false;
        btn.innerHTML = original;
      }, 2200);
      return;
    }

    btn.innerHTML = "Sent ✓";
    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = original;
      form.reset();
    }, 1800);
  });
}