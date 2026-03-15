// IIFE = Immediately Invoked Function Expression

// It is a function that runs immediately after it is defined.

(function greet() {
  var a = 10; // due to IIFE even the varible is in global scope we still cannot access outside
  console.log("Hello there!!!");
})();

// console.log(a) // ReferenceError: a is not defined

// a → private variable
// It cannot be accessed outside.

// ______________________

// With Parameters
(function(name){
   console.log("Hello " + name);
})("Akash");

// ____________________________

// Why Parentheses Are Required

// This is a common interview question.

// Incorrect:

// function(){
//  console.log("Hello")
// }();

// This gives error because:
// JavaScript thinks it is a function declaration
// But IIFE must be a function expression.
// So we wrap it in parentheses:
