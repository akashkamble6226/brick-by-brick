import { useReducer } from "react";

const reducerFun = (state, action) => {
    switch(action.type){
        case "inc": return {count:state.count + 1}
    }
};

const TheUseReducer = () => {
  const [data, dispatch] = useReducer(reducerFun, { count: 0 });
  return (
    <>
      <h3>The count is = {data.count}</h3>
      <button onClick={() => dispatch({ type: "inc" })}>Increase</button>
    </>
  );
};

export default TheUseReducer;
