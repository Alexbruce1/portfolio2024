import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Footer.css";
import LI from "../assets/tech-svgs/li.svg";
import GH from "../assets/tech-svgs/gh.svg";
import email from "../assets/tech-svgs/email.svg";
import phone from "../assets/tech-svgs/phone.svg";

function Footer({ toggleDarkMode, isMobile }) {

  const location = useLocation();

  if (location.pathname === "/contact") {
    return (
      <div className="Footer">
        <div className="Footer-contact">
          <div className="footer-dark-mode-container-mobile">
            <div className="dark-mode-container-fullsize">
              <div className="dark-mode-text-fullsize">Dark Mode</div>
              <div className="dark-mode-slider" onClick={toggleDarkMode}>
                <div className="dark-mode-slider-dot"></div>
                <div className="dark-mode-enabled-dot"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return(
    <div className="Footer">
      <div className="footer-items-container">
        <div className="footer-section footer-contact">
          <a className="footer-link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/alexbbruce/">
            <img alt="Linkedin icon" src={LI} className="li-icon footer-icon" />
          </a>
          <a className="footer-link" target="_blank" rel="noreferrer" href="https://github.com/Alexbruce1/">
            <img alt="Github icon" src={GH} className="li-icon footer-icon" />
          </a>
          <Link className="footer-link footer-link-email" to="/contact">
            <img alt="email icon" src={email} className="li-icon footer-icon bw-icon" />
          </Link>
          <a className="footer-link footer-link-phone" href="tel:3035643255">
            <img alt="phone icon" src={phone} className="li-icon footer-icon bw-icon" />
          </a>
          {!isMobile && (
            <div className="footer-dark-mode-container">
              <div className="dark-mode-container-fullsize">
                <div className="dark-mode-text-fullsize">Dark Mode</div>
                <div className="dark-mode-slider" onClick={toggleDarkMode}>
                  <div className="dark-mode-slider-dot"></div>
                  <div className="dark-mode-enabled-dot"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Footer;