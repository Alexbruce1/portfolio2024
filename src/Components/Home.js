import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import profilePics from "../assets/me/profilePics"; 
import icons from "../assets/tech-svgs/icons";
import "./Home.css";

const pdfUrl = "https://abresume.s3.amazonaws.com/ABruceResume.pdf";

function Home({ isMobile }) {
  const { pathname } = useLocation();
  const [profilePicIndex, setProfilePicIndex] = useState(0);

  useEffect(() => window.scrollTo(0, 0), [pathname]);


  return (
    <div className="Home Page">
      <div className="home-main-container">
        <div className="content-container main-content-container">
          <div className="home-text">
            <h1 className="page-header home-headline">
              Alex Bruce
            </h1>
            <p className="home-p main-paragraph">
              Hey, thanks for visiting my page! I'm a software developer based in Denver. I specialize in frontend web development, but I've spent my career so far in varioius areas including quality engineering and ERP application development.
            </p>
            {!isMobile && <Link className="home-link home-link-tldr" to={"/tldr"}>TL;DR</Link>}
          </div>
          {isMobile && <Link className="home-link" to={"/tldr"}>TL;DR</Link>}
          <div className="home-image-container">
            <img 
              className="profile-img-home" 
              src={profilePics[profilePicIndex]} 
              alt="Profile" 
              onClick={() => setProfilePicIndex(prev => (prev + 1) % profilePics.length)} 
            />
          </div>
        </div>
        <div className="content-container">
          <h2 className="home-headline">What I find important in a team</h2>
          <p className="home-p home-team-sub-headline">
            Collaboration is at the heart of any great project. I thrive in an environment where:
          </p>
          <div className="home-p home-team-paragraph">
            <ul>
              {[
                ["Open communication is a priority.", "Sharing ideas leads to better problem-solving."],
                ["Continuous learning is valued.", "I enjoy growing with my team."],
                ["Team camaraderie is important.", "Building trust helps us work better together."],
                ["Shared goals keep me motivated.", "I love contributing to aligned projects."],
                ["Mentorship is something I’m passionate about.", "Helping others grow is rewarding."]
              ].map(([title, desc], index) => (
                <li key={index}><span className="team-li-big">{title}</span> {desc}</li>
              ))}
            </ul>
          </div>
          <div className="home-links-container">
            <a className="home-link resume-download" href={pdfUrl} target="_blank" download="Alex_Bruce_Resume.pdf" rel="noreferrer">
              Download my resume
            </a>
            <Link className="home-link home-link-contact" to={"/contact"}>Let's get in touch!</Link>
          </div>
        </div>
      </div>

      <div className="tech-container-background">
        <div className="content-container">
          <div className="tech-container">
            <h2>Technologies I Use</h2>
            <div className="tech-stack">
              {icons.map(({ name, image, stars, proficiency }, index) => (
                <div key={index} className="tech-group">
                  <img src={image} loading="lazy" className="tech-icon-small" alt={name} />
                  <p className="technology-name">{name}: </p>
                  <div className="star-container">
                    {Array.from({ length: stars }, (_, i) => (
                      <p key={i}>★</p>
                    ))}
                  </div>
                  <p>{proficiency}</p>
                </div>
              ))}
            </div>
            {/* <div className="tech-logo-container">
              {icons.map(({ name, image }, index) => (
                <div key={index} className="logo-group">
                  <img src={image} loading="lazy" className="tech-icon" alt={name} />
                  <p className="icon-name">{name}</p>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;