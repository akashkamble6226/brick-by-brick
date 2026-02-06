// 👉 When a variable is not found in the current scope,
// JavaScript looks for it in its outer (parent) scopes step by step.
// This lookup process is called Scope Chaining.

// simple example
let a = 10;

function outer() {
  let b = 20;

  function inner() {
    let c = 30;
    console.log(a, b, c);
  }

  inner();
}

outer();


// 👉 JS always searches bottom → up, never the other way.


// 👉 Scope is decided by where functions are written, not where they are called.
// here x will be 100
let x = 100;

function foo(){
    console.log(x)
}

function foo2(){
    let x = 10;
    foo();
}

foo2()


// scope chaining stops only in below two conditions
// 1) either it found the variable
// 2) either it dont found till top (global) level(i.e - // ReferenceError)

// mini-challenge

let xv = 200;
function s(){
    let xv = 20;

    function t(){
        console.log(xv);
    }

    return t;
}

const j = s();
j(); // ans will be 20