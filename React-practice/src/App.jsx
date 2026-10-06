import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const Increment = () => {
    setCount(count + step);
  };

  const Decrement = () => {
    setCount(count - step);
  };
  return (
    <div className="app-container">
      <h1>Counter Value: {count}</h1>

      <input
        type="number"
        value={step}
        onChange={(e) => setStep(parseInt(e.target.value))}
      />

      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
}

export default App;
