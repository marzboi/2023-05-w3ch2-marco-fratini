import { Character } from './character.ts';
import { King } from './king.ts';
import { Swordsman } from './swordsman.ts';

export class Kingshand extends Character {
  supports;
  warcry;
  constructor(
    name: string,
    family: string,
    age: number,
    supports: Swordsman | King
  ) {
    super(name, family, age);
    this.supports = supports;
    this.warcry = "I don't know why, but I think I will die soon";
  }
}
