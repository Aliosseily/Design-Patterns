//in javascript inheritace achieved by the keyword extends
// you use inheritance whenever you have generic class and then you want to create a new child
// class of tha generic class while still maintainnig it's
// features and behavior but a little bit extra

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  describe() {
    console.log(`My name is ${this.name} and I am ${this.age} year old`);
  }
}

class Programmer extends Person {
  constructor(name, age, yearsOfExperience) {
    super(name, age); // super call the constructor of the parent class (Person)
    this.yearsOfExperience = yearsOfExperience;
  }
  code() {
    console.log(`${this.name} is coding`);
  }
}

const programmers = [
  new Programmer("Jeff", 45, 12),
  new Programmer("Bob", 28, 6),
];

const developSoftware = (programmers) => {
  console.log(programmers);
  for (let programmer of programmers) {
    programmer.code();
  }
};
developSoftware(programmers);

const person1 = new Person("Ali", 25);
const programmer1 = new Programmer("Dom", 25, 4);

console.log(person1);
console.log(programmer1);
