import React from 'react'

const UsingTernaryOperator = () => {
    const isLoggedIn = true; // Change this to false to see the other case
  return (
    <div>
        <h1>Conditional Rendering with Ternary Operator</h1>
        <hr/>
        {isLoggedIn ? <p>Welcome back! to Admin panel</p> : <p>Please log in to access the Admin panel.</p>}
    </div>
  )
}

export default UsingTernaryOperator