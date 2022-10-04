import React from "react";

class BuggyCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    if (this.state.counter > 4) {
      throw new Error("I Crashed!");
    }
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.counter}</button>
      </div>
    );
  }
}

export default BuggyCounter;
