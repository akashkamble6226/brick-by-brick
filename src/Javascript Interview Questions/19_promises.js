// Promises in JavaScript (Interview Perspective)

// A Promise is used to handle asynchronous operations in a cleaner way than callbacks.

// Earlier you saw callback hell, where many nested callbacks made code unreadable. Promises solve that.

// 1️⃣ What is a Promise?

// A Promise is:
// An object that represents the eventual completion or failure of an asynchronous operation.

// Think of it like a promise in real life:
// You promise to do something.
// Later you either fulfill it or reject it.

// 2️⃣ Promise States

// A promise has 3 states:

// 1️⃣ Pending   → Initial state
// 2️⃣ Fulfilled → Operation successful
// 3️⃣ Rejected  → Operation failed

// 3️⃣ Creating a Promise

const promis = new Promise((res, rej) => {
  const success = false;
  if (success) {
    res("Success");
  } else {
    rej("Error");
  }
});

promis.then((data) => console.log(data)).catch((e) => console.log(e));

// Real example

function fetchData() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("data fetched!!!");
    }, 2000);
  });
}

fetchData().then((d) => console.log(d));

// 6️⃣ Promise Chain (Very Important)
// Promises allow chaining.

fetchData()
  .then((d) => {
    console.log(d);
    return "data processed!!";
  })
  .then((d) => console.log(d));

//   7️⃣ Promise vs Callback
// Callback
// loginUser(function(user) {
//   getProfile(user, function(profile) {
//     getPosts(profile, function(posts) {
//       console.log(posts);
//     });
//   });
// });

// Promise Version

// loginUser()
//   .then(getProfile)
//   .then(getPosts)
//   .then(console.log);

// Much cleaner.

// 8️⃣ Important Promise Methods

// 1) Promise.all()
// Runs multiple promises in parallel.
// If one fails → all fail.
const p1 = new Promise((res, rej) => res("P1 resolved!"));
const p2 = new Promise((res, rej) => res("P2 resolved!"));
const p3 = new Promise((res, rej) => res("P3 resolved!"));

Promise.all([p1, p2, p3])
  .then((d) => console.log(d))
  .catch((e) => console.log(e));
// if all resolved - [ 'P1 resolved!', 'P2 resolved!', 'P3 resolved!' ]
//  if one failed - P1 failed!

// 2) Promise.race()
// Returns the first settled promise.

Promise.race([p1, p2, p3])
  .then((d) => console.log(d))
  .catch((e) => console.log(e));
//  if one failed - P1 failed!
// if one resolved - P1 resolved!

// 3) Promise.allSettled()
// Returns results of all promises, even failed ones.

Promise.allSettled([p1, p2, p3]).then((res) => console.log(res));
// [
//   { status: 'fulfilled', value: 'P1 resolved!' },
//   { status: 'fulfilled', value: 'P2 resolved!' },
//   { status: 'fulfilled', value: 'P3 resolved!' }
// ]

// 4) Promise.any()
// Returns first successful promise.

Promise.any([p1, p2, p3]).then((re) => console.log("any", re));
// P1 resolved!


// ________________________

// 9️⃣ Interview Trick Question
console.log("Start");

const p = new Promise((resolve) => {
  console.log("Inside promise");
  resolve();
});

p.then(() => console.log("Resolved"));

console.log("End");

//output 

// Start
// Inside promise
// End
// Resolved

// Reason:
// Promise .then() goes to microtask queue.