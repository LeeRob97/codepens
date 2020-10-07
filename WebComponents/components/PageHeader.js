class PageHeader extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: "open"});
        this.render();
    }

    render() {
        const template = document.createElement("template");
        template.innerHTML = `
            <link type="text/css" rel="stylesheet" href="css/PageHeader.css">
            <div class="page-header">
                <div>Todo List</div>
            </div>
        `
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define("page-header", PageHeader);