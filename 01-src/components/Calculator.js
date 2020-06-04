import React from "react"
import Math from "./Math"

function Calculator(props) {

  return (
    <>
      <p>
        333 + 333 = <Math num1={333} num2={333} operation="add" />
      </p>
      
      <p>
        999 - 333 = <Math num1={999} num2={333} operation="subtract" />
      </p>

      <p>
        333 * 2 = <Math num1={333} num2={2} operation="multiply" />
      </p>

      <p>
        2664 / 4 = <Math num1={2664} num2={4} operation="divide" />
      </p>
    </>
  )
}

export default Calculator 