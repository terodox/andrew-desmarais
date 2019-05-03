export const template = `
<style>
    :host {
        width: 50vw;
        height: 50vh;
        margin: 0;
        padding: 0;
        display: inline-block;

        font-family: 'Helvetiva Neue', Arial, Helvetica, sans-serif;
        font-size: 12px;
    }
    .url-bar {
        width: 100%;
    }
</style>
<div>
    <input class="url-bar">
</div>
<iframe></iframe>
`;

class SharedPane extends HTMLElement {
    static get tagName() {
        return 'shared-pane';
    }

    connectedCallback() {
        this.id = this.getAttribute('id');
        if(!this.id) {
            throw new Error('An id is required for shared-pane to function');
        }

        this.root = this.attachShadow({ mode: 'open' });

        this.root.innerHTML = template;
    }
}

customElements.define(SharedPane.tagName, SharedPane);