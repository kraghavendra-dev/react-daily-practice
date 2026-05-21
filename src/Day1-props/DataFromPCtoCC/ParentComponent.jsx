import React from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
    const userDetails = {
        name: "Raghavendra Karingu",
        email: "raghavendra6karingu@example.com",
        age: 25,
        city: "Hyderabad"
    };
  return (
    <div>
        <h1>Sending Data from Parent to Child Component</h1>
        <div>
            <h2>Parent Component</h2>
            <p>Here, we are passing user details to the child component with props:</p>
        </div>
        <ChildComponent user={userDetails}/>
    </div>
  )
}

export default ParentComponent