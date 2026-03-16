// The this keyword in JavaScript refers to the object that is executing the current function.

// In simple words:
// this means “who is calling the function”

// The value of this changes depending on how the function is called.

// 1️⃣ this in Global Scope
console.log(this);
// In a browser output will be:
// Window object

// Because the global object in browsers is window.
// ______________________________________

// 2️⃣ this Inside an Object Method

const employee = {
  id: 10,
  name: "jack",
  show() {
    console.log(this.name);
  },
  greet: () => {
    console.log(this.name)
  },
};

employee.show();
// this -> employee
// Because employee is calling the function.

// ________________________________

// 4️⃣ this in Arrow Functions
// Arrow functions do not have their own this.
// They inherit this from the surrounding scope.

// employee.greet() // TypeError: Cannot read properties of undefined (reading 'name')

// ____________________________________________

// 5️⃣ this in Constructor Functions

function School(name){
    this.name = name
}

const s1 = new School("NESD")
console.log(s1.name)
// this → newly created object

// _______________________________________

// 6️⃣ this in Class

class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(this.name);
  }
}

const u = new User("Akash");
u.greet();

// this refers to:

// the instance of the class

// ______________________________________________

// 👉 What will be the output of this tricky code? (most developers get it wrong)

const obj = {
  name: "Akash",
  greet() {
    return function () {
      console.log(this.name);
    };  
  }
};

obj.greet()();

// 1️⃣ First execution: obj.greet()
// obj.greet()

// greet is called by obj

// So inside greet:

// this → obj

// But greet does not use this.
// It simply returns a function.

// So after this step we get:

// function () {
//   console.log(this.name);
// }

// 2️⃣ Second execution: ()

// Now the returned function is called:

// obj.greet()()

// This is equivalent to:

// const fn = obj.greet();
// fn();

// Now the function is called without any object.

// So:

// 3️⃣ What is printed?

// Inside the function:

// console.log(this.name);

// If this is window:

// window.name → undefined

// So output:

// undefined