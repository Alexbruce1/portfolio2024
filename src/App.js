import React, { Component } from 'react';
import './App.css';
import Tldr from './Components/Tldr';
import Home from './Components/Home';
import Personal from './Components/Personal';
import Footer from './Components/Footer';
import ABIcon from '../src/assets/ABIcon.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='app-header-container'>
          <div className='header-hamburger-container'>
            <div className='header-hamburger-bar hamburger-bar1'></div>
            <div className='header-hamburger-bar hamburger-bar2'></div>
            <div className='header-hamburger-bar hamburger-bar3'></div>
          </div>
          <div className='app-header-name'>
            <img src={ABIcon} className='app-AB-icon' />
            <p className='header-title'>Alex</p>
          </div>
        </div>
      </header>
      <div className='app-main'>
        <Home />
        {/* <Tldr /> */}
        {/* <Personal /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
