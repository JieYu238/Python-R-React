import React from "react";
export default function App(props) {
  const [starWarsData, setstarWarsData] = React.useState(null);
  const [count, setCount] = React.useState(0);
  //1. get the data
  //2. save the data in state
  //infinite loop
  console.log("rendered!");
  React.useEffect(() => {
    console.log("Effect ran");
    fetch("https://swapi.py4e.com/api//people/1")
      .then((res) => res.json())
      .then((data) => setstarWarsData(data));
  }, [count]);

  //side effects
  return (
    <div>
      <h2>The count is {count}</h2>
      <button onClick={() => setCount((preCount) => preCount + 1)}>Add</button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
}
