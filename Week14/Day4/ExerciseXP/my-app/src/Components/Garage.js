import React from "react";

class Garage extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="tc grow bg-light-green br3 pa3 ma2 dib shadow-5 w5 h5">
        <h1>Who lives in my {this.props.size} garage?</h1>
      </div>
    );
  }
}

export default Garage;
