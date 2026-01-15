//first-class-function
// if i can assign a function to a variable then its a first class function
// All function in js are by default first class functions

let a = () => console.log("Testing");

// first-order-functions
// if i am not passing a function as a parameter nor returning a function a function
// is called as first-order-function

function test(){
    return 10;
}


// higher order function 
// when a function is passed as an argument or returned from function is known as higher order function

setTimeout(() => {}, 1000);