import React, { Component } from "react";
import "./style.css";

class Form extends Component {
  // Setting the component's initial state
  state = {

    firstName: "",
    lastName: "",
    password: ""

  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    if(name === "password" && value.length > 15){
      value = value.substring(0, 14);
      console.log(value)
    }
      this.setState({
        [name]: value
      });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    let validationPassed = true

    const msg1 = `Fill out your first and last name please!`

    const msg2 = `Choose a more secure password, ${this.state.firstName} ${this.state.lastName}`

    
    if ( !this.state.firstName.length || !this.state.lastName.length ) {
      validationPassed = false
      alert(msg1)
    } else {
      if ( this.state.password.length < 6) {
        validationPassed = false
        alert(msg2)
      }
    }

    if( validationPassed ) {

    
    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
  }
    this.setState({
      firstName: "",
      lastName: "",
      password: ""
    });
    
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Hello {this.state.firstName} {this.state.lastName}
        </p>
        <form className="form">
          <input
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          <input
          value={this.state.password}
          name="password"
          onChange={this.handleInputChange}
          type="password"
          placeholder="Enter Password"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
