import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar({ darkMode, toggleSidebar, toggleDarkMode }) {  
  return (
    <div className="sidebar">
      <Link to="/" onClick={toggleSidebar} className="sidebar-section sidebar-text-section">Home</Link>
      <Link to="/resume" onClick={toggleSidebar} className="sidebar-section sidebar-text-section">Resume</Link>
      <Link to="/tldr" onClick={toggleSidebar} className="sidebar-section sidebar-text-section">At a Glance</Link>
      <Link to="/personal" onClick={toggleSidebar} className="sidebar-section sidebar-text-section">Outside of work</Link>
      <div className="dark-mode-container">
        <div className="dark-mode-text">Dark Mode {darkMode? 'on' : 'off'}</div>
        <div className="dark-mode-slider" onClick={toggleDarkMode}>
          <div className="dark-mode-slider-dot"></div>
          <div className="dark-mode-enabled-dot"></div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;