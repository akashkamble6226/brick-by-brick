import { useState } from "react";

// component renders when state or prop changes 
// not with the local variable change
export default function Counter() {
    // let count = 0;
    console.log("Component rendered");
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
    // count++;
    console.log("count is", count);
  }

  return <button onClick={increment}>Click me!!!</button>;
}
