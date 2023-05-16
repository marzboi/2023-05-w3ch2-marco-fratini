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
    const picture = document.querySelector(`.${character.name}`) as Element;
    if (picture) {
      picture.classList.add('dead');
    }
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
  if (character && character.alive) {
    textBox.textContent = character.letWarCryOut();
  }
};
