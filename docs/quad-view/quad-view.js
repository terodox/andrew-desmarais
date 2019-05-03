export const template = `
<style>
    :host {
        position: absolute;
        top: 10px;
        left: 10px;

        font-family: 'Helvetiva Neue', Arial, Helvetica, sans-serif;
        font-size: 12px;
    }
    .url-picker {
        height: 400px;
        width: 400px;

        background-color: #fff;
        border: 1px dashed #000;
    }
</style>
<img src="https://assets.meltwater.io/flux-icons/latest/mediatypes/svg/news.svg">
<div class="url-picker">
Hooray!
<button>Close</button>
</div>
`;

class SharedPane extends HTMLElement {
    static get tagName() {
        return 'configure-quad-view';
    }

    connectedCallback() {
        this.root = this.attachShadow({ mode: 'open' });

        this.root.innerHTML = template;

        this.img = this.root.querySelector('img');
        this.img.onclick = this.openUrlPickerVisibility.bind(this);

        this.urlPickerContainer = this.root.querySelector('.url-picker');

        this.closeButton = this.root.querySelector('button');
        this.closeButton.onclick = this.closeUrlPickerVisibility.bind(this);

        this.input = this.root.querySelector('input');
        this.input.onchange = this.updateIframe.bind(this);
    }

    openUrlPickerVisibility() {
        this.img.style.display = 'none';
        this.urlPickerContainer.style.display = 'block';
    }

    closeUrlPickerVisibility() {
        this.img.style.display = 'block';
        this.urlPickerContainer.style.display = 'none';
    }

    updateIframe() {
        clearTimeout(this.debounceTimer);
        this.debounceTimer = setTimeout(() => {
            this.iframe.src = this.input.value;
        }, 250);
    }
}

customElements.define(SharedPane.tagName, SharedPane);