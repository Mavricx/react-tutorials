import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  //can also be written as counter, pikuCounter (any name you want)

  // let counter=15

  const addValue = () => {
    // console.log("clicked", counter);
    // counter = counter + 1;

    if(counter>=20) setCounter(20);//cant go above 20
    else setCounter(counter+1);
  };

  const removeValue=()=>{
    if(counter<=0) setCounter(0);//cant go below 0
    else setCounter(counter-1)
  }
  return (
    <>
      <h1>Hii there stranger</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addValue}>add value</button>
      <br />
      <button onClick={removeValue}>remove value</button>
    </>
  );
}

export default App;
//react controls the ui updatation as seen here the counter value is not updating even after we click the button add value.
