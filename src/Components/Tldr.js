import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Tldr.css';

function Tldr() {
  const [loadedTime, setLoadedTime] = useState('');
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const d = new Date();
    const hours = d.getHours();
    const minutes = String(d.getMinutes()).padStart(2, '0');
    setLoadedTime(`${hours}:${minutes}`);
  }, []);

  return (
    <div className="Tldr Page">
      <div className="content-container">

        <div className='tldr-header'>
          Here's a summary of my career so far.
        </div>
        <div className='tldr-sub-header specialties'>
          Software Developer | React Specialist | Quality Engineer
        </div>
        <div className='tldr-text-container'>
          <p className='tldr-section'>Education</p>
          <p className='tldr-p main-paragraph'>
            I got my start at the <a className='tldr-link' href='https://turing.edu/'rel="noreferrer" target="_blank">Turing School of Software and Design</a>, studying front end engineering. That course focused on creating a hirable developer. The main technical portion was focused around Javascript, React, HTML/CSS, and related disciplines. The less technical portion was based around other aspects of a technical career. This included using version control (we used Git/Github), Agile vs Waterfall methodologies, test-driven development, and teamwork.
            </p>
          <p className='tldr-section'>1st Job</p>
          <p className='tldr-p main-paragraph'>
            A few months after graduating, I started my first tech job, and joined Aetna Digital as a quality engineer. I strengthened my team's integration testing platform, building tests for new features, and improving tests for existing features. In addition, I solidified my team's software by manually smoke testing all of our bi-weekly releases. 
          </p>
          <p className='tldr-p main-paragraph'>
            During my time at Aetna, I led an initiative for my team of converting our testing software from Ruby to Javascript. In addition to converting the code, I accelerated our nightly regression runs by close to 50% by simplifying tests and removing duplicated scenarios.
          </p>
          <p className='tldr-section'>2nd Job</p>
          <p className='tldr-p main-paragraph'>
            In 2022 I joined Nextworld as an application developer, which allowed me to build applications and feature sets, as well as continue testing. I developed software using Nextworld's "Nextbot" system, bringing dynamic user interfaces to life with large data sets, and did so with the needs of our customers in the manufacturing industry constantly in mind.
          </p>
          <p className='tldr-p main-paragraph'>
            In 2024 I was one of many developers who were unfortunately laid off from Nextworld due to downsizing.
          </p>
          <p className='tldr-section'>Now</p>
          <p className='tldr-p main-paragraph'>
            Since leaving Nextworld, I've focused on strengthening the skills I already have, as well as taking the opportunity to learn new technical skills that I've been curious about for years. 
            <ul>
              <li>
                I've completed online courses through Codecademy to retain my skills with JavaScript, React, and CSS.
              </li>
              <li>
                I've also honed new skills by taking courses on generative AI, Java, SQL, and even earned an AWS S3 certificate through Coursera!
              </li>
              <li>
                I'm taking time, daily, to complete technical JavaScript challenges via edabit.com and CodeWars.com.
              </li>
            </ul>
          </p>
          <p className='tldr-p main-paragraph'>
            I’m also working on this portfolio/resume app as a personal project—both for the enjoyment of creating it and to give you a glimpse into who I am as a developer!
            <br></br>
            If you're interested in chatting, please reach out! I'd love to set up a call or a coffee meeting. ☕️
          </p>
          <div className='tldr-message-read'>Read {loadedTime}</div>
        </div>
        <Link to='/contact' className='learn-more-button'>
          Learn More
        </Link>
      </div>
    </div>
  );
}

export default Tldr;
