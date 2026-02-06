// Key points

// 1️⃣ var
// Function scoped
// Can be re-declared
// Can be re-assigned
// Hoisted (initialized as undefined)

var a = 10;
// var a = 20;
a = 40;
console.log(a);

let isTrue = true;
if (isTrue) {
  var x = 10;
}

console.log(x); // 5 😬

// 2️⃣ let

// Key points
// Block scoped

// 3️⃣ const
// Key points
// Block scoped

// Interview questions
const obj = { type: "human" };
obj.type = "Animal";
// obj = {} 👉 const protects the reference, not the object.

//Hoisting comparision
console.log("val", val); // undefined
var val = 10;

// console.log("val2", val2) //ReferenceError: Cannot access 'val2' before initialization
let val2 = 20;

// console.log("val2", val3) //ReferenceError: Cannot access 'val2' before initialization
const val3 = 20;


// Question 

const arr = [1,2,3,4]
arr.push(5)
console.log(arr)