import { useState, useEffect } from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
  const [username, setUsername] = useState();

  useEffect(() => {
    async function getUsername() {
      const key = window.NL_OS === 'Windows' ? 'USERNAME' : 'USER';
      let value = '';
      try {
          value = await window.Neutralino.os.getEnv(key);
      }
      catch(err) {
          console.error(err);
      }
      setUsername(value);
    };
    getUsername();
  }, [setUsername]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, {username}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
