import React, { useState } from 'react'

const ControlledComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <div>
        <h1>Controlled Components</h1>
        <p>A controlled component is one where React state controls the input value. You
           use useState or any state management to store and update the input value.
        </p>
        <form style={{margin: "20px", width: "250px"}}>
            <label style={{display: "block", marginBottom: "5px"}}>
                Name
            </label>
                
                <input
                   type="text"
                   placeholder='Enter your name'
                   value={name}
                   onChange={(e) => setName(e.target.value)}
                />

            
            <label style={{display: "block", marginBottom: "5px"}}>
                Email
            </label>
            <input
                type="email"
                placeholder='Enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <label style={{display: "block", marginBottom: "5px"}}>
                Password
            </label>
            <input
                type="password"
                placeholder='Enter your password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
        </form>
        <button type="submit">Submit</button>
        <hr/>
    </div>
  )
}

export default ControlledComponent