import React from "react";
export default function Die(props) {
  return (
    <button
      onClick={() => props.hold(props.id)}
      style={{ backgroundColor: props.isHeld ? "#59E391" : "white" }}
    >
      {props.value}
    </button>
  );
}
