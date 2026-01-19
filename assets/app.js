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

  const translations = {
    en: {
      "skip.link": "Skip to content",
      "brand.title": "Senior Software Engineer - ITS/SCADA & Real-Time Systems",
      "nav.profile": "Profile",
      "nav.experience": "Experience",
      "nav.skills": "Skills",
      "nav.education": "Education",
      "button.theme": "Theme",
      "button.lang": "ES",
      "button.print": "Print",
      "button.copy": "Copy",
      "button.backToTop": "Back to top",
      "section.contact": "Contact",
      "section.links": "Links",
      "section.languages": "Languages",
      "section.highlights": "Highlights",
      "section.profile": "Profile",
      "section.experience": "Employment History",
      "section.skills": "Skills",
      "section.education": "Education",
      "meta.location": "Location",
      "meta.phone": "Phone",
      "meta.email": "Email",
      "meta.nationality": "Nationality",
      "meta.nationalityValue": "Spanish",
      "meta.license": "Driving license",
      "meta.licenseValue": "Yes",
      "languages.spanish": "Spanish (Native)",
      "languages.english": "English (Professional proficiency)",
      "highlights.1": "Real-time ITS/SCADA engineering",
      "highlights.2": ".NET (C#) + C++ performance mindset",
      "highlights.3": "WPF desktop tooling & React front ends",
      "highlights.4": "Integration across vendors & systems",
      "highlights.5": "Team leadership & delivery under constraints",
      "profile.lead":
        "Experienced and results-driven engineering professional with close to a decade in Intelligent Transportation Systems (ITS) and SCADA, delivering high-availability, real-time solutions across Australia, the United States, Canada, and Europe.",
      "profile.p1":
        "Strong track record building and maintaining operational systems for traffic management, tunnel/highway operations, and critical infrastructure monitoring - where reliability, uptime, and responsiveness are non-negotiable.",
      "profile.p2":
        "Core focus: <strong>.NET (C#)</strong> and <strong>C++</strong>. Also comfortable with <strong>Java</strong> and <strong>C</strong>. Databases: <strong>SQL Server</strong>, <strong>PostgreSQL</strong>, <strong>MySQL</strong>, and <strong>Oracle</strong>.",
      "exp.job1.role": "Senior Software Engineer",
      "exp.job1.dates": "Jul 2025 - Present",
      "exp.job1.b1":
        "Develop and maintain <strong>.NET</strong> backend services and APIs supporting operational workflows and integrations.",
      "exp.job1.b2":
        "Build and evolve <strong>WPF</strong> desktop tooling (MVVM, data binding, performance-conscious UI patterns).",
      "exp.job1.b3":
        "Deliver <strong>React</strong> UI components and operational dashboards with a focus on reliability and clarity.",
      "exp.job1.b4":
        "Work with <strong>AVEVA</strong> environments (e.g., OMI/System Platform) to integrate software components into control-room contexts.",
      "exp.job1.b5":
        "Collaborate with multidisciplinary stakeholders; contribute through reviews, pragmatic architecture decisions, and delivery discipline.",
      "exp.job1.b6":
        "Build monitoring dashboards with <strong>Grafana</strong> to improve operational visibility.",
      "exp.job2.role": "Software Engineer",
      "exp.job2.dates": "Jul 2016 - Mar 2025",
      "exp.job2.desc":
        "SICE is a systems integration company (100+ years in ITS). Core product: <strong>SIDERA</strong>, a SCADA platform centralizing multiple subsystems in a single operational interface.",
      "exp.job2.b1":
        "Delivered SCADA solutions for road control systems across multiple regions (including Australia, North America, and Europe).",
      "exp.job2.b2":
        "Improved performance and responsiveness in real-time components (strong focus on <strong>C++</strong> optimization).",
      "exp.job2.b3":
        "Built <strong>C#</strong> services and APIs to extend platform capabilities and enable third-party integrations.",
      "exp.job2.b4":
        "Led the Melbourne software team from Spain, managing a group of ~10 developers while still contributing hands-on.",
      "exp.job2.b5":
        "Provided onsite support during later phases to ensure stable commissioning and operational readiness.",
      "exp.job3.role": "Software Developer",
      "exp.job3.dates": "Jan 2017 - Apr 2017",
      "exp.job3.b1":
        "Built a PC-platform prototype as part of a small Agile team, using <strong>Unity</strong> and <strong>C#</strong>.",
      "exp.job3.b2":
        "Worked end-to-end from prototyping to internal handover for further product exploration.",
      "exp.job4.role": "Software Developer",
      "exp.job4.dates": "Mar 2016 - Jun 2016",
      "exp.job4.b1": "Contributed to automation tools supporting the testing team.",
      "exp.job4.b2":
        "Helped create a web application integrated with <strong>PayPal</strong> for deployment use cases.",
      "exp.job4.b3":
        "First professional experience in software development within a consulting environment.",
      "skills.placeholder": "Search skills (e.g., WPF, SQL, React)",
      "skills.all": "All",
      "skills.languages": "Languages",
      "skills.frameworks": "Frameworks",
      "skills.databases": "Databases",
      "skills.tools": "Tools",
      "skills.domains": "Domains",
      "skills.tip": "Tip: click a chip to copy the skill name.",
      "education.program": "Certificate of Higher Education - Multiplatform Software Development",
      "education.dates": "Sep 2015 - Jun 2016",
      "education.b1":
        "Graduated with excellent results and received an <strong>ERASMUS</strong> scholarship (placement at VassIT).",
      "education.b2":
        "Final project: built a torrent application from scratch with a community component and a <strong>Java</strong>-based backend.",
      "footer.updated": "Last updated: Jan 2026",
      "aria.themeToggle": "Toggle theme",
      "aria.langToggle": "Switch to Spanish",
      "aria.print": "Print / Save as PDF",
      "aria.primaryNav": "Primary",
      "aria.copyPhone": "Copy phone",
      "aria.copyEmail": "Copy email",
      "aria.searchSkills": "Search skills",
      "aria.skillFilters": "Skill category filters",
      "aria.sidebar": "Sidebar",
      "aria.languagesCard": "Languages",
      "aria.highlightsCard": "Highlights",
      "aria.backToTop": "Back to top",
      "toast.theme": "Theme: {theme}",
      "theme.light": "light",
      "theme.dark": "dark",
      "toast.copied": "Copied",
      "toast.copiedValue": "Copied: {value}",
      "toast.copyFailed": "Copy failed",
      "toast.language": "Language: {lang}",
      "lang.en": "English",
      "lang.es": "Spanish",
    },
    es: {
      "skip.link": "Saltar al contenido",
      "brand.title": "Ingeniero de software senior - ITS/SCADA y sistemas en tiempo real",
      "nav.profile": "Perfil",
      "nav.experience": "Experiencia",
      "nav.skills": "Habilidades",
      "nav.education": "Formación",
      "button.theme": "Tema",
      "button.lang": "EN",
      "button.print": "Imprimir",
      "button.copy": "Copiar",
      "button.backToTop": "Volver arriba",
      "section.contact": "Contacto",
      "section.links": "Enlaces",
      "section.languages": "Idiomas",
      "section.highlights": "Destacados",
      "section.profile": "Perfil",
      "section.experience": "Experiencia laboral",
      "section.skills": "Habilidades",
      "section.education": "Formación",
      "meta.location": "Ubicación",
      "meta.phone": "Teléfono",
      "meta.email": "Email",
      "meta.nationality": "Nacionalidad",
      "meta.nationalityValue": "Español",
      "meta.license": "Carnet de conducir",
      "meta.licenseValue": "Sí",
      "languages.spanish": "Español (Nativo)",
      "languages.english": "Inglés (Profesional)",
      "highlights.1": "Ingeniería ITS/SCADA en tiempo real",
      "highlights.2": ".NET (C#) + C++ con enfoque en rendimiento",
      "highlights.3": "Herramientas de escritorio WPF y front ends React",
      "highlights.4": "Integración entre proveedores y sistemas",
      "highlights.5": "Liderazgo de equipo y entregas bajo restricciones",
      "profile.lead":
        "Profesional de ingeniería con casi una década de experiencia en Intelligent Transportation Systems (ITS) y SCADA, entregando soluciones de alta disponibilidad y tiempo real en Australia, Estados Unidos, Canadá y Europa.",
      "profile.p1":
        "Sólida trayectoria construyendo y manteniendo sistemas operativos para gestión de tráfico, operaciones de túneles/autopistas y monitorización de infraestructuras críticas, donde la fiabilidad, el tiempo de actividad y la capacidad de respuesta son innegociables.",
      "profile.p2":
        "Enfoque principal: <strong>.NET (C#)</strong> y <strong>C++</strong>. También cómodo con <strong>Java</strong> y <strong>C</strong>. Bases de datos: <strong>SQL Server</strong>, <strong>PostgreSQL</strong>, <strong>MySQL</strong> y <strong>Oracle</strong>.",
      "exp.job1.role": "Ingeniero de software senior",
      "exp.job1.dates": "Jul 2025 - Actualidad",
      "exp.job1.b1":
        "Desarrollar y mantener servicios backend y APIs <strong>.NET</strong> que soportan flujos operativos e integraciones.",
      "exp.job1.b2":
        "Construir y evolucionar herramientas de escritorio <strong>WPF</strong> (MVVM, data binding, patrones UI orientados a rendimiento).",
      "exp.job1.b3":
        "Entregar componentes UI en <strong>React</strong> y paneles operativos con foco en fiabilidad y claridad.",
      "exp.job1.b4":
        "Trabajar con entornos <strong>AVEVA</strong> (p. ej., OMI/System Platform) para integrar componentes de software en salas de control.",
      "exp.job1.b5":
        "Colaborar con equipos multidisciplinares; aportar en revisiones, decisiones de arquitectura pragmáticas y disciplina de entrega.",
      "exp.job1.b6":
        "Construir dashboards de monitorización con <strong>Grafana</strong> para mejorar la visibilidad operativa.",
      "exp.job2.role": "Ingeniero de software",
      "exp.job2.dates": "Jul 2016 - Mar 2025",
      "exp.job2.desc":
        "SICE es una empresa de integración de sistemas (100+ años en ITS). Producto principal: <strong>SIDERA</strong>, una plataforma SCADA que centraliza múltiples subsistemas en una única interfaz operativa.",
      "exp.job2.b1":
        "Entregué soluciones SCADA para sistemas de control de carreteras en múltiples regiones (incluyendo Australia, Norteamérica y Europa).",
      "exp.job2.b2":
        "Mejoré el rendimiento y la respuesta en componentes en tiempo real (fuerte enfoque en optimización de <strong>C++</strong>).",
      "exp.job2.b3":
        "Construí servicios y APIs en <strong>C#</strong> para extender capacidades de la plataforma y habilitar integraciones de terceros.",
      "exp.job2.b4":
        "Lideré el equipo de software de Melbourne desde España, gestionando un grupo de ~10 desarrolladores mientras seguía contribuyendo de forma práctica.",
      "exp.job2.b5":
        "Proporcioné soporte en sitio en fases finales para asegurar una puesta en marcha estable y lista para operación.",
      "exp.job3.role": "Desarrollador de software",
      "exp.job3.dates": "Ene 2017 - Abr 2017",
      "exp.job3.b1":
        "Construí un prototipo para PC como parte de un pequeño equipo Agile, usando <strong>Unity</strong> y <strong>C#</strong>.",
      "exp.job3.b2":
        "Trabajé de extremo a extremo desde el prototipado hasta la entrega interna para la exploración posterior del producto.",
      "exp.job4.role": "Desarrollador de software",
      "exp.job4.dates": "Mar 2016 - Jun 2016",
      "exp.job4.b1": "Contribuí a herramientas de automatización que apoyaban al equipo de pruebas.",
      "exp.job4.b2":
        "Ayudé a crear una aplicación web integrada con <strong>PayPal</strong> para casos de despliegue.",
      "exp.job4.b3":
        "Primera experiencia profesional en desarrollo de software dentro de un entorno de consultoría.",
      "skills.placeholder": "Buscar habilidades (p. ej., WPF, SQL, React)",
      "skills.all": "Todas",
      "skills.languages": "Lenguajes",
      "skills.frameworks": "Frameworks",
      "skills.databases": "Bases de datos",
      "skills.tools": "Herramientas",
      "skills.domains": "Dominios",
      "skills.tip": "Consejo: haz clic en un chip para copiar la habilidad.",
      "education.program": "Certificado de Educación Superior - Desarrollo de Software Multiplataforma",
      "education.dates": "Sep 2015 - Jun 2016",
      "education.b1":
        "Graduado con excelentes resultados y beca <strong>ERASMUS</strong> (estancia en VassIT).",
      "education.b2":
        "Proyecto final: construí una aplicación torrent desde cero con un componente comunitario y backend en <strong>Java</strong>.",
      "footer.updated": "Última actualización: Ene 2026",
      "aria.themeToggle": "Cambiar tema",
      "aria.langToggle": "Cambiar a inglés",
      "aria.print": "Imprimir / Guardar como PDF",
      "aria.primaryNav": "Navegación principal",
      "aria.copyPhone": "Copiar teléfono",
      "aria.copyEmail": "Copiar email",
      "aria.searchSkills": "Buscar habilidades",
      "aria.skillFilters": "Filtros de categoría de habilidades",
      "aria.sidebar": "Barra lateral",
      "aria.languagesCard": "Idiomas",
      "aria.highlightsCard": "Destacados",
      "aria.backToTop": "Volver arriba",
      "toast.theme": "Tema: {theme}",
      "theme.light": "claro",
      "theme.dark": "oscuro",
      "toast.copied": "Copiado",
      "toast.copiedValue": "Copiado: {value}",
      "toast.copyFailed": "No se pudo copiar",
      "toast.language": "Idioma: {lang}",
      "lang.en": "Inglés",
      "lang.es": "Español",
    },
  };

  let currentLang = "en";

  function t(key, vars) {
    const dict = translations[currentLang] || translations.en;
    let value = dict[key] ?? translations.en[key] ?? "";
    if (!vars) return value;
    return value.replace(/\{(\w+)\}/g, (_, name) => vars[name] ?? "");
  }

  function applyTranslations(lang) {
    const nextLang = translations[lang] ? lang : "en";
    currentLang = nextLang;
    root.lang = nextLang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = t(key);
      if (value) el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      const value = t(key);
      if (value) el.innerHTML = value;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      const value = t(key);
      if (value) el.setAttribute("placeholder", value);
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      const value = t(key);
      if (value) el.setAttribute("aria-label", value);
    });
  }

  const storedLang = localStorage.getItem("cv_lang");
  const browserLang = (navigator.language || "").toLowerCase();
  const initialLang = storedLang || (browserLang.startsWith("es") ? "es" : "en");
  applyTranslations(initialLang);

  // Language toggle
  const langToggle = document.getElementById("langToggle");
  langToggle?.addEventListener("click", () => {
    const next = currentLang === "es" ? "en" : "es";
    applyTranslations(next);
    localStorage.setItem("cv_lang", next);
    toast(t("toast.language", { lang: t(`lang.${next}`) }));
  });

  // Theme
  const themeToggle = document.getElementById("themeToggle");
  const storedTheme = localStorage.getItem("cv_theme");
  if (storedTheme) root.dataset.theme = storedTheme;

  themeToggle?.addEventListener("click", () => {
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    localStorage.setItem("cv_theme", next);
    toast(t("toast.theme", { theme: t(`theme.${next}`) }));
  });

  // Cursor trail
  const trailCanvas = document.getElementById("trailCanvas");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(pointer: fine)").matches;

  if (trailCanvas && !reduceMotion && finePointer) {
    const ctx = trailCanvas.getContext("2d");
    if (ctx) {
      let width = 0;
      let height = 0;
      let dpr = window.devicePixelRatio || 1;
      const points = [];
      const maxAge = 1400;
      const maxPoints = 140;
      const minDistance = 6;
      let lastPoint = null;
      let running = false;
      let trailRgb = { r: 54, g: 243, b: 255 };

      function parseHexColor(hex) {
        const value = hex.replace("#", "").trim();
        if (value.length === 3) {
          const r = parseInt(value[0] + value[0], 16);
          const g = parseInt(value[1] + value[1], 16);
          const b = parseInt(value[2] + value[2], 16);
          if ([r, g, b].some(Number.isNaN)) return null;
          return { r, g, b };
        }
        if (value.length !== 6) return null;
        const intVal = parseInt(value, 16);
        if (Number.isNaN(intVal)) return null;
        return {
          r: (intVal >> 16) & 255,
          g: (intVal >> 8) & 255,
          b: intVal & 255,
        };
      }

      function updateTrailColor() {
        const cssValue = getComputedStyle(root).getPropertyValue("--trail").trim();
        const rgb = parseHexColor(cssValue);
        if (rgb) trailRgb = rgb;
      }

      function resizeCanvas() {
        dpr = window.devicePixelRatio || 1;
        width = window.innerWidth;
        height = window.innerHeight;
        trailCanvas.width = Math.floor(width * dpr);
        trailCanvas.height = Math.floor(height * dpr);
        trailCanvas.style.width = `${width}px`;
        trailCanvas.style.height = `${height}px`;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
      }

      function addPoint(x, y) {
        points.push({ x, y, t: performance.now() });
        if (points.length > maxPoints) points.shift();
        if (!running) {
          running = true;
          requestAnimationFrame(render);
        }
      }

      function render() {
        const now = performance.now();
        ctx.clearRect(0, 0, width, height);
        ctx.globalCompositeOperation = "lighter";

        const { r, g, b } = trailRgb;
        for (let pass = 0; pass < 2; pass += 1) {
          const alphaScale = pass === 0 ? 0.25 : 0.6;
          const baseWidth = pass === 0 ? 5 : 1.6;
          ctx.shadowBlur = pass === 0 ? 12 : 0;
          ctx.shadowColor = `rgba(${r}, ${g}, ${b}, 0.7)`;

          for (let i = 1; i < points.length; i += 1) {
            const p0 = points[i - 1];
            const p1 = points[i];
            const age = now - p1.t;
            if (age > maxAge) continue;
            const alpha = 1 - age / maxAge;
            const widthScale = pass === 0 ? 1.2 : 0.4;
            ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha * alphaScale})`;
            ctx.lineWidth = baseWidth * alpha + widthScale;
            ctx.beginPath();
            ctx.moveTo(p0.x, p0.y);
            ctx.lineTo(p1.x, p1.y);
            ctx.stroke();
          }
        }

        while (points.length && now - points[0].t > maxAge) points.shift();
        if (points.length) {
          requestAnimationFrame(render);
        } else {
          running = false;
        }
      }

      updateTrailColor();
      resizeCanvas();
      window.addEventListener("resize", resizeCanvas);

      const themeObserver = new MutationObserver(updateTrailColor);
      themeObserver.observe(root, { attributes: true, attributeFilter: ["data-theme"] });

      window.addEventListener("pointermove", (event) => {
        if (event.pointerType !== "mouse" && event.pointerType !== "pen") return;
        const x = event.clientX;
        const y = event.clientY;
        if (lastPoint) {
          const dx = x - lastPoint.x;
          const dy = y - lastPoint.y;
          if (Math.hypot(dx, dy) < minDistance) return;
        }
        lastPoint = { x, y };
        addPoint(x, y);
      });

      window.addEventListener("pointerdown", (event) => {
        if (event.pointerType !== "mouse" && event.pointerType !== "pen") return;
        lastPoint = { x: event.clientX, y: event.clientY };
        addPoint(event.clientX, event.clientY);
      });
    } else {
      trailCanvas.style.display = "none";
    }
  } else if (trailCanvas) {
    trailCanvas.style.display = "none";
  }

  // Whisper easter egg
  const whisperParts = ["Psst,", "hire him"];
  let whisperEl = document.querySelector(".whisper");
  if (!whisperEl) {
    whisperEl = document.createElement("div");
    whisperEl.className = "whisper";
    whisperEl.setAttribute("aria-hidden", "true");
    document.body.appendChild(whisperEl);
  }
  if (whisperEl) {
    const partOne = document.createElement("span");
    partOne.className = "whisper__part whisper__part--first";
    partOne.textContent = whisperParts[0];
    const partTwo = document.createElement("span");
    partTwo.className = "whisper__part whisper__part--second";
    partTwo.textContent = whisperParts[1];
    whisperEl.replaceChildren(partOne, partTwo);
  }

  if (whisperEl && !reduceMotion) {
    const whisperDuration = 6000;
    const minDelay = 30000;
    const maxDelay = 75000;
    const initialDelay = 8000;
    const layoutEl = document.querySelector(".layout");
    let whisperActive = false;
    let whisperTimeout = null;

    function randomBetween(min, max) {
      return min + Math.random() * (max - min);
    }

    function placeWhisper() {
      const margin = 16;
      const minGutter = 90;
      const layoutRect = layoutEl ? layoutEl.getBoundingClientRect() : null;
      let x = null;

      if (layoutRect) {
        const leftSpace = layoutRect.left - margin;
        const rightSpace = window.innerWidth - layoutRect.right - margin;
        const options = [];

        if (leftSpace >= minGutter) {
          options.push({ min: margin, max: layoutRect.left - margin });
        }
        if (rightSpace >= minGutter) {
          options.push({ min: layoutRect.right + margin, max: window.innerWidth - margin });
        }
        if (!options.length) return false;

        const choice = options[Math.floor(Math.random() * options.length)];
        x = randomBetween(choice.min, choice.max);
      } else {
        x = randomBetween(margin, window.innerWidth - margin);
      }

      const y = randomBetween(18, 82);
      const rotate = randomBetween(-3, 3);
      const scale = randomBetween(0.92, 1.08);
      whisperEl.style.setProperty("--whisper-x", `${Math.round(x)}px`);
      whisperEl.style.setProperty("--whisper-y", `${y}%`);
      whisperEl.style.setProperty("--whisper-rotate", `${rotate}deg`);
      whisperEl.style.setProperty("--whisper-scale", scale.toFixed(2));
      return true;
    }

    function showWhisper() {
      if (whisperActive) return;
      if (!placeWhisper()) return;
      whisperActive = true;
      whisperEl.classList.remove("is-show");
      void whisperEl.offsetWidth;
      whisperEl.classList.add("is-show");
      if (whisperTimeout) window.clearTimeout(whisperTimeout);
      whisperTimeout = window.setTimeout(() => {
        whisperEl.classList.remove("is-show");
        whisperActive = false;
      }, whisperDuration);
    }

    function scheduleWhisper(delayOverride) {
      const delay =
        typeof delayOverride === "number" ? delayOverride : randomBetween(minDelay, maxDelay);
      window.setTimeout(() => {
        if (document.hidden) {
          scheduleWhisper();
          return;
        }
        showWhisper();
        scheduleWhisper();
      }, delay);
    }

    scheduleWhisper(initialDelay);
  }

  // Print
  const jobDetails = Array.from(document.querySelectorAll("details.job"));
  const detailsState = new Map();

  function openDetailsForPrint() {
    detailsState.clear();
    jobDetails.forEach((detail) => {
      detailsState.set(detail, detail.open);
      detail.open = true;
    });
  }

  function restoreDetailsAfterPrint() {
    detailsState.forEach((wasOpen, detail) => {
      detail.open = wasOpen;
    });
    detailsState.clear();
  }

  window.addEventListener("beforeprint", openDetailsForPrint);
  window.addEventListener("afterprint", restoreDetailsAfterPrint);

  document.getElementById("printBtn")?.addEventListener("click", () => {
    openDetailsForPrint();
    window.print();
  });

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
        toast(t("toast.copied"));
      } catch {
        toast(t("toast.copyFailed"));
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
        toast(t("toast.copiedValue", { value: txt }));
      } catch {
        toast(t("toast.copyFailed"));
      }
    });
  });

  // Scrollspy nav
  const navLinks = Array.from(document.querySelectorAll("[data-nav]"));
  const sections = navLinks
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  const flashTimeouts = new WeakMap();
  const flashDelay = 360;
  const flashDuration = 1250;
  let pendingFlashTarget = null;
  let pendingFlashTimeout = null;

  function flashSection(section) {
    if (!section) return;
    section.classList.remove("section--flash");
    void section.offsetWidth;
    section.classList.add("section--flash");
    const existing = flashTimeouts.get(section);
    if (existing) window.clearTimeout(existing);
    const timeoutId = window.setTimeout(() => {
      section.classList.remove("section--flash");
      flashTimeouts.delete(section);
    }, flashDuration);
    flashTimeouts.set(section, timeoutId);
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const href = link.getAttribute("href") || "";
      if (!href.startsWith("#")) return;
      const target = document.getElementById(href.slice(1));
      if (!target) return;
      pendingFlashTarget = target;
      if (pendingFlashTimeout) window.clearTimeout(pendingFlashTimeout);
      pendingFlashTimeout = window.setTimeout(() => {
        if (pendingFlashTarget === target) {
          flashSection(target);
          pendingFlashTarget = null;
        }
      }, flashDelay);
    });
  });

  const io = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;

      if (pendingFlashTarget && visible.target === pendingFlashTarget) {
        flashSection(pendingFlashTarget);
        pendingFlashTarget = null;
        if (pendingFlashTimeout) {
          window.clearTimeout(pendingFlashTimeout);
          pendingFlashTimeout = null;
        }
      }

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
