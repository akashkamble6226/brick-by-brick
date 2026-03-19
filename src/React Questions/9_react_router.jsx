import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { increment } from "./Redux/counterSlice";

const RouterDomHome = () => {
  const count = useSelector((s) => s.counter.count);
  const dispatch = useDispatch();
  return (
    <>
      <h1>This is home!!! - {count}</h1>
      <button type="button" onClick={()=> dispatch(increment())}>Increase</button>
    </>
  );
};

export const RouterDomHome2 = () => {
  return (
    <>
      <Link to={"/"}>Go to home</Link>
      <h1>This is About Us!!!</h1>
    </>
  );
};

export const RouterDomHome3 = () => {
  const { id } = useParams();

  return (
    <>
      <Link to={"/"}>Go to home</Link>
      <h1>This is contact Us!!!</h1>
      <h2>THe id is - {id}</h2>
    </>
  );
};

export default RouterDomHome;
