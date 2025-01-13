import React from "react";
import WindowTracker from "./WindowTracker";
export default function App() {
  const [show, setShow] = React.useState(true);
  function toggleShow() {
    setShow((preShow) => !preShow);
  }
  return (
    <main className="container">
      <button onClick={toggleShow}>Toggle WindowTracker</button>
      {show && <WindowTracker />}
    </main>
  );
}
