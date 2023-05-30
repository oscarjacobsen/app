import logo from './logo.png';
import './App.css';
//import Map from "./Map"

import { BrowserRouter } from 'react-router-dom';
import React, { useState } from 'react';
import {Navbar, Switch, Sidebar} from './components';


function DirUploadFiles() {
  const [count, setCount] = useState(0);

  function handleClick() {
    document.getElementById("filepicker").addEventListener(
      "change",
      (event) => {
        let output = document.getElementById("listing");
        for (const file of event.target.files) {
          let item = document.createElement("li");
          item.textContent = file.webkitRelativePath;
          output.appendChild(item);
        }
      },
      false
    );
  }

  return (
    <div>
    <input
    type="file"
    id="filepicker"
    name="fileList"
    onclick="{handleClick}"
    webkitdirectory=""
    multiple=""
  />
  <ul id="listing" />
  </div>

  );
}

function MyButton({ name }) {
  return (
    <button>
      I'm a button - {name}
    </button>
  );
}

function App() {
  const [value, setValue] = useState(false);
  return (

    <BrowserRouter>
    <div className="relative z-0 navbarColor">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Sidebar />
      <Switch 
        isOn={value}
        onColor="#EF476F"
        handleToggle={() => setValue(!value)}
      />
      <MyButton name="Oscardo"/>
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
      
      
    </div>
    </BrowserRouter>
    
  );
}

export default App;
