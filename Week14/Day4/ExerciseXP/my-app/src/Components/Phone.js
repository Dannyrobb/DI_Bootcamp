import React from "react";

class Phone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Samsung",
      model: "Galaxy S20",
      color: "black",
      year: 2020,
    };
  }

  colorChange = () => {
    if (this.state.color === "black") {
      this.setState({ color: "blue" });
    } else {
      this.setState({ color: "black" });
    }
  };

  render() {
    return (
      <>
        <div className="tc grow bg-gray br3 pa3 ma2 dib shadow-5 w5 h5">
          <h1 className="red">My phone is a {this.state.brand}</h1>
          <h2 className={this.state.color}>
            It is a {this.state.color} {this.state.model} from {this.state.year}
          </h2>
          <button onClick={this.colorChange}>Color Change !!!!!</button>
        </div>
      </>
    );
  }
}

export default Phone;
