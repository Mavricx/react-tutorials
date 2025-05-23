import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-screen h-screen flex items-center justify-center duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-2 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
          <button
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "red" }}
            onClick={() => {
              setColor("red");
            }}
          >
            red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "green" }}
            onClick={() => {
              setColor("green");
            }}
          >
            green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "pink" }}
            onClick={() => {
              setColor("pink");
            }}
          >
            pink
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "blue" }}
            onClick={() => {
              setColor("blue");
            }}
          >
            blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
