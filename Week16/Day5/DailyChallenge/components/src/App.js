import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { Component } from "./components/Component";
function App() {
  const [info, setInfo] = useState([
    {
      title: "title1",
      number: 100,
    },
    {
      title: "title2",
      number: 200,
    },
    {
      title: "title3",
      number: 300,
    },
    {
      title: "title4",
      number: 400,
    },
    ,
  ]);
  console.log(info.first);
  return (
    <div className="App">
      {info.map((item) => {
        return <Component title={item.title} number={item.number} />;
      })}
    </div>
  );
}

export default App;
