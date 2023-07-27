import React, { useState, useEffect } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      setCounter(100);
    },[]);
  return (
    <div style={{display:"grid", placeItems:"center"}}>
        <button style={{fontSize:"30px"}} onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
        <h1 style={{color:"yellow"}}>{counter}</h1>
        <button style={{fontSize:"30px"}} onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  )
}

export default Counter