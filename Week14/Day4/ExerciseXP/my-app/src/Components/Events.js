import React from "react";

class Events extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <div className="tc grow bg-gray br3 pa3 ma2 dib shadow-5 w5 h5">
          <button onClick={this.props.clickFunction}>Click me</button>
        </div>
        <div className="tc grow bg-gray br3 pa3 ma2 dib shadow-5 w5 h5">
          <input id="input" onKeyPress={this.props.handleKeyPress}></input>
        </div>
        <div className="tc grow bg-gray br3 pa3 ma2 dib shadow-5 w5 h5">
          <button onClick={this.props.isToggleFunction}>{this.props.textTextContent}</button>
        </div>
      </>
    );
  }
}

export default Events;
