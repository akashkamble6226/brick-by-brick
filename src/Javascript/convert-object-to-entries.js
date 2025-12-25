const obj = {
  name: "akash",
  sal: "89k",
};

console.log(Object.entries(obj));

// ----------- vice-versa

const entries = [
  ["name", "akash"],
  ["Sal", "89k"],
];

console.log(Object.fromEntries(entries))
