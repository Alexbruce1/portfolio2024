import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import './Resume.css';

function Resume() {
  const pdfUrl = 'https://abresume.s3.amazonaws.com/Alex_Bruce_Resume.pdf';
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return(
    <div className='Resume'>
      <iframe
        className='resume-iframe'
        src={pdfUrl}
        title="Resume"
      />
      <div className='resume-download-link'>
        <a 
          href={pdfUrl} 
          target="_blank" 
          download="Alex_Bruce_Resume.pdf"
          rel="noreferrer">
          Download Resume
        </a>
      </div>
    </div>
  )
}

export default Resume;