import React, { Component } from "react";
import { connect } from "react-redux";
import { setSearchField, requestRobots } from "./redux/actions";

import Cards from "./components/Cards";
import SearchBox from "./components/SearchBox";

import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const filteredRobots = this.props.robots.filter((robot) => {
      return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1"> Robo - characters </h1>
        <SearchBox searchChange={this.props.onSearchChange} />
        <Cards robots={filteredRobots} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
