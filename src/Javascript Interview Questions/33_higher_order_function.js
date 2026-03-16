// A Higher Order Function (HOF) in JavaScript is a function that either:

// 1️⃣ Takes another function as an argument, or
// 2️⃣ Returns another

// 1️⃣ Takes another function as an argument

function showName(name, callback) {
  callback(name);
}

function display(name) {
  console.log(name);
}
showName("akash", display);

// 2️⃣ Returns another

function fun1(a) {
  return function fun2(b) {
    return a + b;
  };
}

const f = fun1(2);
const f2 = f(3)
console.log(f2)

// ________________________________

// 3️⃣ Real-world Examples in JavaScript

// Many built-in functions are Higher Order Functions.
// 1) map
// 2) filter
// 3) foreach
// 4) setTimeout
// 5) setInterval

// _______________________________

// 4️⃣ Why Higher Order Functions are useful

// They help with:

// ✔ Code reusability
// ✔ Functional programming
// ✔ Cleaner code
// ✔ Abstraction

// Example:

// Instead of writing loops repeatedly, we use map, filter, etc.

