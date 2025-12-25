// /[a-zA-Z]/.test(str) - Contains letter?
// /\d/.test(str) - Contains number?
// /[^a-zA-Z0-9]/.test(str) - Contains special char?
// /\s/.test(str) - Contains whitespace?

const myString = "Hello, welcome to the world of JavaScript!";
const count = myString.length;
console.log(`The string has ${count} characters.`);

const obj = {}
let totalLetterOnly = 0;
for(let s of myString){
    if(!/[a-zA-z]/.test(s)) continue;
    totalLetterOnly++;
    obj[s] = (obj[s] || 0) + 1;
}

console.log("obj", obj)
console.log("totalLetterOnly", totalLetterOnly)
