// polymorphism is the act of redefining a method inside a derived child class of a parent
// polymorphism is done by overriding the method of parent class inside the chaild class

class Animal {
  constructor(name) {
    this.name = name;
  }
  makeSound() {
    console.log(`Generic animal sound!!`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  makeSound() {
    // this is common practice, use the generic behavior and then adding
    //on special functionality for the special derived child class
    super.makeSound(); // this will call the generic makeSound method in parent class
    console.log(`Woof! Woof!`);
  }
}

const a1 = new Animal("Dom");
const a2 = new Dog("Dom");
a1.makeSound();
a2.makeSound();
