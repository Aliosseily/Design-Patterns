// without null object pattern

class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

const users = [new User(1, "Ali"), new User(2, "Ossaily")];

function findUser(id){
    return users.find((user) => user.id === id);

}

var user = findUser(1)
if (user !== null && user.name !== null) {
  console.log("welcome " + user.name);
} else {
  console.log("welcome Guest");
}

// // Again in some other part of code
var user = findUser(2)
if (user !== null && user.name !== null) {
  console.log("welcome " + user.name);
} else {
  console.log("welcome Guest");
}
