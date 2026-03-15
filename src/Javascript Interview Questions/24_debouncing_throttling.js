// 1. What is Debouncing?
// Run the function ONLY after the user stops doing the action.

// Example: Search Bar
// If user types:

// h
// he
// hel
// hell
// hello

// Without debounce:

// 5 API calls

// With debounce:

// 1 API call

// (after user stops typing)

const debounce = (fn, delay) => {
  let timer;

  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, delay);
  };
};

const debouncedSearch = debounce(() => {
  console.log("API called");
}, 500);

window.addEventListner("keyup", debouncedSearch);

// ______________________________________________

// 2. What is Throttling?
// Allow function to run once every fixed time interval.

// Example: Scroll Event
// When scrolling, an event fires hundreds of times per second.
// With throttle:
// Run function every 1 second

const throttle = function (delay) {
  let lastTime = 0;

  return () => {
    let now = Date.now(); //Date.now() is a static method
    if (now - lastTime >= delay) {
      console.log("Function executed!!!!!");
      lastTime = now;
    }
  };
};

window.addEventListener("scroll", throttle(1000));

// Real Life Analogy

// Imagine a toll gate that only opens once every 5 seconds.

// Car arrives → gate opens
// Next car arrives quickly → gate closed
// After 5 seconds → gate opens again

// That is exactly throttling.
