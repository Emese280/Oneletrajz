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
      p1: "Technikusi tanulmányaim alatt megtanultam csapatban dolgozni, ami nagyon jó hatással volt a szervező és kommunikációs képességeimre.",
      p2: "Ezalatt az 5 év alatt elsajátítottam a C#/.NET technológiákat, az objektumorientált programozást és az algoritmikus gondolkodást, erős hangsúlyt fektetve a CLEAN CODE elveire.",
      p3: "Széleskörű érdeklődéssel fordulok a komplex szoftverrendszerek tervezése és megvalósítása felé, célom pedig a folyamatos szakmai fejlődés ipari környezetben."
    },
    exp: {
      title: "Tanulmányok és projektek",
      item1Title: "Szoftverfejlesztő és tesztelő technikus",
      item1P1: "SZC Széchenyi István Műszaki Technikumban végzem el a szoftverfejlesztő és tesztelő szakot.",
      item1P2: "Gyorsan alkalmazkodom új helyzetekhez, megbízható és kitartó személyiség vagyok. Érdekel a programozás, és nyitott vagyok több nyelv elsajátítására, elmélyítésére.",
      item1P3: "Az ágazati alapvizsgán Pythonban programoztam, majd utána áttértünk más nyelvekre, logikákra és algoritmusokra.",
      item1P4: "C#-ban konzolos és grafikus alkalmazásokat is fejlesztettem objektumorientált szemlélettel.",
      item2Title: "Vizsgaremek",
      item2Text: "MVC technológiával készítettem egy időpontfoglaló webalkalmazást, amelyen keresztül backend és frontend tapasztalatot is szereztem.",
      item3Title: "CAN-bus Analyzer (C#)",
      item3Text: "Készítettem egy CAN-busz elemző alkalmazást, amely a GitHub repositorymban konzolos és GUI változatban is elérhető."
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
      p1: "During my technical studies, I learned to work effectively in teams, which had a strong positive impact on my organizational and communication skills.",
      p2: "Over these 5 years, I gained solid foundations in C#/.NET technologies, object-oriented programming, and algorithmic thinking, with a strong focus on CLEAN CODE principles.",
      p3: "I am highly interested in designing and implementing complex software systems, and my goal is continuous professional growth in an industrial environment."
    },
    exp: {
      title: "Studies and Projects",
      item1Title: "Software Development and Testing Technician",
      item1P1: "I am completing the software development and testing track at SZC Szechenyi Istvan Technical School.",
      item1P2: "I adapt quickly to new situations, and I am a reliable and persistent person. I am passionate about programming and open to deepening my knowledge in multiple languages.",
      item1P3: "For my basic sector exam I programmed in Python, then moved on to other languages, programming logic, and algorithms.",
      item1P4: "In C#, I developed both console and graphical applications with an object-oriented approach.",
      item2Title: "Final Exam Project",
      item2Text: "I built an appointment-booking web application using MVC, which helped me gain practical backend and frontend experience.",
      item3Title: "CAN-bus Analyzer (C#)",
      item3Text: "I also created a CAN-bus analyzer application, available in both console and GUI versions in my GitHub repository."
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
