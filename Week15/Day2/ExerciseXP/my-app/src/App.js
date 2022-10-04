import "./App.css";
import React from "react";
import BuggyCounter from "./components/BuggyCounter";
import ErrorBoundry from "./components/ErrorBoundry";
import FavoriteColor from "./components/FavoriteColor";
class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ErrorBoundry>
            <BuggyCounter />
          </ErrorBoundry>
          <FavoriteColor />
        </header>
      </div>
    );
  }
}
export default App;
