class Address {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

class User {
  constructor(name) {
    this.name = name;
  }
}

// create new builder class UserBuilder
// the constructor well take only the required field to creat a user (in por example name only)

class UserBuilder {
  constructor(name) {
    this.user = new User(name);
  }

  setAge(age) {
    this.user.age = age;
    return this; // return this for chaining methds
  }

  setPhone(phone) {
    this.user.phone = phone;
    return this; // return this for chaining methds
  }

  setAddress(address) {
    this.user.address = address;
    return this; // return this for chaining methds
  }

  build() {
    return this.user;
  }
}

// if we didnot return this in every method, the we should put this in a new line instead of chain

const user = new UserBuilder("Bob").build();
console.log(user);
/*
Output
User { name: 'Bob' }
*/

const user2 = new UserBuilder("Bob").setAge(10).build();
console.log(user2);
/*
Output
User { name: 'Bob', age: 10 }
*/

const user3 = new UserBuilder("Bob")
  .setAge(10)
  .setPhone("123456789")
  .setAddress(new Address(1, "Main"))
  .build();
console.log(user3);
/*
Output
User {
  name: 'Bob',
  age: 10,
  phone: '123456789',
  address: Address { zip: 1, street: 'Main' }
}
*/
