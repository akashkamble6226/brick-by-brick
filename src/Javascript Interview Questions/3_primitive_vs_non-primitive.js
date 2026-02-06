// What are primitives? (interview definition)
// 👉 Primitive values are immutable and stored by value.

// JavaScript Primitive Types (7)
// Type	Example
// string	"hello"
// number	10, 3.14
// boolean	true, false
// undefined	let a;
// null	let b = null;
// symbol	Symbol("id")
// bigint	123n

//example
let a = 10;
let b = a;

b = 30;
console.log(a);
console.log(b);

// Key properties
// Immutable (cannot be changed)
// Stored in stack
// Copied by value

// ________________________________________

// What are non-primitives?
// 👉 Non-primitive values are mutable and stored by reference.

// Key properties

// Mutable
// Stored in heap
// Variables store a reference (address)

// Example
let obb1 = { type: "human" };
let obb2 = obb1;
obb2.type = "animal";
console.log(obb1, obb2);

// Types

// Object
// Array
// Function
// Date, Map, Set, etc.

let obj = {
  type: "simple",
  isTesting: true,
  list: ["apple", "banana"],
};

let arr = ["Harry", "Harmoine", "Ron"];

let fun = () => {
  console.log("You raised him, so that you can k*ll him like a pig");
};

let d = new Date();
console.log(d.getFullYear());

let mp = new Map();
mp.set(true, "harry");
console.log(mp.get(true));
console.log(mp);

let set = new Set([1, 2, 3, 2, 3]);
set.add(6);
set.delete(1);
console.log(set);

// Interview Question - 1

let abc = 10;
let bcd = 10;
console.log("Primitiv", abc === abc);

let abcc = { pro: true };
let bccv = { pro: true };

console.log("Non-primitiv", abcc === bccv);

// 👉 Because different references, even if content is same.

// Interview Question 2

console.log(typeof null); // "object" 😬

// 👉 This is a JavaScript bug, kept for backward compatibility.

function test() {}
console.log(typeof test); // "function"
// But internally → object

// Interview Question 3
let strr = "hello";
// strr[0] = "H";
console.log(strr); // TypeError: Cannot assign to read only property '0' of string 'hello'
// 👉 Strings are immutable

let arr3 = ["H", "E", "L", "L", "O"];
arr3[0] = "h";
console.log(arr3);

// Interview Question 4

let objjj = { type: "Human" };
let objjj2 = objjj;

objjj2 = { type: "animal" }; // new object is assigned 
objjj2.type = "animal2" // mutatating the old object

console.log(objjj2);
