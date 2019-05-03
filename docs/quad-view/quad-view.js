export const template = `
<style>
    :host {
        width: 49vw;
        height: 49vh;
        margin: 0;
        padding: 0;
        display: inline-block;

        font-family: 'Helvetiva Neue', Arial, Helvetica, sans-serif;
        font-size: 12px;
    }
    .url-bar {
        position: absolute;
        width: 49vw;
    }
    iframe {
        width: 100%;
        height: 100%;
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

        this.iframe = this.root.querySelector('iframe');

        this.input = this.root.querySelector('input');
        this.input.onchange = this.updateIframe.bind(this);
    }

    updateIframe() {
        clearTimeout(this.debounceTimer);
        this.debounceTimer = setTimeout(() => {
            this.iframe.src = this.input.value;
        }, 250);
    }
}

customElements.define(SharedPane.tagName, SharedPane);