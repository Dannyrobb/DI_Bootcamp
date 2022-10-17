import React from "react";

class Errors extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
    console.log("error info ", errorInfo);
    this.setState({ error: error });
  }

  render() {
    if (this.state.error) {
      return (
        <>
          <h2>Something went wrong. Its ok. Keep working, and we will work on the error!</h2>
          <div>{this.state.error && this.state.error.toString()}</div>
        </>
      );
    }
    return this.props.children;
  }
}

export default Errors;
