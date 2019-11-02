
const templateDiv = `
<div id="container">
</div>
`;

class MyCustomElem extends HTMLElement {
  constructor () {
    super()
  }

  static get observedAttributes () {
  }

  disconnectedCallback () {
  }

  attributeChangedCallback (name, oldValue, newValue) {
  }

  connectedCallback () {
    const template = document.createElement("template");
    template.innerHTML = templateDiv;
    this.appendChild(template.content);

    console.log(this.querySelector('input'))
    console.log(this.firstElementChild)
  }

}

customElements.define('my-custom-elem', MyCustomElem)
