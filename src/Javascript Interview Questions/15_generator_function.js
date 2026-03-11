// Generator Functions in JavaScript (Interview Perspective)

// Generator functions allow you to pause and resume execution of a function.
// A generator function returns a generator object which can produce values one at a time.
// This is useful when working with large datasets, lazy evaluation, or iteration control

// 1️⃣ Syntax of Generator Function

// Generator functions are declared using function*.

function* generatorF(){
    yield 1;    
    yield 2;
    yield 3;
}

const gF = generatorF() // no need of new keyword

console.log(gF.next())
console.log(gF.next())
console.log(gF.next())
console.log(gF.next())


// Real Use Cases

// Generators are used for:

// 1️⃣ Lazy loading data
// 2️⃣ Handling large data streams
// 3️⃣ Custom iterators
// 4️⃣ Async control flow (before async/await)