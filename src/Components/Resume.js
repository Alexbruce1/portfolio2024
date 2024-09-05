import React from 'react';
import './Resume.css';

function Resume() {
  const pdfUrl = 'https://abresume.s3.amazonaws.com/Alex_Bruce_Resume.pdf';

  return(
    <div className='Resume'>
      <iframe
        className='resume-iframe'
        src={pdfUrl}
        title="Resume"
      />
      <div className='resume-download-link'>
        <a href={pdfUrl} download="Alex_Bruce_Resume.pdf">
          Download Resume
        </a>
      </div>
    </div>
  )
}

export default Resume;