import { useDispatch } from "react-redux";
import { Add1, Minus1 } from "./store/modules/counter/actions";
import "./App.css";
import { useSelector } from "react-redux";
function App() {
  const dispatch = useDispatch();
  const number = useSelector((state) => state.handleCount);
  const add = () => {
    dispatch(Add1());
  };
  const minus = () => {
    dispatch(Minus1());
  };
  return (
    <div className="App">
      <header className="App-header">
        <h2>{number}</h2>
        <div className="btnContainer">
          <button onClick={add}>+</button>
          <button onClick={minus}>-</button>
        </div>
      </header>
    </div>
  );
}

export default App;
