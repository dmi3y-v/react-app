import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState("Текст в инпуте");

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  return (
    <div className="App">
      <h1>{counter}</h1>
      <h1>{value}</h1>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;
