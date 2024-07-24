import { theme } from "./Themes.js";
import { translator } from "./Translator.js";
import { menu } from "./Menu.js";
import { loadElements } from "../web-components/loadElements.js";

loadElements();

const { body } = document;

const switchThemeElement = document.getElementById("switch-theme");
const switchLanguageElement = document.getElementById("switch-language");
const toggleMenuElement = document.getElementById("menu");

theme.buttonListener(switchThemeElement, body, "theme-name");
translator.buttonListener(switchLanguageElement, body, "translate-element");
menu.buttonListener(toggleMenuElement, toggleMenuElement, "menu-state");
