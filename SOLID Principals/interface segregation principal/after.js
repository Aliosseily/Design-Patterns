// each object or class only implements the information that it can use, and does not
// implements any thing else that it connot use.
// and this is the main point to the inteface segregation principal.

class Entity {
  constructor(name) {
    this.name = name;
  }
}

const mover = {
  move() {
    console.log(`${this.name} moved`);
  },
};

const attacker = {
  attack(targetEntity) {
    console.log(
      `${this.name} attacke ${targetEntity.name} for ${this.attackDamage} damage`
    );
    targetEntity.takeDamage(this.attackDamage);
  },
};

const hasHealth = {
  takeDamage(amount) {
    this.health -= amount;
    console.log(`${this.name} has ${this.health} health remaining`);
  },
};

class Character extends Entity {
  constructor(name, attackDamage, health) {
    super(name);
    this.attackDamage = attackDamage;
    this.health = health;
  }
}

Object.assign(Character.prototype, mover);
Object.assign(Character.prototype, attacker);
Object.assign(Character.prototype, hasHealth);

class Wall extends Entity {
  constructor(name, health) {
    super(name);
    this.health = health;
  }
}
Object.assign(Wall.prototype, hasHealth);

class Turrent extends Entity {
  constructor(name, attackDamage) {
    super(name);
    this.attackDamage = attackDamage;
  }
}

Object.assign(Turrent.prototype, attacker);

const turrent = new Turrent("Turrent", 5);
const character = new Character("Character", 3, 100);
const wall = new Wall("Wall", 200);

turrent.attack(character);
// turrent.move(); will throw an error, because we assign only attaker functionality

character.move();
character.attack(wall);
