// this code here passing liskov principal because
// every subclass of SwimmingBird is able to call makeSwimmingBirdSwim function
// and every subclass of FlyingBird is able to call makeFlyingBirdFly function

//summary
// liskov principal is that if you have a function that accepts a class, every single subclass
// of that class must also be able to enter that function and work

class FlyingBird {
  fly() {
    console.log("I can fly");
  }
}
class SwimmingBird {
  swim() {
    console.log("I can swim");
  }
}
class Duck extends FlyingBird {
  quack() {
    console.log("I can quack");
  }
}

class Penguin extends SwimmingBird {}

function makeFlyingBirdFly(bird) {
  bird.fly();
}

function makeSwimmingBirdSwim(bird) {
  bird.swim();
}

const duck = new Duck();
const penguin = new Penguin();

makeFlyingBirdFly(duck);
makeSwimmingBirdSwim(penguin);
