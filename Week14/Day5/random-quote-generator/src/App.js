import React from "react";
import quotes from "./components/Quotes";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quotes: quotes[this.randomNumber()],
    };
    this.previousNum = -1;
  }

  randomNumber = () => {
    return Math.floor(Math.random() * quotes.length);
  };

  randomQuote = () => {
    let random = this.randomNumber();
    while (random == this.previousNum) {
      random = this.randomNumber();
      console.log(random, this.previousNum);
    }
    this.previousNum = random;
    this.setState({
      quotes: quotes[random],
    });
  };

  render() {
    return (
      <div className="flex justify-center items-center flex-column vh-100 ba">
        <p>Quote: {this.state.quotes.quote}</p>
        <p>-Author: {this.state.quotes.author.length === 0 ? "Anonymous" : this.state.quotes.author}</p>
        <button className="f6 link dim br-pill ba bw2 ph3 pv2 mb2 dib light-purple h3" onClick={this.randomQuote}>
          New Quote
        </button>
      </div>
    );
  }
}

export default App;
