//👉 Scope decides where a variable can be accessed in your code.

// JS mainly has 3 scopes:
// Global Scope
// Function Scope
// Block Scope

// 1) Global Scope - A variable declared outside any function or block is global and can be accessed anywhere.

let a = 10;
function test() {
  console.log(a); // accessible inside
}
test();
console.log(a); // accessible outside

// tricky question
// function test2(){
//     b = 20; //(in modern browser it will show refrence error but) it will become global by default
// }
// test();
// console.log(b) // 20

// 2) Function scope - Variables declared inside a function are accessible only inside that function.

function test3() {
  var x = 10;
  let y = 20;
  const z = 30;
}

// console.log(x); // Refrence error: x is not defined
// console.log(y);
// console.log(z);

// IMP point -
// var is function scoped
// let and const are block scoped

function test4() {
  const data = true;
  if (data) {
    var m = 10;
    let n = 20;
    let q = 30;
  }

  console.log("val", m);
}

test4();

// 3) Block scope - Variables declared with let or const inside {} are accessible only inside that block.
const stat = true;
if (stat) {
  let x = 10;
  const y = 20;
}
// console.log(x); // ❌ Error
// console.log(y); // ❌ Error

// ******INTERVIE_QUESTIONS******
// Q1
let s = 10;

function test5() {
  let s = 20;
  console.log("Q1", s);
}

test5();
console.log("Q1", s);

// Q2
for (var i = 0; i < 3; i++) {
  console.log("inside var", i); // 0 1 2
}
console.log("the var", i); // 3

for (let i = 0; i < 3; i++) {
  i;
}
console.log("the let", i); // ReferenceError: i is not defined
