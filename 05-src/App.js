import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import CharacterCard from "./components/CharacterCard"
import friendsJson from "./friends.json"




class App extends React.Component {
  state = {
    count: 0,
    myname: "rachel"
  }

   //Changes state value of count when button is clicked 
  incrementClick = () => {

    //shorthand way of what is below
    /*
    this.setState(prevState => {
      //in brackets this is what you would change
      return { count: prevState.count + 1}
    })
    */

    // make a cloned copy of everything in state
    const newState = {...this.state}
    //modify the cloned version
    newState.count = this.state.count + 1
    // Replace current state with the modified clone
    this.setState(newState)
  }

  decrementClick = () => {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    return (
      <Wrapper>
        {/* props.children in Title */}
        <Title>Friends List</Title>

        {friendsJson.map(friend => (
          // <span>{friend.name}</span>
          <CharacterCard
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
            count={this.state.count}
          />

        ))}

        <button onClick={this.incrementClick}>Increment</button>

        <button onClick={this.decrementClick}>Decrement</button>

      </Wrapper>
    );
  }  
}

export default App;
