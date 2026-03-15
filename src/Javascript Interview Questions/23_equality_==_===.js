// 1. What is Equality in JavaScript?

// Equality operators are used to compare two values.

// JavaScript provides two main equality operators:

// ==   (Loose Equality)
// ===  (Strict Equality)

// ___________________________________________

// 2. Loose Equality (==)

// == compares values only, not types.

// If the types are different, JavaScript performs Type Coercion automatically.

console.log(5 == "5"); // true

// why?

// JavaScript converts:
// "5" → 5
// Then compares:
// 5 == 5

// ________________________________

// 3. Strict Equality (===)
// === compares both value AND type.
// No type conversion happens.

console.log(5 === "5"); // false

// ______________________________________

// Special Case in JavaScript
// console.log(NaN === NaN);

// Output

// false

// Because NaN is never equal to anything, even itself.
