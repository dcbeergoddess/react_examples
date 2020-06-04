import React from "react";
import "./style.css";

function CharacterCard(props) {
  return (
    <>
        { props.cardsVisible.includes(props.id) === true && (
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
                <strong>Name:</strong> {props.name}
              </li>
              <li>
                <strong>Occupation:</strong> {props.occupation}
              </li>
              <li>
                <strong>Location:</strong> {props.location}
              </li>
            </ul>
            {/* anytime you call a function with an argument inside you need to call an anyomounous function */}
            <button onClick={() => props.hideCard(props.id)}>close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default CharacterCard;
