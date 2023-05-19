import logo from './logo.png';
import './App.css';
//import Map from "./Map"

import { BrowserRouter } from 'react-router-dom';

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

function App() {
  return (
    <BrowserRouter>
    <div className="relative z-0 navbarColor">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar />
      </div>
      
      <div className="App-header">
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
      </div>
      <body className="App-body">
        {/*<Map />*/}
      </body>
      <About />
      <Tech />
      <Experience />
      <Feedbacks />
      <Works />
      
    </div>
    </BrowserRouter>
    
  );
}

export default App;
