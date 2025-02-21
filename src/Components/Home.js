import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import profilePics from "../assets/me/profilePics"; 
import projects from "../assets/projects/Projects";
import ProjectLink from "./ProjectLink";
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
          <div className="projects-container">
            <div className="projects-header">
              <h2 className="home-headline">Projects</h2>
            </div>
            {projects && projects.map((project, index) => (
              <ProjectLink 
                title={project.title} 
                description={project.description} 
                image={project.image} 
                url={project.url} 
                github={project.github} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;