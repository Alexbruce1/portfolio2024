import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import ABIcon from "../../src/assets/ABIcon.png";
import Sidebar from "./Sidebar";

function Header({ sidebarActive, hamburgerRef, toggleSidebar, sidebarRef, darkMode, toggleDarkMode, isMobile }) {
  const location = useLocation();

  return(
    <header className={sidebarActive ? "App-header App-header-active-sidebar" : "App-header"}>
      {!isMobile ? (
        <div className="app-header-container">
          <Link to="/" className="app-header-name-fullsize">
            <img src={ABIcon} className="app-AB-icon" alt="AB Icon" />
          </Link>
            <Link 
              to="/" 
              onClick={toggleSidebar} 
              className={location.pathname === "/" ? "header-link header-link-active" : "header-link"}
            >Home</Link>
            <Link 
              to="/tldr" 
              onClick={toggleSidebar} 
              className={location.pathname === "/tldr" ? "header-link header-link-active" : "header-link"}
            >TL;DR</Link>
            <Link 
              to="/contact" 
              onClick={toggleSidebar} 
              className={location.pathname === "/contact" ? "header-link header-link-active" : "header-link"}
            >Get in Touch</Link>
        </div>
      ) : (
        <div className="app-header-container">
          <div className="app-header-top-row">
            <div className="header-hamburger-menu-container">
              <div 
                className={sidebarActive ? "header-hamburger-container-active" : "header-hamburger-container"} 
                ref={hamburgerRef}
                onClick={toggleSidebar}>
                <div className="header-hamburger-bar hamburger-bar1"></div>
                <div className="header-hamburger-bar hamburger-bar2"></div>
                <div className="header-hamburger-bar hamburger-bar3"></div>
              </div>
            </div>
            <Link to="/" className="app-header-name">
              <img src={ABIcon} className="app-AB-icon" alt="AB Icon" />
              <p className="header-title">Alex</p>
            </Link>
          </div>
          <div className="app-header-bottom-row">
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
        </div>
      )}
    </header>
  )
}

export default Header;