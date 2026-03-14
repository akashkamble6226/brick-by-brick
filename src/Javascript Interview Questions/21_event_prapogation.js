// 1. What is Event Propagation?

// Event Propagation means:
// The way an event travels through the DOM when it occurs.
// Event propagation allows multiple elements in the DOM hierarchy to respond to a single event.

// Example:
// If you click a button inside a div,
// the click event does not only happen on the button — it also travels through its parent elements.

<div>
  <button>Click Me</button>
</div>;

// If the button is clicked, the event can move:
// button → div → body → html → document

// ____________________________________

// Event Propagation happens in three phases

// 1️⃣ Capturing Phase   →  Top → Bottom
// 2️⃣ Target Phase      →  Event reaches the element clicked
// 3️⃣ Bubbling Phase    →  Bottom → Top

// so the full flow is like this -

// document
//    ↓
// html
//    ↓
// body
//    ↓
// div
//    ↓
// button   ← Target Element
//    ↑
// div
//    ↑
// body
//    ↑
// html
//    ↑
// document

// 1. Capturing Phase (Top → Bottom)
// The event starts from the top of the DOM tree and moves downwards to the target element.
// document → html → body → div → button
// Capturing only runs if we enable it.

parent.addEventListener("click", () => {}, true); // true enables capturing.

// 2. Target Phase
// The event reaches the actual element that was clicked.

// 3. Bubbling Phase (Bottom → Top)
// After reaching the target, the event moves upwards.
// button → div → body → html → document
// This is the default behaviour in JavaScript.

// _________________________________________

// What is Event Delegation?

// Event Delegation is a technique where:

// Instead of adding event listeners to multiple child elements,
// we add a single event listener to their parent element and handle the event using event bubbling.

<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>;

// Instead of adding event listeners to every <li>, we can do:
document.querySelector("ul").addEventListener("click", (e) => {
  console.log(e.target.innerText);
});

// Clicking any li works because of event propagation.
// Without propagation:
// We would need 100 event listeners for 100 elements.

// Important Properties Used

// 1️⃣ event.target
// The actual element that triggered the event.

// 2️⃣ event.currentTarget
// The element where the event listener is attached.

// Why Event Delegation is Powerful
// 1️⃣ Improves Performance
// Less event listeners.

// 2️⃣ Saves Memory
// Only one handler instead of many.

// 3️⃣ Handles Dynamic Elements
// Works even if elements are added later.

// ________________________________________________

// What is event.stopPropagation() in JavaScript?

// It prevents the event from continuing its bubbling or capturing phase.

// Why We Need stopPropagation()
// Normally, events bubble up in the DOM.

// Eg-
<div id="a">
  <button id="b">Click</button>
</div>;

// If we add events:

// a.addEventListener("click", () => {
//    console.log("Parent clicked");
// });

// b.addEventListener("click", () => {
//    console.log("Child clicked");
// });

// Click button

// Output:

// Child clicked
// Parent clicked

// Because the event bubbles from child → parent.

// Using stopPropagation()
// Now we stop the event from reaching the parent.

// b.addEventListener("click", (event) => {
//    event.stopPropagation();
//    console.log("Child clicked");
// });

// Output when clicking button:

// Child clicked

// Now the parent event does not execute.
