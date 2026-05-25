import React, { useState } from 'react'

const ConditionalDropdown = () => {
    const countries = [
    { id: "in", name: 'India' },
    { id: "us", name: 'USA' },
    { id: "uk", name: 'UK' },
    { id: "au", name: 'Australia' },
    { id: "ca", name: 'Canada' }
    ];
    const states = {
    in: [
        { id: "ap", name: 'Andhra Pradesh' },
        { id: "ar", name: 'Arunachal Pradesh' },
        { id: "as", name: 'Assam' },
        { id: "br", name: 'Bihar' },
        { id: "ct", name: 'Chhattisgarh' },
    ],
    us: [
        { id: "ca", name: 'California' },
        { id: "tx", name: 'Texas' },
        { id: "fl", name: 'Florida' },
        { id: "ny", name: 'New York' },
        { id: "il", name: 'Illinois' }
    ],
    uk: [
        { id: "eng", name: 'England' },
        { id: "sco", name: 'Scotland' },
        { id: "wal", name: 'Wales' }
    ],
    au: [
        { id: "nsw", name: 'New South Wales' },
        { id: "vic", name: 'Victoria' },
        { id: "qld", name: 'Queensland' }
    ],
    ca: [
        { id: "on", name: 'Ontario' },
        { id: "qc", name: 'Quebec' },
        { id: "bc", name: 'British Columbia' }
    ]
   };
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedState, setSelectedState] = useState("");
  return (
    <div>
        <h1>Conditional Dropdown</h1>
        <hr/>
        <p>Select Country:</p>
        <select value={selectedCountry} onChange={(e)=> setSelectedCountry(e.target.value)}>
            <option value="">--select country--</option>
            {
                countries.map((country)=>(
                    <option key={country.id} value={country.id}>
                        {country.name}
                    </option>
                ))
            }
        </select>
        <p>Select State:</p>
        <select value={selectedState} onChange={(e)=> setSelectedState(e.target.value)}>
            <option value="" disabled={!selectedCountry}>--select State--</option>
            {
                selectedCountry && states[selectedCountry].map((state)=>(
                    <option key={state.id} value={state.id}>
                        {state.name}
                    </option>
                ))
            }
        </select>
    </div>
  )
}

export default ConditionalDropdown