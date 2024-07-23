import { Toggle } from "./Toggle.js";

const themes = ["light", "dark"];

class Theme extends Toggle {
    constructor(themes) {
        super(themes);
    }
}

export const theme = new Theme(themes);
