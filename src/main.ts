import { createCharacterList } from './characterList.ts';
import {
  kingTemplate,
  kingshandTemplate,
  squireTemplate,
  swordsmanTemplate,
} from './charactersTemplate.ts';
import './style.css';

const characterList: any = createCharacterList();

const html = document.querySelector<HTMLDivElement>('.characters-list')!;

const joffrey = kingTemplate(characterList[0]);

const jamie = swordsmanTemplate(characterList[1]);

const daenerys = swordsmanTemplate(characterList[2]);

const tyrion = kingshandTemplate(characterList[3]);

const broon = squireTemplate(characterList[4]);

html.innerHTML = joffrey + jamie + daenerys + tyrion + broon;
