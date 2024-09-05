import React from 'react';
import './Resume.css';
import ABResume from '../assets/Alex_Bruce_Resume.pdf'


function Resume() {
  const pdfUrl = 'https://abresume.s3.amazonaws.com/Alex_Bruce_Resume.pdf';

  return(
    <div className='Resume'>
      <iframe
        className='resume-iframe'
        src={pdfUrl}
        title="Resume"
      />

      <object
        data={pdfUrl}
        type='application/pdf'
        className='resume-iframe'
      >
        <p>
          Your browser does not support PDFs. <a href={pdfUrl}>Download the PDF</a>.
        </p>
      </object>


      
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <a href={pdfUrl} download="Alex_Bruce_Resume.pdf">
          Download Resume
        </a>
      </div>
    </div>
  )
}

export default Resume;