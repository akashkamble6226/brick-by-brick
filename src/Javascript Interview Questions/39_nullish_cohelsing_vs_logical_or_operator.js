const a = 0;

const ans = a ?? "right-side"; // 10 //

// 🔑 Core Difference
// ✅ ?? (Nullish Coalescing)
// Only checks: null or undefined
// If a is null or undefined → returns "other side"
// Otherwise → returns a

const ans2 = a || "right-side";

// ✅ || (Logical OR)
// Checks: all falsy values
// Falsy values in JS:
// false
// 0
// "" (empty string)
// null
// undefined
// NaN

// If a is any falsy value → returns "other side"

console.log(ans);
