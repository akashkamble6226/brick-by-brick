// What happens if a microtask keeps adding new microtasks infinitely?

// Answer:

// The event loop processes all microtasks before moving to macrotasks. 
// If a microtask continuously adds new microtasks, the queue never becomes empty, 
// causing microtask starvation and blocking the event loop. This can freeze the browser.

// How to handle it?

// Answer:
// Move the repeated task to the macrotask queue using setTimeout or similar mechanisms, 
// or introduce a termination condition to prevent infinite microtask scheduling.