// Builder pattern
// useful when you naeed to create objects that have many optional and required fields.

// name field id required
// phone, age, address fields are optional

class Address {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

class User {
  constructor(name, phone, age, address) {
    this.name = name;
    this.phone = phone;
    this.age = age;
    this.address = address;
  }
}



const user = new User("Bob");
console.log(user);
/*
Output:
User {
  name: 'Bob',
  phone: undefined,
  age: undefined,
  address: undefined
}
*/


// if we want to add address to user, we have to add undefined, undefined to add the address
// if we have like 20 fields before the address then we have to add 20 undefined to reach the adrress field
// you will be confused also, which undefined related to what field 
const user2 = new User("Bob", undefined, undefined, new Address(1,"Main"));
console.log(user2)
/*
Output:
User {
  name: 'Bob',
  phone: undefined,
  age: undefined,
  address: Address { zip: 1, street: 'Main' }
}
*/
