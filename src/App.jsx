import React from 'react'
import UserProfilePage from './Day12-Contextapi/UserProfilePage'
import UserProvider from './Day12-Contextapi/UserContext'
import UsersDetailsPage from './Day12-Contextapi/UsersDetailsPage'



const App = () => {
  return (
    <div>
      <UserProvider>
          <UserProfilePage/>
          <UsersDetailsPage/>
      </UserProvider>
        
    </div>
  )
}

export default App
