
// with inheritance you describe exactly what objects are and how they are related to each other
// with composition you describe what an object can do

function swimmer({ name }) {
  return {
    swim: () => console.log(`${name} swam`),
  };
}

function flyer({ name }) {
  return {
    fly: () => console.log(`${name} flew`),
  };
}

function attakerAndWalker({ name }) {
  return {
    attack: () => console.log(`${name} attacked`),
    walk: () => console.log(`${name} walked`),
  };
}

function swimmingMonsterCreator(name) {
  const monster = { name: name };
  return {
    ...monster,
    ...attakerAndWalker(monster),
    ...swimmer(monster),
  };
}

function flyingSwimmingMonsterCreator(name) {
  const monster = { name: name };

  return {
    ...monster,
    ...attakerAndWalker(monster),
    ...swimmer(monster),
    ...flyer(monster),
  };
}

const obj = new flyingSwimmingMonsterCreator("Monster");
obj.attack();
obj.walk();
obj.swim();
obj.fly();
