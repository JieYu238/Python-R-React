import React from "react";
import Header from "./components/header";
import Entry from "./components/entry";
import data from "./data";

export default function App() {
  const entryElements = data.map((entry) => {
    return <Entry key={entry.id} entry={entry} />;
  });
  return (
    <>
      <Header />
      <div className="container">{entryElements}</div>
    </>
  );
}
