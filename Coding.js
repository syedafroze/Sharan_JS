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

//fetch rest api - json

//json

/*
[
{
  "name":"syed",
   "id":"2"
},
{
  "name":"syed",
   "id":"2"
}]

*/

//array and Object

let duplicatesArr = [3, 4, 5, 3, 5, 1, 2, 3];

let obj = {};
//declarative  , imperative
for (let i = 0; i < duplicatesArr.length; i++) {
  if (obj[duplicatesArr[i]] == undefined) {
    obj[duplicatesArr[i]] = 1;
  } else {
    obj[duplicatesArr[i]]++;
  }
}
console.log(obj);

//

let result2 = duplicatesArr.reduce((acc, value) => {
  if (acc[value] == undefined) {
    acc[value] = 1;
  } else {
    acc[value]++;
  }
  return acc;
}, {});
console.log(result2);

let result3 = duplicatesArr.reduce((acc, value) => {
  acc[value] = acc[value] ? acc[value] + 1 : 1;
  return acc;
}, {});
console.log(result3);


let user = [
  {
    name: "syed",
    id: 3,
    city: "hyderabad",
  },
  {
    name: "Vikas",
    id: 4,
    city: "hyderabad",
  },
  ,
  {
    name: "Sharan",
    id: 5,
    city: "Banglore",
  },
  {
    name: "Swathi",
    id:6,
    city: "Banglore",
  },
];

// filter out user belonging to hyderbad 
///[syed, vikas] //filter and map 
//{hyderabad :[syed,vikas],bangolre : ["sharan", "swathi"]}


let num3 = 1;
console.log(num3--, num3); //1 , 2
/*
obj[3] = 2
{
  1:1,
  2:1,
  3:3,
  4:1
  5:2
}

*/
