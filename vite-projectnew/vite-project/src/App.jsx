import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DataFetcher from './ClassComponent'
import ConditionalComponent from './ConditionalComponent'
import Counter from './Counter'
import CounterComponent from './CounterComponent'
import CreateForm from './CreateForm'
import DynamicInputForm from './DynamicInputForm'
import EventHandling from './EventHandling'
import HookuseRef from './HookuseRef'
import LifecycleFunction from './LifecycleFunction'
import LoginButton from './LoginButton'
import ValidationForm from './ValidationForm'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     {/* <DataFetcher /> */}
     {/* <ConditionalComponent /> */}
     {/* <Counter /> */}
     {/* <CounterComponent /> */}
     {/* <CreateForm /> */}
     {/* <DynamicInputForm /> */}
     {/* <EventHandling /> */}
     <HookuseRef />
     {/* <LifecycleFunction /> */}
     {/* <LoginButton /> */}
     {/* <ValidationForm /> */}
     

    </>
    
  )
}

export default App
