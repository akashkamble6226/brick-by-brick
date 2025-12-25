// question -> swap two number

let a = 10;
let b = 20;

//one way of doing
// let temp = a;
// a = b;
// b = temp;

// another way of doing
[b, a] = [a, b];

console.log({ a, b });
