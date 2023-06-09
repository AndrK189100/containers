export default class Character {
  constructor(name) {
    this.health = 100;
    this.level = 1;
    this.type = 0;
    this.attack = 0;
    this.defence = 0;

    if (typeof (name) === 'string' && (name.length >= 2 && name.length <= 10)) {
      this.name = name;
    } else {
      throw new Error('Name wrong');
    }
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('pers Died');
    }
    this.level += 1;
    this.attack += (this.attack * 20) / 100;
    this.defence += (this.defence * 20) / 100;
    this.health = 100;
  }

  damage(points) {
    if (this.health <= 0) {
      throw new Error('pers Died');
    }

    this.health -= points * (1 - this.defence / 100);
  }
}
