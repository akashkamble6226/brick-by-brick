// Sync code → Microtasks → Macrotasks

// The async function runs synchronously until the first await.
// Each await pauses execution and schedules the remaining code as a microtask, which runs after all synchronous code but before macrotasks.

async function test() {
  console.log(1);
  await Promise.resolve();
  console.log(2);
  await Promise.resolve();
  console.log(3);
}
console.log(0);
test();
console.log(4)

// little more tricky

async function test2() {
  console.log(1);

  setTimeout(() => {
    console.log(2);
  }, 0);

  await Promise.resolve();

  console.log(3);

  setTimeout(() => {
    console.log(4);
  }, 0);
}
console.log("Another example")
console.log(0);
test2();
console.log(5);
