import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import CharacterCard from "./components/CharacterCard"


function App() {


  return (
    <Wrapper>
      {/* props.children in Title */}
      <Title>Friends List</Title>
      <CharacterCard 
        name="SpongeBob"
        image="https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014"
        occupation="Fry Cook"
        location="A Pineapple Under the Sea"
      /> 
    </Wrapper>
  );
}

export default App;
