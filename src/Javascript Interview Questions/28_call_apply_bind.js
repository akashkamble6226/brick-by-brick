const person1 = {
  name: "ak",
};

const person2 = {
  name: "jk",
};

function display(arg) {
  console.log("name is", this.name, arg); // TypeError: Cannot read properties of undefined (reading 'name')
}

// display();

// Because this refers to global object, not person1 or person2.

// We need a way to tell JavaScript:
// Use this object as "this"

// 1.call() invokes the function immediately and lets us set this.
display.call(person1);
// with normal parameter 
display.call(person1, "kamble");

// ___________________;

// 2. apply() Method

// apply() is almost the same as call().
// The only difference:
// Arguments are passed as an array
display.apply(person1, ['k'])

// ______________________________

// 3. bind() Method

// bind() does NOT execute immediately.
// Instead it returns a new function with this bound.
const fn = display.bind(person1,"kam");
fn()