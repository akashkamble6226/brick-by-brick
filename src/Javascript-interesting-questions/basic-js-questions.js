//1
const ans = 0.1 + 0.2
console.log(ans)
console.log(ans === 0.3)
// its false why
// ans ->   Js uses IEEE 754 floating-point arithmatic, which cannot precisly represent certain decimal numbers in binary

// 2
// 𝗪𝗵𝗮𝘁 𝗵𝗮𝗽𝗽𝗲𝗻𝘀 𝘄𝗵𝗲𝗻 𝘆𝗼𝘂 𝗰𝗼𝗺𝗽𝗮𝗿𝗲 [] == ![]?
// eslint-disable-next-line no-constant-binary-expression
console.log([] == ![]);

// Surprisingly, this evaluates to true. 
// The right side ![] coerces to false, then [] == false causes both sides to convert to numbers
// An empty array converts to 0, and false converts to 0, so 0 == 0 is true

//3 
// 𝗘𝘅𝗽𝗹𝗮𝗶𝗻 𝘄𝗵𝘆 𝘁𝘆𝗽𝗲𝗼𝗳 𝗡𝗮𝗡 𝗿𝗲𝘁𝘂𝗿𝗻𝘀 "𝗻𝘂𝗺𝗯𝗲𝗿"
console.log(typeof NaN)
// - NaN stands for "Not-a-Number" but ironically, its type is "number" because it represents an invalid numeric operation result.
// - It's the only value in JavaScript that isn't equal to itself: NaN !== NaN is true.

// 4
//  𝗪𝗵𝗮𝘁 𝗶𝘀 𝘁𝗵𝗲 𝘁𝗲𝗺𝗽𝗼𝗿𝗮𝗹 𝗱𝗲𝗮𝗱 𝘇𝗼𝗻𝗲 (𝗧𝗗𝗭)?
// - The TDZ is the period between entering a scope and the actual declaration being reached for let and const variables.
// - Accessing these variables during the TDZ throws a ReferenceError, even though they are hoisted.

// 5
// 𝗪𝗵𝘆 𝗰𝗮𝗻 𝘆𝗼𝘂 𝗮𝗱𝗱 𝗽𝗿𝗼𝗽𝗲𝗿𝘁𝗶𝗲𝘀 𝘁𝗼 𝗳𝘂𝗻𝗰𝘁𝗶𝗼𝗻𝘀 𝗶𝗻 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁?
// - Functions in JavaScript are first-class objects, meaning they can have properties and methods just like any other object.
// - You can attach data or behavior to functions: myFunc.cache = {} or myFunc.count = 0.