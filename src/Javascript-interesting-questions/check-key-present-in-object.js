let obj = {};
let key = "constructor";

// here console will print key found because , in operator checks the obj first if it
// does not found key in obj, but as we have used "in" operator, it will check prototype chain
// as prototype chain has "constructor" key in it  , we see key found
if (key in obj) {
  console.log("Key found");
} else {
  console.log("key not found!");
}

// to solve this problem we can use "hasOwn" method
if (Object.hasOwn(obj, key)) {
  console.log("Key found");
} else {
  console.log("key not found!");
}
