import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome all you <code>Digital Engineers!</code>
        </p>
        <a
          className="App-link"
          href="https://oscarjacobsen.no"
          target="_blank"
          rel="noopener noreferrer"
        >
          My homepage
        </a>
      </header>
    </div>
  );
}

export default App;
