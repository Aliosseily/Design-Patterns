class Address {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

// name field is required
// phone, age, address fields are optional

// pass the optional fields as an object

// you can set default value for these optional parameters if you want like we did in phone
// if ypu provide phone value it will take itm else it wll take the defaull vlue

class User {
  constructor(name, { phone = "123456", age, address } = {}) {
    this.name = name;
    this.phone = phone;
    this.age = age;
    this.address = address;
  }
}

const user = new User("Bob");
console.log(user);
/*
Output
User {
  name: 'Bob',
  phone: undefined,
  age: undefined,
  address: undefined
}
 */

const user2 = new User("Bob", { age: 10 });
console.log(user2);
/*
Output
User {
  name: 'Bob',
  phone: undefined,
  age: 10,
  address: undefined
}
 */

const user3 = new User("Bob", { age: 10, address: new Address(1,"Main") });
console.log(user3);
/*
Output
User {
  name: 'Bob',
  phone: '123456',
  age: 10,
  address: Address { zip: 1, street: 'Main' }
}
 */