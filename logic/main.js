import { theme } from "./Themes.js";
import { translator } from "./Translator.js";

const { body } = document;
const switchThemeElement = document.getElementById("switch-theme");
const switchLanguageElement = document.getElementById("switch-language");
theme.buttonListener(switchThemeElement, body);
translator.buttonListener(switchLanguageElement, body);
