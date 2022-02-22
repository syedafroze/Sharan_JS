// function CreateUser(name, id, country) {
//   return {
//     name: name,
//     id: id,
//     country: country,
//   };
// }//factory functions

// function CreateUser(name, id, country) {
//   this.name=name;
//   this.id=id;
//   this.country = country;
// }//constructor

class CreateUser {
  constructor(name, id, country) {
    this.name = name;
    this.id = id;
    this.country = country;
  }

  getName() {
    return this.name;
  }
}

let user = new CreateUser("syed", "5", "India");

let user2 = new CreateUser("Amit", "6", "India");

let user3 = new CreateUser("Dennis", "7", "US");

console.log(user.getName(), user2.getName(), user3.getName());

//class inheritance

class Address {
  constructor(city, country) {
    this.cit = city;
    this.country = country;
  }
}

class User extends Address {
  constructor(name, id, city, country) {
    super(city, country);
    this.name = name;
    this.id = id;
  }
}

let newUser = new User("syed", 5, "hyd", "India");
console.log(newUser);


