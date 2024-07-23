const themes = ["light", "dark"];

class Theme {
    constructor(themes) {
        this.index = 0;
        this.themes = themes;
        this.setTheme();
    }

    getNextIndex() {
        return (this.index + 1) % this.themes.length;
    }

    setIndex(index) {
        this.index = index;
    }

    setTheme() {
        this.theme = this.themes[this.index];
    }

    updateTheme(element) {
        element.setAttribute("theme-name", this.theme);
    }

    buttonListener(button, element) {
        button.addEventListener("click", () => {
            const index = this.getNextIndex();
            this.setIndex(index);
            this.setTheme();
            this.updateTheme(element);
        });
    }
}

export const theme = new Theme(themes);
