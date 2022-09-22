import React from "react";

class Car extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="tc grow bg-light-green br3 pa3 ma2 dib shadow-5 w5 h5">
        <h1>
          This car is a {this.props.color} {this.props.carname.name}
        </h1>
      </div>
    );
  }
}

export default Car;
