// 1. What is Currying?

// Currying means:

// Converting a function that takes multiple arguments into a sequence of functions
// where each function takes one argument.

// Normal function

function normal(a, b, c, d) {
  return a + b + c + d;
}

function curr(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(curr(1)(2)(3));
// ____________________________

// 2. Arrow Function Version (Cleaner)

const add = (a) => (b) => (c) => a + b + c;
console.log(add(1)(2)(3))

// ________________________

// 3. Why Currying is Useful

// Currying helps with:

// 1️⃣ Function reuse
// 2️⃣ Partial application
// 3️⃣ Cleaner functional programming


// ________________________

// Advanced Infinite Currying Example

// A function that accepts infinite arguments.

function infiniteCurrSum(a){
    return function (b){
        if(b !== undefined){
            return infiniteCurrSum(a+b)
        }
        return a;
    }
}
console.log(infiniteCurrSum(1)(20)(898)())