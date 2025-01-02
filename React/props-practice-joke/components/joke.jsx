import React from "react";

export default function Joke(props) {
  const [isShown, setIsShown] = React.useState(false);
  function toggleShown() {
    setIsShown((prev) => !prev);
  }
  return (
    <div className="joke-div">
      {props.setup && <p className="setup">{props.setup}</p>}
      {isShown ? <p className="punchline">{props.punchLine}</p> : null}
      <button onClick={toggleShown}>
        {isShown ? "Hide" : "Show"} punchline
      </button>

      <hr />
    </div>
  );
}
