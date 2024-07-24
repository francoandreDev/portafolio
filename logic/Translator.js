import { Toggle } from "./Toggle.js";

const dictionary = {
    en: {
        "title-page": "Portfolio",
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
        "title-page": "Portafolio",
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
        super(["es", "en"]);
        this.dictionary = dictionary;
        this.elements = document.querySelectorAll("[translate-element]");
        this.customElements = document.querySelectorAll("[lang-text]");
    }

    buttonListener(button, element) {
        super.buttonListener(button, element, "lang-name");
        button.addEventListener("click", () => {
            this.applyLanguage();
        });
    }

    applyLanguage() {
        // native elements just change their text content
        this.elements.forEach((element) => {
            element.textContent = this.dictionary[this.state][element.id];
        });

        // custom elements need to change their attributes
        this.customElements.forEach((element) => {
            const translateElements = element.shadowRoot.querySelectorAll(
                "[translate-element]"
            );
            translateElements.forEach((translateElement) => {
                translateElement.textContent =
                    this.dictionary[this.state][translateElement.id];
            });
        });
    }
}

export const translator = new Translator(dictionary);
