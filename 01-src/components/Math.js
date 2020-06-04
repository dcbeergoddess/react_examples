import React from "react"

function Math(props){
  let answer

  switch(props.operation){
    case "add":
      answer = parseInt(props.num1) + parseInt(props.num2)
      break;

    case "subtract":
      answer = parseInt(props.num1) - parseInt(props.num2)
      break;

    case "multiply":
      answer = parseInt(props.num1) * parseInt(props.num2)
      break;  
      
    case "divide":
      answer = parseInt(props.num1) / parseInt(props.num2)
      break;  

      default:
        answer = "Could not compute."
  }
  return (
    <span>{answer}</span>
  )
}

export default Math