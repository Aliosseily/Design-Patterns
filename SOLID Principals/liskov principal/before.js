// liskov principal
// any time you use one type of class, you need to be able to use all of the subclasses of that class

// according to this principal every subclass of a class must be able to make function makeBirdFly work
// Duck class is passing the liskov principal
// but Penguin class is not passing the liskov principal because penguin cannot fly and thus
// it works differrently from it's parent class which can fly

class Bird {
  fly() {
    console.log("I can fly");
  }
}
class Duck extends Bird {
  quack() {
    console.log("I can quack");
  }
}

class Penguin extends Bird {
  fly() {
    throw new Error("Cannot fly");
  }
  swim() {
    console.log("I can swim");
  }
}

function makeBirdFly(bird) {
  bird.fly();
}

const duck = new Duck();
const penguin = new Penguin();

makeBirdFly(duck);
makeBirdFly(penguin);
