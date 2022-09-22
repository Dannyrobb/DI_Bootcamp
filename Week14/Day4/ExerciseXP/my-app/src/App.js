import logo from "./logo.svg";
import "./App.css";
import Car from "./Components/Car";
import React from "react";
import Garage from "./Components/Garage";
import Events from "./Components/Events";
import Phone from "./Components/Phone";
import Color from "./Components/Color";
const carinfo = { name: "Ford", model: "Mustang" };

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      info: [carinfo],
      color: "blue",
      size: "small",
      isToggle: true,
      buttonText: "ON",
    };
  }

  toggleFunction = () => {
    if (this.state.isToggle === true) {
      this.setState({ isToggle: false });
      this.setState({ buttonText: "OFF" });
    } else {
      this.setState({ isToggle: true });
      this.setState({ buttonText: "ON" });
    }
  };

  clickMe = () => {
    return alert("I was clicked");
  };

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      alert(`The Enter key was pressed, your input is: ${document.getElementById("input").value}`);
    }
  };

  render() {
    return (
      <div className="flex flex wrap w50">
        <Color />
        <Phone />
        <Events
          clickFunction={this.clickMe}
          handleKeyPress={this.handleKeyPress}
          isToggleFunction={this.toggleFunction}
          textTextContent={this.state.buttonText}
        />
        {this.state.info.map((car) => {
          return <Car color={this.state.color} carname={car} />;
        })}
        <Garage size={this.state.size} />
      </div>
    );
  }
}

export default App;
