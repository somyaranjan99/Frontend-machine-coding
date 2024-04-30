import React,{useState} from 'react'

const Counter = () => {
    const [count,setCounter]=useState(0);
    const handleCount=()=>{
        setCounter((prev)=>prev+1)
    }
  return (
    <div>
        <h1 data-testid="count">{count}</h1>
        <button onClick={handleCount}>Increment Counter</button>
    </div>
  )
}

export default Counter