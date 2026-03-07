// Hoisting is JavaScript’s behavior of moving declarations to the top of their scope before execution.

//variables (var,let,const)
//functions

// ⚠️ Important: Only declarations are hoisted, not initializations.

// 1️⃣ Hoisting with var
console.log(a);
var a = 10;

// What JS sees internally
var b;
console.log(b);
b = 10;

// 2️⃣ Hoisting with let
//console.log(c); //ReferenceError: Cannot access 'c' before initialization
let c = 10;

// Why?
// let is hoisted
// But not initialized
// Access before declaration → TDZ

// 3️⃣ Hoisting with const
// console.log(d);
//const d = 10; //ReferenceError: Cannot access 'd' before initialization

// 4️⃣ Function Hoisting (Very Important)

// ✅ Works — fully hoisted
hello(); //apple
function hello() {
  console.log("apple");
}

// function expressions are not hoisted
greet(); // TypeError: greet is not a function
var greet = function () {
  console.log("greet");
};

// arrow functions are also not hoisted
showMe(); // ReferenceError: Cannot access 'showMe' before initialization
let showMe = () => {
  console.log("showme");
};

//Arrow vs function expression

// Arrow functions are shorter and use lexical this,
// while function expressions have their own this, arguments, and can be used as constructors.
