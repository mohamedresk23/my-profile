(function () {
  "use strict";

  var P = window.PROFILE;
  var root = document.documentElement;
  var mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  var mqDark = window.matchMedia("(prefers-color-scheme: dark)");
  var mqFine = window.matchMedia("(hover: hover) and (pointer: fine)");
  var reduced = function () { return mqReduce.matches; };

  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };

  /* Icons: Lucide (ISC license), inlined. */
  var ICONS = {
    arrowRight: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    arrowUpRight: '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
    arrowUp: '<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>',
    mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
    github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',
    copy: '<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
    moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
    menu: '<path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    cap: '<path d="M22 10v6"/><path d="M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
    store: '<path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/><path d="M22 7v3a2 2 0 0 1-2 2 2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7"/>',
    code: '<path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/>',
    palette: '<circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>',
    wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    bag: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>'
  };
  function icon(name, cls) {
    return '<svg class="i ' + (cls || "") + '" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + (ICONS[name] || "") + "</svg>";
  }

  /* ---------- State ---------- */
  var lang = store.get("lang") || "en";
  if (!P[lang]) lang = "en";
  var t = P[lang];
  var filter = "all";
  var cart = 0;
  var demoKey = "twig";
  var demoPlayed = false;
  var countersDone = false;

  function yearsSince(iso) {
    var start = new Date(iso), now = new Date();
    var y = now.getFullYear() - start.getFullYear();
    if (now.getMonth() < start.getMonth() || (now.getMonth() === start.getMonth() && now.getDate() < start.getDate())) y--;
    return Math.max(1, y);
  }

  /* ---------- Demo snippets (always LTR code) ---------- */
  var SNIPPETS = {
    twig: {
      file: "product-grid.twig",
      code:
        "{# product grid #}\n" +
        "{% for product in products %}\n" +
        '  <article class="card">\n' +
        "    <h3>{{ product.name }}</h3>\n" +
        "    <p>{{ product.price|money }}</p>\n" +
        "    <button>{{ trans('add_to_cart') }}</button>\n" +
        "  </article>\n" +
        "{% endfor %}"
    },
    liquid: {
      file: "product-grid.liquid",
      code:
        "{% for product in collection.products %}\n" +
        '  <article class="card">\n' +
        "    <h3>{{ product.title }}</h3>\n" +
        "    <p>{{ product.price | money }}</p>\n" +
        "    <button>{{ 'cart.add' | t }}</button>\n" +
        "  </article>\n" +
        "{% endfor %}"
    },
    jsx: {
      file: "ProductGrid.jsx",
      code:
        "// product grid\n" +
        "export function ProductGrid({ products }) {\n" +
        "  return products.map((p) => (\n" +
        '    <article key={p.id} className="card">\n' +
        "      <h3>{p.name}</h3>\n" +
        "      <p>{formatPrice(p.price)}</p>\n" +
        "      <button>{t('addToCart')}</button>\n" +
        "    </article>\n" +
        "  ));\n" +
        "}"
    }
  };

  var TOKEN_RE = /(\{#[\s\S]*?#\}|\/\/[^\n]*)|(\{%[\s\S]*?%\}|\{\{[\s\S]*?\}\})|(&lt;\/?[A-Za-z][\w.]*)|("[^"\n]*"|'[^'\n]*')|\b(export|function|return|for|in|endfor)\b/g;
  function highlight(src) {
    return esc(src).replace(TOKEN_RE, function (m, com, tpl, tag, str, kw) {
      if (com) return '<span class="tk-com">' + m + "</span>";
      if (tpl) return '<span class="tk-tpl">' + m + "</span>";
      if (tag) return '<span class="tk-tag">' + m + "</span>";
      if (str) return '<span class="tk-str">' + m + "</span>";
      if (kw) return '<span class="tk-kw">' + m + "</span>";
      return m;
    });
  }

  /* ---------- Templates ---------- */
  function sectionHead(num, kicker, title) {
    return (
      '<div class="section-head">' +
      '<p class="kicker" data-reveal><span class="kicker-num">' + num + "</span>" + esc(kicker) + "</p>" +
      '<h2 class="section-title" data-reveal style="--d:1">' + esc(title) + "</h2>" +
      "</div>"
    );
  }

  function navHTML() {
    var links = t.nav.map(function (n) {
      return '<li><a href="#' + n.id + '" data-nav="' + n.id + '">' + esc(n.label) + "</a></li>";
    }).join("");
    var dark = currentTheme() === "dark";
    return (
      '<div class="container nav-inner">' +
      '<a class="brand" href="#top" dir="ltr" aria-label="' + esc(t.footer.name) + '"><span class="tag tag-open" aria-hidden="true">&lt;</span><span class="brand-name">mohamed</span><span class="tag tag-close" aria-hidden="true"><span class="slash">/</span>&gt;</span></a>' +
      '<nav class="nav-links" id="nav-menu" aria-label="Primary"><ul>' + links + '</ul><span class="nav-indicator" aria-hidden="true"></span></nav>' +
      '<div class="nav-actions">' +
      '<button class="icon-btn lang-btn" type="button" data-action="lang" aria-label="' + esc(t.ui.langLabel) + '" lang="' + (lang === "ar" ? "en" : "ar") + '">' + esc(t.ui.langSwitch) + "</button>" +
      '<button class="icon-btn" type="button" data-action="theme" aria-label="' + esc(t.ui.themeLabel) + '" aria-pressed="' + dark + '">' + icon(dark ? "sun" : "moon") + "</button>" +
      '<button class="icon-btn menu-btn" type="button" data-action="menu" aria-expanded="false" aria-controls="nav-menu" aria-label="' + esc(t.ui.menu) + '">' + icon("menu") + "</button>" +
      "</div></div>"
    );
  }

  function splitWords(text, startIndex) {
    return text.split(" ").map(function (w, i) {
      return '<span class="word"><span style="--i:' + (startIndex + i) + '">' + esc(w) + "</span></span>";
    }).join(" ");
  }

  function heroHTML() {
    var h = t.hero;
    var products = t.demoProducts.map(function (p, i) {
      return (
        '<li class="tile" style="--i:' + i + '">' +
        '<div class="tile-img tile-img-' + i + '" aria-hidden="true"><span></span></div>' +
        '<div class="tile-body"><h3 class="tile-name">' + esc(p.name) + '</h3><p class="tile-price">' + esc(p.price) + "</p>" +
        '<button type="button" class="tile-btn" data-action="cart">' + icon("bag") + "<span>" + esc(t.ui.addToCart) + "</span></button></div>" +
        '<div class="tile-skeleton" aria-hidden="true"><i></i><i></i><i></i></div>' +
        "</li>"
      );
    }).join("");
    var tabs = Object.keys(SNIPPETS).map(function (k) {
      return '<button type="button" class="code-tab" data-action="snippet" data-snippet="' + k + '" aria-pressed="' + (k === demoKey) + '">.' + k + "</button>";
    }).join("");

    return (
      '<section class="hero" id="top" aria-labelledby="hero-title">' +
      '<div class="hero-bg" aria-hidden="true"></div>' +
      '<div class="container hero-grid">' +
      '<div class="hero-copy">' +
      '<p class="eyebrow hero-in" style="--i:0"><span class="live-dot" aria-hidden="true"></span>' + esc(h.eyebrow) + "</p>" +
      '<h1 class="hero-title" id="hero-title"><span class="line">' + splitWords(h.first, 1) + '</span> <span class="line accent-line">' + splitWords(h.last, 2) + "</span></h1>" +
      '<p class="hero-tagline hero-in" style="--i:4">' + esc(h.tagline) + "</p>" +
      '<div class="cta-row hero-in" style="--i:5">' +
      '<a class="btn btn-primary magnetic" href="#projects"><span>' + esc(h.ctaPrimary) + "</span>" + icon("arrowRight", "flip-rtl") + "</a>" +
      '<a class="btn btn-ghost" href="#contact"><span>' + esc(h.ctaSecondary) + "</span></a>" +
      "</div>" +
      '<ul class="hero-meta hero-in" style="--i:6">' +
      "<li>" + icon("pin") + esc(h.location) + "</li>" +
      "<li>" + icon("globe") + esc(h.languages) + "</li>" +
      "</ul>" +
      "</div>" +

      '<div class="hero-demo hero-in" style="--i:3">' +
      '<div class="code-card" dir="ltr">' +
      '<div class="code-bar"><span class="dots" aria-hidden="true"><i></i><i></i><i></i></span>' +
      '<span class="code-file" id="demo-file">' + SNIPPETS[demoKey].file + "</span>" +
      '<div class="code-tabs" role="group" aria-label="' + esc(t.ui.replay) + '">' + tabs + "</div></div>" +
      '<pre class="code-body" aria-hidden="true"><code id="demo-code"></code><span class="caret"></span></pre>' +
      "</div>" +
      '<div class="preview-card" id="demo-preview" aria-label="' + esc(t.ui.previewLabel) + '" role="region">' +
      '<div class="preview-bar"><span class="preview-title">' + icon("store") + esc(t.ui.previewLabel) + '</span><span class="demo-badge">' + esc(t.ui.demoData) + "</span>" +
      '<span class="cart" aria-hidden="true">' + icon("bag") + '<b id="cart-count">' + cart + "</b></span>" +
      '<span class="sr-only" aria-live="polite" id="cart-live"></span></div>' +
      '<ul class="tiles">' + products + "</ul>" +
      "</div>" +
      "</div>" +

      "</div>" +
      statsHTML() +
      "</section>"
    );
  }

  function statsHTML() {
    var items = t.stats.map(function (s, i) {
      var v = s.key === "years" ? yearsSince(P.careerStart) : s.value;
      return (
        '<li class="stat" data-reveal style="--d:' + i + '">' +
        '<span class="stat-num"><span data-count="' + v + '">' + (countersDone ? v : 0) + "</span>" + (s.suffix || "") + "</span>" +
        '<span class="stat-label">' + esc(s.label) + "</span></li>"
      );
    }).join("");
    return '<div class="container"><ul class="stats">' + items + "</ul></div>";
  }

  function aboutHTML() {
    var a = t.about;
    var facts = a.facts.map(function (f, i) {
      return '<li data-reveal style="--d:' + (i + 1) + '"><span class="fact-icon">' + icon(f.icon) + '</span><span><span class="fact-label">' + esc(f.label) + '</span><span class="fact-value">' + esc(f.value) + "</span></span></li>";
    }).join("");
    return (
      '<section class="section" id="about" aria-labelledby="about-title">' +
      '<div class="container">' +
      sectionHead("01", a.kicker, a.title).replace('class="section-title"', 'class="section-title" id="about-title"') +
      '<div class="about-grid">' +
      '<p class="about-body" data-reveal style="--d:2">' + esc(a.body) + "</p>" +
      '<ul class="facts">' + facts + "</ul>" +
      "</div></div></section>"
    );
  }

  function experienceHTML() {
    var e = t.experience;
    var items = e.items.map(function (x, i) {
      var points = x.points.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("");
      var tags = x.tags.map(function (g) { return '<li class="chip">' + esc(g) + "</li>"; }).join("");
      return (
        '<li class="tl-item' + (x.current ? " is-current" : "") + '" data-reveal style="--d:' + i + '">' +
        '<span class="tl-dot" aria-hidden="true"></span>' +
        '<div class="tl-card card-spot">' +
        '<p class="tl-period">' + esc(x.period) + (x.current ? '<span class="now-badge">' + esc(t.ui.present) + "</span>" : "") + "</p>" +
        '<h3 class="tl-role">' + esc(x.role) + ' <span class="tl-at">@</span> <span class="tl-company">' + esc(x.company) + "</span></h3>" +
        '<ul class="tl-points">' + points + "</ul>" +
        '<ul class="chips">' + tags + "</ul>" +
        "</div></li>"
      );
    }).join("");
    return (
      '<section class="section" id="experience" aria-labelledby="exp-title">' +
      '<div class="container">' +
      sectionHead("02", e.kicker, e.title).replace('class="section-title"', 'class="section-title" id="exp-title"') +
      '<ol class="timeline"><span class="tl-line" aria-hidden="true"><span></span></span>' + items + "</ol>" +
      "</div></section>"
    );
  }

  function skillsHTML() {
    var s = t.skills;
    var groups = s.groups.map(function (g, i) {
      var items = g.items.map(function (it, j) {
        return '<li class="chip chip-lg" style="--j:' + j + '">' + esc(it) + "</li>";
      }).join("");
      return (
        '<article class="skill-card card-spot" data-reveal style="--d:' + i + '">' +
        '<div class="skill-head"><span class="skill-icon">' + icon(g.icon) + '</span><h3>' + esc(g.title) + '</h3><span class="skill-count">' + g.items.length + "</span></div>" +
        '<ul class="chips stagger">' + items + "</ul>" +
        "</article>"
      );
    }).join("");
    return (
      '<section class="section" id="skills" aria-labelledby="skills-title">' +
      '<div class="container">' +
      sectionHead("03", s.kicker, s.title).replace('class="section-title"', 'class="section-title" id="skills-title"') +
      '<div class="skills-grid">' + groups + "</div>" +
      "</div></section>"
    );
  }

  function visualHTML(kind) {
    if (kind === "collect") {
      return (
        '<div class="viz viz-collect" aria-hidden="true">' +
        '<div class="pane pane-admin"><b>Admin</b><i></i><i></i><i class="short"></i></div>' +
        '<div class="pane pane-vendor"><b>Vendor</b><i></i><i class="short"></i><span class="bars"><em style="--h:40%"></em><em style="--h:70%"></em><em style="--h:55%"></em><em style="--h:90%"></em></span></div>' +
        '<div class="pane pane-store"><b>Store</b><span class="grid4"><em></em><em></em><em></em><em></em></span></div>' +
        "</div>"
      );
    }
    if (kind === "book") {
      return (
        '<div class="viz viz-book" aria-hidden="true">' +
        '<div class="book">' +
        '<div class="page"><span class="page-sun"></span><i></i><i></i><i class="short"></i><i></i><i class="short"></i></div>' +
        '<div class="cover"><div class="cover-front"><span class="cover-title" lang="ar" dir="rtl">مدارك</span><span class="star s1"></span><span class="star s2"></span><span class="star s3"></span></div><div class="cover-back"></div></div>' +
        "</div></div>"
      );
    }
    return "";
  }

  function projectsHTML() {
    var p = t.projects;
    var filters = p.filters.map(function (f) {
      return '<button type="button" class="filter-btn" data-action="filter" data-filter="' + f.id + '" aria-pressed="' + (f.id === filter) + '">' + esc(f.label) + "</button>";
    }).join("");
    var n = 0;
    var cards = p.items.map(function (x, i) {
      var tags = x.tags.map(function (g) { return '<li class="chip">' + esc(g) + "</li>"; }).join("");
      var link = x.link ? '<a class="project-link" href="' + esc(x.link) + '" target="_blank" rel="noopener">' + icon("arrowUpRight") + '<span class="sr-only">' + esc(x.name) + "</span></a>" : "";
      var num = String(i + 1).padStart(2, "0");
      var hidden = !(filter === "all" || x.cat === filter);
      if (!hidden) n++;
      return (
        '<article class="project card-spot' + (x.featured ? " is-featured" : "") + '" data-cat="' + x.cat + '" data-reveal style="--d:' + (i % 2) + '"' + (hidden ? " hidden" : "") + ">" +
        (x.featured ? visualHTML(x.visual) : '<span class="project-num" aria-hidden="true">' + num + "</span>") +
        '<div class="project-body">' +
        '<p class="project-type">' + esc(x.type) + "</p>" +
        '<h3 class="project-name">' + esc(x.name) + (x.nameAlt ? ' <span class="project-alt" lang="' + (lang === "ar" ? "en" : "ar") + '">' + esc(x.nameAlt) + "</span>" : "") + "</h3>" +
        '<p class="project-desc">' + esc(x.desc) + "</p>" +
        '<ul class="chips">' + tags + "</ul>" +
        "</div>" + link +
        "</article>"
      );
    }).join("");
    return (
      '<section class="section" id="projects" aria-labelledby="projects-title">' +
      '<div class="container">' +
      '<div class="projects-head">' +
      sectionHead("04", p.kicker, p.title).replace('class="section-title"', 'class="section-title" id="projects-title"') +
      '<div class="filters" role="group" aria-label="' + esc(p.kicker) + '" data-reveal style="--d:2">' + filters + "</div>" +
      "</div>" +
      '<p class="sr-only" aria-live="polite" id="filter-live">' + esc(t.ui.showing(n)) + "</p>" +
      '<div class="projects-grid">' + cards + "</div>" +
      "</div></section>"
    );
  }

  function contactHTML() {
    var c = t.contact, L = P.links;
    var rows = [];
    if (L.email) {
      rows.push(
        '<li class="contact-row contact-email">' +
        '<a class="contact-link" href="mailto:' + esc(L.email) + '">' + icon("mail") + '<span><span class="contact-label">' + esc(c.emailLabel) + '</span><span class="contact-value" dir="ltr">' + esc(L.email) + "</span></span></a>" +
        '<button type="button" class="icon-btn copy-btn" data-action="copy" aria-label="' + esc(t.ui.copy) + '">' + icon("copy") + "</button></li>"
      );
    }
    if (L.phone) rows.push('<li class="contact-row"><a class="contact-link" href="tel:' + esc(L.phone) + '">' + icon("phone") + '<span><span class="contact-label">' + esc(c.phoneLabel) + '</span><span class="contact-value" dir="ltr">' + esc(L.phoneDisplay || L.phone) + "</span></span></a></li>");
    if (L.github) rows.push('<li class="contact-row"><a class="contact-link" href="' + esc(L.github) + '" target="_blank" rel="noopener">' + icon("github") + '<span><span class="contact-label">' + esc(c.githubLabel) + '</span><span class="contact-value" dir="ltr">' + esc(L.github.replace(/^https?:\/\/(www\.)?/, "")) + "</span></span></a></li>");
    if (L.linkedin) rows.push('<li class="contact-row"><a class="contact-link" href="' + esc(L.linkedin) + '" target="_blank" rel="noopener">' + icon("linkedin") + '<span><span class="contact-label">' + esc(c.linkedinLabel) + '</span><span class="contact-value" dir="ltr">' + esc(L.linkedin.replace(/^https?:\/\/(www\.)?/, "")) + "</span></span></a></li>");

    return (
      '<section class="section contact" id="contact" aria-labelledby="contact-title">' +
      '<div class="container contact-grid">' +
      '<div>' +
      '<p class="kicker" data-reveal><span class="kicker-num">05</span>' + esc(c.kicker) + "</p>" +
      '<h2 class="contact-title" id="contact-title" data-reveal style="--d:1">' + esc(c.title) + "</h2>" +
      '<p class="contact-body" data-reveal style="--d:2">' + esc(c.body) + "</p>" +
      "</div>" +
      '<ul class="contact-list" data-reveal style="--d:3">' + rows.join("") + "</ul>" +
      "</div></section>"
    );
  }

  function footerHTML() {
    return (
      '<div class="container footer-inner">' +
      "<p>© " + new Date().getFullYear() + " " + esc(t.footer.name) + ' · <span class="muted">' + esc(t.ui.builtWith) + "</span></p>" +
      '<a class="to-top" href="#top">' + icon("arrowUp") + "<span>" + esc(t.ui.backToTop) + "</span></a>" +
      "</div>"
    );
  }

  /* ---------- Render ---------- */
  function render() {
    t = P[lang];
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = t.meta.title;
    var md = $('meta[name="description"]');
    if (md) md.setAttribute("content", t.meta.description);
    $(".skip-link").textContent = t.ui.skip;

    $("#nav-root").innerHTML = navHTML();
    $("#main").innerHTML = heroHTML() + aboutHTML() + experienceHTML() + skillsHTML() + projectsHTML() + contactHTML();
    $("#footer-root").innerHTML = footerHTML();

    observeReveals();
    observeSections();
    playDemo(demoKey, demoPlayed);
    demoPlayed = true;
    void document.body.offsetWidth; // commit the hidden start state so the entrance transition runs
    document.body.classList.add("is-loaded");
    onScroll();
    requestAnimationFrame(moveIndicator);
  }

  /* ---------- Theme ---------- */
  function currentTheme() {
    var set = root.getAttribute("data-theme");
    if (set === "light" || set === "dark") return set;
    return mqDark.matches ? "dark" : "light";
  }
  function syncThemeColor() {
    var m = $('meta[name="theme-color"]');
    if (m) m.setAttribute("content", currentTheme() === "dark" ? "#121110" : "#F4F1EA");
  }
  function toggleTheme(btn) {
    var next = currentTheme() === "dark" ? "light" : "dark";
    var apply = function () {
      root.setAttribute("data-theme", next);
      store.set("theme", next);
      btn.setAttribute("aria-pressed", String(next === "dark"));
      btn.innerHTML = icon(next === "dark" ? "sun" : "moon");
      syncThemeColor();
    };
    if (document.startViewTransition && !reduced()) document.startViewTransition(apply);
    else apply();
  }

  /* ---------- Language ---------- */
  function toggleLang() {
    lang = lang === "ar" ? "en" : "ar";
    store.set("lang", lang);
    var y = window.scrollY;
    var apply = function () { render(); window.scrollTo(0, y); };
    if (document.startViewTransition && !reduced()) document.startViewTransition(apply);
    else apply();
    var b = $('[data-action="lang"]');
    if (b) b.focus({ preventScroll: true });
  }

  /* ---------- Reveal on scroll ---------- */
  var revealIO = "IntersectionObserver" in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting || en.boundingClientRect.top < 0) {
        en.target.classList.add("is-in");
        revealIO.unobserve(en.target);
        $$("[data-count]", en.target).forEach(countUp);
      }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }) : null;

  function observeReveals() {
    var els = $$("[data-reveal]");
    if (!revealIO || reduced()) {
      els.forEach(function (el) { el.classList.add("is-in"); });
      $$("[data-count]").forEach(function (el) { el.textContent = el.dataset.count; });
      countersDone = true;
      return;
    }
    els.forEach(function (el) { revealIO.observe(el); });
  }

  function countUp(el) {
    var target = parseInt(el.dataset.count, 10) || 0;
    if (countersDone || reduced()) { el.textContent = target; return; }
    var dur = 1400, t0 = performance.now();
    var tick = function (now) {
      var p = Math.min(1, (now - t0) / dur);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(tick);
      else if (!$$("[data-count]").some(function (c) { return c.textContent !== c.dataset.count; })) countersDone = true;
    };
    requestAnimationFrame(tick);
  }

  /* ---------- Active section in nav ---------- */
  var activeId = "";
  var sectionIO = "IntersectionObserver" in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { activeId = en.target.id; markActive(); }
    });
  }, { rootMargin: "-45% 0px -50% 0px" }) : null;

  function observeSections() {
    if (!sectionIO) return;
    $$("main section[id]").forEach(function (s) { sectionIO.observe(s); });
  }
  function markActive() {
    $$("[data-nav]").forEach(function (a) {
      var on = a.dataset.nav === activeId;
      a.classList.toggle("is-active", on);
      if (on) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
    });
    moveIndicator();
  }
  function moveIndicator() {
    var ind = $(".nav-indicator"), a = $("[data-nav].is-active");
    if (!ind) return;
    if (!a || window.innerWidth < 860) { ind.style.opacity = "0"; return; }
    var nav = $(".nav-links").getBoundingClientRect(), r = a.getBoundingClientRect();
    ind.style.opacity = "1";
    ind.style.width = r.width + "px";
    ind.style.transform = "translateX(" + (r.left - nav.left) + "px)";
  }

  /* ---------- Scroll-linked: progress bar, nav, timeline ---------- */
  var lastY = 0, ticking = false;
  function onScroll() {
    var y = window.scrollY;
    var max = document.documentElement.scrollHeight - window.innerHeight;
    var bar = $(".scroll-progress span");
    if (bar) bar.style.transform = "scaleX(" + (max > 0 ? y / max : 0) + ")";

    var nav = $(".site-nav");
    if (nav) {
      nav.classList.toggle("is-scrolled", y > 12);
      var menuOpen = nav.classList.contains("menu-open");
      nav.classList.toggle("is-hidden", !menuOpen && y > 320 && y > lastY + 2);
      if (y < lastY - 2) nav.classList.remove("is-hidden");
    }
    lastY = y;

    var tl = $(".timeline");
    if (tl) {
      var r = tl.getBoundingClientRect();
      var p = (window.innerHeight * 0.65 - r.top) / r.height;
      tl.style.setProperty("--p", Math.max(0, Math.min(1, p)).toFixed(3));
    }
    ticking = false;
  }
  window.addEventListener("scroll", function () {
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
  }, { passive: true });
  window.addEventListener("resize", function () { moveIndicator(); onScroll(); });

  /* ---------- Hero demo: type the template, then render the storefront ---------- */
  var typingRaf = 0, typingDelay = 0;
  function playDemo(key, instant) {
    cancelAnimationFrame(typingRaf);
    clearTimeout(typingDelay);
    demoKey = key;
    var code = $("#demo-code"), preview = $("#demo-preview"), file = $("#demo-file");
    if (!code || !preview) return;
    var src = SNIPPETS[key].code;
    file.textContent = SNIPPETS[key].file;
    $$("[data-snippet]").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.snippet === key)); });

    if (instant || reduced()) {
      code.innerHTML = highlight(src);
      preview.classList.add("is-ready");
      code.parentNode.classList.add("is-done");
      return;
    }
    preview.classList.remove("is-ready");
    code.parentNode.classList.remove("is-done");
    code.innerHTML = "";
    var i = 0, last = 0;
    var step = function (ts) {
      if (ts - last > 22) {
        var ch = src.charAt(i);
        i = Math.min(src.length, i + (ch === " " ? 3 : 2));
        code.innerHTML = highlight(src.slice(0, i));
        last = ts;
      }
      if (i < src.length) typingRaf = requestAnimationFrame(step);
      else {
        code.parentNode.classList.add("is-done");
        typingDelay = setTimeout(function () { preview.classList.add("is-ready"); }, 180);
      }
    };
    typingDelay = setTimeout(function () { typingRaf = requestAnimationFrame(step); }, 700);
  }

  function addToCart(btn) {
    cart++;
    var c = $("#cart-count"), live = $("#cart-live");
    if (c) {
      c.textContent = cart;
      var wrap = c.parentNode;
      wrap.classList.remove("bump");
      void wrap.offsetWidth;
      wrap.classList.add("bump");
    }
    if (live) live.textContent = t.ui.cartItems(cart);
    btn.classList.add("is-added");
    setTimeout(function () { btn.classList.remove("is-added"); }, 900);
  }

  /* ---------- Project filter with FLIP ---------- */
  function applyFilter(f) {
    filter = f;
    $$("[data-filter]").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.filter === f)); });
    var items = $$(".project");
    var first = new Map();
    items.forEach(function (el) { if (!el.hidden) first.set(el, el.getBoundingClientRect()); });
    var n = 0;
    items.forEach(function (el) {
      var show = f === "all" || el.dataset.cat === f;
      el.hidden = !show;
      if (show) { n++; el.classList.add("is-in"); }
    });
    var live = $("#filter-live");
    if (live) live.textContent = t.ui.showing(n);
    if (reduced() || !Element.prototype.animate) return;
    items.forEach(function (el) {
      if (el.hidden) return;
      var a = first.get(el), b = el.getBoundingClientRect();
      if (!a) {
        el.animate([{ opacity: 0, transform: "translateY(16px) scale(.97)" }, { opacity: 1, transform: "none" }], { duration: 420, easing: "cubic-bezier(.2,.7,.2,1)" });
        return;
      }
      var dx = a.left - b.left, dy = a.top - b.top, sx = a.width / b.width, sy = a.height / b.height;
      if (Math.abs(dx) > 1 || Math.abs(dy) > 1 || Math.abs(sx - 1) > 0.01) {
        el.animate([
          { transformOrigin: "top left", transform: "translate(" + dx + "px," + dy + "px) scale(" + sx + "," + sy + ")" },
          { transformOrigin: "top left", transform: "none" }
        ], { duration: 480, easing: "cubic-bezier(.2,.7,.2,1)" });
      }
    });
  }

  /* ---------- Toasts ---------- */
  function toast(msg, kind) {
    var region = $("#toasts");
    if (!region) return;
    $$(".toast", region).forEach(function (old) { old.remove(); });
    var el = document.createElement("div");
    el.className = "toast" + (kind === "error" ? " toast-error" : "");
    el.innerHTML = icon(kind === "error" ? "x" : "check", "toast-icon") + "<span>" + esc(msg) + '</span><button type="button" class="toast-x" aria-label="' + esc(t.ui.close) + '">' + icon("x") + "</button>";
    region.appendChild(el);
    var timer = setTimeout(close, kind === "error" ? 7000 : 4000);
    function close() {
      clearTimeout(timer);
      el.classList.add("is-leaving");
      setTimeout(function () { el.remove(); }, reduced() ? 0 : 220);
    }
    el.querySelector(".toast-x").addEventListener("click", close);
  }

  function copyEmail() {
    var email = P.links.email;
    var ok = function () { toast(t.ui.copied); };
    var fail = function () { toast(t.ui.copyFail, "error"); };
    var legacy = function () {
      try {
        var ta = document.createElement("textarea");
        ta.value = email; ta.setAttribute("readonly", ""); ta.style.position = "fixed"; ta.style.opacity = "0";
        document.body.appendChild(ta); ta.select();
        var done = document.execCommand("copy");
        ta.remove();
        done ? ok() : fail();
      } catch (e) { fail(); }
    };
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(email).then(ok, legacy);
    else legacy();
  }

  /* ---------- Mobile menu ---------- */
  function setMenu(open) {
    var nav = $(".site-nav"), btn = $('[data-action="menu"]');
    if (!nav || !btn) return;
    nav.classList.toggle("menu-open", open);
    btn.setAttribute("aria-expanded", String(open));
    btn.setAttribute("aria-label", open ? t.ui.closeMenu : t.ui.menu);
    btn.innerHTML = icon(open ? "x" : "menu");
    if (open) nav.classList.remove("is-hidden");
  }

  /* ---------- Events (delegated, survive re-render) ---------- */
  document.addEventListener("click", function (e) {
    var el = e.target.closest("[data-action]");
    if (el) {
      var a = el.dataset.action;
      if (a === "lang") toggleLang();
      else if (a === "theme") toggleTheme(el);
      else if (a === "menu") setMenu(el.getAttribute("aria-expanded") !== "true");
      else if (a === "snippet") playDemo(el.dataset.snippet, false);
      else if (a === "cart") addToCart(el);
      else if (a === "filter") applyFilter(el.dataset.filter);
      else if (a === "copy") copyEmail();
      return;
    }
    if (e.target.closest(".nav-links a")) setMenu(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && $(".site-nav.menu-open")) { setMenu(false); $('[data-action="menu"]').focus(); }
  });

  /* Pointer spotlight on cards + magnetic primary button (fine pointers only) */
  document.addEventListener("pointermove", function (e) {
    if (!mqFine.matches || reduced()) return;
    var card = e.target.closest(".card-spot");
    if (card) {
      var r = card.getBoundingClientRect();
      card.style.setProperty("--mx", (e.clientX - r.left) + "px");
      card.style.setProperty("--my", (e.clientY - r.top) + "px");
    }
    var mag = e.target.closest(".magnetic");
    if (mag) {
      var m = mag.getBoundingClientRect();
      var dx = (e.clientX - (m.left + m.width / 2)) * 0.18;
      var dy = (e.clientY - (m.top + m.height / 2)) * 0.3;
      mag.style.transform = "translate(" + dx.toFixed(1) + "px," + dy.toFixed(1) + "px)";
    }
  }, { passive: true });
  document.addEventListener("pointerout", function (e) {
    var mag = e.target.closest && e.target.closest(".magnetic");
    if (mag && !mag.contains(e.relatedTarget)) mag.style.transform = "";
  });

  mqDark.addEventListener && mqDark.addEventListener("change", function () {
    if (!root.getAttribute("data-theme")) {
      var b = $('[data-action="theme"]');
      if (b) { b.innerHTML = icon(currentTheme() === "dark" ? "sun" : "moon"); b.setAttribute("aria-pressed", String(currentTheme() === "dark")); }
      syncThemeColor();
    }
  });

  syncThemeColor();
  render();
})();
