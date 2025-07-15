
import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';
import WelcomeJSX from './WelcomeJSX';
import WelcomeMessage from './WelcomeMessage';
import UserCard from './UserCard';

// P.task of introduction of react, JSX and functional & class component
const App = () => { 
  return (
    <>
    <div>
     <Greeting name="Sweta" />
      <h1>Hello React</h1>
       <UserCard name="Sweta" age={30} location="Surat, India" />
    </div>
    <Greeting />
    <WelcomeJSX />
    <WelcomeMessage />
    </>
  );
}
 
export default App;

// P.task-1 of props and state
