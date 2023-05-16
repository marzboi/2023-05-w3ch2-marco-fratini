/* eslint-disable no-new */
import { createCharacterList } from './character-list.ts';
import { List } from './component/list.ts';
import { Character } from './component/character-component.ts';

import './style.css';
import { Comunication } from './component/comunication.ts';

const characterList = createCharacterList();
console.log(characterList);

new List('.app');
characterList.forEach((item) => {
  new Character('.characters-list', item);
});

new Comunication('body');
