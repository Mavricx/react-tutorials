import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App.jsx";

// const anotherElement = (
//     <a href="https://www.google.com" target="_blank">
//         click me to visit google</a>
// )

const anotherUser="hey thery how are you doing ?"
const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click me to visit google",
  anotherUser
);

createRoot(document.getElementById("root")).render(
reactElement
//<App />

);
