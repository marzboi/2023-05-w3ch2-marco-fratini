import { Component } from './component';

export class list extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
      <ul class="characters-list row list-unstyled">
      </ul>
    `;
  }
}
