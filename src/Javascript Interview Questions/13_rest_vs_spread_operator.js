// Both Rest (...) and Spread (...) use the same syntax (...),
// but they behave differently depending on where they are used.

// 1. Spread Operator

// Spread operator expands elements.

// It spreads or expands iterable values like arrays, objects, or strings.

// eg
const arr = [1, 2, 3];
const arr2 = [...arr, 4, 5, 6];
console.log(arr2);

// Example 2 – Copy Array
const arr3 = [...arr2];
console.log(arr3);

// Example 3 – Objects

const akash = {
  name: "Akash",
  id: 1334,
};

const stud = {
  ...akash,
  isEmp: true,
};
console.log(stud);

// Example 4 – Function Arguments

function sum(a, b, c) {
  return a + b + c;
}

const ar = [1, 2, 3];
console.log(sum(...ar));

// ____________________________________

// 2. Rest Operator

// Rest operator collects multiple values into a single array.

// It gathers remaining arguments.\

// Example 1 – Function Parameters

function nums(...arg) {
  console.log(arg);
}

nums(1, 2, 3, 6, 6, 8);

// Example 2 – Sum of numbers

function sum3(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}

console.log(sum3(1, 2, 3, 4));
