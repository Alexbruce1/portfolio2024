import React, { useState } from "react";
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

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
        setStatus("Form submitted successfully!");
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
      <div className="contact-container">
        <div className="contact-header">I’d love to hear from you! Drop me a message, and I’ll be in touch shortly.</div>
        <div className="contact-form-border">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="contact-section contact-name-section">
              <label className="contact-label">
                What's your name?
                <input
                  className="contact-field contact-name-input"
                  type="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="contact-section contact-email-section">
              <label className="contact-label">
                What's your email address?
                <input
                  className="contact-field contact-email-input"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="contact-section contact-message-section">
              <label className="contact-label">
                What's your message?
                <textarea
                  className="contact-field contact-message-input"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </label>
            </div>
            <button className="form-submit" type="submit">Send</button>
            <div className="form-status">Your message was sent</div>
            {/* <div className="form-status">{status}</div> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;