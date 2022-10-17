import React from "react";
import data from "./data.json";
class Example3 extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="list">
        {data.Experiences.map((experience) => (
          <div>
            <a href={experience.url}>{experience.companyName} </a>
            <img src={experience.logo}></img>

            <ul>
              {experience.roles.map((role) => {
                return (
                  <ul>
                    <li>{role.title}</li>
                    <li>{role.description}</li>
                    <li>{role.startDate}</li>
                    <li>{role.endDate}</li>
                    <li>{role.location}</li>
                  </ul>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;
