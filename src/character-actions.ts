import { King } from './data/king';
import { Kingshand } from './data/kingshand';
import { Squire } from './data/squire';
import { Swordsman } from './data/swordsman';

export const killCharacter = (
  element: HTMLButtonElement,
  characters: King | Squire | Kingshand | Swordsman | any
) => {
  const characterId = element.dataset.id;
  const character = characters.find(
    (item: King | Squire | Kingshand | Swordsman) => item.name === characterId
  );
  if (character) {
    character.alive = false;
  }
};

export const makeCharacterSpeak = (
  element: HTMLButtonElement,
  characters: King | Squire | Kingshand | Swordsman | any
) => {
  const characterId = element.dataset.id;
  const textBox = document.querySelector('.comunications__text');
  const character = characters.find(
    (item: King | Squire | Kingshand | Swordsman) => item.name === characterId
  );
  if (character && textBox instanceof HTMLElement) {
    textBox.textContent = character.name;
  }
};
