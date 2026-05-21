import React from 'react'

const ChildComponent = ({ user }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
      <p>City: {user.city}</p>
    </div>
  )
}

export default ChildComponent