// 1️⃣ What is Variable Shadowing?

// Variable Shadowing happens when a variable declared in an inner scope 
// has the same name as a variable in an outer scope.

// The inner variable hides (shadows) the outer variable.

let a = 10;

function showName () {
    let a = 20
    console.log(a)
}
// showName()
// console.log(a)

// ____________________________
// Because {} here is just a block, and JavaScript executes code top to bottom.
{
    console.log("Hello there!!!!")
}

console.log("Hello there 2")

// ____________________________

let x = 5;

{
  let x = 10;
  console.log(x);
}

console.log(x);

// 10
// 5

// ___________________________

// 6️⃣ Illegal Shadowing (Important Interview Topic)

// Sometimes shadowing is not allowed.

// Example:

// let a = 10;

// {
//   var a = 20;
// }

// This will throw an error.

// Error:

// SyntaxError: Identifier 'a' has already been declared

// Reason:

// let → block scope
// var → function/global scope

// var tries to redeclare a in the same scope.

// ________________________

// 7️⃣ Legal Shadowing

// This is valid:

// var a = 10;

// {
//   let a = 20;
//   console.log(a);
// }

// console.log(a);

// Output

// 20
// 10

// Because:

// let → block scope

// So it does not affect the outer variable.