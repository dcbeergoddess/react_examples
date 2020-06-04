//Option 1
this.setState(prevState => {
  return { count: prevState.count + 1 };
});
// Option 2
// Make a cloned copy of everything in state
const newState = {...this.state}
// Modify the cloned version
newState.count = this.state.count + 1
// Replace current state with modified clone
this.setState(newState)

//==========================================

/* anytime you call a function with an argument inside you need to call an anyomounous function */

<button onClick={() => props.hideCard(props.id)}>close</button>


//======================================

// cardsVisiible: name of state property
// cardId: the value of the array item as we loop through them
// cardId !== id :  the condition on which we decide what items to keep
this.setState({ cardsVisible: this.state.cardsVisible.filter( cardId => cardId !== id) })

//==========================================

handleInputChange = event => {
  // Getting the value and name of the input which triggered the change
  //this is destructuring
  const { name, value } = event.target;

  //undestrustruted
  // const name = event.target.name
  // const value = event.target.value

  // Updating the input's state
  this.setState({
    [name]: value
  });
};






