import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Tldr from './Components/Tldr';
import Home from './Components/Home';
// import AI from './Components/AI';
// import Personal from './Components/Personal';
import Resume from './Components/Resume';
import Footer from './Components/Footer';
import Contact from './Components/Contact';

function App() {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [darkMode, setDarkMode] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const sidebarRef = useRef(null);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1001);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
        <Header 
          sidebarActive={sidebarActive} 
          hamburgerRef={hamburgerRef}
          toggleSidebar={toggleSidebar}
          sidebarRef={sidebarRef}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode} 
          isMobile={isMobile}/>
        <div className='app-main'>
          <Routes>
            <Route path="/" element={<Home isMobile={isMobile} />} />
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