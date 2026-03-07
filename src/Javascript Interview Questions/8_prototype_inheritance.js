// prototype Vs __proto__  (Very Common Interview Question)

// prototype
// Exists on constructor functions

function Person() {}
console.log(Person.prototype);

// _______________________

// proto
// Exists on objects
const p = new Person();
console.log(p.__proto__ === Person.prototype); // true


// So internally:

// p.__proto__  →  Person.prototype


// ____________________________

// Example of Prototype Inheritance

function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(this.name + " makes a sound");
};

function Dog(name) {
  this.name = name;
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.bark = function () {
  console.log(this.name + " barks");
};

const dog1 = new Dog("Tommy");

dog1.speak();
dog1.bark();


// Inheritance chain:

// dog1
//  ↓
// Dog.prototype
//  ↓
// Animal.prototype
//  ↓
// Object.prototype
//  ↓
// null
