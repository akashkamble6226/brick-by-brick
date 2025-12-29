import { useState } from "react";

// some confusion here -> ?????
export default function Counter() {
  //   let count = 0;
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
    console.log("count is", count);
  }

  return <button onClick={increment}>Click me!!!</button>;
}
