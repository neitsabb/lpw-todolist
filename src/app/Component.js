export default class Component {
  constructor({ element, elements }) {
    this.selector = element;
    this.selectorChildrens = { ...elements };

    this.create();
  }

  create() {
    if (this.selector instanceof window.HTMLElement)
      this.element = this.selector;
    else this.element = document.querySelector(this.selector);

    this.elements = {};

    Object.values(this.selectorChildrens).map((element, key) => {
      if (
        entry instanceof window.HTMLElement ||
        entry instanceof window.NodeList ||
        Array.isArray(entry)
      ) {
        this.elements[key] = entry;
      } else {
        this.elements[key] = document.querySelectorAll(entry);

        if (this.elements[key].length === 0) {
          this.elements[key] = null;
        } else if (this.elements[key].length === 1) {
          this.elements[key] = document.querySelector(entry);
        }
      }
    });
  }
}
