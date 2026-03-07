// 1. Pass by Value

// Pass by value means:
// A copy of the value is passed to the function.
// So changes inside the function do not affect the original variable.

// Example (Primitive Types)

// Primitive types:
// string
// number
// boolean
// null
// undefined
// bigint
// symbol

// eg -

function updateValue(val) {
  val += 20;
  console.log(`Inner value  - ${val}`);
}

const num  = 10

updateValue(num);
console.log(`the num - ${num}`);

// Inside function: 30
// Outside function: 20

// ✔ Because only a copy of num was passed.

// ___________________________

// 2. Pass by Reference

// When objects or arrays are passed to a function, the reference (memory address) is passed.
// So changes inside the function affect the original object.


function update2(obj){
    obj.name = "Alex";
}

const obj = {name:"Akash"}

update2(obj)
console.log(obj)


// Because both point to the same memory location.

// Memory concept:

// person  ──► { name: "Akash" }
//                ↑
//              user
