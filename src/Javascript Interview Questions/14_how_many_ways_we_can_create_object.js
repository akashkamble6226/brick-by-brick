// 1. Object Literal (Most Common)
const student = {
  name: "Alex",
  id: 123,
  greet: function () {
    console.log("Hello Ji!!!!");
  },
};

// ✔ Fast
// ✔ Readable
// ✔ Most used in React / modern JS

//2. Using new Object()
const person = new Object();
person.name = "Akash";
person.lastName = "Kamble";
console.log(person);

// 3. Constructor function
function Fruit() {
  ((this.name = "Apple"), (this.price = 10));
}
const apple = new Fruit();
console.log(apple);

//4. Object.create()
function Obj() {}

Obj.prototype.greet = function () {
  console.log("Hello");
};

function Obj2() {}

Obj2.prototype = Object.create(Obj.prototype);

// Fix constructor reference
Obj2.prototype.constructor = Obj2;

const obj2 = new Obj2();
obj2.greet();

// 5. ES6 Class
// Modern way to create objects.

class Person {
  constructor(name, sal) {
    this.name = name;
    this.sal = sal;
  }
}
const p1 = new Person("Akash", 1789000);

// 6. Factory Function
// A function that returns an object.

function obsd (){
    return {
        showBal(){
            console.log("balance")
        }
    }
}
const obn = obsd(); // no need to new keyword here

obn.showBal()

// 7. Using Spread Operator

const user = { name: "Akash" };

const newUser = { ...user, age: 26 };
