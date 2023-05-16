import { Character } from './character.ts';

export class King extends Character {
  reignLength;
  warcry;
  constructor(name: string, family: string, age: number, reignLength: number) {
    super(name, family, age);
    this.reignLength = reignLength;
    this.warcry = 'You are all going to die!';
  }
}
