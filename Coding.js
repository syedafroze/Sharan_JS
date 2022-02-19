let arr = [3, 4, 2, 1, 5];
//[15,12,8,6,5] ;

let res2 = arr.map((val, index) =>
  arr.slice(index).reduce((num1, num2) => num1 + num2)
);
console.log(res2);

// let res = [];
// for (let j = 0; j < arr.length; j++) {
//   let sum = 0;
//   for (let i = j; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   res.push(sum);
// }
// console.log(res);

//reduce
// let result = arr.reduce((num1, num2) => num1 + num2);
// console.log(result);
/*
num1=3 num2=4  => 7
num1=7 num2 = 2 => 9
num1=9 num2= 1=> 10
num1=10 num2 =5 => 15 

*/
//[1,2,3,4,]
//[{}, {} ,{} ]

//          0  1  2  3  4  5  6  7
let arr2 = [3, 4, 2, 5, 1, 2, 4, 3];
//[5,1];

console.log(arr2.indexOf(5)); //3
console.log(arr2.lastIndexOf(5)); //3

let res3 = arr2.filter((val, index) => arr2.indexOf(val) == index);
console.log(res3);
// [3,4,2,5,1];

let res4 = arr2.filter(
  (val, index) => arr2.indexOf(val) == arr2.lastIndexOf(val)
);
console.log(res4);

let arr6 = [3, 4, 5, 6];
let arr7 = [6, 4, 7, 9];

//[4,6];

//indexOf lastIndexOf
