import React from "react";
import "./style.css";

function CharacterCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img
          alt={props.name}
          src={props.image}
        />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Count:</strong> {props.count}
          </li>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          
          { props.count > 5 && (
            <li>
              <strong>Location:</strong> {props.location}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default CharacterCard;
