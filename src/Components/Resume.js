import React, { Component } from 'react';
import './Resume.css';
import resume from '../assets/Alex_Bruce_Resume.pdf'


function Resume() {
  return(
    <div className='Resume'>
      <iframe
        className='resume-iframe'
        src={resume}
        width="100%"
        height="600px"
        title="Resume"
      />
    </div>
  )
}

export default Resume;