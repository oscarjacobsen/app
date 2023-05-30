import React, { useEffect, useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';


import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

/*
const Navbar = () => {
    const [showBasic, setShowBasic] = useState(false);
    const [active, setActive] = useState("");
    return (
    <nav>
        <div className="nav-inner">
            <span className="logo">
            <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='App-logo' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Welcome all you <br></br> <code>Digital Engineers!</code>
          </p>
        </Link>
            </span>
        </div>
        <div className="links">
            <a href="#">Homepage</a>
            <a href="#">IfcViewer</a>
            <a href="#">Homo</a>
        </div>
    </nav>
  );}
  */

  const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top">
        <a className="navbar-brand" href="#">
        <img src={logo} alt='logo' className='App-logo' />
          <p className='text-white text-[12px] font-bold cursor-pointer flex '>
            Welcome all you <br></br> <code>Digital Engineers!</code>
          </p>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
  
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown link
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  };

  export default Navbar;