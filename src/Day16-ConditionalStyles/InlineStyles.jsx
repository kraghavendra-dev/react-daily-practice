import React from 'react'

const InlineStyles = () => {
    const userRole = {
        role: "admin",
        isActive: true
    };
  return (
    <div style={{backgroundColor: userRole.isActive ? 'lightgreen' : 'lightgray', padding: "20px", borderRadius: "5px"}}>
        <h1>Conditional Inline Styles</h1>
    </div>
  )
}

export default InlineStyles