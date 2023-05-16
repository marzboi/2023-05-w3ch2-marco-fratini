import { Character } from './character';
import { King } from './king';
import { Kingshand } from './kingshand';
import { Squire } from './squire';
import { Swordsman } from './swordsman';

export const createCharacterList = () => {
  const joffrey = new King('Joffrey', 'Baratheon', 18, 3);
  const jamie = new Swordsman('Jamie', 'Lannister', 33, 'Espada');
  const daenerys = new Swordsman('Daenerys', 'Targaryen', 32, 'Dragones');
  const tyrion = new Kingshand('Tyrion', 'Lannister', 35, daenerys);
  const broon = new Squire('Bronn', 'Unknown', 40, jamie, 1);

  const characterList = [];

  characterList.push(joffrey);
  characterList.push(jamie);
  characterList.push(daenerys);
  characterList.push(tyrion);
  characterList.push(broon);

  return characterList;
};
