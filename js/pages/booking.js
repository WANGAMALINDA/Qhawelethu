// Booking page state (module-level, reset on each render).
const bookingState = {
  selectedService: "Child & Adolescent",
  selectedDay: 14,
  selectedSlot: "10:30 AM",
};

function renderBookingCalendarCells() {
  const daysInMonth = 31;
  const firstWeekday = 0; // Sunday
  const cells = Array.from({ length: firstWeekday }, () => null).concat(
    Array.from({ length: daysInMonth }, (_, i) => i + 1)
  );
  return cells;
}

function renderBookingPage() {
  const cells = renderBookingCalendarCells();

  return `
    ${renderNavBar("booking")}
    <main class="page-main">
      <div>
        <!-- Hero -->
        <section class="qw-hero qw-hero-centered" style="padding: 3.5rem 1.5rem; padding-top:3.5rem; padding-bottom:3.5rem; margin-bottom: 3.5rem;">
          <svg viewBox="0 0 400 400" class="qw-rings" style="right:-6rem; top:-6rem; width:420px; height:420px;" aria-hidden="true">
            ${[40,76,112,148,184].map((r,i)=>`<circle cx="200" cy="200" r="${r}" fill="none" stroke="#DCE6DE" stroke-width="${i===0?2:1}" opacity="${(0.14-i*0.02).toFixed(2)}"/>`).join("")}
          </svg>
          <svg viewBox="0 0 400 400" class="qw-rings" style="left:-7rem; bottom:-7rem; width:360px; height:360px;" aria-hidden="true">
            ${[40,76,112,148,184].map((r,i)=>`<circle cx="200" cy="200" r="${r}" fill="none" stroke="#C98A3A" stroke-width="${i===0?2:1}" opacity="${(0.12-i*0.02).toFixed(2)}"/>`).join("")}
          </svg>
          <p class="qw-hero-eyebrow">Family &amp; Individual Counselling — Gauteng</p>
          <h1 class="qw-display qw-hero-title" style="font-size:36px; margin-bottom:1.25rem;">
            Every family finds its<br class="hide-mobile" /> own rhythm again.
          </h1>
          <p class="qw-hero-sub" style="margin-bottom:2rem;">
            Book a session with a certified counselor for the support your family needs —
            in person in Gauteng, or from home over telehealth.
          </p>
          <div class="qw-hero-cta-row">
            <a href="#booking-form" class="qw-btn-ochre">Book Your Next Session</a>
            <a href="#services-list" class="qw-btn-outline">Explore Services</a>
          </div>
        </section>

        <!-- Services -->
        <section id="services-list" style="margin-bottom: 4rem;">
          <p class="qw-eyebrow">What we offer</p>
          <h2 class="qw-display qw-section-title" style="font-size:28px;">Services built around your family</h2>
          <div class="qw-grid-2" id="qw-booking-services">
            ${BOOKING_SERVICES.map((s) => renderBookingServiceBtn(s)).join("")}
          </div>
        </section>

        <!-- Booking form -->
        <section id="booking-form" class="qw-booking-form-card">
          <p class="qw-eyebrow">Booking</p>
          <h2 class="qw-display qw-section-title" style="font-size:26px;">Reserve your session in three steps</h2>

          <div class="qw-steps-grid" id="qw-booking-steps">
            ${renderBookingSteps()}
          </div>

          <div class="qw-booking-grid">
            <!-- Calendar -->
            <div>
              <div class="qw-cal-header">
                <span class="qw-cal-month">January 2027</span>
                <div class="qw-cal-nav">
                  <button class="qw-cal-nav-btn" aria-label="Previous month">${Icons.chevronLeft(14)}</button>
                  <button class="qw-cal-nav-btn" aria-label="Next month">${Icons.chevronRight(14)}</button>
                </div>
              </div>
              <div class="qw-cal-weekdays">
                ${["S","M","T","W","T","F","S"].map((d) => `<div>${d}</div>`).join("")}
              </div>
              <div class="qw-cal-days" id="qw-cal-days">
                ${cells
                  .map(
                    (day) => `
                  <button class="qw-cal-day ${day === bookingState.selectedDay ? "selected" : ""}"
                    ${day ? `data-day="${day}"` : "disabled"}>
                    ${day || ""}
                  </button>`
                  )
                  .join("")}
              </div>
            </div>

            <div class="qw-booking-divider"></div>

            <!-- Time slots + form -->
            <div>
              <div style="margin-bottom:1.5rem;">
                <div class="qw-slots-label" id="qw-slots-label">Available slots — Jan ${bookingState.selectedDay}</div>
                <div class="qw-slots-wrap" id="qw-slots-wrap">
                  ${TIME_SLOTS.map((t) => renderSlotPill(t)).join("")}
                </div>
              </div>

              <div class="qw-details-label">Your details</div>
              <div class="qw-form-grid">
                <input id="qw-booking-name" class="qw-input" placeholder="Full name" />
                <input id="qw-booking-phone" class="qw-input" placeholder="Phone number" />
              </div>
              <input id="qw-booking-email" class="qw-input" placeholder="Email address" style="width:100%; margin-bottom:0.75rem;" />
              <textarea id="qw-booking-note" class="qw-textarea" placeholder="Briefly describe what brings you in" rows="3" style="width:100%; margin-bottom:1rem;"></textarea>
              <button class="qw-btn-primary" id="qw-confirm-booking" style="padding:0.75rem 1.75rem; font-size:14px;">
                Confirm Booking
              </button>
              <p class="qw-form-note" style="margin-top:1rem; font-size:12px; color:var(--charcoal); opacity:0.75;">
                By submitting your booking request you accept the <a class="qw-terms-link" href="assets/T&C's.pdf" target="_blank" rel="noopener noreferrer">T&C's</a> provided by this website.
              </p>
            </div>
          </div>
        </section>
      </div>

      <!-- Sidebar -->
      <aside class="qw-aside">
        <div class="qw-side-card sage">
          <p class="qw-side-eyebrow">Lead counselor</p>
          <div class="qw-counselor-row" style="margin-bottom:0;">
            <div class="qw-avatar qw-display">${typeof COUNSELOR_IMAGE !== 'undefined' && COUNSELOR_IMAGE ? `<img src="${COUNSELOR_IMAGE}" alt="Finni Radebe"/>` : 'F'}</div>
            <div>
              <div class="qw-display qw-counselor-name">Finni Radebe</div>
              <div class="qw-counselor-role" style="margin-bottom:0.5rem;">Lead Counselor</div>
              <p class="qw-counselor-bio" style="margin-top:0;">Fifteen years supporting families through trauma, transition, and neurodivergent parenting.</p>
            </div>
          </div>
          <div class="qw-badge-row">
            ${["SACSSP", "HPCSA", "AAMFT"].map((b) => `<span class="qw-badge-pill">${b}</span>`).join("")}
          </div>
        </div>

        <div class="qw-side-card ink">
          <p class="qw-side-eyebrow" style="color: var(--ochre);">Secure client intake</p>
          <div class="qw-intake-row">${Icons.shieldCheck(18)} <span>End-to-end encrypted forms</span></div>
          <div class="qw-intake-row">${Icons.fileCheck2(18)} <span>POPIA-compliant records</span></div>
          <div class="qw-intake-row">${Icons.lock(18)} <span>Private, never shared</span></div>
          <button class="qw-full-btn">Complete Intake Form</button>
        </div>

        ${blogCard(BLOG_POSTS_BOOKING)}
        ${contactMiniCard()}
      </aside>
    </main>
    ${renderFooter()}
  `;
}

function renderBookingServiceBtn(s) {
  const active = bookingState.selectedService === s.name;
  return `
    <button class="qw-service-btn ${active ? "active" : ""}" data-service="${s.name}">
      <div class="dot-wrap"><div class="dot"></div></div>
      <h3 class="qw-display">${s.name}</h3>
      <p>${s.blurb}</p>
      <span class="select-label">${active ? "Selected" : "Select"} ${Icons.arrowRight(13)}</span>
    </button>
  `;
}

function renderSlotPill(t) {
  const active = bookingState.selectedSlot === t;
  return `<button class="qw-slot-pill ${active ? "selected" : ""}" data-slot="${t}">${t}</button>`;
}

function renderBookingSteps() {
  const steps = [
    { n: 1, label: "Service", value: bookingState.selectedService },
    { n: 2, label: "Date & time", value: `Jan ${bookingState.selectedDay} · ${bookingState.selectedSlot}` },
    { n: 3, label: "Your details", value: "Complete the form below" },
  ];
  return steps
    .map(
      (step) => `
    <div class="qw-step">
      <div class="qw-ring-badge">
        <svg viewBox="0 0 44 44">
          <circle cx="22" cy="22" r="20" fill="none" stroke="var(--sage)" stroke-width="2" />
          <circle cx="22" cy="22" r="14" fill="none" stroke="var(--moss)" stroke-width="1.5" opacity="0.5" />
        </svg>
        <span>${step.n}</span>
      </div>
      <div>
        <div class="qw-step-label">${step.label}</div>
        <div class="qw-display qw-step-value">${step.value}</div>
      </div>
    </div>`
    )
    .join("");
}

function wireBookingPage(root) {
  const servicesWrap = root.querySelector("#qw-booking-services");
  const calDays = root.querySelector("#qw-cal-days");
  const slotsWrap = root.querySelector("#qw-slots-wrap");
  const slotsLabel = root.querySelector("#qw-slots-label");
  const stepsWrap = root.querySelector("#qw-booking-steps");
  const confirmBtn = root.querySelector("#qw-confirm-booking");

  function refreshSteps() {
    stepsWrap.innerHTML = renderBookingSteps();
  }

  if (servicesWrap) {
    servicesWrap.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-service]");
      if (!btn) return;
      bookingState.selectedService = btn.getAttribute("data-service");
      servicesWrap.innerHTML = BOOKING_SERVICES.map((s) => renderBookingServiceBtn(s)).join("");
      refreshSteps();
    });
  }

  if (calDays) {
    calDays.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-day]");
      if (!btn) return;
      bookingState.selectedDay = Number(btn.getAttribute("data-day"));
      calDays.querySelectorAll(".qw-cal-day").forEach((el) => el.classList.remove("selected"));
      btn.classList.add("selected");
      slotsLabel.textContent = `Available slots — Jan ${bookingState.selectedDay}`;
      refreshSteps();
    });
  }

  if (slotsWrap) {
    slotsWrap.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-slot]");
      if (!btn) return;
      bookingState.selectedSlot = btn.getAttribute("data-slot");
      slotsWrap.innerHTML = TIME_SLOTS.map((t) => renderSlotPill(t)).join("");
      refreshSteps();
    });
  }

  if (confirmBtn) {
    confirmBtn.addEventListener("click", async () => {
      const original = confirmBtn.innerHTML;
      const nameInput = root.querySelector("#qw-booking-name");
      const phoneInput = root.querySelector("#qw-booking-phone");
      const emailInput = root.querySelector("#qw-booking-email");
      const noteInput = root.querySelector("#qw-booking-note");

      const fullName = nameInput?.value.trim();
      const phone = phoneInput?.value.trim();
      const email = emailInput?.value.trim();
      const note = noteInput?.value.trim();

      if (!fullName || !email) {
        confirmBtn.disabled = true;
        confirmBtn.innerHTML = "Name & email required";
        setTimeout(() => {
          confirmBtn.disabled = false;
          confirmBtn.innerHTML = original;
        }, 2200);
        return;
      }

      confirmBtn.disabled = true;
      confirmBtn.innerHTML = "Booking...";

      const payload = {
        service: bookingState.selectedService,
        booking_date: `2027-01-${String(bookingState.selectedDay).padStart(2, "0")}`,
        time_slot: bookingState.selectedSlot,
        full_name: fullName,
        phone,
        email,
        note,
        created_at: new Date().toISOString(),
      };

      const result = await window.nySupabase?.sendBookingRequest(payload);
      if (result?.error) {
        console.error("Booking save failed:", result.error, result);
        const message = result.error?.message || "Unable to save booking";
        confirmBtn.innerHTML = message.length < 32 ? message : "Try again";
        setTimeout(() => {
          confirmBtn.disabled = false;
          confirmBtn.innerHTML = original;
        }, 2200);
        return;
      }

      confirmBtn.innerHTML = "Booked ✓";
      setTimeout(() => {
        confirmBtn.disabled = false;
        confirmBtn.innerHTML = original;
        if (nameInput) nameInput.value = "";
        if (phoneInput) phoneInput.value = "";
        if (emailInput) emailInput.value = "";
        if (noteInput) noteInput.value = "";
      }, 1800);
    });
  }
}
