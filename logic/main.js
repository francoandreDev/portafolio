import { theme } from "./Themes.js";

const { body } = document;
const switchThemeElement = document.getElementById("switch-theme");
theme.buttonListener(switchThemeElement, body);
