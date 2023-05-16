export class Character {
  static series = 'Game of Thrones';

  name;
  family;
  age;
  alive;
  warcry;

  constructor(name: string, family: string, age: number) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.alive = true;
    this.warcry = '';
  }

  toDie() {
    this.alive = false;
  }

  letWarCryOut() {
    return this.warcry;
  }
}
