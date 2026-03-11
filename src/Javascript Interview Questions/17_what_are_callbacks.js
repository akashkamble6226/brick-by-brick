// A callback is simply:
// A function passed as an argument to another function, which is executed later.

// Example

function showInfo(name, display) {
  console.log(`info of ${name} as followes`);
  display();
}

function show() {
  console.log("sal - 20k");
}

showInfo("akash", show);

// show is the callback function
// It is passed to showInfo()

// 2️⃣ Why Do We Need Callbacks?

// Callbacks are mainly used to handle asynchronous operations.

// Because some tasks take time:

// API calls

// File reading

// Database operations

// Timers

// We don't want JavaScript to block execution.

// Example Without Callback

function withoutCallback() {
  setTimeout(() => {
    return "Data received!";
  }, 2000);
}

// Example With Callback
function withCallback(callback) {
  setTimeout(() => {
    callback("Data received!");
  }, 2000);
}

// const data = withoutCallback();
const data = withCallback(function (data) {
  console.log(data);
});
// Here the callback runs after the async task finishes.
console.log(data);


// 5️⃣ Callback Hell (Important Interview Topic)
// loginUser(function(user) {
//   getProfile(user, function(profile) {
//     getPosts(profile, function(posts) {
//       console.log(posts);
//     });
//   });
// });

// This becomes hard to read and maintain.

// Solution:

// Promises

// Async / Await