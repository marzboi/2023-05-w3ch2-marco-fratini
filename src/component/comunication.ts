import { Component } from './component';

export class Comunication extends Component {
  constructor(selector: string, position: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
    <div class="comunications">
      <p class="comunications__text display-1">Una frase que dice alguien</p>
      <img class="comunications__picture" src="img/no-one.jpg" alt="Nombre y familia del que habla" />
    </div>
    `;
  }
}
