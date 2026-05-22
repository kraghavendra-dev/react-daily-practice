import React from 'react'

const UsingLogicalANDOperator = () => {
    const showMessage = true;
  return (
    <div>
        <h1>Conditional Rendering with Logical && Operator</h1>
        <hr/>
        {showMessage && <p>This message is shown because showMessage is true.</p>}
    </div>
  )
}

export default UsingLogicalANDOperator