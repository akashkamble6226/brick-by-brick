// Memoization in JavaScript

// Memoization is a performance optimization technique.
// Memoization means storing the result of expensive function calls and
//  returning the cached result when the same inputs occur again.


// 1. Why Memoization is Needed

// Imagine a function that performs heavy computation.
function square(n) {
  console.log("calculating.....");
  return n * n;
}

// square(5);
// square(5);
// square(5);

// Even though the input is the same, it recalculates every time.
// This is inefficient.

// _______________________________


// 2. Memoization Solution
// We store the previous result.

function memoSquare(){
    let cache = {};
    return function (n){
        if(cache[n]){
            console.log("return from cache!!!");
            return cache[n];
        }

        console.log("calculating.....")
        const res = n * n;
        cache[n] = res;
        return res; 
    }
}

const f = memoSquare();
f(5);
f(5);
f(6);

// Now the function calculates only once per input.

// Memoization uses closures.
// This variable persists in memory because of closure.



// Interview questions 

// 
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

// output will be - 
// 5
// 5
// 5
// 5
// 5

// Why does this happen?
// 1️⃣ var is function scoped, not block scoped.

// There is only one variable i shared by all iterations of the loop.

// 2️⃣ setTimeout is asynchronous

// The loop runs immediately, and the setTimeout callbacks execute after 1 second.

// By the time they run, the loop has already finished.

// After the loop:

// i = 5

// 3️⃣ All callbacks reference the same i

// So each callback prints the final value.

// Visualization:

// Loop finishes
// i = 5

// setTimeout callbacks run
// print 5
// print 5
// print 5
// print 5
// print 5

// How to Fix It

// Use let instead of var.

// for (let i = 0; i < 5; i++) {
//   setTimeout(() => console.log(i), 1000);
// }
// Output
// 0
// 1
// 2
// 3
// 4

// Why?

// Because let is block scoped, and each iteration gets its own copy of i.