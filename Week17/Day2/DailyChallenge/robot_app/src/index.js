import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import App from "./App";
import { requestRobots, searchRobots } from "./redux/reducers";

import "./index.css";

const rootReducers = combineReducers({ requestRobots, searchRobots });

const store = createStore(rootReducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// WEBPACK FOOTER //
// ./src/index.js
