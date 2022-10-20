import React from "react";

function Navbar(props) {
  return (
    <header>
      <div>
        <h1>Superheroes Memory Game</h1>
        <nav>
          <p>
            Score: <span>{props.currentScore}</span>
          </p>
          <p>
            Top Score: <span>{props.highScore}</span>{" "}
          </p>
          {props.children}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
