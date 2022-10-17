import React from "react";
import data from "./data.json";
class Example2 extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="list">
        {data.Skills.map((item) => (
          //   item.map((element) => {
          <div>
            <h1>{item.Area} </h1>
            <ul>
              {item.SkillSet.map((skill) => {
                return <li>{skill.Name}</li>;
              })}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default Example2;
