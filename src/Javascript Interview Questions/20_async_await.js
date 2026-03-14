// Async / Await in JavaScript (Interview Perspective)

// async/await is a cleaner way to work with Promises.
// It makes asynchronous code look like synchronous code, which improves readability.

// Important point:

// Async/Await is built on top of Promises.

// 1️⃣ async Function
// When you add async before a function:

async function test() {
  return "Hello";
}

// It automatically returns a Promise.

test().then((res) => console.log(res));

// Even though we returned a string, JavaScript converts it into:
// Promise.resolve("Hello")

// _________________________

// async is a keyword used before a function.
// It makes the function always return a Promise.

// await pauses the execution of the async function until the promise resolves.

//Eg -

function fetchData() {
  return new Promise((res) => {
    setTimeout(() => {
      res("data fetched....");
    }, 2000);
  });
}

async function getData() {
  const data = await fetchData();
  console.log(data)
}

getData()
