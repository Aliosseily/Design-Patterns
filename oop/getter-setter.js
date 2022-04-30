// getters and setters are used to define methods on class which are used as if they are properties
// they look like properties but they actually methods of that class.
// you treat them like normal prpoerty of the class.

// setters are used to set the peroperties from outside the class.


// static methods does not require an instance of the class to be created in order to be used
// alot of static methods are called helper methods, so they are like utilities that are 
// relevant to that class but not really

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  }

  set fullName(value) {
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }

  static sayHello(){
      console.log(`Hello person`);
  }
}

const person1 = new Person("Ali", "Ossaily");
person1.fullName = "Test Tesssst"; // setter
person1.fullName; // getter

Person.sayHello();


