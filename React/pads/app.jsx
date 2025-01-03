import React from "react";
import padsData from "./pads";
import Pad from "./pad";
export default function App() {
  const [pads, setPads] = React.useState(padsData);
  function turnAllPadsOff() {
    setPads((prevPads) =>
      padsData.map((pad) => ({
        ...pad,
        on: false,
      }))
    );
  }
  const buttonElements = padsData.map((pad) => {
    return <Pad key={pad.id} color={pad.color} on={pad.on} />;
  });
  return (
    <main>
      <div className="pad-container">{buttonElements}</div>
      <button className="all-off" onClick={turnAllPadsOff}>
        Turn All Off{" "}
      </button>
    </main>
  );
}
