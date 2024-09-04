import React, { Component } from 'react';
import './Resume.css';
import ABResume from '../assets/Alex_Bruce_Resume.pdf'


function Resume() {
  return(
    <div className='Resume'>
      <iframe
        className='resume-iframe'
        src={ABResume}
        title="Resume"
      />
    </div>
  )
}

export default Resume;