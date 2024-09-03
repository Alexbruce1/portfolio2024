import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Tldr from './Components/Tldr';
import Home from './Components/Home';
import AI from './Components/AI';
import Resume from './Components/Resume';
import Personal from './Components/Personal';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
import ABIcon from '../src/assets/ABIcon.png'

function App() {
  let [sidebarActive, setSidebarActive] = useState(false);
  let [darkMode, setDarkMode] = useState(true);

  const sidebarRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  const toggleSidebar = () => {
    setSidebarActive(previousSetting => !previousSetting);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarActive(false);
      }
    };

    if (sidebarActive) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sidebarActive]);

  return (
    <Router>
      <div className="App" data-theme={'dark'}>
        <header className="App-header">
          <div className='app-header-container'>
            <div className='header-hamburger-container' onClick={toggleSidebar}>
              <div className='header-hamburger-bar hamburger-bar1'></div>
              <div className='header-hamburger-bar hamburger-bar2'></div>
              <div className='header-hamburger-bar hamburger-bar3'></div>
            </div>
            <Link to="/" className='app-header-name'>
              <img src={ABIcon} className='app-AB-icon' alt="AB Icon" />
              <p className='header-title'>Alex</p>
            </Link>
          </div>
        </header>
        {sidebarActive && (
          <div ref={sidebarRef}>
            <Sidebar
              darkMode={darkMode}
              toggleSidebar={toggleSidebar}
              toggleDarkMode={toggleDarkMode}
            />
          </div>
        )}
        <div className='app-main'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tldr" element={<Tldr />} />
            <Route path="/personal" element={<Personal />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
        {/* <AI /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
