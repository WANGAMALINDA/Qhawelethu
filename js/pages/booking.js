// Booking page state (module-level, reset on each render).
const bookingState = {
  selectedService: "For Churches",
  selectedDay: 14,
  selectedSlot: "10:30 AM",
};

const TIME_ZONES = [
  "SAST — South Africa (UTC+2)",
  "GMT/UTC — London (winter)",
  "BST — London (summer)",
  "CET — Central Europe (winter)",
  "CEST — Central Europe (summer)",
  "EET — Eastern Europe / Cairo",
  "EAT — East Africa (Nairobi)",
  "WAT — West Africa (Lagos)",
  "GST — Gulf Standard Time (Dubai)",
  "IST — India Standard Time",
  "AEST — Australia Eastern",
  "NZST — New Zealand",
  "EST — US Eastern (winter)",
  "EDT — US Eastern (summer)",
  "CST — US Central (winter)",
  "CDT — US Central (summer)",
  "MST — US Mountain (winter)",
  "MDT — US Mountain (summer)",
  "PST — US Pacific (winter)",
  "PDT — US Pacific (summer)",
];

function renderBookingCalendarCells() {
  const daysInMonth = 31;
  const firstWeekday = 0; // Sunday
  const cells = Array.from({ length: firstWeekday }, () => null).concat(
    Array.from({ length: daysInMonth }, (_, i) => i + 1)
  );
  return cells;
}

function renderIntakeCheckbox(id, label) {
  return `
    <label class="qw-intake-check-row" style="display:flex; align-items:flex-start; gap:0.5rem; margin-bottom:0.6rem; font-size:14px;">
      <input type="checkbox" id="${id}" style="margin-top:0.2rem;" />
      <span>${label}</span>
    </label>`;
}

function renderIntakeYesNo(id, label) {
  return `
    <div class="qw-intake-yesno" style="margin-bottom:0.85rem;">
      <label class="qw-form-label" style="display:block; margin-bottom:0.35rem;">${label}</label>
      <div style="display:flex; gap:1.25rem; font-size:14px;">
        <label style="display:flex; align-items:center; gap:0.35rem;"><input type="radio" name="${id}" value="yes" /> Yes</label>
        <label style="display:flex; align-items:center; gap:0.35rem;"><input type="radio" name="${id}" value="no" /> No</label>
      </div>
    </div>`;
}

function renderIntakeForm() {
  const cells = renderBookingCalendarCells();

  return `
    <section id="intake-form" class="qw-booking-form-card" style="margin-top: 3.5rem;">
      <p class="qw-eyebrow">Client intake &amp; booking</p>
      <h2 class="qw-display qw-section-title" style="font-size:26px;">Client Intake Form</h2>
      <p class="qw-hero-sub" style="margin-bottom:2rem;">
        Complete this form to book your session. Your information is
        encrypted, POPIA-compliant, and never shared.
      </p>

      <!-- Service & schedule -->
      <div class="qw-details-label">Service &amp; Schedule</div>
      <div class="qw-steps-grid" id="qw-booking-steps">
        ${renderBookingSteps()}
      </div>

      <div class="qw-grid-2" id="qw-booking-services" style="margin-bottom:1.5rem;">
        ${BOOKING_SERVICES.map((s) => renderBookingServiceBtn(s)).join("")}
      </div>

      <div class="qw-booking-grid" style="margin-bottom:1.5rem;">
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

        <!-- Time slots -->
        <div>
          <div class="qw-slots-label" id="qw-slots-label">Available slots — Jan ${bookingState.selectedDay}</div>
          <div class="qw-slots-wrap" id="qw-slots-wrap">
            ${TIME_SLOTS.map((t) => renderSlotPill(t)).join("")}
          </div>
        </div>
      </div>

      <!-- Personal information -->
      <div class="qw-details-label" style="margin-top:1.75rem;">Personal Information</div>
      <div class="qw-form-grid">
        <input id="qw-intake-fullname" class="qw-input" placeholder="Full name" />
        <input id="qw-intake-dob" class="qw-input" type="date" placeholder="Date of birth" />
        <input id="qw-intake-age" class="qw-input" type="number" min="0" placeholder="Age" />
        <input id="qw-intake-gender" class="qw-input" placeholder="Gender (optional)" />
        <input id="qw-intake-nationality" class="qw-input" placeholder="Nationality" />
        <input id="qw-intake-country" class="qw-input" placeholder="Country of residence" />
      </div>
      <input id="qw-intake-address" class="qw-input" placeholder="Home address" style="width:100%; margin-bottom:0.75rem;" />
      <div class="qw-form-grid">
        <input id="qw-intake-email" class="qw-input" placeholder="Email address" />
        <input id="qw-intake-mobile" class="qw-input" placeholder="Mobile number (with country code)" />
        <input id="qw-intake-language" class="qw-input" placeholder="Preferred language" />
        <input id="qw-intake-occupation" class="qw-input" placeholder="Occupation" />
        <input id="qw-intake-marital" class="qw-input" placeholder="Marital status" />
      </div>

      <div class="qw-form-grid" style="margin-top:0.5rem;">
        <input id="qw-intake-emergency-name" class="qw-input" placeholder="Emergency contact name" />
        <input id="qw-intake-emergency-relationship" class="qw-input" placeholder="Emergency contact relationship" />
        <input id="qw-intake-emergency-number" class="qw-input" placeholder="Emergency contact number" style="grid-column: span 1;" />
      </div>

      <!-- Appointment information -->
      <div class="qw-details-label" style="margin-top:1.75rem;">Appointment Information</div>
      <div class="qw-form-grid">
        <select id="qw-intake-timezone" class="qw-input">
          <option value="">Preferred time zone</option>
          ${TIME_ZONES.map((tz) => `<option value="${tz}">${tz}</option>`).join("")}
        </select>
        <select id="qw-intake-platform" class="qw-input">
          <option value="">Preferred consultation platform</option>
          ${INTAKE_PLATFORMS.map((p) => `<option value="${p}">${p}</option>`).join("")}
        </select>
      </div>
      <input id="qw-intake-referral" class="qw-input" placeholder="How did you hear about Qhawelethu Wellness Counselling?" style="width:100%; margin-bottom:0.75rem;" />

      <!-- Presenting concern -->
      <div class="qw-details-label" style="margin-top:1.75rem;">Presenting Concern</div>
      <textarea id="qw-intake-concern" class="qw-textarea" placeholder="What brings you to counselling today?" rows="3" style="width:100%; margin-bottom:1rem;"></textarea>
      <label class="qw-form-label" style="display:block; margin-bottom:0.5rem;">Please select any areas you would like support with</label>
      <div class="qw-grid-2" id="qw-intake-concern-checks" style="margin-bottom:0.5rem;">
        ${INTAKE_CONCERNS.map((c) => renderIntakeCheckbox(`concern-${c.replace(/\W+/g, "-").toLowerCase()}`, c)).join("")}
      </div>
      <input id="qw-intake-concern-other" class="qw-input" placeholder="Other (please specify)" style="width:100%; margin-bottom:1rem;" />

      <!-- Medical & psychological background -->
      <div class="qw-details-label" style="margin-top:1.75rem;">Medical &amp; Psychological Background</div>
      ${INTAKE_BACKGROUND_QUESTIONS.map((q) => renderIntakeYesNo(`qw-intake-${q.id}`, q.label)).join("")}
      <textarea id="qw-intake-background-note" class="qw-textarea" placeholder="Is there anything else you would like your practitioner to know before your first session?" rows="3" style="width:100%; margin-bottom:1rem;"></textarea>

      <!-- Online consultation agreement -->
      <div class="qw-details-label" style="margin-top:1.75rem;">Online Consultation Agreement</div>
      <p class="qw-hero-sub" style="margin-bottom:0.75rem; font-size:14px;">Please confirm that you understand:</p>
      ${INTAKE_AGREEMENT_ITEMS.map((a) => renderIntakeCheckbox(a.id, a.label)).join("")}
      <div class="qw-form-grid" style="margin-top:0.5rem;">
        <input id="qw-intake-agreement-signature" class="qw-input" placeholder="Digital signature" />
        <input id="qw-intake-agreement-date" class="qw-input" type="date" />
      </div>

      <!-- Privacy consent -->
      <div class="qw-details-label" style="margin-top:1.75rem;">Privacy Consent</div>
      ${renderIntakeCheckbox(INTAKE_PRIVACY_ITEM.id, INTAKE_PRIVACY_ITEM.label)}
      <div class="qw-form-grid" style="margin-top:0.5rem;">
        <input id="qw-intake-privacy-signature" class="qw-input" placeholder="Digital signature" />
        <input id="qw-intake-privacy-date" class="qw-input" type="date" />
      </div>

      <!-- Cancellation policy -->
      <div class="qw-details-label" style="margin-top:1.75rem;">Cancellation Policy</div>
      ${INTAKE_CANCELLATION_ITEMS.map((c) => renderIntakeCheckbox(c.id, c.label)).join("")}
      <div class="qw-form-grid" style="margin-top:0.5rem;">
        <input id="qw-intake-cancellation-signature" class="qw-input" placeholder="Digital signature" />
        <input id="qw-intake-cancellation-date" class="qw-input" type="date" />
      </div>

      <button class="qw-btn-primary" id="qw-submit-intake" style="padding:0.75rem 1.75rem; font-size:14px; margin-top:1.5rem;">
        Submit Booking
      </button>
      <p class="qw-form-note" style="margin-top:1rem; font-size:12px; color:var(--charcoal); opacity:0.75;">
        By submitting this form you accept the <a class="qw-terms-link" href="assets/T&C's.pdf" target="_blank" rel="noopener noreferrer">T&C's</a> provided by this website.
      </p>
      <p class="qw-form-note" id="qw-intake-status" style="margin-top:0.5rem; font-size:12px; color:var(--charcoal); opacity:0.75;"></p>
    </section>`;
}

function renderBookingPage() {
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
          <p class="qw-hero-eyebrow">Online Counselling Wherever You Are</p>
          <h1 class="qw-display qw-hero-title" style="font-size:36px; margin-bottom:1.25rem;">
            Every family finds its<br class="hide-mobile" /> own rhythm again.
          </h1>
          <p class="qw-hero-sub" style="margin-bottom:2rem;">
            Book a session with a certified counselor for the support your family needs — from
            home, over secure online telehealth, wherever you are in the world.
          </p>
          <div class="qw-hero-cta-row">
            <a href="#intake-form" class="qw-btn-ochre">Book Your Next Session</a>
            <a href="#services-list" class="qw-btn-outline">Explore Services</a>
          </div>
        </section>


        <!-- Client intake form (also serves as the booking form) -->
        ${renderIntakeForm()}
      </div>

      <!-- Sidebar -->
      <aside class="qw-aside">
        <div class="qw-side-card sage">
          <p class="qw-side-eyebrow">Lead counsellor</p>
          <div class="qw-counselor-row" style="margin-bottom:0;">
            <div class="qw-avatar qw-display">${typeof COUNSELOR_IMAGE !== 'undefined' && COUNSELOR_IMAGE ? `<img src="${COUNSELOR_IMAGE}" alt="Qhawe Romeo Themba"/>` : 'F'}</div>
            <div>
              <div class="qw-display qw-counselor-name">Qhawe Romeo Themba</div>
              <div class="qw-counselor-role" style="margin-bottom:0.5rem;">Lead Counsellor | Neurodiversity Specialist</div>
              <p class="qw-counselor-bio" style="margin-top:0;">Helping neurodivergent children, adolescents, and families thrive through compassionate, evidence-informed psychological support.</p>
            </div>
          </div>
          <div class="qw-badge-row">
            ${["Autism (ASD)", "ADHD", "Behaviour Consultation"].map((b) => `<span class="qw-badge-pill">${b}</span>`).join("")}
          </div>
        </div>

        <div class="qw-side-card ink">
          <p class="qw-side-eyebrow" style="color: var(--ochre);">Secure client intake</p>
          <div class="qw-intake-row">${Icons.shieldCheck(18)} <span>End-to-end encrypted forms</span></div>
          <div class="qw-intake-row">${Icons.fileCheck2(18)} <span>POPIA-compliant records</span></div>
          <div class="qw-intake-row">${Icons.lock(18)} <span>Private, never shared</span></div>
          <a href="#intake-form" class="qw-full-btn" style="display:block; text-align:center; text-decoration:none;">Complete Intake Form Below</a>
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

  wireIntakeForm(root);
}

function wireIntakeForm(root) {
  const submitBtn = root.querySelector("#qw-submit-intake");
  const statusEl = root.querySelector("#qw-intake-status");
  if (!submitBtn) return;

  submitBtn.addEventListener("click", async () => {
    const val = (id) => root.querySelector(`#${id}`)?.value?.trim() || "";
    const checked = (id) => !!root.querySelector(`#${id}`)?.checked;
    const radioVal = (name) => root.querySelector(`input[name="${name}"]:checked`)?.value || "";

    const fullName = val("qw-intake-fullname");
    const email = val("qw-intake-email");
    const mobile = val("qw-intake-mobile");

    if (!fullName || !email || !mobile) {
      statusEl.style.color = "#b5432b";
      statusEl.textContent = "Please provide at least your full name, email, and mobile number.";
      return;
    }

    const requiredAgreements = INTAKE_AGREEMENT_ITEMS.every((a) => checked(a.id));
    const privacyAccepted = checked(INTAKE_PRIVACY_ITEM.id);
    const cancellationAccepted = INTAKE_CANCELLATION_ITEMS.every((c) => checked(c.id));

    if (!requiredAgreements || !privacyAccepted || !cancellationAccepted) {
      statusEl.style.color = "#b5432b";
      statusEl.textContent = "Please review and check all agreement, privacy, and cancellation policy items.";
      return;
    }

    const original = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = "Submitting...";
    statusEl.style.color = "";
    statusEl.textContent = "";

    const selectedConcerns = INTAKE_CONCERNS.filter((c) =>
      checked(`concern-${c.replace(/\W+/g, "-").toLowerCase()}`)
    );

    // Short note kept on the bookings row itself (used by the admin
    // dashboard's bookings tab). The full intake record is stored
    // separately in intake_forms and linked via booking_id below.
    const bookingNote = [
      val("qw-intake-concern") && `Presenting concern: ${val("qw-intake-concern")}`,
      "Full intake form submitted — see intake_forms record for details.",
    ].filter(Boolean).join("\n");

    const bookingPayload = {
      service: bookingState.selectedService,
      booking_date: `2027-01-${String(bookingState.selectedDay).padStart(2, "0")}`,
      time_slot: bookingState.selectedSlot,
      full_name: fullName,
      phone: mobile,
      email,
      note: bookingNote,
      created_at: new Date().toISOString(),
    };

    const bookingResult = await window.nySupabase?.sendBookingRequest(bookingPayload);
    if (bookingResult?.error) {
      console.error("Booking save failed:", bookingResult.error, bookingResult);
      submitBtn.disabled = false;
      submitBtn.innerHTML = original;
      statusEl.style.color = "#b5432b";
      statusEl.textContent = bookingResult.error?.message || "Unable to save booking. Please try again.";
      return;
    }

    // bookingResult.data is expected to be the inserted row (or an array
    // containing it), so we can link the intake record back to it.
    const bookingRow = Array.isArray(bookingResult?.data) ? bookingResult.data[0] : bookingResult?.data;
    const bookingId = bookingRow?.id || null;

    const intakePayload = {
      full_name: fullName,
      date_of_birth: val("qw-intake-dob") || null,
      age: val("qw-intake-age"),
      gender: val("qw-intake-gender"),
      nationality: val("qw-intake-nationality"),
      country_of_residence: val("qw-intake-country"),
      home_address: val("qw-intake-address"),
      email,
      mobile,
      preferred_language: val("qw-intake-language"),
      occupation: val("qw-intake-occupation"),
      marital_status: val("qw-intake-marital"),
      emergency_contact_name: val("qw-intake-emergency-name"),
      emergency_contact_relationship: val("qw-intake-emergency-relationship"),
      emergency_contact_number: val("qw-intake-emergency-number"),

      preferred_time_zone: root.querySelector("#qw-intake-timezone")?.value || "",
      preferred_platform: root.querySelector("#qw-intake-platform")?.value || "",
      referral_source: val("qw-intake-referral"),

      presenting_concern: val("qw-intake-concern"),
      concern_areas: selectedConcerns,
      concern_other: val("qw-intake-concern-other"),

      // NOTE: these keys assume each entry in INTAKE_BACKGROUND_QUESTIONS
      // has an id matching its intake_forms column name (e.g. "prev_counselling").
      // Adjust here if your actual ids differ.
      prev_counselling: radioVal("qw-intake-prev_counselling"),
      psych_assessment: radioVal("qw-intake-psych_assessment"),
      diagnosed_condition: radioVal("qw-intake-diagnosed_condition"),
      current_medication: radioVal("qw-intake-current_medication"),
      other_healthcare: radioVal("qw-intake-other_healthcare"),
      medical_conditions: radioVal("qw-intake-medical_conditions"),
      background_note: val("qw-intake-background-note"),

      // NOTE: same assumption here — each checkbox id in
      // INTAKE_AGREEMENT_ITEMS / INTAKE_CANCELLATION_ITEMS / INTAKE_PRIVACY_ITEM
      // is assumed to match its intake_forms column name.
      agree_online: checked("agree_online"),
      agree_private_space: checked("agree_private_space"),
      agree_interruptions: checked("agree_interruptions"),
      agree_confidentiality: checked("agree_confidentiality"),
      agree_not_emergency: checked("agree_not_emergency"),
      agree_remote_consent: checked("agree_remote_consent"),
      agreement_signature: val("qw-intake-agreement-signature"),
      agreement_date: val("qw-intake-agreement-date") || null,

      privacy_consent: checked("privacy_consent"),
      privacy_signature: val("qw-intake-privacy-signature"),
      privacy_date: val("qw-intake-privacy-date") || null,

      cancel_24h: checked("cancel_24h"),
      cancel_charge: checked("cancel_charge"),
      cancel_late: checked("cancel_late"),
      cancellation_signature: val("qw-intake-cancellation-signature"),
      cancellation_date: val("qw-intake-cancellation-date") || null,

      booking_id: bookingId,
    };

    const intakeResult = await window.nySupabase?.sendIntakeForm(intakePayload);
    if (intakeResult?.error) {
      console.error("Intake form save failed:", intakeResult.error, intakeResult);
      submitBtn.disabled = false;
      submitBtn.innerHTML = original;
      statusEl.style.color = "#b5432b";
      statusEl.textContent = intakeResult.error?.message || "Booking saved, but intake details could not be saved. Please contact us directly.";
      return;
    }

    submitBtn.innerHTML = "Booked ✓";
    statusEl.style.color = "";
    statusEl.textContent = "Thank you — your booking and intake details have been received.";
    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = original;
    }, 1800);
  });
}