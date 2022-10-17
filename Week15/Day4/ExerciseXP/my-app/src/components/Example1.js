import React from "react";
import data from "./data.json";
class Example1 extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="list">
        {data.SocialMedias.map((item) => (
          <ul className="ul">{<li>{item}</li>}</ul>
        ))}
      </div>
    );
  }
}

export default Example1;
