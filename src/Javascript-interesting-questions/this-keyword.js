// 1 Global scope
// In node context, this keyword
console.log(this);
// output will be undefined or {}

// in browser
console.log(this);
// output - this will point to window object

// _______________

// 2) function scope
const test = () => {
  console.log(this);
};
test();

// object
const obj = {
  name: "T",
  test: () => {
    console.log(this);
  },
};

obj.test();
