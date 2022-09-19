import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//Exercise 1
// const myElement = React.createElement("h1", {}, "I do not use JSX!");

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(myElement);

//Exercise 2 1

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render("Hello World!");

//Exercise 2 2
// const myElement = <h1>I love JSX!</h1>;

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(myElement);

//Exercise 2 3
// const sum = 5 + 5;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(`React is ${sum} times better with JSX`);
reportWebVitals();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
