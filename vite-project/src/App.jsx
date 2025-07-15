import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'

function App() {
    const [count, setCount] = useState(0)
    const changeData = ()=>{
        setCount(count+1)
    }
  return (
    
    <>
   
         <Counter />
    </>
   
  )
}
export default App;
