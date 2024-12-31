import React from "react";
export default function Main() {
  return (
    <main>
      <h1>React Facts</h1>
      <ul className="facts-list">
        <li>
          React was developed by Facebook in 2013 and is maintained by Meta,
          making it a reliable and continually evolving library.
        </li>
        <li>
          React allows developers to describe what the UI should look like, and
          it efficiently updates and renders components when data changes.
        </li>
        <li>
          With React, you build encapsulated components that manage their own
          state, and compose them to create complex UIs.
        </li>
        <li>
          React can be used for web applications (React.js), mobile applications
          (React Native), and even for rendering on the server-side (Next.js).
        </li>
        <li>
          React uses a virtual DOM to optimize rendering and ensure high
          performance, even in applications with complex UIs.
        </li>
        <li>
          React has a rich ecosystem of tools, libraries, and frameworks, such
          as Redux, React Router, and Material-UI, which streamline development.
        </li>
        <li>
          React has a massive community, a plethora of learning resources, and
          consistent updates, making it one of the most accessible and supported
          libraries.
        </li>
      </ul>
    </main>
  );
}
