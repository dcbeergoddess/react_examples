import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import CharacterCard from "./components/CharacterCard"
import friendsJson from "./friends.json"




function App() {

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
        />

      ))}

    </Wrapper>
  );
}

export default App;
