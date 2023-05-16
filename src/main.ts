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

const joffrey = kingTemplate(characterList[0], 'img/joffrey.jpg');

const jamie = swordsmanTemplate(characterList[1], 'img/jaime.jpg');

const daenerys = swordsmanTemplate(characterList[2], 'img/daenerys.jpg');

const tyrion = kingshandTemplate(characterList[3], 'img/tyrion.jpg');

const broon = squireTemplate(characterList[4], 'img/bronn.jpg');

html.innerHTML = joffrey + jamie + daenerys + tyrion + broon;

const registerEventListers = () => {
  const buttons = document.querySelectorAll('.btn');
  const speakText = document.querySelector('.comunications__text');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const warcry = characterList[0].letWarCryOut();
      speakText.textContent = warcry;
    });
  });
};

registerEventListers();
