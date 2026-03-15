// Type coercion vs conversion in js

// Type Conversion means manually converting one data type to another.

// eg -

let num = Number("10");
console.log(num, typeof num);

// String Conversion
const str = String(100);
console.log(str, typeof str);

// Boolean Conversion
Boolean(1); // true
Boolean(0); // false
Boolean(""); // false
Boolean("hi"); // true

// _______________________________________

// Type Coercion means:
// JavaScript automatically converts one data type to another during an operation.
const e1 = "5" + 2;
console.log(e1, typeof e1); // "52

const e2 = "10" - 5;
console.log(e2, typeof e2); //5

// ________________________________________

// Operators That Cause Type Coercion

// + (Addition)
// If one value is string, result becomes string.

// -, *, /
// These convert values to number.

// _________________________________________________

// Famous Interview Examples
console.log(1 + "2" + "3"); //"123"

console.log("5" - "2"); //3

console.log("5" + 2 - 1); //51

console.log(true + 1); // 2

console.log([] + []); // ""
// Because arrays convert to empty string.

console.log([] + {}); //"[object Object]"
// Because:
// [] → ""
// {} → "[object Object]"