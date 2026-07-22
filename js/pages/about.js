function renderAboutPage() {
  return `
    ${renderNavBar("about")}
    <main class="page-main">
      <div>
        <!-- Hero -->
        <section class="qw-hero">
        <div class="qw-hero-image" style="background-image:url('assets/PROFILE 3.jpeg?q=80&amp;w=900&amp;auto=format&amp;fit=crop');"></div>
          <p class="qw-hero-eyebrow">Meet Qhawelethu Wellness</p>
          <h1 class="qw-display qw-hero-title" style="font-size:34px; margin-bottom:0.5rem;">Our Heart &amp; Our Story</h1>
          <p class="qw-display" style="position:relative; font-size:18px; margin:0 0 1rem; color: var(--ochre);">
            ${BRAND_POSITIONING}
          </p>
          <p class="qw-hero-sub" style="margin-bottom:0.75rem;">
            Qhawelethu was founded on a simple, guiding philosophy: every individual and family
            deserves care that meets them exactly where they are. We blend clinical expertise
            with genuine warmth, offering a practice built around neurodiversity-affirming
            support for children, adults, and the people who love them.
          </p>
          <p class="qw-hero-sub" style="margin-bottom:1.25rem;">
            "Qhawelethu" means "our heroes" — a name we carry as a daily commitment. We
            approach every session with compassion and curiosity, and we work to make sure
            each person who walks through our door feels truly welcomed and understood.
          </p>
          <a href="#about-founder-story" class="qw-btn-outline">Meet Your Counsellor</a>
        </section>

        <!-- Qualifications & Credentials -->
        <section class="qw-value-card" style="background: var(--sage); margin-bottom: 2.5rem;">
          <h3 class="qw-display">Qualifications &amp; Credentials</h3>
          <div class="qw-spec-grid" style="grid-template-columns: repeat(2, 1fr); gap: 0.6rem; margin-top: 0.75rem;">
            ${QUALIFICATIONS.map((q) => `<span class="qw-spec-pill" style="text-align:left;">${q}</span>`).join("")}
          </div>
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
        <section class="qw-grid-2" style="margin-bottom: 2.5rem;">
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

        <!-- Founder story -->
        <section id="about-founder-story">
          <p class="qw-eyebrow">Our founder's story</p>
          <h2 class="qw-display qw-section-title">Meet Qhawe Romeo Themba</h2>

          <div class="qw-value-card" style="margin-bottom: 1.25rem;">
            <h3 class="qw-display">Why I Entered Psychology</h3>
            <p>
              Psychology was never simply a career choice for me — it became a calling.
              Growing up, I witnessed the profound impact that emotional struggles, trauma,
              and a lack of support can have on individuals and families. Those experiences
              taught me that behind every behaviour is a story, and behind every struggle is
              someone hoping to be understood.
            </p>
            <p>
              I chose psychology because I wanted to become the kind of professional who
              helps people find clarity, healing, and hope. Today, that purpose continues to
              guide every session I conduct.
            </p>
          </div>

          <div class="qw-value-card" style="background: var(--sage); margin-bottom: 1.25rem;">
            <h3 class="qw-display">My Passion for Neurodiversity</h3>
            <p>
              Over the years, my work naturally led me to supporting neurodivergent children,
              adolescents, and their families. Working closely with individuals on the autism
              spectrum, ADHD, learning differences, and other neurodevelopmental conditions has
              shown me that many people do not need to be "fixed" — they need to be understood.
            </p>
            <p>
              My passion is helping families move beyond frustration and uncertainty by
              providing practical strategies, emotional support, and evidence-informed guidance
              that respects how every individual naturally thinks, learns, and experiences the
              world. Every neurodivergent person deserves support that recognises both their
              challenges and their strengths.
            </p>
          </div>

          <div class="qw-value-card" style="margin-bottom: 1.25rem;">
            <h3 class="qw-display">My Professional Journey</h3>
            <p>
              My professional journey has combined academic training with extensive hands-on
              experience supporting children, adolescents, adults, and families. I hold a
              Bachelor's degree in Psychology and an Honours degree in Applied Psychology,
              complemented by specialised training in Cognitive Behavioural Therapy (CBT) and a
              Neurodiversity Specialist Training Certificate. My work has included psychological
              support, behavioural consultation, parent coaching, and therapeutic interventions
              across a wide range of settings.
            </p>
            <p>
              Throughout my career, I have developed particular expertise in neurodiversity,
              emotional regulation, behavioural challenges, family dynamics, and psychological
              wellbeing. These experiences have strengthened my belief that meaningful change
              happens when individuals and families are supported with compassion,
              collaboration, and practical tools they can apply in everyday life.
            </p>
          </div>

          <div class="qw-value-card" style="background: #bad2cb; margin-bottom: 1.25rem;">
            <h3 class="qw-display">My Philosophy of Care</h3>
            <p>
              Every person deserves to feel safe, respected, and genuinely heard. My approach
              is collaborative rather than prescriptive. I believe therapy works best when we
              work together to understand each person's unique experiences, strengths, and
              goals. I provide neurodiversity-affirming, evidence-informed care that recognises
              there is no one-size-fits-all approach to mental health.
            </p>
            <p>
              Whether I am supporting a child, a parent, or an adult, my goal is to create an
              environment where people feel understood without judgement and empowered to make
              lasting, meaningful change.
            </p>
          </div>

          <div class="qw-value-card">
            <h3 class="qw-display">What Clients Can Expect</h3>
            <p>
              When you begin working with me, you can expect a professional, compassionate, and
              collaborative experience. Every session is tailored to your individual needs and
              focuses on practical strategies that can be applied in everyday life. My aim is
              not simply to provide a space to talk, but to help you better understand your
              experiences, develop effective coping skills, strengthen relationships, and build
              confidence moving forward.
            </p>
            <p>
              Clients often describe my approach as calm, approachable, supportive, and
              practical. I believe lasting progress comes through consistency, trust, and
              working together at a pace that feels right for you. Whether you are seeking
              support for yourself, your child, or your family, you will be welcomed with
              respect, empathy, and a genuine commitment to helping you achieve meaningful
              outcomes.
            </p>
          </div>
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
