import React, { useContext } from 'react'
import { UserContext } from './UserContext';

const UsersDetailsPage = () => {
    const { userDetails } = useContext(UserContext);
  return (
    <div>
        <h1>UsersDetailsPage</h1>
        <hr/>
        <h3>{userDetails.name}'s Details</h3>
        <p><strong>Name:</strong> {userDetails.name}</p>
        <p><strong>Email:</strong> {userDetails.email}</p>
        <p><strong>Age:</strong> {userDetails.age}</p>
        <p><strong>Location:</strong> {userDetails.location}</p>
        <p><strong>Role:</strong> {userDetails.role}</p>
    </div>
  )
}

export default UsersDetailsPage