import React, { useState } from 'react'

const CounterComp = () => {
    const [count, setCount] = useState(0);

  return (
    <div>
        <h1>Counter Components</h1>
        <p>This is a simple counter component.</p>
        <hr/>
        <div>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
            <span style={{margin: "0 10px"}}>{count}</span>
            <button onClick={()=>setCount(count+1)}>Increment</button>

        </div>
    </div>
  )
}

export default CounterComp