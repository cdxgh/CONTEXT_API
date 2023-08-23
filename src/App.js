import { useContext } from "react";
import Counter from "./components/Counter";
import "./styles.css";
import { ConterContext } from "./Context/Counter";
export default function App() {
  const counterState = useContext(ConterContext);

  return (
    <div className="App">
      <h1>Count is {counterState.count}</h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
};