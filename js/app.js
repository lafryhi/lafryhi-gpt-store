const DATA_URL = "data/gpts.json";
const SITE_TITLE = "LAFRYHI GPT Store";
const SITE_DESCRIPTION = "LAFRYHI GPT Store هو متجر شخصي لعرض GPTs والأدوات الذكية الخاصة بـ LAFRYHI بشكل واضح واحترافي.";
const SITE_IMAGE = "assets/og-image.svg";
const PREFERS_REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const DEFAULT_THEME = {
  primary: "#1677FF",
  secondary: "#22D3EE",
  glow: "rgba(34, 211, 238, 0.24)",
  cardBase: "#F8FBFF",
  cardBase2: "#ECFEFF",
  border: "rgba(34, 211, 238, 0.18)",
};

const VISUAL_THEMES = {
  "ai-radar": {
    primary: "#0EA5E9",
    secondary: "#22D3EE",
    glow: "rgba(34, 211, 238, 0.26)",
    cardBase: "#F8FBFF",
    cardBase2: "#ECFEFF",
    border: "rgba(14, 165, 233, 0.2)",
  },
  "gpt-sotour": {
    primary: "#F59E0B",
    secondary: "#FFD43B",
    glow: "rgba(245, 158, 11, 0.26)",
    cardBase: "#FFF7ED",
    cardBase2: "#FFFBEB",
    border: "rgba(245, 158, 11, 0.2)",
  },
  "lafryhi-operator-gpt": {
    primary: "#8B5CF6",
    secondary: "#C084FC",
    glow: "rgba(139, 92, 246, 0.26)",
    cardBase: "#F5F3FF",
    cardBase2: "#FDF4FF",
    border: "rgba(139, 92, 246, 0.2)",
  },
  "app-ideas-gpt": {
    primary: "#22C55E",
    secondary: "#86EFAC",
    glow: "rgba(34, 197, 94, 0.24)",
    cardBase: "#F0FDF4",
    cardBase2: "#ECFEFF",
    border: "rgba(34, 197, 94, 0.18)",
  },
  "codex-assistant": {
    primary: "#4F46E5",
    secondary: "#60A5FA",
    glow: "rgba(79, 70, 229, 0.24)",
    cardBase: "#EEF2FF",
    cardBase2: "#F8FBFF",
    border: "rgba(79, 70, 229, 0.2)",
  },
  "google-play-policy-helper": {
    primary: "#16A34A",
    secondary: "#2DD4BF",
    glow: "rgba(45, 212, 191, 0.24)",
    cardBase: "#F0FDF4",
    cardBase2: "#ECFEFF",
    border: "rgba(22, 163, 74, 0.18)",
  },
  "facebook-post-writer": {
    primary: "#2563EB",
    secondary: "#EC4899",
    glow: "rgba(236, 72, 153, 0.24)",
    cardBase: "#FFF1F2",
    cardBase2: "#EFF6FF",
    border: "rgba(236, 72, 153, 0.18)",
  },
  "driving-apps-assistant": {
    primary: "#F97316",
    secondary: "#EF4444",
    glow: "rgba(249, 115, 22, 0.24)",
    cardBase: "#FFF7ED",
    cardBase2: "#FFF1F2",
    border: "rgba(249, 115, 22, 0.18)",
  },
};

const CATEGORY_THEMES = {
  Research: {
    primary: "#0EA5E9",
    secondary: "#22D3EE",
    glow: "rgba(34, 211, 238, 0.22)",
    cardBase: "#F8FBFF",
    cardBase2: "#ECFEFF",
    border: "rgba(14, 165, 233, 0.18)",
  },
  Automation: {
    primary: "#8B5CF6",
    secondary: "#F472B6",
    glow: "rgba(139, 92, 246, 0.22)",
    cardBase: "#F5F3FF",
    cardBase2: "#FFF1F2",
    border: "rgba(139, 92, 246, 0.18)",
  },
  Writing: {
    primary: "#F59E0B",
    secondary: "#FFD43B",
    glow: "rgba(245, 158, 11, 0.22)",
    cardBase: "#FFF7ED",
    cardBase2: "#FFFBEB",
    border: "rgba(245, 158, 11, 0.18)",
  },
  Product: {
    primary: "#22C55E",
    secondary: "#94D82D",
    glow: "rgba(34, 197, 94, 0.22)",
    cardBase: "#F0FDF4",
    cardBase2: "#ECFEFF",
    border: "rgba(34, 197, 94, 0.18)",
  },
  Development: {
    primary: "#6366F1",
    secondary: "#38BDF8",
    glow: "rgba(99, 102, 241, 0.22)",
    cardBase: "#EEF2FF",
    cardBase2: "#F8FBFF",
    border: "rgba(99, 102, 241, 0.18)",
  },
  Compliance: {
    primary: "#16A34A",
    secondary: "#2DD4BF",
    glow: "rgba(45, 212, 191, 0.22)",
    cardBase: "#F0FDF4",
    cardBase2: "#ECFEFF",
    border: "rgba(22, 163, 74, 0.18)",
  },
  Marketing: {
    primary: "#2563EB",
    secondary: "#EC4899",
    glow: "rgba(236, 72, 153, 0.22)",
    cardBase: "#EFF6FF",
    cardBase2: "#FFF1F2",
    border: "rgba(236, 72, 153, 0.18)",
  },
  Mobility: {
    primary: "#F97316",
    secondary: "#EF4444",
    glow: "rgba(249, 115, 22, 0.22)",
    cardBase: "#FFF7ED",
    cardBase2: "#FFF1F2",
    border: "rgba(249, 115, 22, 0.18)",
  },
};

document.documentElement.classList.add("js");

function themeForSlug(slug) {
  return VISUAL_THEMES[slug] || DEFAULT_THEME;
}

function themeForGpt(gpt) {
  return themeForSlug(gpt?.slug);
}

function themeStyle(theme) {
  return `--accent:${theme.primary};--accent-2:${theme.secondary};--glow:${theme.glow};--card-base:${theme.cardBase};--card-base-2:${theme.cardBase2};--card-border:${theme.border};`;
}

function themeStyleForGpt(gpt) {
  return themeStyle(themeForGpt(gpt));
}

function themeStyleForCategory(category, index = 0) {
  const fallbackThemes = [
    DEFAULT_THEME,
    {
      primary: "#8B5CF6",
      secondary: "#F472B6",
      glow: "rgba(139, 92, 246, 0.22)",
      cardBase: "#F5F3FF",
      cardBase2: "#FFF1F2",
      border: "rgba(139, 92, 246, 0.18)",
    },
    {
      primary: "#22C55E",
      secondary: "#94D82D",
      glow: "rgba(34, 197, 94, 0.22)",
      cardBase: "#F0FDF4",
      cardBase2: "#ECFEFF",
      border: "rgba(34, 197, 94, 0.18)",
    },
    {
      primary: "#F59E0B",
      secondary: "#FFD43B",
      glow: "rgba(245, 185, 66, 0.22)",
      cardBase: "#FFF7ED",
      cardBase2: "#FFFBEB",
      border: "rgba(245, 158, 11, 0.18)",
    },
  ];
  const theme = CATEGORY_THEMES[category] || fallbackThemes[index % fallbackThemes.length];
  return themeStyle(theme);
}

function categoryCountLabel(items) {
  return `${items.length} GPT${items.length === 1 ? "" : "s"}`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function sanitizeUrl(value) {
  const url = String(value || "").trim();
  if (!url || url === "#") return "#";
  if (/^(https?:\/\/|\/)/i.test(url)) return url;
  return "#";
}

function getQueryParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function absoluteUrl(path = window.location.pathname + window.location.search) {
  return new URL(path, window.location.origin).href;
}

function observeReveals() {
  const targets = document.querySelectorAll("[data-reveal]");
  if (!targets.length) return;

  if (PREFERS_REDUCED_MOTION || !("IntersectionObserver" in window)) {
    targets.forEach((target) => target.classList.add("is-revealed"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.12,
    },
  );

  targets.forEach((target) => {
    if (target.dataset.observeBound === "true") return;
    target.dataset.observeBound = "true";
    observer.observe(target);
  });
}

function attachButtonRipples() {
  if (PREFERS_REDUCED_MOTION) return;

  document.addEventListener("pointerdown", (event) => {
    const button = event.target.closest(".button");
    if (!button || button.matches('[aria-disabled="true"]')) return;

    const rect = button.getBoundingClientRect();
    const ripple = document.createElement("span");
    const size = Math.max(rect.width, rect.height) * 1.4;
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.className = "button__ripple";
    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    button.appendChild(ripple);
    ripple.addEventListener(
      "animationend",
      () => {
        ripple.remove();
      },
      { once: true },
    );
  });
}

function getMetaElement(selector, factory) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = factory();
    document.head.appendChild(element);
  }
  return element;
}

function setSeoMeta({ title, description, path, image = SITE_IMAGE, type = "website" }) {
  document.title = title;

  const canonical = getMetaElement('link[rel="canonical"]', () => {
    const link = document.createElement("link");
    link.rel = "canonical";
    return link;
  });
  canonical.href = absoluteUrl(path);

  const metaDescription = getMetaElement('meta[name="description"]', () => {
    const meta = document.createElement("meta");
    meta.name = "description";
    return meta;
  });
  metaDescription.content = description;

  const ogTitle = getMetaElement('meta[property="og:title"]', () => {
    const meta = document.createElement("meta");
    meta.setAttribute("property", "og:title");
    return meta;
  });
  ogTitle.content = title;

  const ogDescription = getMetaElement('meta[property="og:description"]', () => {
    const meta = document.createElement("meta");
    meta.setAttribute("property", "og:description");
    return meta;
  });
  ogDescription.content = description;

  const ogUrl = getMetaElement('meta[property="og:url"]', () => {
    const meta = document.createElement("meta");
    meta.setAttribute("property", "og:url");
    return meta;
  });
  ogUrl.content = absoluteUrl(path);

  const ogType = getMetaElement('meta[property="og:type"]', () => {
    const meta = document.createElement("meta");
    meta.setAttribute("property", "og:type");
    return meta;
  });
  ogType.content = type;

  const ogImage = getMetaElement('meta[property="og:image"]', () => {
    const meta = document.createElement("meta");
    meta.setAttribute("property", "og:image");
    return meta;
  });
  ogImage.content = absoluteUrl(image);

  const twitterCard = getMetaElement('meta[name="twitter:card"]', () => {
    const meta = document.createElement("meta");
    meta.name = "twitter:card";
    return meta;
  });
  twitterCard.content = "summary_large_image";

  const twitterTitle = getMetaElement('meta[name="twitter:title"]', () => {
    const meta = document.createElement("meta");
    meta.name = "twitter:title";
    return meta;
  });
  twitterTitle.content = title;

  const twitterDescription = getMetaElement('meta[name="twitter:description"]', () => {
    const meta = document.createElement("meta");
    meta.name = "twitter:description";
    return meta;
  });
  twitterDescription.content = description;

  const twitterImage = getMetaElement('meta[name="twitter:image"]', () => {
    const meta = document.createElement("meta");
    meta.name = "twitter:image";
    return meta;
  });
  twitterImage.content = absoluteUrl(image);
}

function setJsonLd(id, data) {
  let script = document.getElementById(id);
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

function statusClass(status) {
  return status === "Coming Soon" ? "status--soon" : "status--active";
}

function statusLabel(status) {
  return `<span class="status ${statusClass(status)}">${escapeHtml(status)}</span>`;
}

function officialBadge(gpt) {
  return gpt.slug === "gpt-sotour"
    ? `<span class="product-badge">First Official Product</span><span class="product-badge">Version 1.0</span>`
    : "";
}

function actionLabel(gpt) {
  if (gpt.status === "Coming Soon") {
    return "Coming Soon";
  }
  return gpt.ctaLabel || "Launch GPT";
}

function loadGpts() {
  return fetch(DATA_URL, { cache: "no-store" }).then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to load ${DATA_URL}`);
    }
    return response.json();
  });
}

function cardMarkup(gpt, compact = false) {
  const features = gpt.features.slice(0, compact ? 2 : 3).map((feature) => `<li>${escapeHtml(feature)}</li>`).join("");
  const runHref = sanitizeUrl(gpt.runUrl);
  const disabled = gpt.status === "Coming Soon";

  return `
    <article class="gpt-card ${compact ? "gpt-card--compact" : ""}" data-reveal style="${themeStyleForGpt(gpt)}">
      <div class="gpt-card__top">
        <div class="gpt-card__icon" aria-hidden="true">${escapeHtml(gpt.icon)}</div>
        <div class="gpt-card__meta">
          <div class="gpt-card__row">
            <span class="chip">${escapeHtml(gpt.category)}</span>
            ${statusLabel(gpt.status)}
            ${officialBadge(gpt)}
          </div>
          <h3>${escapeHtml(gpt.name)}</h3>
          <p>${escapeHtml(gpt.shortDescription)}</p>
        </div>
      </div>
      <ul class="feature-list">${features}</ul>
      <div class="gpt-card__actions">
        <a class="button button--secondary button--small" href="gpt.html?slug=${encodeURIComponent(gpt.slug)}">تفاصيل</a>
        <a class="button button--primary button--small" href="${disabled ? "#" : runHref}" target="${disabled ? "_self" : "_blank"}" rel="${disabled ? "" : "noreferrer"}" ${disabled ? 'aria-disabled="true" tabindex="-1"' : ""}>${actionLabel(gpt)}</a>
      </div>
    </article>
  `;
}

function homeFeaturedMarkup(gpt) {
  const runHref = sanitizeUrl(gpt.runUrl);
  const disabled = gpt.status === "Coming Soon";

  return `
    <article class="home-featured card-surface" data-reveal style="${themeStyleForGpt(gpt)}">
      <div class="home-featured__copy">
        <div class="gpt-card__row">
          <span class="chip">${escapeHtml(gpt.category)}</span>
          ${statusLabel(gpt.status)}
          ${officialBadge(gpt)}
        </div>
        <p class="home-featured__eyebrow">Featured GPT</p>
        <h3>${escapeHtml(gpt.name)}</h3>
        <p class="home-featured__description">${escapeHtml(gpt.shortDescription)}</p>
        <div class="home-featured__actions">
          <a class="button button--primary button--small" href="${disabled ? "#" : runHref}" target="${disabled ? "_self" : "_blank"}" rel="${disabled ? "" : "noreferrer"}" ${disabled ? 'aria-disabled="true" tabindex="-1"' : ""}>${disabled ? "Coming Soon" : "Open GPT"}</a>
          <a class="button button--secondary button--small" href="gpt.html?slug=${encodeURIComponent(gpt.slug)}">View Details</a>
        </div>
      </div>
      <div class="home-featured__visual" aria-hidden="true">
        <div class="home-featured__icon">${escapeHtml(gpt.icon)}</div>
        <p class="home-featured__note">${escapeHtml(gpt.name)} ready for launch.</p>
      </div>
    </article>
  `;
}

function homeCategoryMarkup(name, items, index) {
  const theme = themeStyleForCategory(name, index);
  const preview = items.slice(0, 2).map((item) => escapeHtml(item.name)).join(" &middot; ");

  return `
    <article class="home-category-card card-surface" data-reveal style="${theme}">
      <div class="home-category-card__head">
        <div>
          <p class="detail-section__label">Category</p>
          <h3>${escapeHtml(name)}</h3>
        </div>
        <span class="home-category-card__count">${items.length}</span>
      </div>
      <p class="home-category-card__copy">${preview}</p>
      <a class="text-link" href="gpts.html?category=${encodeURIComponent(name)}">Browse GPTs</a>
    </article>
  `;
}

function renderCards(container, gpts, compact = false) {
  container.innerHTML = gpts.map((gpt) => cardMarkup(gpt, compact)).join("");
}

function uniqueCategories(gpts) {
  return ["All", ...new Set(gpts.map((gpt) => gpt.category))];
}

function filterGpts(gpts, searchText, category) {
  const normalized = searchText.trim().toLowerCase();
  return gpts.filter((gpt) => {
    const matchesCategory = category === "All" || gpt.category === category;
    const haystack = [gpt.name, gpt.shortDescription, gpt.longDescription, gpt.category, gpt.status].join(" ").toLowerCase();
    return matchesCategory && (!normalized || haystack.includes(normalized));
  });
}

function renderCategoryFilters(container, categories, activeCategory) {
  container.innerHTML = categories
    .map((category) => `<button class="chip chip--button ${category === activeCategory ? "is-active" : ""}" type="button" data-category-filter="${escapeHtml(category)}">${escapeHtml(category)}</button>`)
    .join("");
}

function updateStats(gpts) {
  const total = document.querySelector("[data-stat-total]");
  const active = document.querySelector("[data-stat-active]");
  const categories = document.querySelector("[data-stat-categories]");

  if (total) total.textContent = String(gpts.length);
  if (active) active.textContent = String(gpts.filter((gpt) => gpt.status === "Active").length);
  if (categories) categories.textContent = String(new Set(gpts.map((gpt) => gpt.category)).size);
}

function renderHome(gpts) {
  updateStats(gpts);
  const featuredTarget = document.querySelector("[data-home-featured]");
  const featuredRail = document.querySelector("[data-home-featured-rail]");
  const latestTarget = document.querySelector("[data-home-latest]");
  const categoriesTarget = document.querySelector("[data-home-categories]");

  const mainFeatured =
    gpts.find((gpt) => gpt.slug === "gpt-sotour") ||
    gpts.find((gpt) => gpt.featured && gpt.status === "Active") ||
    gpts.find((gpt) => gpt.featured) ||
    gpts[0];
  const featuredSet = gpts.filter((gpt) => gpt.featured && gpt.slug !== mainFeatured?.slug);
  const latestSet = gpts.filter((gpt) => gpt.slug !== mainFeatured?.slug).slice(0, 4);
  const categoryBuckets = gpts.reduce((acc, gpt) => {
    if (!acc[gpt.category]) acc[gpt.category] = [];
    acc[gpt.category].push(gpt);
    return acc;
  }, {});

  setJsonLd("jsonld-organization", {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LAFRYHI GPT Store",
    url: "https://lafryhi.com/",
    logo: absoluteUrl("assets/favicon.svg"),
    description: SITE_DESCRIPTION,
  });
  setJsonLd("jsonld-website", {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "LAFRYHI GPT Store",
    url: "https://lafryhi.com/",
    description: SITE_DESCRIPTION,
  });
  setSeoMeta({
    title: "LAFRYHI GPT Store | Bright AI Showcase",
    description: "واجهة مشرقة لعرض GPTs والأدوات الذكية الخاصة بـ LAFRYHI بتجربة RTL واضحة، حديثة، وملونة.",
    path: "/",
  });

  if (featuredTarget && mainFeatured) {
    featuredTarget.innerHTML = homeFeaturedMarkup(mainFeatured);
  }
  if (featuredRail) {
    featuredRail.innerHTML = featuredSet.slice(0, 2).map((gpt) => cardMarkup(gpt, true)).join("");
  }
  if (latestTarget) {
    latestTarget.innerHTML = latestSet.map((gpt) => cardMarkup(gpt)).join("");
  }
  if (categoriesTarget) {
    const categories = Object.entries(categoryBuckets);
    categoriesTarget.innerHTML = categories.map(([name, items], index) => homeCategoryMarkup(name, items, index)).join("");
  }

  observeReveals();
}

function renderGptsPage(gpts) {
  const grid = document.querySelector("[data-gpt-grid]");
  const searchInput = document.querySelector("[data-search-input]");
  const categoryFilters = document.querySelector("[data-category-filters]");
  const emptyState = document.querySelector("[data-empty-state]");
  if (!grid || !searchInput || !categoryFilters || !emptyState) return;

  let activeCategory = "All";
  let searchText = "";
  const categories = uniqueCategories(gpts);
  const categoryFromUrl = getQueryParam("category");
  if (categoryFromUrl && categories.includes(categoryFromUrl)) {
    activeCategory = categoryFromUrl;
  }

  function sync() {
    const filtered = filterGpts(gpts, searchText, activeCategory);
    renderCategoryFilters(categoryFilters, categories, activeCategory);
    if (filtered.length === 0) {
      grid.innerHTML = "";
      emptyState.hidden = false;
    } else {
      emptyState.hidden = true;
      renderCards(grid, filtered);
    }
  }

  searchInput.addEventListener("input", (event) => {
    searchText = event.target.value;
    sync();
  });

  categoryFilters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category-filter]");
    if (!button) return;
    activeCategory = button.dataset.categoryFilter;
    sync();
  });

  sync();
  setSeoMeta({
    title: `All GPTs | Bright AI Showcase`,
    description: "تصفح جميع GPTs والأدوات الذكية الخاصة بـ LAFRYHI مع البحث والفلاتر وصفحات التفاصيل.",
    path: "/gpts.html",
  });
}

function renderDashboardPage(gpts) {
  const grid = document.querySelector("[data-dashboard-metrics]");
  const spotlight = document.querySelector("[data-dashboard-spotlight]");
  if (!grid || !spotlight) return;

  const total = gpts.length;
  const activeCount = gpts.filter((gpt) => gpt.status === "Active").length;
  const comingSoonCount = gpts.filter((gpt) => gpt.status === "Coming Soon").length;
  const categoryCount = new Set(gpts.map((gpt) => gpt.category)).size;
  const featuredCount = gpts.filter((gpt) => gpt.featured).length;

  const metrics = [
    { label: "GPTs", value: total, hint: "All tools in the store" },
    { label: "Active Products", value: activeCount, hint: "Currently live" },
    { label: "Coming Soon", value: comingSoonCount, hint: "Queued for launch" },
    { label: "Categories", value: categoryCount, hint: "Content groups" },
  ];

  grid.innerHTML = metrics
    .map(
      (item) => `
        <article class="metric-card card-surface" data-reveal>
          <p class="metric-card__label">${escapeHtml(item.label)}</p>
          <p class="metric-card__value">${escapeHtml(item.value)}</p>
          <p class="metric-card__hint">${escapeHtml(item.hint)}</p>
        </article>
      `,
    )
    .join("");

  spotlight.innerHTML = `
    <article class="insight-card card-surface" data-reveal>
      <p class="detail-section__label">Platform snapshot</p>
      <h2>${total} GPTs organized across ${categoryCount} categories.</h2>
      <p>This dashboard gives a quick view of the store's structure, launch readiness, and content balance.</p>
    </article>
    <article class="insight-card card-surface" data-reveal>
      <p class="detail-section__label">Featured set</p>
      <h2>${featuredCount} featured tools ready for promotion.</h2>
      <p>Use the featured list to highlight the strongest tools and guide the first marketing push.</p>
    </article>
  `;

  setSeoMeta({
    title: `Dashboard | ${SITE_TITLE}`,
    description: "لوحة تحكم سريعة تعرض عدد GPTs والفئات وحالات الإطلاق داخل LAFRYHI GPT Store.",
    path: "/dashboard.html",
  });
}

function renderCategoriesPage(gpts) {
  const target = document.querySelector("[data-categories-grid]");
  const totals = document.querySelector("[data-categories-total]");
  if (!target || !totals) return;

  const buckets = gpts.reduce((acc, gpt) => {
    if (!acc[gpt.category]) acc[gpt.category] = [];
    acc[gpt.category].push(gpt);
    return acc;
  }, {});

  const categories = Object.entries(buckets).map(([name, items]) => ({ name, items }));
  totals.textContent = String(categories.length);

  target.innerHTML = categories
    .map(
      (category, index) => `
        <article class="category-card card-surface" data-reveal style="${themeStyleForCategory(category.name, index)}">
          <div class="category-card__head">
            <div>
              <p class="detail-section__label">Category</p>
              <h2>${escapeHtml(category.name)}</h2>
            </div>
            <span class="category-card__count">${category.items.length}</span>
          </div>
          <p class="category-card__copy">${escapeHtml(category.items.map((item) => item.name).join(" · "))}</p>
          <a class="text-link" href="gpts.html?category=${encodeURIComponent(category.name)}">Browse GPTs</a>
        </article>
      `,
    )
    .join("");

  setSeoMeta({
    title: `Categories | Bright AI Showcase`,
    description: "استعرض الفئات المختلفة داخل LAFRYHI GPT Store وعدد الأدوات في كل فئة.",
    path: "/categories.html",
  });
}

function renderSotourDetail(current) {
  const launchUrl = sanitizeUrl(current.runUrl);
  const examplePrompts = [
    "اكتب لي منشور فيسبوك عن تطبيق جديد.",
    "حوّل هذه الفكرة إلى منشور احترافي.",
    "اكتب وصفًا لتطبيق Google Play.",
    "أعد صياغة هذا النص ليصبح أكثر إقناعًا.",
    "اكتب تعليقًا طبيعيًا على هذا المنشور.",
  ];
  const bestFor = [
    "Facebook posts",
    "LinkedIn posts",
    "Google Play descriptions",
    "Human comments",
    "App launch posts",
    "Rewriting and polishing",
  ];

  return `
    <section class="detail-hero card-surface detail-hero--featured" data-reveal style="${themeStyleForGpt(current)}">
      <div class="detail-hero__content detail-hero__content--featured">
        <div class="detail-hero__intro">
          <div class="detail-hero__badge-row">
            <span class="chip">${escapeHtml(current.category)}</span>
            <span class="status ${statusClass(current.status)}">${escapeHtml(current.status)}</span>
            ${officialBadge(current)}
          </div>
          <h1>${escapeHtml(current.name)}</h1>
          <p class="detail-hero__lead">${escapeHtml(current.shortDescription)}</p>
          <div class="detail-meta-strip">
            <div class="detail-meta">
              <span>Product ID</span>
              <strong>LAF-001</strong>
            </div>
            <div class="detail-meta">
              <span>Version</span>
              <strong>1.0.0</strong>
            </div>
            <div class="detail-meta">
              <span>Status</span>
              <strong>Active</strong>
            </div>
          </div>
        </div>
        <div class="detail-hero__actions">
          <a class="button button--primary" href="${launchUrl}" target="_blank" rel="noreferrer">Launch GPT</a>
          <a class="button button--secondary" href="gpts.html">Back to GPTs</a>
        </div>
      </div>
      <div class="detail-hero__icon detail-hero__icon--featured" aria-hidden="true">${escapeHtml(current.icon)}</div>
    </section>

    <section class="detail-stack">
      <article class="detail-section card-surface">
        <p class="detail-section__label">What GPT سطور does</p>
        <p class="detail-copy">
          مساعد عربي يحول الأفكار الخام والنصوص البسيطة إلى محتوى جاهز للنشر، مناسب لفيسبوك، لينكدإن، أوصاف التطبيقات، التعليقات، الرسائل، وإعادة الصياغة.
        </p>
      </article>

      <article class="detail-section card-surface">
        <p class="detail-section__label">Best for</p>
        <div class="detail-chip-grid">
          ${bestFor.map((item) => `<span class="detail-chip">${escapeHtml(item)}</span>`).join("")}
        </div>
      </article>

      <article class="detail-section card-surface">
        <p class="detail-section__label">How to use</p>
        <div class="detail-step-grid">
          <div class="detail-step">
            <span>01</span>
            <p>افتح GPT سطور.</p>
          </div>
          <div class="detail-step">
            <span>02</span>
            <p>اكتب فكرتك أو النص الخام.</p>
          </div>
          <div class="detail-step">
            <span>03</span>
            <p>احصل على نسخة جاهزة للنشر.</p>
          </div>
        </div>
      </article>

      <article class="detail-section card-surface">
        <p class="detail-section__label">Example prompts</p>
        <ul class="detail-example-list">
          ${examplePrompts.map((prompt) => `<li>${escapeHtml(prompt)}</li>`).join("")}
        </ul>
      </article>

      <article class="detail-section card-surface">
        <p class="detail-section__label">Product details</p>
        <dl class="detail-spec-grid">
          <div><dt>Product ID</dt><dd>LAF-001</dd></div>
          <div><dt>Internal Slug</dt><dd>gpt-sotour</dd></div>
          <div><dt>OpenAI GPT ID</dt><dd>g-6a4d4731b74881918eaaa6f75e5058f9</dd></div>
          <div><dt>Version</dt><dd>1.0.0</dd></div>
          <div><dt>Status</dt><dd>Active</dd></div>
          <div><dt>Category</dt><dd>Writing</dd></div>
        </dl>
      </article>
    </section>
  `;
}

function renderDetailPage(gpts) {
  const detailTarget = document.querySelector("[data-gpt-detail]");
  const relatedTarget = document.querySelector("[data-related-gpts]");
  if (!detailTarget) return;

  const slug = getQueryParam("slug");
  const current = gpts.find((gpt) => gpt.slug === slug) || gpts[0];
  if (!current) {
    detailTarget.innerHTML = `<p class="empty-state">No product data is available right now.</p>`;
    return;
  }

  const detailPath = `/gpt.html?slug=${encodeURIComponent(current.slug)}`;

  if (current.slug === "gpt-sotour") {
    setSeoMeta({
      title: `GPT سطور | Bright AI Showcase`,
      description: "GPT سطور هو أول منتج رسمي داخل LAFRYHI GPT Store: مساعد عربي لتحويل الأفكار الخام إلى محتوى جاهز للنشر.",
      path: detailPath,
    });
    setJsonLd("jsonld-breadcrumb", {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://lafryhi.com/" },
        { "@type": "ListItem", position: 2, name: "GPTs", item: "https://lafryhi.com/gpts.html" },
        { "@type": "ListItem", position: 3, name: "GPT سطور", item: absoluteUrl(detailPath) },
      ],
    });
    setJsonLd("jsonld-product", {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "GPT سطور",
      sku: "LAF-001",
      description: "مساعد عربي لتحويل الأفكار الخام والنصوص البسيطة إلى محتوى جاهز للنشر.",
      category: "Writing",
      url: "https://chatgpt.com/g/g-6a4d4731b74881918eaaa6f75e5058f9-gpt-stwr",
      image: absoluteUrl("assets/og-image.svg"),
      brand: {
        "@type": "Brand",
        name: "LAFRYHI",
      },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: "https://chatgpt.com/g/g-6a4d4731b74881918eaaa6f75e5058f9-gpt-stwr",
      },
      isAccessibleForFree: true,
    });
    detailTarget.innerHTML = renderSotourDetail(current);
  } else {
    setSeoMeta({
      title: `${current.name} | Bright AI Showcase`,
      description: `${current.name} - ${current.shortDescription}`,
      path: detailPath,
    });

    detailTarget.innerHTML = `
      <section class="detail-hero card-surface" data-reveal style="${themeStyleForGpt(current)}">
        <div class="detail-hero__content">
          <div class="detail-hero__intro">
            <div class="detail-hero__badge-row">
              <span class="chip">${escapeHtml(current.category)}</span>
              <span class="status ${statusClass(current.status)}">${escapeHtml(current.status)}</span>
              ${officialBadge(current)}
            </div>
            <h1>${escapeHtml(current.name)}</h1>
            <p class="detail-hero__lead">${escapeHtml(current.shortDescription)}</p>
          </div>
          <div class="detail-hero__actions">
            <a class="button button--primary" href="${current.status === "Coming Soon" ? "#" : sanitizeUrl(current.runUrl)}" target="${current.status === "Coming Soon" ? "_self" : "_blank"}" rel="${current.status === "Coming Soon" ? "" : "noreferrer"}" ${current.status === "Coming Soon" ? 'aria-disabled="true" tabindex="-1"' : ""}>${actionLabel(current)}</a>
            <button class="button button--secondary" type="button" data-share-gpt>Share</button>
          </div>
        </div>
        <div class="detail-hero__icon" aria-hidden="true">${escapeHtml(current.icon)}</div>
      </section>
      <section class="detail-layout">
        <div class="detail-main">
          <article class="detail-section card-surface">
            <p class="detail-section__label">Overview</p>
            <p>${escapeHtml(current.longDescription)}</p>
          </article>
          <article class="detail-section card-surface">
            <p class="detail-section__label">Features</p>
            <div class="feature-grid">
              ${current.features.map((feature) => `<div class="feature-tile">${escapeHtml(feature)}</div>`).join("")}
            </div>
          </article>
        </div>
        <aside class="detail-side">
          <article class="detail-side__card card-surface">
            <p class="detail-section__label">Status</p>
            <span class="status ${statusClass(current.status)}">${escapeHtml(current.status)}</span>
            <p class="detail-side__note">Future launch state is controlled from the central data file.</p>
          </article>
          <article class="detail-side__card card-surface">
            <p class="detail-section__label">Quick Facts</p>
            <ul class="fact-list">
              <li><span>Category</span><strong>${escapeHtml(current.category)}</strong></li>
              <li><span>Features</span><strong>${current.features.length}</strong></li>
              <li><span>Availability</span><strong>${escapeHtml(current.status)}</strong></li>
            </ul>
          </article>
          <article class="detail-side__card card-surface">
            <p class="detail-section__label">Actions</p>
            <div class="detail-side__actions">
              <a class="button button--primary" href="${current.status === "Coming Soon" ? "#" : sanitizeUrl(current.runUrl)}" target="${current.status === "Coming Soon" ? "_self" : "_blank"}" rel="${current.status === "Coming Soon" ? "" : "noreferrer"}" ${current.status === "Coming Soon" ? 'aria-disabled="true" tabindex="-1"' : ""}>${actionLabel(current)}</a>
              <a class="button button--secondary" href="gpts.html">Back to GPTs</a>
            </div>
          </article>
        </aside>
      </section>
    `;
  }

  const related = gpts.filter((gpt) => gpt.slug !== current.slug && gpt.category === current.category).slice(0, 3);
  const fallbackRelated = related.length ? related : gpts.filter((gpt) => gpt.slug !== current.slug).slice(0, 3);
  if (relatedTarget) {
    renderCards(relatedTarget, fallbackRelated, true);
  }

  const shareButton = detailTarget.querySelector("[data-share-gpt]");
  if (shareButton) {
    shareButton.addEventListener("click", async () => {
      const shareUrl = absoluteUrl(detailPath);
      try {
        if (navigator.share) {
          await navigator.share({
            title: `${current.name} | ${SITE_TITLE}`,
            text: current.shortDescription,
            url: shareUrl,
          });
          return;
        }
        await navigator.clipboard.writeText(shareUrl);
        shareButton.textContent = "Copied";
        window.setTimeout(() => {
          shareButton.textContent = "Share";
        }, 1500);
      } catch (error) {
        console.error(error);
      }
    });
  }
}

async function boot() {
  try {
    const page = document.body.dataset.page;

    if (page === "home" || page === "gpts" || page === "detail" || page === "dashboard" || page === "categories") {
      const gpts = await loadGpts();

      if (page === "home") {
        renderHome(gpts);
      } else if (page === "gpts") {
        renderGptsPage(gpts);
      } else if (page === "detail") {
        renderDetailPage(gpts);
      } else if (page === "dashboard") {
        renderDashboardPage(gpts);
      } else if (page === "categories") {
        renderCategoriesPage(gpts);
      }
    } else {
      setSeoMeta({
        title: document.title || SITE_TITLE,
        description: document.querySelector('meta[name="description"]')?.content || SITE_DESCRIPTION,
        path: window.location.pathname + window.location.search,
      });
    }

    document.addEventListener("click", (event) => {
      const disabledLink = event.target.closest('[aria-disabled="true"]');
      if (disabledLink) {
        event.preventDefault();
      }
    });

    attachButtonRipples();
    observeReveals();
  } catch (error) {
    console.error(error);
    const fallbackDetail = document.querySelector("[data-gpt-detail]");
    const fallbackGrid = document.querySelector("[data-gpt-grid]");
    if (fallbackDetail) {
      fallbackDetail.innerHTML = `<p class="empty-state">تعذر تحميل البيانات. تأكد من تشغيل الموقع عبر خادم محلي.</p>`;
    }
    if (fallbackGrid) {
      fallbackGrid.innerHTML = `<p class="empty-state">تعذر تحميل البيانات. تأكد من تشغيل الموقع عبر خادم محلي.</p>`;
    }
  }
}

boot();

