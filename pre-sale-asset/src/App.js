
import './App.css';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState(20);
  const maxValue = 100;

  return (
    <div className="App">
      <Navbar/>
      <Home/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
    
  );
}

export default App;
