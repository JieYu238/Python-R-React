import React from "react";
import padsData from "./pads";
import Pad from "./pad";
export default function App() {
  const [pads, setPads] = React.useState(padsData);
  function toggle(id) {
    setPads((prevPads) =>
      prevPads.map((pad) => {
        return pad.id === id ? { ...pad, on: !pad.on } : pad;
      })
    );
  }
  const buttonElements = pads.map((pad) => {
    return (
      <Pad
        id={pad.id}
        key={pad.id}
        color={pad.color}
        on={pad.on}
        toggle={toggle}
      />
    );
  });
  return (
    <main>
      <div className="pad-container">{buttonElements}</div>
    </main>
  );
}
