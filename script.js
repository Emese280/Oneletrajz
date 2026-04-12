tsParticles.load("tsparticles", {
  fpsLimit: 60,
  particles: {
    number: { value: 30, density: { enable: true, area: 900 } },
    color: { value: ["#0ea5a6", "#f59e0b", "#1d4ed8"] },
    shape: { type: "circle" },
    opacity: { value: 0.35, random: { enable: true, minimumValue: 0.2 } },
    size: { value: { min: 1, max: 4 } },
    links: { enable: true, distance: 110, color: "#94a3b8", opacity: 0.25, width: 1 },
    move: { enable: true, speed: 0.6, direction: "none", outModes: { default: "bounce" } }
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      onHover: { enable: true, mode: "grab" },
      onClick: { enable: false }
    },
    modes: { grab: { distance: 130, links: { opacity: 0.6 } } }
  },
  detectRetina: true
});

const i18n = {
  hu: {
    pageTitle: "Illés Emese | Developer CV",
    nav: {
      aria: "Szekciók",
      about: "Rólam",
      experience: "Tanulmányok és projektek",
      tools: "Eszközök",
      skills: "Készségek",
      contact: "Kapcsolat"
    },
    header: {
      role: "Szoftverfejlesztő és tesztelő technikus"
    },
    about: {
      title: "Rólam",
      p1: "Technikusi tanulmányaim alatt megtanultam csapatban dolgozni.",
      p2: "Gyorsan alkalmazkodok új helyzetekhez, megbízható és kitartó személyiség vagyok.",
      p3: "Érdekel a programozás és nyitott vagyok több nyelv elsajátítására.",
      p4: "Széleskörű érdeklődéssel fordulok a komplex szoftverrendszerek tervezése és megvalósítása felé."
    },
    exp: {
      title: "Tanulmányok és projektek",
      item1Title: "Szoftverfejlesztő és tesztelő technikus",
      item1P1: "SZC Széchenyi István Műszaki Technikum szoftverfejlesztő és tesztelő szakán kezdtem tanulmányaimat, ahol már az első évben megtanultam Pythonban programozni.",
      item1P2: "Elsajátítottam a C#/.NET technológiát, az objektumorientált programozást és az algoritmikus gondolkodást, erős hangsúlyt fektetve a Clean Code elveire.",
      item1P3: "Diákmunkában sírhelyek adatait digitalizáltuk, majd feltérképeztük a területet községünk számára.",
      item1P4: "Konzolosan és grafikusan is fejlesztettem alkalmazásokat OOP szemlélettel, valamint backend és frontend alapú, adatbázisos MVC rendszereket is készítettem.",
      item1P5: "Tovább mélyítettem szakmai tudásomat projektalapú fejlesztésekben.",
      item2Title: "Vizsgaremek",
      item2Text: "MVC technológiával készítettem egy időpontfoglaló webalkalmazást, amelyen keresztül backend és frontend tapasztalatot is szereztem."
    },
    tools: {
      title: "Eszközök",
      git: "Git",
      vs: "Visual Studio",
      vscode: "VS Code",
      sql: "SQL Server"
    },
    skills: {
      title: "Készségek",
      lang: "Angol B2"
    },
    contact: {
      title: "Kapcsolat",
      email: "Email",
      phone: "Telefon",
      phoneValue: "PDF-ben megadva"
    },
    btn: {
      github: "GitHub projekt",
      top: "Vissza az elejére"
    },
    footer: "© 2026 Illés Emese"
  },
  en: {
    pageTitle: "Illes Emese | Developer CV",
    nav: {
      aria: "Sections",
      about: "About",
      experience: "Studies and Projects",
      tools: "Tools",
      skills: "Skills",
      contact: "Contact"
    },
    header: {
      role: "Software Development and Testing Technician"
    },
    about: {
      title: "About",
      p1: "During my technical studies, I learned to work in a team.",
      p2: "I adapt quickly to new situations, and I am a reliable and persistent person.",
      p3: "I am interested in programming and open to learning multiple languages.",
      p4: "I am broadly interested in the design and implementation of complex software systems."
    },
    exp: {
      title: "Studies and Projects",
      item1Title: "Software Development and Testing Technician",
      item1P1: "I started my studies in the software development and testing program at SZC Szechenyi Istvan Technical School, where I learned Python programming already in my first year.",
      item1P2: "I mastered C#/.NET technologies, object-oriented programming, and algorithmic thinking, with a strong focus on Clean Code principles.",
      item1P3: "During student work, we digitalized grave plot records and mapped the area for our municipality.",
      item1P4: "I developed both console and graphical applications with an OOP mindset, and also built backend and frontend MVC systems with databases.",
      item1P5: "I further deepened my professional knowledge through project-based development.",
      item2Title: "Final Exam Project",
      item2Text: "I built an appointment-booking web application using MVC, which helped me gain practical backend and frontend experience."
    },
    tools: {
      title: "Tools",
      git: "Git",
      vs: "Visual Studio",
      vscode: "VS Code",
      sql: "SQL Server"
    },
    skills: {
      title: "Skills",
      lang: "English B2"
    },
    contact: {
      title: "Contact",
      email: "Email",
      phone: "Phone",
      phoneValue: "Provided in PDF"
    },
    btn: {
      github: "GitHub project",
      top: "Back to top"
    },
    footer: "© 2026 Illes Emese"
  }
};

const getText = (dict, path) => path.split(".").reduce((obj, part) => (obj ? obj[part] : undefined), dict);

const applyLanguage = (lang) => {
  const dict = i18n[lang];
  document.documentElement.lang = lang;
  document.title = dict.pageTitle;
  document.getElementById("quick-nav").setAttribute("aria-label", dict.nav.aria);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = getText(dict, key);
    if (value) {
      el.textContent = value;
    }
  });

  document.getElementById("lang-hu").classList.toggle("active", lang === "hu");
  document.getElementById("lang-en").classList.toggle("active", lang === "en");
};

document.getElementById("lang-hu").addEventListener("click", () => applyLanguage("hu"));
document.getElementById("lang-en").addEventListener("click", () => applyLanguage("en"));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach((section) => observer.observe(section));
applyLanguage("hu");
