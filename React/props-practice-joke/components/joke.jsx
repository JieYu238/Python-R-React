import React from "react";

export default function Joke(props) {
  return (
    <div className="joke-div">
      {props.setup && <p className="setup">Setup: {props.setup}</p>}
      <p className="punchline">Punchline: {props.punchLine}</p>
      <hr />
    </div>
  );
}
