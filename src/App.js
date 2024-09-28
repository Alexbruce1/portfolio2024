import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Tldr from './Components/Tldr';
import Home from './Components/Home';
// import AI from './Components/AI';
import Resume from './Components/Resume';
// import Personal from './Components/Personal';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import ABIcon from '../src/assets/ABIcon.png';

function App() {
  let [sidebarActive, setSidebarActive] = useState(false);
  let [darkMode, setDarkMode] = useState(null);

  const sidebarRef = useRef(null);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode !== null) {
      setDarkMode(JSON.parse(savedDarkMode));
    } else {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode !== null) {
      localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }
  }, [darkMode]);

  useEffect(() => {
    if (darkMode !== null) {
      document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  const toggleSidebar = () => {
    setSidebarActive(previousSetting => !previousSetting);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) && 
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
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

  if (darkMode === null) {
    return null;
  }

  return (
    <Router>
      <div className="App" data-theme={darkMode ? 'dark' : 'light'}>
        <header className="App-header">
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
        </header>
        <div className='app-main'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tldr" element={<Tldr />} />
            {/* <Route path="/personal" element={<Personal />} /> */}
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        {/* <AI /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;