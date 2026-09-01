/**
 * main.js — renders portfolioData into the page and wires up interactivity.
 * Keeping render + data separate means swapping data.js for API responses
 */

const icons = {
  network:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="9" y="14" width="6" height="6" rx="1"/><path d="M7 10v2a2 2 0 0 0 2 2h0M17 10v2a2 2 0 0 0-2 2h0"/></svg>',
  shield:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"/></svg>',
  cloud:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a4 4 0 0 1-1-7.9A5 5 0 0 1 15.9 8H16a4.5 4.5 0 0 1 1 8.9"/><path d="M7 18h9"/></svg>',
  layers:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/></svg>',
  code:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M9 8l-4 4 4 4"/><path d="M15 8l4 4-4 4"/></svg>',
  monitor:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="12" rx="1"/><path d="M8 20h8M12 16v4"/></svg>',
  github:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/></svg>',
  linkedin:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 11v5M8 8v.01M12 16v-3a2 2 0 0 1 4 0v3M12 13v3"/></svg>',
  mail:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
  pin:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-6.3 7-11a7 7 0 0 0-14 0c0 4.7 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  download:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12m0 0l-4-4m4 4l4-4"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/></svg>',
  externalLink:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M9 7h8v8"/></svg>',
  award:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5"/><path d="M8.5 12.5L7 21l5-2.5L17 21l-1.5-8.5"/></svg>',
};

function el(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

/* ---------------------------- Nav & footer ---------------------------- */
function renderIdentity() {
  const { profile } = portfolioData;
  document.title = `${profile.name} — ${profile.role}`;
  document.querySelectorAll("[data-name]").forEach((n) => (n.textContent = profile.name));
  document.querySelectorAll("[data-cv-href]").forEach((n) => n.setAttribute("href", profile.cvFile));
}

/* ---------------------------- Theme Toggle ---------------------------- */
function initTheme() {
  const toggleBtn = document.querySelector("#theme-toggle");
  if (!toggleBtn) return;

  const sunIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`;
  const moonIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;

 // Default strictly to "light" mode
  const savedTheme = localStorage.getItem("theme");
  let currentTheme = savedTheme || "light";

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    toggleBtn.innerHTML = theme === "dark" ? sunIcon : moonIcon;
    localStorage.setItem("theme", theme);
  }

  setTheme(currentTheme);

  toggleBtn.addEventListener("click", () => {
    const activeTheme = document.documentElement.getAttribute("data-theme");
    setTheme(activeTheme === "dark" ? "light" : "dark");
  });
}

/* -------------------------------- Hero -------------------------------- */
function renderHero() {
  const { profile, domains } = portfolioData;

  document.querySelector("#hero-summary").textContent = profile.summary;

  // Subtle typing effect for the role line. Respects prefers-reduced-motion
  // by writing the full string immediately instead of animating it.
  const roleEl = document.querySelector("#hero-role");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    roleEl.textContent = profile.role;
  } else {
    roleEl.textContent = "";
    let i = 0;
    (function typeEffect() {
      if (i < profile.role.length) {
        roleEl.textContent += profile.role.charAt(i);
        i++;
        setTimeout(typeEffect, 55);
      }
    })();
  }

  const meta = document.querySelector("#hero-meta");
  meta.innerHTML = `
    <li>${icons.pin}${profile.location}</li>
    <li>${icons.mail}${profile.email}</li>
  `;

  const avatarWrap = document.querySelector("#hero-avatar");
  const img = document.createElement("img");
  img.className = "avatar";
  img.src = profile.photo;
  img.alt = profile.name;
  img.onerror = () => {
    img.replaceWith(el(`<div class="avatar-fallback">${profile.initials}</div>`));
  };
  avatarWrap.appendChild(img);

  const topology = document.querySelector("#topology");
  topology.innerHTML = domains
    .map(
      (d) => `
      <div class="topology-node">
        <div class="topology-dot"><span></span></div>
        <div>
          <div class="topology-label">${d.label}</div>
          <div class="topology-sub">${d.sub}</div>
        </div>
      </div>`
    )
    .join("");
}

/* -------------------------------- About -------------------------------- */
function renderAbout() {
  const { profile, domains } = portfolioData;
  document.querySelector("#about-summary").textContent = profile.summary;

  document.querySelector("#about-info").innerHTML = `
    <li><span class="label">Role</span><span class="value">${profile.role}</span></li>
    <li><span class="label">Education</span><span class="value">${profile.education}</span></li>
    <li><span class="label">Location</span><span class="value">${profile.location}</span></li>
    <li><span class="label">Phone</span><span class="value">${profile.phone}</span></li>
    <li><span class="label">Email</span><span class="value">${profile.email}</span></li>
  `;

  document.querySelector("#domain-tags").innerHTML = domains
    .map((d) => `<span class="domain-tag">${d.label}</span>`)
    .join("");
}

/* ------------------------------ Experience ------------------------------ */
function renderExperience() {
  const wrap = document.querySelector("#timeline");
  wrap.innerHTML = portfolioData.experience
    .map((job) => {
      const body = job.points
        ? `<ul class="timeline-list">${job.points.map((p) => `<li>${p}</li>`).join("")}</ul>`
        : job.groups
            .map(
              (g) => `
              <div class="timeline-sub">${g.heading}</div>
              <ul class="timeline-list">${g.points.map((p) => `<li>${p}</li>`).join("")}</ul>`
            )
            .join("");
      return `
        <div class="timeline-item reveal">
          <div class="timeline-date">${job.date}</div>
          <h3 class="timeline-role">${job.role}</h3>
          <div class="timeline-org">${job.org}</div>
          ${body}
        </div>`;
    })
    .join("");
}

/* -------------------------------- Skills -------------------------------- */
function renderSkills(activeId = "all") {
  const grid = document.querySelector("#skills-grid");
  const cats = portfolioData.skillCategories.filter(
    (c) => activeId === "all" || c.id === activeId
  );
  grid.innerHTML = cats
    .map(
      (c) => `
      <div class="skill-card reveal">
        <div class="skill-card-head">
          <div class="skill-icon">${icons[c.icon] || ""}</div>
          <h3>${c.label}</h3>
        </div>
        <div class="skill-tags">${c.skills.map((s) => `<span>${s}</span>`).join("")}</div>
      </div>`
    )
    .join("");
  observeReveals();
}

function renderSkillFilters() {
  const bar = document.querySelector("#skills-filter");
  const cats = [{ id: "all", label: "All" }, ...portfolioData.skillCategories];
  bar.innerHTML = cats
    .map(
      (c, i) =>
        `<button class="filter-btn${i === 0 ? " active" : ""}" data-filter="${c.id}">${c.label}</button>`
    )
    .join("");
  bar.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    bar.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderSkills(btn.dataset.filter);
  });
}

/* ------------------------------- Projects ------------------------------- */
function renderProjects(activeCat = "all") {
  const { profile } = portfolioData;
  const grid = document.querySelector("#projects-grid");
  const items = portfolioData.projects.filter(
    (p) => activeCat === "all" || p.category === activeCat
  );

  grid.innerHTML = items
    .map((p) => {
      // Media: real screenshot if given, otherwise a gradient + icon
      // placeholder so the card never shows a broken image.
      const media = p.image
        ? `<img src="${p.image}" alt="${p.title} screenshot" loading="lazy">`
        : `<span class="media-icon">${icons[p.icon] || icons.code}</span>`;

      const githubUrl = p.github || profile.social.github;
      const links = `
        <div class="project-links">
          <a href="${githubUrl}" target="_blank" rel="noopener">${icons.github} Code</a>
          ${p.demo ? `<a class="is-demo" href="${p.demo}" target="_blank" rel="noopener">${icons.externalLink} Live demo</a>` : ""}
        </div>`;

      return `
      <div class="project-card reveal">
        <div class="project-media">${media}</div>
        <div class="project-body">
          <span class="project-tag">${p.categoryLabel}</span>
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          <div class="project-stack">${p.stack.map((s) => `<span>${s}</span>`).join("")}</div>
          ${links}
        </div>
      </div>`;
    })
    .join("");
  observeReveals();
}

function renderProjectFilters() {
  const bar = document.querySelector("#projects-filter");
  const cats = [
    { id: "all", label: "All" },
    ...[...new Map(portfolioData.projects.map((p) => [p.category, p.categoryLabel])).entries()].map(
      ([id, label]) => ({ id, label })
    ),
  ];
  bar.innerHTML = cats
    .map(
      (c, i) =>
        `<button class="filter-btn${i === 0 ? " active" : ""}" data-filter="${c.id}">${c.label}</button>`
    )
    .join("");
  bar.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    bar.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderProjects(btn.dataset.filter);
  });
}

/* ---------------------------- Certifications ---------------------------- */
function renderCertifications() {
  const wrap = document.querySelector("#cert-columns");
  wrap.innerHTML = portfolioData.certifications
    .map(
      (c) => `
      <div class="cert-col reveal">
        <div class="cert-issuer-row">
          <div class="badge">${c.badge}</div>
          <h3>${c.issuer}</h3>
        </div>
        <ul>
          ${c.items
            .map((i) => {
              const title = i.url
                ? `<a class="cert-name" href="${i.url}" target="_blank" rel="noopener">${icons.award}${i.name}${icons.externalLink}</a>`
                : `<span class="cert-name">${icons.award}${i.name}</span>`;
              return `<li>${title}${i.date ? `<span class="cert-date">${i.date}</span>` : ""}</li>`;
            })
            .join("")}
        </ul>
      </div>`
    )
    .join("");
  observeReveals();
}

/* -------------------------------- Contact -------------------------------- */
function renderContact() {
  const { profile } = portfolioData;
  document.querySelector("#contact-links").innerHTML = `
    <a href="${profile.social.email}">${icons.mail}${profile.email}</a>
    <a href="${profile.social.linkedin}" target="_blank" rel="noopener">${icons.linkedin}LinkedIn</a>
    <a href="${profile.social.github}" target="_blank" rel="noopener">${icons.github}GitHub</a>
    <a href="#" onclick="return false;">${icons.pin}${profile.location}</a>
  `;

  const form = document.querySelector("#contact-form");
  const note = document.querySelector("#form-note");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // TODO(backend): Need to implement a backend endpoint to handle form submissions. For now, a note.
    // validation don't need to change when the backend is wired up.
    note.textContent = "Thanks — this form isn't wired to a backend yet, so please reach out by email directly.";
    form.reset();
  });
}

function renderFooterSocial() {
  const { profile } = portfolioData;
  document.querySelector("#footer-social").innerHTML = `
    <a href="${profile.social.github}" target="_blank" rel="noopener" aria-label="GitHub">${icons.github}</a>
    <a href="${profile.social.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${icons.linkedin}</a>
    <a href="${profile.social.email}" aria-label="Email">${icons.mail}</a>
  `;
  document.querySelector("#footer-year").textContent = new Date().getFullYear();
}

/* --------------------------- Scroll reveal --------------------------- */
let observer;
function observeReveals() {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
  }
  document.querySelectorAll(".reveal:not(.is-visible)").forEach((elm) => observer.observe(elm));
}

/* ------------------------------ Mobile nav ------------------------------ */
function initNav() {
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav-toggle");
  toggle.addEventListener("click", () => nav.classList.toggle("open"));
  document.querySelectorAll(".nav-links a").forEach((link) =>
    link.addEventListener("click", () => nav.classList.remove("open"))
  );
}

/* --------------------------------- Init --------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderIdentity();
  renderHero();
  renderAbout();
  renderExperience();
  renderSkillFilters();
  renderSkills();
  renderProjectFilters();
  renderProjects();
  renderCertifications();
  renderContact();
  renderFooterSocial();
  initNav();
  observeReveals();
});
