//  React Output Question — useEffect Execution

// Note - useEffect runs after the DOM is painted, not during the render

// Note - 
// Calling setState directly inside the component body (not inside an event or effect) is wrong and causes repeated re-renders.
// React allows this code to run, but it behaves in a special way.

// first -> Render 0
// second -> setCount(1) , setCount(2) (react updates states in batch, so setCount(1) will be ignored )
// third step -> Render 2
// fourth step -> again UI will be painted 
// five -> Effect 2

// on console the output will be 
// Render 0
// Render 2
// Effect 2


import { useState, useEffect } from "react";

const UseEffectWorking = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect", count);
  }, [count]);

  console.log("Render", count);

  setCount(1);
  setCount(2);
  return null;
};

export default UseEffectWorking;
