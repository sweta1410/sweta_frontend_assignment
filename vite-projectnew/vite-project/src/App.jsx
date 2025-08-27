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
import KeyFunction from './KeyFunction'
import MapFunction from './MapFunction'
// import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
// import Navbar from './Navbar'
// import Home from './Home';
// import About from './About';
// import Contact from './Contact';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     // Router
    {/* <BrowserRouter>
  <Navbar />
<Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
</BrowserRouter> */}
     {/* <DataFetcher /> */}
     {/* <ConditionalComponent /> */}
     {/* <Counter /> */}
     {/* <CounterComponent /> */}
     {/* <CreateForm /> */}
     {/* <DynamicInputForm /> */}
     {/* <EventHandling /> */}
     {/* <HookuseRef /> */}
     {/* <LifecycleFunction /> */}
     {/* <LoginButton /> */}
     {/* <ValidationForm /> */}
     {/* <KeyFunction /> */}
     <MapFunction />
     {/* <BrowserRouter /> */}

    </>
    
  )
}

export default App
