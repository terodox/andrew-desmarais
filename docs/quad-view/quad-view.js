export const template = `
<style>
    :host {
        position: absolute;
        top: 10px;
        left: 10px;

        font-family: 'Helvetiva Neue', Arial, Helvetica, sans-serif;
        font-size: 12px;
    }
</style>
<div>
    <img src="https://assets.meltwater.io/flux-icons/latest/mediatypes/svg/news.svg">
</div>
`;

class SharedPane extends HTMLElement {
    static get tagName() {
        return 'configure-quad-view>';
    }

    connectedCallback() {
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