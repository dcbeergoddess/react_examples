import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import CharacterCard from "./components/CharacterCard"
import friendsJson from "./friends.json"




class App extends React.Component {
  state = {
    count: 0
  }

   //Changes state value of count when button is clicked 
  incrementClick = () => {
    this.setState({ count: this.state.count + 1 })
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
