/* Rendering + interactions. You should not need to edit this file
   for day-to-day updates — edit assets/js/data.js instead. */

(function () {
  "use strict";

  /* ---------- theme ---------- */
  const root = document.documentElement;
  function applyTheme(t) {
    if (t === "dark") root.setAttribute("data-theme", "dark");
    else root.removeAttribute("data-theme");
  }
  let saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  const prefersDark = typeof matchMedia === "function" &&
    matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(saved || (prefersDark ? "dark" : "light"));

  document.addEventListener("click", function (e) {
    const t = e.target.closest("[data-theme-toggle]");
    if (!t) return;
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
    try { localStorage.setItem("theme", next); } catch (err) {}
  });

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function markMe(authors) {
    return esc(authors).replace(/Inyoung Oh/g, '<span class="me">Inyoung Oh</span>');
  }
  function badgeHTML(b) {
    return '<span class="badge ' + b.kind + '">' + esc(b.text) + "</span>";
  }
  function fmtDate(iso) {
    const [y, m, d] = iso.split("-");
    const mon = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][+m - 1];
    return mon + " " + (+d) + ", " + y;
  }

  /* ---------- email (assembled at runtime to avoid harvesting) ---------- */
  document.querySelectorAll("[data-email]").forEach(function (el) {
    const addr = SITE.emailUser + "@" + SITE.emailDomain;
    el.setAttribute("href", "mailto:" + addr);
    if (el.hasAttribute("data-email-text")) el.textContent = addr;
  });

  /* ---------- research statement slot ---------- */
  document.querySelectorAll("[data-rs-link]").forEach(function (el) {
    if (SITE.researchStatement) {
      el.setAttribute("href", SITE.researchStatement);
      el.hidden = false;
    } else {
      el.hidden = true;
    }
  });

  /* ---------- footer meta ---------- */
  document.querySelectorAll("[data-updated]").forEach(function (el) {
    el.textContent = fmtDate(SITE.updated);
  });

  /* ---------- copy buttons (bio, bibtex) ---------- */
  function flash(btn, text) {
    const old = btn.textContent;
    btn.textContent = text;
    setTimeout(function () { btn.textContent = old; }, 1600);
  }
  document.addEventListener("click", function (e) {
    const b = e.target.closest("[data-copy-bio]");
    if (b) {
      navigator.clipboard.writeText(BIO).then(function () { flash(b, "Copied"); });
    }
    const bb = e.target.closest("[data-copy-bibtex]");
    if (bb) {
      const pub = PUBS.find(function (p) { return p.id === bb.getAttribute("data-copy-bibtex"); });
      if (pub && pub.bibtex) navigator.clipboard.writeText(pub.bibtex).then(function () { flash(bb, "Copied"); });
    }
  });

  /* ---------- news ---------- */
  const newsEl = document.getElementById("news-list");
  if (newsEl) {
    const LIMIT = 5;
    newsEl.innerHTML = NEWS.map(function (n, i) {
      return '<li class="' + (i >= LIMIT ? "hidden-news" : "") + '">' +
        '<span class="date">' + fmtDate(n.date) + "</span><span>" + n.html + "</span></li>";
    }).join("");
    const moreBtn = document.getElementById("news-toggle");
    if (moreBtn) {
      if (NEWS.length <= LIMIT) moreBtn.hidden = true;
      moreBtn.addEventListener("click", function () {
        const collapsed = newsEl.querySelector(".hidden-news") !== null;
        newsEl.querySelectorAll("li").forEach(function (li, i) {
          li.classList.toggle("hidden-news", !collapsed && i >= LIMIT);
        });
        moreBtn.textContent = collapsed ? "Show fewer" : "Show all " + NEWS.length + " items";
        moreBtn.setAttribute("aria-expanded", collapsed);
      });
    }
  }

  /* ---------- publication card ---------- */
  function cardHTML(p, opts) {
    const compact = opts && opts.compact;
    const badges = (p.badges || []).map(badgeHTML).join("");
    const links = (p.links || []).map(function (l) {
      return '<a href="' + l.url + '" target="_blank" rel="noopener">' + esc(l.label) + "</a>";
    }).join("");
    const absBtn = p.abstract
      ? '<button type="button" data-abs="' + p.id + '" aria-expanded="false">Abstract</button>' : "";
    const bibBtn = p.bibtex
      ? '<button type="button" data-bib="' + p.id + '" aria-expanded="false">BibTeX</button>' : "";
    const absPanel = p.abstract
      ? '<div class="pub-abs" id="abs-' + p.id + '" hidden>' + esc(p.abstract) + "</div>" : "";
    const bibPanel = p.bibtex
      ? '<div class="pub-bib" id="bib-' + p.id + '" hidden><pre>' + esc(p.bibtex) + "</pre>" +
        '<button type="button" class="copy-btn" data-copy-bibtex="' + p.id + '">Copy BibTeX</button></div>' : "";

    if (compact) {
      return '<article class="pub-row" id="' + p.id + '" data-theme-tag="' + p.theme + '">' +
        '<p class="pub-title">' + badges + esc(p.title) + "</p>" +
        '<p class="pub-authors">' + markMe(p.authors) + "</p>" +
        '<p class="pub-venue">' + esc(p.venue) + ' <span class="year">' + p.year + "</span></p>" +
        "</article>";
    }
    const thumb = p.thumb
      ? '<a href="' + ((p.links && p.links[0]) ? p.links[0].url : "#" + p.id) + '"' +
        ((p.links && p.links[0]) ? ' target="_blank" rel="noopener"' : "") + ">" +
        '<img class="pub-thumb" src="' + p.thumb + '" alt="Figure from: ' + esc(p.title) + '" loading="lazy" width="176" height="132"></a>'
      : "";
    return '<article class="pub-card' + (p.thumb ? "" : " no-thumb") + '" id="' + p.id + '" data-theme-tag="' + p.theme + '">' +
      thumb +
      "<div>" +
      '<h3 class="pub-title">' + esc(p.title) + "</h3>" +
      '<p class="pub-authors">' + markMe(p.authors) + "</p>" +
      '<p class="pub-venue">' + esc(p.venue) + ' <span class="year">' + p.year + "</span></p>" +
      "<div>" + badges + "</div>" +
      '<div class="pub-actions">' + absBtn + bibBtn + links + "</div>" +
      "</div>" + absPanel + bibPanel +
      "</article>";
  }

  /* abstract / bibtex toggles (event delegation) */
  document.addEventListener("click", function (e) {
    const a = e.target.closest("[data-abs]");
    const b = e.target.closest("[data-bib]");
    const btn = a || b;
    if (!btn) return;
    const panel = document.getElementById((a ? "abs-" : "bib-") + btn.getAttribute(a ? "data-abs" : "data-bib"));
    if (!panel) return;
    const open = !panel.hasAttribute("hidden");
    if (open) panel.setAttribute("hidden", "");
    else panel.removeAttribute("hidden");
    btn.setAttribute("aria-expanded", String(!open));
  });

  /* ---------- selected publications (home) ---------- */
  const selEl = document.getElementById("selected-pubs");
  if (selEl) {
    const sel = PUBS.filter(function (p) { return p.selected; })
      .sort(function (a, b) { return b.date.localeCompare(a.date); });
    selEl.innerHTML = sel.map(function (p) { return cardHTML(p); }).join("");
  }

  /* ---------- full publications page ---------- */
  const pubRoot = document.getElementById("pub-sections");
  if (pubRoot) {
    const bydate = function (a, b) { return b.date.localeCompare(a.date); };
    const groups = [
      { key: "international", title: "International", compact: false },
      { key: "inprep", title: "In Preparation", compact: false },
      { key: "domestic", title: "Domestic Conferences", compact: true },
      { key: "patent", title: "Patents", compact: true },
    ];
    pubRoot.innerHTML = groups.map(function (g) {
      const items = PUBS.filter(function (p) { return p.category === g.key; }).sort(bydate);
      if (!items.length) return "";
      return '<div class="pub-group" data-group="' + g.key + '">' +
        '<h2 class="pub-section-title">' + g.title +
        ' <span class="count" data-count>' + items.length + " items</span></h2>" +
        '<div class="pub-list">' +
        items.map(function (p) { return cardHTML(p, { compact: g.compact }); }).join("") +
        "</div></div>";
    }).join("");

    /* theme filter chips */
    const filterEl = document.getElementById("pub-filters");
    if (filterEl) {
      const chips = [["all", "All"]].concat(Object.entries(THEMES));
      filterEl.innerHTML = chips.map(function (c, i) {
        return '<button type="button" class="chip' + (i === 0 ? " active" : "") + '" data-filter="' + c[0] + '">' + c[1] + "</button>";
      }).join("");
      filterEl.addEventListener("click", function (e) {
        const chip = e.target.closest("[data-filter]");
        if (!chip) return;
        filterEl.querySelectorAll(".chip").forEach(function (c) { c.classList.remove("active"); });
        chip.classList.add("active");
        const f = chip.getAttribute("data-filter");
        pubRoot.querySelectorAll("[data-theme-tag]").forEach(function (card) {
          card.style.display = (f === "all" || card.getAttribute("data-theme-tag") === f) ? "" : "none";
        });
        pubRoot.querySelectorAll(".pub-group").forEach(function (grp) {
          const visible = Array.prototype.filter.call(
            grp.querySelectorAll("[data-theme-tag]"),
            function (c) { return c.style.display !== "none"; }
          );
          grp.style.display = visible.length ? "" : "none";
          const cnt = grp.querySelector("[data-count]");
          if (cnt) cnt.textContent = visible.length + " items";
        });
      });
    }

    /* deep links (e.g. publications.html#sfdnet2026) rendered after JS —
       re-run the anchor scroll once content exists */
    if (location.hash) {
      const target = document.getElementById(location.hash.slice(1));
      if (target) target.scrollIntoView();
    }
  }

  /* ---------- media highlights strip: play only when visible ---------- */
  const strip = document.querySelector(".media-strip");
  if (strip) {
    const vids = strip.querySelectorAll("video");
    const reduce = typeof matchMedia === "function" &&
      matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduce && "IntersectionObserver" in window) {
      const io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          const v = en.target;
          if (en.isIntersecting) {
            const p = v.play();
            if (p && p.catch) p.catch(function () {});
          } else {
            v.pause();
          }
        });
      }, { threshold: 0.35 });
      vids.forEach(function (v) { io.observe(v); });
    }
    /* if reduced motion or no IO support: posters remain as still images */
  }
})();
