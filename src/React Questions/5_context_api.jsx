// Context API is used to share data globally across components without prop drilling.

import { createContext, useContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext();

const ContextChild = () => {
  const data = useContext(UserContext);
  return (
    <>
      <h1>Hello there name is from Context API - {data}</h1>
    </>
  );
};

export default ContextChild;
