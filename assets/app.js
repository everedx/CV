(function () {
  const root = document.documentElement;
  const toastEl = document.getElementById("toast");

  function toast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add("is-show");
    window.clearTimeout(toastEl._t);
    toastEl._t = window.setTimeout(() => toastEl.classList.remove("is-show"), 1400);
  }

  // Theme
  const themeToggle = document.getElementById("themeToggle");
  const storedTheme = localStorage.getItem("cv_theme");
  if (storedTheme) root.dataset.theme = storedTheme;

  themeToggle?.addEventListener("click", () => {
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    localStorage.setItem("cv_theme", next);
    toast(`Theme: ${next}`);
  });

  // Print
  document.getElementById("printBtn")?.addEventListener("click", () => window.print());

  // Back to top
  document.getElementById("backToTop")?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Copy buttons
  document.querySelectorAll("[data-copy]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      try {
        const value = btn.getAttribute("data-copy") || "";
        await navigator.clipboard.writeText(value);
        toast("Copied ✓");
      } catch {
        toast("Copy failed");
      }
    });
  });

  // Skills: search + category filter + click-to-copy
  const search = document.getElementById("skillSearch");
  const chips = Array.from(document.querySelectorAll("[data-skill-filter]"));
  const skills = Array.from(document.querySelectorAll(".skill"));

  let activeCat = "all";

  function applySkillFilter() {
    const q = (search?.value || "").trim().toLowerCase();

    skills.forEach((el) => {
      const label = (el.getAttribute("data-skill") || "").toLowerCase();
      const cat = el.getAttribute("data-cat") || "";
      const matchesText = !q || label.includes(q);
      const matchesCat = activeCat === "all" || cat === activeCat;

      el.classList.toggle("is-hidden", !(matchesText && matchesCat));
    });
  }

  search?.addEventListener("input", applySkillFilter);

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("chip--active"));
      chip.classList.add("chip--active");
      activeCat = chip.getAttribute("data-skill-filter") || "all";
      applySkillFilter();
    });
  });

  skills.forEach((skill) => {
    skill.addEventListener("click", async () => {
      const txt = skill.getAttribute("data-skill") || skill.textContent || "";
      try {
        await navigator.clipboard.writeText(txt);
        toast(`Copied: ${txt}`);
      } catch {
        toast("Copy failed");
      }
    });
  });

  // Scrollspy nav
  const navLinks = Array.from(document.querySelectorAll("[data-nav]"));
  const sections = navLinks
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  const io = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;

      navLinks.forEach((a) => a.classList.remove("is-active"));
      const active = navLinks.find((a) => a.getAttribute("href") === `#${visible.target.id}`);
      active?.classList.add("is-active");
    },
    { rootMargin: "-20% 0px -70% 0px", threshold: [0.1, 0.2, 0.35, 0.5] }
  );

  sections.forEach((s) => io.observe(s));

  // Initial filter
  applySkillFilter();
})();
