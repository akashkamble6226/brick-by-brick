// 1. What is a Prototype in JavaScript?
// In JavaScript, every object has a hidden property called [[Prototype]].

// This property points to another object, and JavaScript uses it to inherit properties and methods.

// 👉 In simple words:
// A prototype is an object from which other objects inherit properties.
// JavaScript uses this mechanism instead of classical inheritance (like Java or C++).
// _______________________

// 2. Why Prototypes Exist
// If we create many objects with the same methods, storing the methods inside every object wastes memory.

function Person(name) {
  this.name = name;
  this.sayHello = function () {
    console.log(`Hello - ${this.name}`);
  };
}

const o1 = new Person("Akash");
const o2 = new Person("Aju");

o1.sayHello();

// Problem ❌
// Every object has its own copy of sayHello().
// Memory inefficient.

// Solution is - using prototype
function Person2(name) {
  this.name = name;
}
Person2.prototype.sayHello2 = function () {
  console.log(`Hello - ${this.name}`);
};

const o3 = new Person2("Akash2");
const o4 = new Person2("Jimmy");

o3.sayHello2();

// Now ✔
// sayHello2() is stored only once
// All objects share it via prototype

// _________________________

// Prototype Chain

// When you access a property:
// p1.sayHello()

// JavaScript searches in this order:

// 1️⃣ Inside p1
// 2️⃣ Inside Person.prototype 
// 3️⃣ Inside Object.prototype
// 4️⃣ null

// This is called the Prototype Chain.

const obj = {};

console.log("Hey", obj.toString()); // valid
