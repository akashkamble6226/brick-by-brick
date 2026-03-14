// Event Loop in JavaScript (Interview Perspective)

// The Event Loop is one of the most important JavaScript concepts
// because it explains how asynchronous code works in a single-threaded language.

// Earlier you learned:

// JavaScript is single-threaded
// It uses callbacks and async operations

// The event loop is the mechanism that makes this possible.

// 1️⃣ Why Event Loop Exists

// JavaScript can execute only one task at a time because it has one call stack.

// But operations like:

// API calls
// Timers
// DOM events
// File reading

// take time.

// So the event loop helps JavaScript handle asynchronous operations without blocking the main thread.

// _____________________

// Components

// 1️⃣ Call Stack

// Executes JavaScript functions.

// 2️⃣ Web APIs

// Provided by browser/Node runtime.

// Handles async tasks like:

// setTimeout

// fetch

// DOM events.

// 3️⃣ Callback Queue

// Stores completed async callbacks.

// 4️⃣ Event Loop

// Moves callbacks from queue to call stack when stack is empty.

// Example

// console.log("Start");

// setTimeout(() => {
//   console.log("Callback");
// }, 2000);

// console.log("End");

// 4️⃣ Important Rule of Event Loop
// The event loop pushes a callback from the queue to the call stack only when the call stack is empty.

// ___________________________

// 5️⃣ Microtask Queue vs Callback Queue (Very Important)

// JavaScript actually has two queues.

// 1️⃣ Microtask Queue (Higher Priority)

// Used by:
// Promise.then
// catch
// queueMicrotask
// MutationObserver

// 2️⃣ Macrotask / Callback Queue

// Used by:
// setTimeout
// setInterval
// setImmediate
// DOM events

// Q

console.log("A");

setTimeout(() => {
  console.log("B");
}, 2000);

Promise.resolve()
  .then((res) => console.log("C"))
  .catch(() => console.log("E"));

console.log("D");
