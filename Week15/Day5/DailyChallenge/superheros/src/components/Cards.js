import React from "react";

function Cards(props) {
  return (
    <div className="card" onClick={() => props.handleClick(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="img-content">
        <ul>
          <li>
            <strong>Name: </strong>
            {props.name}
          </li>
          <li>
            <strong>Occupation: </strong>
            {props.occupation}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Cards;
