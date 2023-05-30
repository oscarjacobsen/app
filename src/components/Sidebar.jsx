import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import { logo, menu, close } from "../assets";

const Sidebar = () => {
    return (
      <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
        <CDBSidebar textColor="#fff" backgroundColor="#333">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
        <img src={logo} alt='logo' className='App-logo' />
          <p className='text-white text-[12px] font-bold cursor-pointer flex '>
            Welcome all you <br></br> <code>Digital Engineers!</code>
          </p>
            </a>
          </CDBSidebarHeader>
  
          <CDBSidebarFooter style={{ textAlign: 'center' }}>
            <div
              className="sidebar-btn-wrapper"
              style={{
                padding: '20px 5px',
              }}
            >
              <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
        <img src={logo} alt='logo' className='App-logo' />
          <p className='text-white text-[12px] font-bold cursor-pointer flex '>
            Welcome all you <br></br> <code>Digital Engineers!</code>
          </p>
            </a>
            </div>
          </CDBSidebarFooter>
        </CDBSidebar>
      </div>
    );
  };
  
  export default Sidebar;