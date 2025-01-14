import React from "react";
import Die from "./Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
export default function () {
  const [dice, setDice] = React.useState(() => generateAllNewDice());
  const buttonRef = React.useRef(null);

  //check if the game is won
  const gameWon =
    dice.every((die) => die.isHeld) &&
    dice.every((die) => die.value === dice[0].value);

  React.useEffect(() => {
    if (gameWon) {
      buttonRef.current.focus();
    }
  }, [gameWon]);
  function generateAllNewDice() {
    // console.log("generateAllNewDice was called!");
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }

  function rollDice() {
    if (!gameWon) {
      setDice((preDices) =>
        preDices.map((die) =>
          die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) }
        )
      );
    } else {
      setDice(generateAllNewDice());
    }
  }
  function hold(id) {
    setDice((preDices) =>
      preDices.map((dice) =>
        id === dice.id
          ? {
              ...dice,
              isHeld: !dice.isHeld,
            }
          : dice
      )
    );
  }
  // map over dice here
  const diceElements = dice.map((dieObj) => (
    <Die
      hold={hold}
      id={dieObj.id}
      isHeld={dieObj.isHeld}
      key={dieObj.id}
      value={dieObj.value}
    />
  ));
  return (
    <main>
      {gameWon && <Confetti />}
      <div aria-live="polite" className="sr-only">
        {gameWon && (
          <p>Congratulations! You won! Press "New Game" to start again.</p>
        )}
      </div>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">{diceElements}</div>
      <button ref={buttonRef} onClick={rollDice} className="rollBtn">
        {gameWon ? "New Game" : "Roll"}
      </button>
    </main>
  );
}
