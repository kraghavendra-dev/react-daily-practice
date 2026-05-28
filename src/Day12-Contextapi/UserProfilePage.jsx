import React, { useContext } from 'react'
import { UserContext } from './UserContext';

const UserProfilePage = () => {
    const { userDetails} = useContext(UserContext);
  return (
    <div>
        <h1> UserDetails</h1>
        <hr/>
        <ul>
            <li><strong>Name:</strong> {userDetails.name}</li>
            <li><strong>Email:</strong> {userDetails.email}</li>
            <li><strong>Age:</strong> {userDetails.age}</li>
            <li><strong>Location:</strong> {userDetails.location}</li>
            <li><strong>Role:</strong> {userDetails.role}</li>
        </ul>
    </div>
  )
}

export default UserProfilePage