// with null object pattern

class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

class NullUser {
  constructor() {
    this.id = -1;
    this.name = "Guest";
  }
}

const users = [new User(1, "Ali"), new User(2, "Ossaily")];

function findUser(id) {
  const user = users.find((user) => user.id === id);
  if (user) {
    return user;
  } else {
    return new NullUser();
  }
}

var user = findUser(1);
console.log("Welcome " + user.name); // Welcome Ali

var user = findUser(2);
console.log("Welcome " + user.name); // Welcome Ossaily

var user = findUser(3);
console.log("Welcome " + user.name); // Welcome Guest
