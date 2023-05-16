import { Character } from './character.ts';
import { King } from './king.ts';
import { Swordsman } from './swordsman.ts';

export class Kingshand extends Character {
  support;
  warcry;
  constructor(
    name: string,
    family: string,
    age: number,
    support: Swordsman | King
  ) {
    super(name, family, age);
    this.support = support;
    this.warcry = "I don't know why, but I think I will die soon";
  }
}
