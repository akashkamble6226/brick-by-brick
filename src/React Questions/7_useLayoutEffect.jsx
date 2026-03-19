// 🚀 Core Difference (One Line)

import { useEffect, useLayoutEffect } from "react";

// useEffect runs AFTER paint, while useLayoutEffect runs BEFORE paint

//useEffect
// Render -> Dom updated -> UI painted on screen by js -> useEffect runs
// 👉 Non-blocking (doesn’t delay UI)

//useLayoutEffect
// Render -> Dom updated -> useLayoutEffect runs -> UI painted on screen
// 👉 Blocking (runs before UI is shown)

const TheUseLayEff = () => {
  useEffect(() => {
    console.log("THis is useEffect");
  }, []);

  useLayoutEffect(() => {
    console.log("This is useLayoutEffect");
  }, []);

  return (
    <>
      <h1>Hello There!!!!!</h1>
    </>
  );
};

export default TheUseLayEff;
