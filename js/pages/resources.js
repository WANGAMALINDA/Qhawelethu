function renderResourcesPage() {
  return `
    ${renderNavBar("resources")}
    <main class="page-main">
      <div>
        <!-- Hero -->
        <section class="qw-hero">
          <svg viewBox="0 0 400 400" class="qw-rings" style="right:-6rem; top:-6rem; width:380px; height:380px;" aria-hidden="true">
            ${[40,76,112,148,184].map((r,i)=>`<circle cx="200" cy="200" r="${r}" fill="none" stroke="#DCE6DE" stroke-width="${i===0?2:1}" opacity="${(0.14-i*0.02).toFixed(2)}"/>`).join("")}
          </svg>
          <p class="qw-hero-eyebrow">A curated collection</p>
          <h1 class="qw-display qw-hero-title" style="font-size:32px;">
            Mental health &amp; neurodiversity resources, for the whole family.
          </h1>
          <p class="qw-hero-sub" style="margin-bottom:0;">
            Articles, workbooks, and guides to support your unique wellness journey — free to
            read, print, and share.
          </p>
        </section>

        <section class="qw-search-panel">
          <p class="qw-eyebrow">Internet keyword search</p>
          <h2 class="qw-display qw-section-title" style="margin-bottom:0.75rem;">Search the web for a topic</h2>
          <p class="qw-search-copy">
            Use Google to search the wider web or limit the search to this site only.
          </p>
          <form id="qw-web-search-form" class="qw-search-form">
            <label class="sr-only" for="qw-search-query">Search term</label>
            <input id="qw-search-query" class="qw-input qw-search-input" name="query" placeholder="Try: sensory processing, autism support, parent coaching" />
            <div class="qw-search-actions">
              <button type="submit" class="qw-btn-primary">Search the web</button>
              <button type="button" class="qw-btn-outline" id="qw-site-search">Search this site</button>
            </div>
          </form>
        </section>

        <!-- Category cards -->
        <section class="qw-grid-2" style="margin-bottom: 3.5rem;">
          ${CATEGORIES.map(
            (c) => `
            <div class="qw-resource-card">
              <div class="qw-card-icon-circle">${Icons[c.icon](19, "var(--moss)")}</div>
              <h3 class="qw-display">${c.title}</h3>
              <p>${c.desc}</p>
              <a href="${c.href}" class="qw-learn-more">${c.cta} ${Icons.arrowRight(13)}</a>
            </div>`
          ).join("")}
        </section>

        <!-- Featured articles -->
        <section id="articles">
          <p class="qw-eyebrow">Latest from the blog</p>
          <h2 class="qw-display qw-section-title">Recently published</h2>
          <div class="qw-grid-3-article">
            ${ARTICLES.map(
              (a) => `
              <div class="qw-article-cards">
                <div class="qw-article-thumb" ${a.image ? `style="background-image:url('${a.image}'); background-size:cover; background-position:center;"` : ''}>
                  ${!a.image ? Icons.bookOpen(22, "var(--moss)") : ''}
                </div>
                <div class="qw-article-body">
                  <span class="qw-article-tag">${a.tag}</span>
                  <h4 class="qw-display qw-article-title">${a.title}</h4>
                  <div class="qw-article-date">${a.date}</div>
                </div>
              </div>`
            ).join("")}
          </div>
        </section>
      </div>

      <!-- Sidebar -->
      <aside class="qw-aside">
        ${counselorCard({ eyebrow: "Meet your counselor" })}

        <a href="https://www.youtube.com/watch?v=6BK0wkWm6TE" target="_blank" rel="noopener noreferrer" class="qw-video-card" id="featured-video">
          <p class="qw-side-eyebrow" style="color: var(--ochre);">Featured video</p>
          <div class="qw-video-thumb" style="background-image:url('assets/thumbnail.png'); background-size: cover; background-position: center;">
            <div class="qw-play-btn">${Icons.play(16, "var(--ink)", "var(--ink)")}</div>
          </div>
          <div class="qw-video-title">Recognizing Sensory Overload at Home</div>
          <div class="qw-video-sub">22 min · Webinar recording</div>
        </a>

        <div class="qw-side-card bordered" id="quick-download">
          <p class="qw-side-eyebrow">Quick download</p>
          <div class="qw-download-row">
            <div class="qw-download-icon">${Icons.download(16, "var(--moss)")}</div>
            <div>
              <div class="qw-download-title">Emotional Check-in Chart</div>
              <div class="qw-download-sub">PDF · Ages 5–12</div>
            </div>
          </div>
          <a href="assets/EmotionRegulationFeelingsCheckIn.pdf" class="qw-learn-more" style="color: var(--ochre);" target="_blank" download>Download now ${Icons.arrowRight(13)}</a>
        </div>

        ${contactMiniCard()}
      </aside>
    </main>
    ${renderFooter()}
  `;
}

function buildSearchUrl(query, siteOnly = false) {
  const sanitized = query.trim().replace(/\s+/g, " ");
  const searchTerm = siteOnly ? `site:qhawelethuwc.co.za ${sanitized}` : sanitized;
  return `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
}

function wireResourcesPage(root) {
  const form = root.querySelector("#qw-web-search-form");
  const siteSearchButton = root.querySelector("#qw-site-search");
  const input = root.querySelector("#qw-search-query");

  const submitSearch = (siteOnly) => {
    const query = input?.value || "";
    if (!query.trim()) {
      input?.focus();
      return;
    }
    window.open(buildSearchUrl(query, siteOnly), "_blank", "noopener,noreferrer");
  };

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    submitSearch(false);
  });

  siteSearchButton?.addEventListener("click", () => submitSearch(true));
}
