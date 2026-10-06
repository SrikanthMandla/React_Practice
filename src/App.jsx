import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [counters, setCounter] = useState([{ id: 1, value: 0 }]);

  const addCounter = () => {
    const newCounter = { id: counters.length + 1, value: 0 };
    setCounter([...counters, newCounter]);
  };
  const incrementCounter = (id) => {
    setCounter(
      counters.map((counter) => {
        if (counter.id === id) return { ...counter, value: counter.value + 1 };
        return counter;
      }),
    );
  };
  return (
    <>
      <h1>Hello, This is Srikanth</h1>
      <button onClick={addCounter}>AddCounter </button>
      <ul>
        {counters.map((counter, index) => (
          <li key={index}>
            Counter {counter.id} : {counter.value}
            <button onClick={() => incrementCounter(counter.id)}>
              Increment
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
