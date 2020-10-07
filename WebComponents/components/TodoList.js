class TodoList extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: "open"});
        this.render()
    }

    render() {
        const template = document.createElement("template");
        template.innerHTML = `
            <link type="text/css" rel="stylesheet" href="css/TodoList.css">
            <div class="todo-list">
                <h2>Your Todo List Items</h2>
                <div class="todo-list-wrapper">
                    <ul class="list"></ul>
                </div>
            </div>
        `
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define("todo-list", TodoList);