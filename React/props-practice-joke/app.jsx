import React from "react";
import Joke from "./components/joke";

export default function App() {
  return (
    <main>
      <Joke
        punchLine="I can't wait to see her face light up when she opens it."
        upvotes={10}
        isPun={true}
        comments={[
          {
            author: "",
            text: "",
            title: "",
          },
        ]}
      />
      <Joke
        setup="How did the hacker escape the police?"
        punchLine="He just ransomware!"
      />
      <Joke
        setup="Why don't pirates travel on mountain roads?"
        punchLine="Scurvy."
      />
      <Joke
        setup="Why do bees stay in the hive in the winter?"
        punchLine="Swarm."
      />
      <Joke
        setup="What's the best thing about Switzerland?"
        punchLine="I don't know, but the flag is a big plus!"
      />
    </main>
  );
}
