import { useState } from "react";
import Counter from "./React Questions/1_useState";
import ClassCounter from "./React Questions/3_class_based_component";
import Student from "./React Questions/3_class_based_component";
import UncontrComp from "./React Questions/4_controlled_components_vs_uncontrolled_components";
import ControComponents from "./React Questions/4_controlled_components_vs_uncontrolled_components";
import ContextChild, { UserContext } from "./React Questions/5_context_api";
import HookUseEffect from "./React Questions/6_useEffect";
import Home from "./React Questions/module_css/home";
import TheUseLayEff from "./React Questions/7_useLayoutEffect";
import TheUseReducer from "./React Questions/8_useReducer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RouterDomHome, {
  RouterDomHome2,
  RouterDomHome3,
} from "./React Questions/9_react_router";
import { Provider } from "react-redux";
import { store } from "./React Questions/Redux/store";
function App() {
  const [user, setUser] = useState("Akash");
  return (
    <Provider store={store}>
      <RouterDomHome />
    </Provider>
  );
}
export default App;
