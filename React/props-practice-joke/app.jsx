import React from "react";
import Joke from "./components/joke";
import jokeData from "./jokesData";

export default function App() {
  const jokeElements = jokeData.map((joke) => {
    return <Joke setup={joke.setup} punchLine={joke.punchline} />;
  });
  return <main>{jokeElements}</main>;
}
