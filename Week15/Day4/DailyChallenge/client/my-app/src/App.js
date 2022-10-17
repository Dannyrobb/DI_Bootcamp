import React from "react";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      header: "",
      message: null,
      sent: false,
    };
  }
  fetchData = async () => {
    const resp = await axios.get("http://localhost:3001/api/hello");
    this.setState({ header: resp.data });
  };
  componentDidMount() {
    this.fetchData();
  }

  changeHandler = (event) => {
    this.setState({ message: event.target.value });
  };

  postData = async (e) => {
    e.preventDefault();
    if (this.state.message) {
      this.setState({ sent: true });
    }
    return await fetch("http://localhost:3001/api/world", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ post: this.state.message }),
    });
  };

  render() {
    return (
      <>
        <h1>{this.state.header}</h1>
        <form onSubmit={this.postData}>
          <h2>Post to server:</h2>
          <input type="text" name="postToServer" onChange={this.changeHandler}></input>
          <button>Submit</button>
        </form>
        <h2> {this.state.sent && `Request sent with ${this.state.message}`}</h2>
      </>
    );
  }
}

export default App;
