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
    const thumbsDown = document.querySelector(
      `.fa-thumbs-down.${character.name}`
    ) as Element;
    const thumbsUp = document.querySelector(
      `.fa-thumbs-up.${character.name}`
    ) as Element;
    if (picture) {
      picture.classList.add('dead');
      thumbsDown.classList.remove('hidden');
      thumbsUp?.classList.add('hidden');
    }
  }
};

export const makeCharacterSpeak = (
  element: HTMLButtonElement,
  characters: King | Squire | Kingshand | Swordsman | any
) => {
  const characterId = element.dataset.id;
  const textBox = document.querySelector('.comunications__text') as Element;
  const character = characters.find(
    (item: King | Squire | Kingshand | Swordsman) => item.name === characterId
  );
  if (character && character.alive) {
    textBox.textContent = character.letWarCryOut();
  }
};
