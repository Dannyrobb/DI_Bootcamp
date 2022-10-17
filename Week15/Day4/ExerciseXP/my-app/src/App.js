import logo from "./logo.svg";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Errors from "./components/Errors";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Shop from "./components/Shop";
import PostList from "./components/PostList";
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  webHook = async () => {
    let data = await fetch("https://webhook.site/8555f766-3125-4d41-bdc7-dd64eecd4a89", {
      method: "POST",
      headers: { Accept: "application.json", "Content-Type": "application/json" },
      body: JSON.stringify({ key1: "myusername", email: "mymail@gmail.com", name: "Isaac", lastname: "Doe", age: 27 }),
    })
      .then((res) => {
        return res;
      })
      .then((res) => {
        console.log(typeof res);
      });

    console.log(data);
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <button onClick={this.webHook}>Click to send request</button>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/profile" element={<Profile />}></Route>

            <Route
              exact
              path="/shop"
              element={
                <Errors>
                  <Shop />
                </Errors>
              }
            ></Route>
            <Route exact path="/postlist" element={<PostList />}></Route>
            <Route exact path="/example1" element={<Example1 />}></Route>
            <Route exact path="/example2" element={<Example2 />}></Route>
            <Route exact path="/example3" element={<Example3 />}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
