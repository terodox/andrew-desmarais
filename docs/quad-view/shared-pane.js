import { template } from './share-pane-template.html.js';

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