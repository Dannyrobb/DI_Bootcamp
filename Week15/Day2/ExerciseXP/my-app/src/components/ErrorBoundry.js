import React from "react";

class ErrorBoundry extends React.Component {
  constructor(props) {
    super(props);
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
        </>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
