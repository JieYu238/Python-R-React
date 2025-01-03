import React from "react";
export default function Pad(props) {
  const [on, setOn] = React.useState(props.on);
  function toggole() {
    setOn((prevOn) => !prevOn);
  }
  return (
    <button
      onClick={toggole}
      className={on ? "on" : undefined}
      style={{ backgroundColor: props.color }}
    ></button>
  );
}
