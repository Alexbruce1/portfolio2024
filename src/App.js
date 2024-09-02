import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Tldr from './Components/Tldr';
import Home from './Components/Home';
import Personal from './Components/Personal';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
import ABIcon from '../src/assets/ABIcon.png'

function App() {
  let [sidebarActive, setSidebarActive] = useState(false);
  let [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
    console.log(darkMode);
  };

  function toggleSidebar() {
    setSidebarActive(previousSetting => !previousSetting);
  };

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
              <img src={ABIcon} className='app-AB-icon' />
              <p className='header-title'>Alex</p>
            </Link>
          </div>
        </header>
        {sidebarActive && <Sidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
        <div className='app-main'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tldr" element={<Tldr />} />
            <Route path="/personal" element={<Personal />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
