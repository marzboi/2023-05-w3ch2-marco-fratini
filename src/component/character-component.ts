import { King } from '../data/king';
import { Kingshand } from '../data/kingshand';
import { Squire } from '../data/squire';
import { Swordsman } from '../data/swordsman';
import { Component } from './component';

export class Character extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate(character: King | Squire | Kingshand | Swordsman) {
    const filterCharacters = (character: any) => {
      if ('reignLength' in character) {
        return `
         <li>Años de reinado: ${character.reignLength}</li>
        `;
      }

      if ('supports' in character) {
        return `
         <li>Asesora a: ${character.supports}</li>
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
          <img src="img/no-one.jpg" alt="Nombre y familia del personaje" class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title h4">Nombre y familia</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Edad: X años</li>
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
                <button class="character__action btn">habla</button>
                <button class="character__action btn">muere</button>
              </div>
            </div>
          </div>
          <i class="emoji"></i>
        </div>
      </li>
    `;
  }
}
