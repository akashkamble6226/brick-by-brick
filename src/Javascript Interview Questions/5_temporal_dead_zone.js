// Temporal dead zone

// TDZ means you cannot use a let or const variable before it is declared.

console.log(A); //ReferenceError: Cannot access 'A' before initialization
let A = 10;

// Why error?

// A exists in memory (hoisted)
// But it is not initialized yet
// Accessing it before declaration → TDZ

// TDZ exists to prevent bugs caused by accessing variables before they are declared.
