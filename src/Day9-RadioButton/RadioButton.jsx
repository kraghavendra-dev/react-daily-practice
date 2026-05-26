import React, { useState } from 'react'

const RadioButton = () => {

   const [selectedOption, setSelectedOption] = useState("");

  return (
    <div>
        <h1>Radio Button</h1>
        <hr/>
        <p>Select Option:</p>
        <label>
            <input
                type="radio"
                value="Male"
                checked={selectedOption === "Male"}
                onChange={(e) => setSelectedOption(e.target.value)}
            />
            Male
        </label>
        <label>
            <input
                type="radio"
                value="Female"
                checked={selectedOption === "Female"}
                onChange={(e) => setSelectedOption(e.target.value)}
            />
            Female
        </label>
        <label>
            <input
                type="radio"
                value="Others"
                checked={selectedOption === "Others"}
                onChange={(e)=> setSelectedOption(e.target.value)}
            />
            Others
        </label>
    </div>
  )
}

export default RadioButton