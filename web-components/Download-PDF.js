class DownloadPDF extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
        this.shadow.innerHTML = `
            <style>
                button#cv {
                    background-color: var(--color);
                    color: var(--bg);
                    border: 1px solid var(--bg);
                    border-radius: 5px;
                    padding: 0.5rem 1rem;
                    cursor: pointer;
                    transition: all 0.3s ease-in-out;
                }
            </style>
            <button translate-element id="cv">${this.getAttribute(
                "lang-text"
            )}</button>
        `;
    }

    static get observedAttributes() {
        return ["lang-text", "file-path", "download-name"];
    }

    connectedCallback() {
        const button = this.shadow.querySelector("#cv");
        button.addEventListener("click", () => {
            this.downloadCV(
                this.getAttribute("file-path"),
                this.getAttribute("download-name")
            );
        });
    }

    disconnectedCallback() {
        const button = this.shadow.querySelector("#cv");
        button.removeEventListener("click", () => {
            this.downloadCV(
                this.getAttribute("file-path"),
                this.getAttribute("download-name")
            );
        });
    }

    downloadCV(filePathName, downloadName) {
        const url = filePathName;

        if (url) {
            const link = document.createElement("a");
            link.href = url;
            link.download = downloadName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            alert("PDF URL is not defined.");
        }
    }
}

export const downloadCVElement = {
    name: "download-pdf",
    className: DownloadPDF,
};
