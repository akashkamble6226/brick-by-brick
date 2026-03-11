// When people say JavaScript is single-threaded, they mean:

// JavaScript executes one task at a time using a single call stack.
// It cannot run multiple pieces of JavaScript code simultaneously on the same thread.

// Single-threaded → One thread executes code sequentially

// 2️⃣ Call Stack (Core Reason JS is Single-Threaded)
function first() {
  console.log("this is first");
}
function second() {
  first();
  console.log("this is second");
}

second();

// Call Stack

// second()
//   ↓
// first()
//   ↓
// console.log("First")
//   ↓
// console.log("Second")

// 3️⃣ Problem with Single Thread
// If JavaScript was purely synchronous, one heavy task would block everything.

// console.log("Start");

// while(true){
//     console.log("Hello")
// }

// console.log("End")

// The browser freezes because the loop blocks the single thread.

// 4️⃣ How JavaScript Handles Async Tasks

// JavaScript uses the Event Loop and Web APIs to handle asynchronous operations.

console.log("start");

setTimeout(() => {
  console.log("timer finshed!!!");
}, 1000);

console.log("end");

// Even though JS is single-threaded, async tasks run outside the main thread.

// FLOW

// Call Stack
//    ↓
// setTimeout → Web API
//    ↓
// Callback Queue
//    ↓
// Event Loop pushes it back to stack
