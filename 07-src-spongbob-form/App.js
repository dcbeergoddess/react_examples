import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import CharacterCard from "./components/CharacterCard"
import friendsJson from "./friends.json"


class App extends React.Component {

  state = {
    favoriteCharacter: "",
    leastFavoriteCharacter: ""
  }

  handleInputChange = event => {

    const { name, value } = event.target
    this.setState({ [name]: value })

  }

  handleFormSubmit = event => {
    event.preventDefault();

    const msg = `Your Favorite Character is ${this.state.favoriteCharacter} and Your Least Favorite Character is ${this.state.leastFavoriteCharacter}`

    alert(msg);
    this.setState({
      leastFavoriteCharacter: "",
      favoriteCharacter: ""
    });
  }

  render() {
    return (
      <Wrapper>
        {/* props.children in Title */}
        <Title>Friends List</Title>
        <div>
        <p>
          My Favorite character: {this.state.favoriteCharacter}
        </p>
        <p>
          My Least Favorite character: {this.state.leastFavoriteCharacter}
        </p>
        <form className="form">
          <input
          value={this.state.favoriteCharacter}
          name="favoriteCharacter"
          onChange={this.handleInputChange}
          type="text"
          placeholder="Favorite Character"
          />

          <input
          value={this.state.leastFavoriteCharacter}
          name="leastFavoriteCharacter"
          onChange={this.handleInputChange}
          type="text"
          placeholder="Least Favorite Character"
          />

          <button onClick={this.handleFormSubmit}>Save</button>

        </form>
        </div>

        {friendsJson.map(friend => (
          <CharacterCard
            key={friend.id}
            id={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}

      </Wrapper>
    );
  }  
}

export default App;
