import logo from "./logo.svg";
import "./App.css";
import { increament, decreament } from "./features/Counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={() => dispatch(increament({ amount: 10 }))}>+</button>{" "}
      {count}{" "}
      <button onClick={() => dispatch(decreament({ amount: 4 }))}>-</button>
    </div>
  );
}

export default App;
