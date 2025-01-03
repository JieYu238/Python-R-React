import React from "react";
import avatar from "./icons/user-icon.png";
export default function Header(props) {
  return (
    <header>
      <img src={avatar} />
      <p>{props.userName}</p>
    </header>
  );
}
