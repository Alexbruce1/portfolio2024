import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import ABIcon from '../../src/assets/ABIcon.png';
import Sidebar from "./Sidebar";

function Header({ sidebarActive, hamburgerRef, toggleSidebar, sidebarRef, darkMode, toggleDarkMode }) {
  return(
    <header className="App-header">
      <div className='app-header-container'>
        {/* {} */}




        <div className='header-hamburger-menu-container'>
          <div 
            className={sidebarActive ? 'header-hamburger-container-active' : 'header-hamburger-container'} 
            ref={hamburgerRef}
            onClick={toggleSidebar}
          >
            <div className='header-hamburger-bar hamburger-bar1'></div>
            <div className='header-hamburger-bar hamburger-bar2'></div>
            <div className='header-hamburger-bar hamburger-bar3'></div>
          </div>
          {sidebarActive && (
            <div ref={sidebarRef}>
              <Sidebar
                darkMode={darkMode}
                toggleSidebar={toggleSidebar}
                toggleDarkMode={toggleDarkMode}
              />
            </div>
          )}
        </div>

        
        <Link to="/" className='app-header-name'>
          <img src={ABIcon} className='app-AB-icon' alt="AB Icon" />
          <p className='header-title'>Alex</p>
        </Link>
      </div>
    </header>
  )
}

export default Header;