const translations = {

    en: {
        heroTitle: "Empowering Communities. Protecting Futures.",
        heroText: "LIKOLEH CI works across Côte d’Ivoire to empower women, protect children and strengthen rural communities through education and sustainable development.",

        donate: "Donate",
        contact: "Contact",

        aboutTitle: "About LIKOLEH",
        aboutText: "Founded in 2014 in Man, Tonkpi Region, LIKOLEH CI is a registered Ivorian NGO promoting economic empowerment, child protection, education and peacebuilding across Côte d’Ivoire.",

        workTitle: "Our Work",

        workEduTitle: "Education",
        workEduText: "Supporting access to quality education for children in rural communities.",

        workWomenTitle: "Women Empowerment",
        workWomenText: "Helping women build economic independence and leadership skills.",

        workChildTitle: "Child Protection",
        workChildText: "Protecting vulnerable children and strengthening safe communities."
    },

    fr: {
        heroTitle: "Autonomiser les communautés. Protéger l'avenir.",
        heroText: "LIKOLEH CI œuvre en Côte d’Ivoire pour autonomiser les femmes, protéger les enfants et renforcer les communautés rurales grâce à l’éducation et au développement durable.",

        donate: "Faire un don",
        contact: "Contact",

        aboutTitle: "À propos de LIKOLEH",
        aboutText: "Fondée en 2014 à Man, région du Tonkpi, LIKOLEH CI est une ONG ivoirienne enregistrée qui promeut l’autonomisation économique, la protection de l’enfance, l’éducation et la consolidation de la paix en Côte d’Ivoire.",

        workTitle: "Notre travail",

        workEduTitle: "Éducation",
        workEduText: "Soutenir l’accès à une éducation de qualité pour les enfants des zones rurales.",

        workWomenTitle: "Autonomisation des femmes",
        workWomenText: "Aider les femmes à développer leur indépendance économique et leurs compétences de leadership.",

        workChildTitle: "Protection de l’enfance",
        workChildText: "Protéger les enfants vulnérables et renforcer les communautés sûres."
    },

    de: {
        heroTitle: "Gemeinschaften stärken. Zukunft schützen.",
        heroText: "LIKOLEH CI arbeitet in Côte d’Ivoire, um Frauen zu stärken, Kinder zu schützen und ländliche Gemeinschaften durch Bildung und nachhaltige Entwicklung zu fördern.",

        donate: "Spenden",
        contact: "Kontakt",

        aboutTitle: "Über LIKOLEH",
        aboutText: "Gegründet 2014 in Man, Region Tonkpi, ist LIKOLEH CI eine registrierte ivorische NGO zur Förderung von wirtschaftlicher Stärkung, Kinderschutz, Bildung und Friedensarbeit.",

        workTitle: "Unsere Arbeit",

        workEduTitle: "Bildung",
        workEduText: "Unterstützung von Bildung für Kinder in ländlichen Gemeinden.",

        workWomenTitle: "Stärkung von Frauen",
        workWomenText: "Förderung wirtschaftlicher Selbstständigkeit und Führungskompetenzen.",

        workChildTitle: "Kinderschutz",
        workChildText: "Schutz gefährdeter Kinder und Aufbau sicherer Gemeinschaften."
    }

};


function setLanguage(lang) {

    document.getElementById("hero-title").innerText = translations[lang].heroTitle;
    document.getElementById("hero-text").innerText = translations[lang].heroText;

    document.getElementById("donate-btn").innerText = translations[lang].donate;
    document.getElementById("contact-btn").innerText = translations[lang].contact;

    document.getElementById("about-title").innerText = translations[lang].aboutTitle;
    document.getElementById("about-text").innerText = translations[lang].aboutText;

    document.getElementById("work-title").innerText = translations[lang].workTitle;

    document.getElementById("work-edu-title").innerText = translations[lang].workEduTitle;
    document.getElementById("work-edu-text").innerText = translations[lang].workEduText;

    document.getElementById("work-women-title").innerText = translations[lang].workWomenTitle;
    document.getElementById("work-women-text").innerText = translations[lang].workWomenText;

    document.getElementById("work-child-title").innerText = translations[lang].workChildTitle;
    document.getElementById("work-child-text").innerText = translations[lang].workChildText;

    document.documentElement.lang = lang;

    localStorage.setItem("language", lang);
}


const savedLang = localStorage.getItem("language") || "en";

setLanguage(savedLang);