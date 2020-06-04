import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import CharacterCard from "./components/CharacterCard"
import friendsJson from "./friends.json"




class App extends React.Component {
  state = {
    cardsVisible: [1, 2, 3]
  }

  hideCard = (id) => {

    // const newCards = [];
    // this.state.cardsVisible.map( cardId => {
    //   if( cardId !== id ){
    //     newCards.push(cardId)
    //   }
    // })
    // this.setState({cardsVisible: newCards})

    //cardId is the identifier you are using as you loop through the array
    
    this.setState({ cardsVisible: this.state.cardsVisible.filter( cardId => cardId !==id) })
  }

  render() {
    return (
      <Wrapper>
        {/* props.children in Title */}
        <Title>Friends List</Title>

        {friendsJson.map(friend => (
          <CharacterCard
            key={friend.id}
            id={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
            cardsVisible={this.state.cardsVisible}
            hideCard={this.hideCard}
          />
        ))}

      </Wrapper>
    );
  }  
}

export default App;
