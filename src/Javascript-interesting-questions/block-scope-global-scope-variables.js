// With var, the loop creates a single variable i.
// All setTimeout callbacks reference the same i, and when they execute, the loop has already completed, so i is 3.
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}

// With let, each iteration of the loop creates a new block-scoped variable i.
// Each callback closes over its own copy, so the output is 0, 1, 2.

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}