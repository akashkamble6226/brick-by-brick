// here we have created one promise and we have resolved it, 
// as we are using then , the hello will be printed on the console
// but as the promise is resolved, the catch block is completly ignored so we see man!!! also in the console

function asyncTask() {
  return Promise.resolve((res) => {
    res();
  });
}

const x = asyncTask()
  .then((d) => console.log("hello"))
  .catch(() => console.log("Error"))
  .then(() => console.log("man!!!"));
