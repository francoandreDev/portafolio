import { downloadCVElement } from "./Download-PDF.js";

const allElements = [downloadCVElement];

export function loadElements() {
    allElements.forEach((element) => {
        customElements.define(element.name, element.className);
    });
}
