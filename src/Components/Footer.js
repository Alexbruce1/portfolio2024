import React, { Component } from 'react';
import './Footer.css';
import LI from '../assets/tech-svgs/li.svg';
import GH from '../assets/tech-svgs/gh.svg';
import email from '../assets/tech-svgs/email.svg';
import phone from '../assets/tech-svgs/phone.svg';
import pin from '../assets/tech-svgs/pin.svg';


function Footer() {
  return(
    <div className='Footer'>
      <div className='footer-items-container'>
        <div className='footer-section footer-about'>
          <h3>About</h3>
          <p className='footer-about-headline'>Full-Stack Developer | Front-End Specialist | Quality Engineering Expert | Agile Leader</p>
          <p className='footer-about-p'>
            I'm a software developer who loves tackling challenges and making software better. I've led projects that streamline development and improve reliability, all while bridging the gap between development and QA. I'm big on collaboration, Agile, and creating features that really drive growth.
          </p>
        </div>
        <div className='footer-section footer-contact'>
          <h3>Contact</h3>
          <div className='links-container'>
            <a className='footer-link' target="_blank" href='https://www.linkedin.com/in/alexbbruce/'>
              <img src={LI} className='li-icon footer-icon' />
              <p className='footer-text'>LinkedIn</p>
            </a>
            <a className='footer-link' target="_blank" href='https://github.com/Alexbruce1/'>
              <img src={GH} className='li-icon footer-icon' />
              <p className='footer-text'>GitHub</p>
            </a>
            <a className='footer-link footer-link-email' href="mailto:ABruce18@Turing.edu">
              <img src={email} className='li-icon footer-icon bw-icon' />
              <p className='footer-text'>abruce18@turing.edu</p>
            </a>
            <a className='footer-link footer-link-phone' href="tel:3035643255">
              <img src={phone} className='li-icon footer-icon bw-icon' />
              <p className='footer-text'>+1(303) 564-3255</p>
            </a>
            <div className='footer-link footer-link-location'>
              <img src={pin} className='li-icon footer-icon bw-icon' />
              <p className='footer-text footer-text-location'>Denver, Colorado</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;