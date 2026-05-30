import React from 'react'
import './ConditionalClassName.css';

const ConditionalClassName = () => {
  const userRole = {
    role: "admin",
    isActive: true
  };

  return (
    <div>
        <h1 className={userRole.isActive ? "active" : "inactive"}>Conditional className</h1>
    </div>
  )
}

export default ConditionalClassName