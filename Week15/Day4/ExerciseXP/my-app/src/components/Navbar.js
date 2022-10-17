import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="navbar">
        <ul id="navUl">
          <li className="navItem">
            <Link to="/">Home</Link>
          </li>
          <li className="navItem">
            <Link to="/profile">Profile</Link>
          </li>
          <li className="navItem">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="navItem">
            <Link to="/postlist">PostList</Link>
          </li>
          <li className="navItem">
            <Link to="/example1">Example1</Link>
          </li>
          <li className="navItem">
            <Link to="/example2">Example2</Link>
          </li>
          <li className="navItem">
            <Link to="/example3">Example3</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
