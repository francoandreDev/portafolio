export class Toggle {
    constructor(states) {
        this.index = 0;
        this.states = states;
        this.setState();
    }

    getNextIndex() {
        return (this.index + 1) % this.states.length;
    }

    setIndex(index) {
        this.index = index;
    }

    setState() {
        this.state = this.states[this.index];
    }

    updateState(element, attributeName) {
        element.setAttribute(attributeName, this.state);
    }

    buttonListener(button, element, attributeName) {
        button.addEventListener("click", () => {
            const index = this.getNextIndex();
            this.setIndex(index);
            this.setState();
            this.updateState(element, attributeName);
        });
    }
}
