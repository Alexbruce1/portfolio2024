import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import ABIcon from '../../src/assets/ABIcon.png';
import Sidebar from "./Sidebar";

function Header({ sidebarActive, hamburgerRef, toggleSidebar, sidebarRef, darkMode, toggleDarkMode, isMobile }) {
  const location = useLocation();

  return(
    <header className={sidebarActive ? "App-header App-header-active-sidebar" : "App-header"}>
      {!isMobile ? (
        <div className='app-header-container'>
          <Link to="/" className='app-header-name-fullsize'>
            <img src={ABIcon} className='app-AB-icon' alt="AB Icon" />
          </Link>
          <div className="header-nav-container">
            <Link 
              to="/" 
              onClick={toggleSidebar} 
              className={location.pathname === "/" ? "header-link header-link-active" : "header-link"}
            >Home</Link>
            {/* <Link 
              to="/resume" 
              onClick={toggleSidebar} 
              className={location.pathname === "/resume" ? "header-link header-link-active" : "header-link"}
            >Resume</Link> */}
            <Link 
              to="/tldr" 
              onClick={toggleSidebar} 
              className={location.pathname === "/tldr" ? "header-link header-link-active" : "header-link"}
            >At a Glance</Link>
            <Link 
              to="/contact" 
              onClick={toggleSidebar} 
              className={location.pathname === "/contact" ? "header-link header-link-active" : "header-link"}
            >Get in Touch</Link>
            {/* <Link 
              to="/personal" 
              onClick={toggleSidebar} 
              className={location.pathname === "/" ? "header-link header-link-active" : "header-link"}
            >Outside of work</Link> */}
          </div>
          <div className="header-link dark-mode-container-fullsize">
            <div className="dark-mode-text-fullsize">Dark Mode</div>
            <div className="dark-mode-slider" onClick={toggleDarkMode}>
              <div className="dark-mode-slider-dot"></div>
              <div className="dark-mode-enabled-dot"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className='app-header-container'>
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
      )}
    </header>
  )
}

export default Header;