import React, { useState } from 'react';
import './Sidebar.css';

function Sidebar({ darkMode, toggleDarkMode }) {
  // function handleChange(event) {
  //   onChange(event.target.value);
  // };

  // function toggleDarkMode() {
  //   setdarkMode(previous => previous = !darkMode);
  //   console.log(darkMode);
  // }
  
  return (
    <div className="sidebar">
      <div className="sidebar-section sidebar-text-section">Home</div>
      <div className="sidebar-section sidebar-text-section">Resume / CV</div>
      <div className="sidebar-section sidebar-text-section">TL;DR</div>
      <div className="sidebar-section sidebar-text-section">AFK</div>
      <div className="dark-mode-container">
        <div className="dark-mode-text">Dark Mode</div>
        <div className="dark-mode-slider" onClick={toggleDarkMode}>
          <div className="dark-mode-slider-dot"></div>
          <div className="dark-mode-enabled-dot"></div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;