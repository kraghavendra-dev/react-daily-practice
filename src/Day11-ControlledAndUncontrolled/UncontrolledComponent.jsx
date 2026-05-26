import React, { useRef } from 'react'

const UncontrolledComponent = () => {
    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        alert("Entered Values:" + inputRef.current.value);
    };
  return (
    <div>
        <h1>Uncontrolled Components</h1>
        <p>An uncontrolled component is one where the form data is handled by the DOM itself. You can use refs to access the input value when needed.</p>
        <form>
            <label style={{display: "block", marginBottom: "5px"}}>
                Name
            </label>
            <input
               type="text"
               ref={inputRef}
                placeholder='Enter your name'
            
            />
        </form>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default UncontrolledComponent