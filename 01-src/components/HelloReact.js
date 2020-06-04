import React from "react";

function HelloReact(props) {
  return (
    <div>
      <p>Hello {props.name}! I love wearing {props.favColor} </p>

      <p>I am {props.age} years old!</p>

      <p>My favorite dog is a {props.favAnimal}! I love drinking {props.favDrink}. </p>

      <p>My favorite person to hang out with is {props.favPerson}. </p>

      <p>My car: </p>
      <ul>
        <li>Make: {props.car.make}</li>
        <li>Model: {props.car.model.toLowerCase()}</li>
        <li>Color: {props.car.color}</li>
      </ul>

      {/* Conditional Rendering */}
      { props.friends.length > 0 && (
        <>
        <p>Friends: </p>
        <ul>
          {props.friends.map( friend => (
            <>
            <li>{friend}</li>
            <p>my buddies</p>
            </>
          ))}
        </ul> 
        </>
      )}
    </div>
  )
}

export default HelloReact;
