import React from "react";

export default function App() {
  const [count, setCount] = React.useState(0);
  function add() {
    setCount((preCount) => preCount + 1);
  }
  function substract() {
    setCount(count - 1);
  }
  return (
    <main>
      <h1>How many times do You have clicked</h1>
      <div className="counter">
        <button
          onClick={substract}
          className="minus"
          aria-label="Descrease count"
        >
          -
        </button>
        <h2 className="count">{count}</h2>
        <button onClick={add} className="minus" aria-label="Descrease count">
          +
        </button>
      </div>
    </main>
  );
}
