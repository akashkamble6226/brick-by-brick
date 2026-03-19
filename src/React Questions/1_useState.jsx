// what is react -

// React is a javascript library
// which is used to build custome components,
// It is used by developers to update UI efficiently whenever
// data changes

// 1) Developed by Facebook 2013
// 2) Based on component based architecture
// 3) Uses Virtual dom to efficiently update the UI
// 4) Uses Declarative Programming approch

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleCountChange = () => {
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  };

  const callFromChildComp = (data) => {
    console.log("from child", data);
  };

  const handleOnChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <h1>Current Count is - {count}</h1>
      <button onClick={handleCountChange}>Increase</button>
      <input type="text" onChange={handleOnChange}></input>
      <SecondComp data={count} fun={callFromChildComp} show={true} />
    </>
  );
};

const SecondComp = (props) => {
  // props.data = props.data + 5;

  const someStuff = [{ id: 1, name: "apple" }];
  return (
    <>
      {props.show ? (
        <>
          <h3>{`the data - ${props.data}`}</h3>
          {someStuff.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </>
      ) : (
        <button onClick={() => props.fun(props.data)}>Execute Function</button>
      )}
    </>
  );
};
export default Counter;
