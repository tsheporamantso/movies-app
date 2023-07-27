import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0);
  return (
    <div style={{display:"grid", placeItems:"center"}}>
        <button onClick={() => setCounter(counter - 1)}>-</button>
        <h1 style={{color:"yellow"}}>{counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  )
}

export default Counter