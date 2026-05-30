import React, { useState, useMemo } from 'react'

const ExUseMemo = () => {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState("");

    const expensiveCalculation = useMemo(()=>{
         console.log("Performing expensive calculation...");
        let total = 0;
        for(let i=0; i<1000000000; i++){
            total += i;
        }
        return total;
    },[]) // The empty dependency array ensures that the expensive calculation is only performed once when the component mounts.

  return (
    <div>
        <h2>Expensive Calculation: {expensiveCalculation}</h2>
        <input
           type="text"
           placeholder='Type something...'
           value={inputValue}
           onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={()=>setCount(count+1)}>Count: {count}</button>
    </div>
  )
}

export default ExUseMemo