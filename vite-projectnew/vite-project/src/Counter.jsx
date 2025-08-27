import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0)
    const changeData = ()=>{
        setCount(count+1)
    }
  return (
    
    <>
    <div>
  <h1>props in react js</h1>
     <h3>Count is -- {count}</h3>
     <button onClick={changeData}>Click</button> 
     
     
         </div> 
    </>
   
  )
}
export default Counter;
