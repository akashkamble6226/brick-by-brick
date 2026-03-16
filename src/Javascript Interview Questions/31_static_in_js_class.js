// In a JavaScript class, static means the method or property belongs to the class itself,
// not to the object (instance) of the class.

// So you call it using the class name, not using an object.

class User {
  constructor(name) {
    this.name = name;
  }

  static role = "Admin";

  static display() {
    console.log("hello");
  }

  showName() {
    console.log(this.name);
  }
}

// here we are calling the showName method using instance/object of a class
const obj = new User("akash");
obj.showName();

//obj.display(); // TypeError: obj.display is not a function
User.display(); // accessing static method
console.log(User.role) // accessing static variables

// ________________________________

// 4️⃣ Real-world Example (Important for Interviews)

// The built-in Array class uses static methods.

// Example:

console.log(Array.isArray([1,2,3]))

// Here:

// isArray() is a static method of Array

// You cannot do:

// const arr = [1,2,3];
// arr.isArray(); // ❌ error

// ________________________________________

// 🧠 One important interview follow-up question

// Can a static method access instance variables?

// ❌ No

// Example:

class Test {
  name = "Akash";

  static show() {
    console.log(this.name);
  }
}

Test.show()

// this refers to the class, not the instance.
