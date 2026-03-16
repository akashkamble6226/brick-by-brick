// In JavaScript, Shallow Copy and Deep Copy describe how objects are copied in memory.
// Since objects are stored in reference memory (heap), copying them can behave differently.

// 1️⃣ Shallow Copy

// A shallow copy copies only the top-level properties of an object.
// If the object contains nested objects, the reference is copied, not the actual object.

const user = {
    name:"ak",
    address:{
        tel:9088,
        city:"BMT"
    }
}

const user2 = {...user}

// user2.address.tel = 77777;

console.log(user)

// _______________________________________________________

// 2️⃣ Deep Copy

// A deep copy creates a completely independent copy, including all nested objects.

// Changes in the copied object do not affect the original.

const user3 = JSON.parse(JSON.stringify(user))
user3.address.city = "PUNE"

console.log(user)
console.log(user3)