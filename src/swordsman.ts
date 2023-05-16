import { Character } from './character.ts';

export class Swordsman extends Character {
  weapon;
  dexterity;
  warcry;
  constructor(name: string, family: string, age: number, weapon: string) {
    super(name, family, age);
    this.weapon = weapon;
    this.dexterity = Math.floor(Math.random() * 11);
    this.warcry = 'I shall strike first, ask questions later';
  }
}
