import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import LI from '../assets/tech-svgs/li.svg';
import GH from '../assets/tech-svgs/gh.svg';
import email from '../assets/tech-svgs/email.svg';
import phone from '../assets/tech-svgs/phone.svg';
import pin from '../assets/tech-svgs/pin.svg';


function Footer({ toggleDarkMode }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 840);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1001);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return(
    <div className='Footer'>
      <div className='footer-items-container'>
        <div className='footer-section footer-about'>
          <h3>About</h3>
          <p className='footer-about-headline'>Full-Stack Developer | Front-End Specialist | Quality Engineering Expert | Agile Leader</p>
          <p className='footer-about-p'>
            I'm a software developer who loves tackling challenges and making software better. I've led projects that streamline development and improve reliability, all while bridging the gap between development and QA. I'm big on collaboration, Agile, and creating features that really drive growth.
          </p>
          <div className="footer-dark-mode-container">
            <div className="dark-mode-container-fullsize">
              <div className="dark-mode-text-fullsize">Dark Mode</div>
              <div className="dark-mode-slider" onClick={toggleDarkMode}>
                <div className="dark-mode-slider-dot"></div>
                <div className="dark-mode-enabled-dot"></div>
              </div>
            </div>
          </div>
        </div>
        <div className='footer-section footer-contact'>
          <Link className='nav-link' to="/contact">
            <h3>Contact</h3>
          </Link>

          <div className='links-container'>
            <a className='footer-link' target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/alexbbruce/'>
              <img alt='Linkedin icon' src={LI} className='li-icon footer-icon' />
              <p className='footer-text'>LinkedIn</p>
            </a>
            <a className='footer-link' target="_blank" rel="noreferrer" href='https://github.com/Alexbruce1/'>
              <img alt='Github icon' src={GH} className='li-icon footer-icon' />
              <p className='footer-text'>GitHub</p>
            </a>
            <a className='footer-link footer-link-email' href="mailto:ABruce18@Turing.edu">
              <img alt='email icon' src={email} className='li-icon footer-icon bw-icon' />
              <p className='footer-text'>abruce18@turing.edu</p>
            </a>
            <a className='footer-link footer-link-phone' href="tel:3035643255">
              <img alt='phone icon' src={phone} className='li-icon footer-icon bw-icon' />
              <p className='footer-text'>+1(303) 564-3255</p>
            </a>
            <div className='footer-link footer-link-location'>
              <img alt='location pin icon' src={pin} className='li-icon footer-icon bw-icon' />
              <p className='footer-text footer-text-location'>Denver, Colorado</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;