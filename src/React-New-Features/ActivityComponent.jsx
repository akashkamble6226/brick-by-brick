
import { useState, Activity } from "react";

const ActivityComponent = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <button onClick={() => setShowNav(!showNav)}>Open/Close NavBar</button>
      {/* using below method we can hide or show nav bar but we are not able to preserv input box value */}
      {/* {showNav && <NavBar />} */}

      {/* using below method we are able to keep the input box value as it is */}
      <NavBar showNav={showNav} />

      {/* React 19.2 gave us component named Activity which can help use mounting of component or unmounting */}
      {/* <Activity mode={showNav ? "visible" : "hidden"}>
        <NavBar />
      </Activity> */}
    </>
  );
};

const NavBar = ({showNav}) => {
  return (
    <>
      <div
        style={{
          border: "1px solid red",
          width: "200px",
            display: showNav ? "block" : "none",
        }}
      >
        Navigation Bar
        <input type="text" />
      </div>
    </>
  );
};

export default ActivityComponent;
