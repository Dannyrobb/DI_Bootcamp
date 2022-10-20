import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { connect } from "react-redux";
import { increaseCount, decreaseCount } from "./actions/index";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <div>{this.props.a}</div>
        <button onClick={this.props.handleIncrement}>+</button>
        <button onClick={this.props.handleDecrement}>-</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    a: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleIncrement: () => dispatch(increaseCount()),
    handleDecrement: () => dispatch(decreaseCount()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
