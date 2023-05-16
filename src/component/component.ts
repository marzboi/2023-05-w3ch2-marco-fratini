export abstract class Component {
  selector: string;
  template!: string;
  element!: Element;

  constructor(selector: string) {
    this.selector = selector;
  }

  render() {
    const element = document.querySelector(this.selector);
    if (!element) throw new Error('Selector not found');
    this.element = element;
    this.element.innerHTML = this.template;
  }
}
