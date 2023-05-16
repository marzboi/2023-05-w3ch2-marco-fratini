/* eslint-disable no-new */
import { createCharacterList } from './character-list.ts';
import { List } from './component/list.ts';
import { Character } from './component/character-component.ts';

import './style.css';
import { Comunication } from './component/comunication.ts';
import { killCharacter, makeCharacterSpeak } from './character-actions.ts';

const characterList = createCharacterList();

new List('.app');
characterList.forEach((item) => {
  new Character('.characters-list', item);
});

new Comunication('body');

const buttons = document.querySelectorAll('.btn') as any;

buttons.forEach((button: HTMLButtonElement) => {
  button.addEventListener('click', (event: Event) => {
    const element = event.target as HTMLButtonElement;
    if (element.classList.contains('die')) {
      killCharacter(element, characterList);
    } else {
      makeCharacterSpeak(element, characterList);
    }
  });
});
