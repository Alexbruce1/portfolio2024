import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import './Contact.css';
import LI from '../assets/tech-svgs/li.svg';
import GH from '../assets/tech-svgs/gh.svg';

function Contact() {
  const { pathname } = useLocation();
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/meojwjqy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Your message was sent! I'll be in touch as soon as possible.");
        setFormData({
          email: "",
          message: "",
        });
      } else {
        setStatus("There was an error submitting the form.");
      }
    } catch (error) {
      setStatus("There was an error submitting the form.");
    }
  };

  return (
    <div className="Contact">
      <div className="content-container">
        <div className="contact-container">
          <div className="contact-header">I’d love to hear from you! Drop me a message, and I’ll be in touch shortly.</div>
          <div className="contact-form-border">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-section contact-name-section">
                <label className="contact-label">
                  Name
                </label>
                <input
                  className="contact-field contact-name-input"
                  type="name"
                  name="name"
                  title="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  />
              </div>
              <div className="contact-section contact-email-section">
                <label className="contact-label">
                  Email
                </label>
                <input
                  className="contact-field contact-email-input"
                  type="email"
                  name="email"
                  title="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  />
              </div>
              <div className="contact-section contact-message-section">
                <label className="contact-label">
                  Message
                </label>
                <textarea
                  className="contact-field contact-message-input"
                  title="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button className="form-submit" type="submit">Send</button>
              <div className="form-status">{status}</div>
            </form>
          </div>
          <div className="contact-links-container">
            <div className="contact-header">You’re welcome to explore my links below!</div>
            <div className="contact-form contact-link-container">
            <a className='contact-link' target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/alexbbruce/'>
                <img alt='Linkedin icon' src={LI} className='li-icon contact-icon' />
                <p className='contact-text'>LinkedIn</p>
              </a>
              <a className='contact-link' target="_blank" rel="noreferrer" href='https://github.com/Alexbruce1/'>
                <img alt='Github icon' src={GH} className='li-icon contact-icon' />
                <p className='contact-text'>GitHub</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;