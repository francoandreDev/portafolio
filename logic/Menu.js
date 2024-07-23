import { Toggle } from "./Toggle.js";

const states = ["open", "close"];

class Menu extends Toggle {
    constructor(states) {
        super(states);
    }
}

export const menu = new Menu(states);
