import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
let myObj={
  username:"mavricx",
  age:21
}
const newArray=[1,2,3,4,5]
  return (
    <>
      {/* <Card channel="this is a prop" someObj={myObj} arr={newArray}/> */}
      <Card username="Raziya khatun" btnText="visit me"/>
      <Card username="Mavricx" btnText="click here to visit me"/>
    </>
  );
}

export default App;
