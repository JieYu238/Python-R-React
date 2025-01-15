import React from "react";
import { languages } from "./languages";
import { clsx } from "clsx";
export default function AssemblyEndgame() {
  //state values
  const [currentWord, setCurrentWord] = React.useState("react");

  const [guessLetters, setGuessLetters] = React.useState([]);

  //Derived values
  const wrongGuessesCount = guessLetters.filter(
    (letter) => !currentWord.includes(letter)
  ).length;

  const isGameWon = currentWord
    .split("")
    .every((letter) => guessLetters.includes(letter));
  const isGameLost = wrongGuessesCount >= languages.length - 1;
  const isGameOver = isGameWon || isGameLost;

  //static values
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  function addGuessedLetter(letter) {
    setGuessLetters((prevLetters) =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    );
  }

  const lanElements = languages.map((lang, index) => {
    const isLanguageLost = index < wrongGuessesCount;
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color,
    };
    const className = clsx("chip", isLanguageLost && "lost");
    return (
      <span key={lang.name} className={className} style={styles}>
        {lang.name}
      </span>
    );
  });

  const letterElements = currentWord
    .split("")
    .map((letter, index) => (
      <span key={index}>
        {guessLetters.includes(letter) ? letter.toUpperCase() : ""}
      </span>
    ));

  const keyElements = alphabet.split("").map((letter) => {
    const isGuessed = guessLetters.includes(letter);
    const isCorrect = isGuessed && currentWord.includes(letter);
    const isWrong = isGuessed && !currentWord.includes(letter);
    const className = clsx({
      correct: isCorrect,
      wrong: isWrong,
    });
    return (
      <button
        className={className}
        key={letter}
        onClick={() => addGuessedLetter(letter)}
      >
        {letter.toUpperCase()}
      </button>
    );
  });

  const gameStatusClass = clsx("game-status", {
    won: isGameWon,
    lost: isGameLost,
  });

  function renderGameStatus() {
    if (!isGameOver) {
      return null;
    }
    if (isGameWon) {
      return (
        <>
          <h2>You win!</h2>
          <p>Well done! 🥳</p>
        </>
      );
    } else {
      return (
        <>
          <h2>Game over!</h2>
          <p>You lose! Better start learning Assembly 😭</p>
        </>
      );
    }
  }
  return (
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>
          Guess the word within 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </header>
      <section className={gameStatusClass}>{renderGameStatus()}</section>
      <section className="lang-chips">{lanElements}</section>
      <section className="word">{letterElements}</section>
      <section className="key-board">{keyElements}</section>
      {isGameOver && <button className="new-game">New Game</button>}
    </main>
  );
}
