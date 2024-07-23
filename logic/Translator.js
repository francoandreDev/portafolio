import { Toggle } from "./Toggle.js";

const dictionary = {
    en: {
        "switch-theme": "Change theme",
        "switch-language": "Change language",
        greeting: "Hello",
        name: "My name is Franco",
        description: "I am a student of Computer Systems Engineering",
        "hire-me": "Hire me",
        "about-me": "About me",
        "about-me-1": "",
        "about-me-2": "",
        "about-me-3": "",
        cv: "Download CV",
        services: "Services",
        "services-description": "",
        works: "My best works",
        "works-description": "",
        "contact-me": "Contact me",
    },
    es: {
        "switch-theme": "Cambiar tema",
        "switch-language": "Cambiar idioma",
        greeting: "Hola",
        name: "Mi nombre es Franco",
        description: "Soy estudiante de ingeniería de sistemas computacionales",
        "hire-me": "Contrátame",
        "about-me": "Sobre mi",
        "about-me-1": "",
        "about-me-2": "",
        "about-me-3": "",
        cv: "Descargar CV",
        services: "Servicios",
        "services-description": "",
        works: "Mis mejores trabajos",
        "works-description": "",
        "contact-me": "Contáctame",
    },
};

class Translator extends Toggle {
    constructor(dictionary) {
        super(["en", "es"]);
        this.dictionary = dictionary;
        this.elements = document.querySelectorAll("[translate-element]");
    }

    buttonListener(button, element) {
        super.buttonListener(button, element, "lang-name");
        button.addEventListener("click", () => {
            this.applyLanguage();
        });
    }

    applyLanguage() {
        this.elements.forEach((element) => {
            element.textContent = this.dictionary[this.state][element.id];
        });
    }
}

export const translator = new Translator(dictionary);
