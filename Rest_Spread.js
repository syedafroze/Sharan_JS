//Destructruing - extracting array or Object vvalues into indivual varibales

let arr = [4, 5, 6, 7];

// let num1 = arr[0];
// let num2 = arr[1];

let [num1, , num2] = [4, 5, 6, 7, 8, 9, 0, 1];

let user = {
  name: "syed",
  id: 9,
  city: "Hyd",
};

let { name, city } = user;
console.log(name, city);

//rest and Spread     ... (operator)

//rest is used to collect individual values into array .
//spread is used to unpack array / object values

let arr2 = [4, 5, 6, 7];

let [value1, ...value] = arr2;
console.log(value1, value); //

let arr3 = [2, 3, ...arr2]; // [ 2,3,[4,5,6,7]]
//[]
console.log(arr3);
