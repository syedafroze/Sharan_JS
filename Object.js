//Object - > its a Data structure that stores data in form of key value pair

let Car = {
  name: "Civic",
  Color: "black",
  fuelType: "Petrol",
};

console.log(Car);

//for in

//
let keys = [];
let values = [];
for (let i in Car) {
  //  console.log(i, Car[i]);
  keys.push(i);
  values.push(Car[i]);
}
console.log(keys, values);

let keyArr = Object.keys(Car); //[]
let valuesArr = Object.values(Car);
console.log(keyArr, valuesArr);

//Object .assign

let user = {
  id: 3,
  name: "syed",
  city: "HYD",
};

let profession = {
  role: "developer",
  field: "IT",
  company: "IP",
};

Object.assign(user, profession);
console.log(user);

//let prof2 = profession;

let prof2 = Object.assign({}, profession);

//delete
console.log(prof2, profession);

delete profession.role;

console.log(prof2, profession);
