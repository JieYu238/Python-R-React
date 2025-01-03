import React from "react";
import Header from "./header";
import Body from "./body";
export default function App() {
  const [userName, setUserName] = React.useState("Joe");
  return (
    <>
      <Header userName={userName} />
      <Body userName={userName} />
    </>
  );
}
