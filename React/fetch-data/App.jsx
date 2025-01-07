import React from "react";
export default function App(props) {
  const [starWarsData, setstarWarsData] = React.useState(null);
  //1. get the data
  //2. save the data in state
  fetch("https://swapi.py4e.com/api//people/1")
    .then((res) => res.json())
    .then((data) => setstarWarsData(data));
  return (
    <div>
      <pre>{JSON.stringify({ starWarsData }, null, 2)}</pre>
    </div>
  );
}
