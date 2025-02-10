import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Tldr from './Components/Tldr';
import Home from './Components/Home';
import Resume from './Components/Resume';
import Footer from './Components/Footer';
import Contact from './Components/Contact';

function App() {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [darkMode, setDarkMode] = useState(() => JSON.parse(localStorage.getItem('darkMode')) ?? true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1001);

  const sidebarRef = useRef(null);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1001);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    if (!sidebarActive) return;
    
    const handleClickOutside = (event) => {
      if (!sidebarRef.current?.contains(event.target) && !hamburgerRef.current?.contains(event.target)) {
        setSidebarActive(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [sidebarActive]);

  if (darkMode === null) return null;

  return (
    <Router>
      <div className="App" data-theme={darkMode ? 'dark' : 'light'}>
        <Header 
          sidebarActive={sidebarActive} 
          hamburgerRef={hamburgerRef}
          toggleSidebar={() => setSidebarActive(prev => !prev)}
          sidebarRef={sidebarRef}
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode(prev => !prev)} 
          isMobile={isMobile}
        />
        <div className='app-main'>
          <Routes>
            <Route path="/" element={<Home isMobile={isMobile} />} />
            <Route path="/tldr" element={<Tldr />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer toggleDarkMode={() => setDarkMode(prev => !prev)} />
      </div>
    </Router>
  );
}

export default App;