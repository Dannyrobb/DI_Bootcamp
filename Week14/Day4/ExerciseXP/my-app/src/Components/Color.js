import React from "react";

class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: "red",
    };
  }

  colorChangeBlue = () => {
    return this.setState({ favoriteColor: "blue" });
  };

  colorChange = () => {
    return this.setState({ favoriteColor: "yellow" });
  };

  componentDidMount() {
    setTimeout(this.colorChange, 5000);
  }
  render() {
    return (
      <>
        <div className="tc grow bg-gray br3 pa3 ma2 dib shadow-5 w5 h5">
          <h1>
            My favorite color is <i className={this.state.favoriteColor}>{this.state.favoriteColor}</i>
          </h1>
          <button onClick={this.colorChangeBlue}>Click here to change color!</button>
        </div>
      </>
    );
  }
}

export default Color;
