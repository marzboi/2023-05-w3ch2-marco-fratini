/* eslint-disable no-new */
import { createCharacterList } from './character-list.ts';
import { List } from './component/list.ts';
import { Character } from './component/character-component.ts';

import './style.css';
import { Comunication } from './component/comunication.ts';

const characterList = createCharacterList();

new List('.app');
new Character('.characters-list');
new Comunication('body');
