// 🚀 What is useEffect?

import { useEffect, useState } from "react";
// import styles from "./style.module.css";

// useEffect is used to handle side effects in functional components.

// 📌 What are Side Effects?

// Anything outside normal rendering:

// API calls
// DOM manipulation
// Timers (setTimeout, setInterval)
// Subscriptions

// 1. Run on Every Render (NO dependency array)
// useEffect(() => {
//   console.log("Runs on every render");
// });

// 2. Run Only Once (Like componentDidMount)
// useEffect(() => {
//   console.log("Runs only once");
// }, []);

// 3. Run whenever dependency changes (Like componentDidUpdate)
// useEffect(() => {
//   console.log("Runs only once");
// }, [count]);

// 4. cleanup (Like componentDidUpdate)
// useEffect(() => {
//   const inte = setInterval(() =>{}, 1000);
// return () => {
// clearInterval(inte)
// }
// }, [count]);

const HookUseEffect = () => {
  const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((res) => res.json())
  //       .then((res) => setData(res));
  //   }, []);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setData(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("After each sec");
    }, 1000);

    return () => {
      console.log("Before interval");
      clearInterval(interval);
      console.log("After interval");
    };
  }, []);

  useEffect(() => {
    console.log("Use Effect");
    return () => {
      console.log("Cleanup");
    };
  }, []);
  return (
    <>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};

export default HookUseEffect;
