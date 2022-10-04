import React from "react";

class Output extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="output">
        <p name="name">{this.props.yourname}</p>

        <p name="yourage">{this.props.yourage}</p>

        <p name="yourGender">{this.props.yourgender}</p>

        <p name="yourDestination">{this.props.destination}</p>

        <p>Your Diatery Restrictions:</p>

        <span id="restrictions">
          <p> {this.props.nutsfree}</p>
          <p>{this.props.dairyfree}</p>
          <p>{this.props.vegan}</p>
        </span>
      </div>
    );
  }
}

export default Output;
