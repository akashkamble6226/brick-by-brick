// here data1 is splitted and stored into one memory location
// simmilerly data2 is also kept in a diffrent memory location 
// js engine check whether both are pointing to the same location and the answer is false
// that is why console prints the false

const data1 = "he".split(",");
const data2 = ["h","e"]

console.log(data1==data2)
console.log(data1===data2)
