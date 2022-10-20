import "./App.css";
import Navbar from "./components/Nav";
import Cards from "./components/Cards";
import React from "react";
const data = require("./components/characters.json");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { highScore: 0, currentScore: 0, Clicked: false, data };
  }

  randomiseArray = (array) => {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
  };

  shuffleArray = () => {
    const shuffledArr = this.randomiseArray(this.state.data.superheroes);
    console.log(shuffledArr);
  };

  handleClick = (id) => {
    this.handleScore(id);
    this.shuffleArray(this.state.data);
  };

  handleIncrement = () => {
    this.setState({ currentScore: this.state.currentScore + 1 });
  };

  handleScore = (id) => {
    this.state.data.superheroes.forEach((element) => {
      if (id === element.id && element.clicked === false) {
        element.clicked = true;
        this.setState({ Clicked: false });
        this.handleIncrement();
      } else if (id === element.id && element.clicked === true) {
        if (this.state.currentScore > this.state.highScore) {
          this.setState({ highScore: this.state.currentScore });
        }
        this.setState({ currentScore: 0 });
        this.setState({ Clicked: true });
        this.state.data.superheroes.forEach((element) => (element.clicked = false));
        console.log(this.state.data.superheroes);
      }
    });
  };

  render() {
    return (
      <div>
        <Navbar currentScore={this.state.currentScore} highScore={this.state.highScore} />
        <div className="cardContainer">
          {this.state.data.superheroes.map((hero) => {
            return (
              <Cards
                id={hero.id}
                key={hero.id}
                name={hero.name}
                image={hero.image}
                occupation={hero.occupation}
                handleClick={this.handleClick}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
