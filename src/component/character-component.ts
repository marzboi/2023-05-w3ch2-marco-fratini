import { King } from '../data/king';
import { Kingshand } from '../data/kingshand';
import { Squire } from '../data/squire';
import { Swordsman } from '../data/swordsman';
import { Component } from './component';

export class Character extends Component {
  constructor(
    selector: string,
    character: King | Squire | Kingshand | Swordsman
  ) {
    super(selector);
    this.template = this.createTemplate(character);
    this.render();
  }

  createTemplate(character: King | Squire | Kingshand | Swordsman) {
    const filterCharacters = (
      character: King | Squire | Kingshand | Swordsman
    ) => {
      if ('reignLength' in character) {
        return `
         <li>Años de reinado: ${character.reignLength}</li>
        `;
      }

      if ('supports' in character) {
        return `
         <li>Asesora a: ${character.supports.name}</li>
        `;
      }

      if ('pelotismo' in character) {
        return `
          <li>Peloteo: ${character.pelotismo}</li>
          <li>Sirve a: ${character.support.name}</li>
        `;
      }

      if ('weapon' in character) {
        return `
        <li>Arma: ${character.weapon}</li>
        <li>Destreza: ${character.dexterity}</li>
        `;
      }
    };

    return `
      <li class="character col">
        <div class="card character__card">
          <img src="img/${character.name.toLowerCase()}.jpg" alt="${
      character.name
    } ${character.family}" class="character__picture card-img-top ${
      character.name
    }" />
          <div class="card-body">
            <h2 class="character__name card-title h4">${character.name} ${
      character.family
    }</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Edad: ${character.age}</li>
                <li>
                  Estado:
                  <i class="fas fa-thumbs-down"></i>
                  <i class="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
              ${filterCharacters(character)}
              </ul>
              <div class="character__actions">
                <button data-id="${
                  character.name
                }" class="character__action btn talk">habla</button>
                <button data-id="${
                  character.name
                }" class="character__action btn die">muere</button>
              </div>
            </div>
          </div>
          <i class="emoji"></i>
        </div>
      </li>
    `;
  }
}
