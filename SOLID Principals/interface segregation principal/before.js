// in other languages you define iterface and all the properties and methods of it
// then, every single class that implements this interface, needs to define all the methods of that interface
// so you may have classes that has no need to define all the methods of the interface only one method for example

// interface segregation principal is whenever you have interface you need every thing
// that implements this interface to use every single portion of the interface.

// in javascript instead of using interface , u can use classes and inheritance

// the problem here is that we have this Entity class that has properties and methods
// but for example Wall does not use all of them
// and also Turrent does not use all of them

class Entity {
  constructor(name, attackDamage, health) {
    this.name = name;
    this.attackDamage = attackDamage;
    this.health = health;
  }
  move() {
    console.log(`${this.name} moved`);
  }
  attack(targetEntity) {
    console.log(
      `${this.name} attacker ${targetEntity.name} for ${this.attackDamage} damage`
    );
    targetEntity.takeDamage(this.attackDamage);
  }
  takeDamage(amount) {
    this.health -= amount;
    console.log(`${this.name} has ${this.health} health remaining`);
  }
}

class Character extends Entity {}

class Wall extends Entity {
  constructor(name, health) {
    super(name, 0, health);
  }
  move() {
    return null;
  }
  attack() {
    return null;
  }
}
class Turrent extends Entity {
  constructor(name, attackDamage) {
    super(name, attackDamage, -1);
  }
  move() {
    return null;
  }
  attack() {
    return null;
  }
}

const turrent = new Turrent("Turrent", 5);
const character = new Character("Character", 3, 100);
const wall = new Wall("Wall", 200);

turrent.attack(character);
character.move();
character.attack(wall);
