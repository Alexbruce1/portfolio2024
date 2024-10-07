import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import car1 from '../assets/car-images/car1.jpg';
import car2 from '../assets/car-images/car2.jpg';
import car3 from '../assets/car-images/car3.jpg';
import car4 from '../assets/car-images/car4.jpg';
import car5 from '../assets/car-images/car5.jpg';
import car6 from '../assets/car-images/car6.jpg';
import car7 from '../assets/car-images/car7.jpg';
import car8 from '../assets/car-images/car8.jpg';
import car9 from '../assets/car-images/car9.jpg';
import './Home.css';
import profile from '../assets/me/profile.jpg';
import icon1 from '../assets/tech-svgs/icon1.svg';
import icon2 from '../assets/tech-svgs/icon2.svg';
import icon3 from '../assets/tech-svgs/icon3.svg';
import icon4 from '../assets/tech-svgs/icon4.svg';
import icon5 from '../assets/tech-svgs/icon5.svg';
import icon6 from '../assets/tech-svgs/icon6.svg';
import icon7 from '../assets/tech-svgs/icon7.svg';
import icon8 from '../assets/tech-svgs/icon8.svg';
import icon9 from '../assets/tech-svgs/icon9.svg';
import icon10 from '../assets/tech-svgs/icon10.svg';
import icon11 from '../assets/tech-svgs/icon11.svg';
import icon12 from '../assets/tech-svgs/icon12.svg';
import icon13 from '../assets/tech-svgs/icon13.svg';
import icon14 from '../assets/tech-svgs/icon14.svg';
import icon15 from '../assets/tech-svgs/icon15.svg';
import icon16 from '../assets/tech-svgs/icon16.svg';
import icon17 from '../assets/tech-svgs/icon17.svg';
import icon18 from '../assets/tech-svgs/icon18.svg';
import icon19 from '../assets/tech-svgs/icon19.svg';
import icon20 from '../assets/tech-svgs/icon20.svg';
import icon21 from '../assets/tech-svgs/icon21.svg';
import icon22 from '../assets/tech-svgs/icon22.svg';
import icon23 from '../assets/tech-svgs/icon23.svg';
import icon24 from '../assets/tech-svgs/icon24.svg';
import me1 from '../assets/me/me1.jpg';
import me2 from '../assets/me/me2.jpg';
import me3 from '../assets/me/me3.jpg';
import me4 from '../assets/me/me4.jpg';
import me5 from '../assets/me/me5.jpg';


const icons = [
  { name: 'SQL', image: icon1 },
  { name: 'AWS', image: icon2 },
  { name: 'CSS3', image: icon3 },
  { name: 'Git/GitHub', image: icon4 },
  { name: 'HTML5', image: icon5 },
  { name: 'Java', image: icon6 },
  { name: 'JavaScript', image: icon7 },
  { name: 'Jenkins', image: icon8 },
  { name: 'JQuery', image: icon9 },
  { name: 'ReactJS', image: icon10 },
  { name: 'Ruby', image: icon11 },
  { name: 'SCSS', image: icon12 },
  { name: 'Circle CI', image: icon13 },
  { name: 'Cucumber', image: icon14 },
  { name: 'Python', image: icon15 },
  { name: 'Playwright', image: icon16 },
  { name: 'VueJS', image: icon17 },
  { name: 'TypeScript', image: icon18 },
  { name: 'NodeJS', image: icon19 },
  { name: 'Redux', image: icon20 },
  { name: 'Jest', image: icon21 },
  { name: 'OpenAI', image: icon22 },
  { name: 'Postman', image: icon23 },
  { name: 'Agile', image: icon24 },
];

// const recommendations = [
//   {
//     name: 'Alexander E',
//     relationship: 'Fellow student',
//     comment: 'I have worked closely with Alex on several JavaScript-based projects and can confidently recommend him as someone who deeply understands programming concepts. Alex has a talent for summarizing difficult programming concepts and explaining them clearly and concisely, which he demonstrated to me be helping me understand several ES6 concepts in a mere 10 minutes during the 2nd module of our software education program. Alex is the sort of programmer who takes the necessary time to fully understand concepts before implementing him, which ensures that he proceeds through his work in a calm, methodical fashion. Furthermore, he is truly talented in CSS and design, which he demonstrated during our joint MovieTracker project. With his excellent grasp of JavaScript and CSS design, I am confident that Alex will be a prime asset to any company he chooses to work for.',
//   },
//   {
//     name: 'Benjamin H',
//     relationship: 'Fellow student',
//     comment: 'Alex was not only a skilled programmer but a skilled problem solver and excellent pair programming partner',
//   },
//   {
//     name: 'Justin S',
//     relationship: 'Fellow student',
//     comment: 'Alex and I collaborated together on a project. He was a strong communicator and his articulation when working through problems made working with him very pleasant, and productive.',
//   },
//   {
//     name: 'Aaron W',
//     relationship: 'Fellow student',
//     comment: 'Alex is a driven and talented software developer.',
//   },
// ]

const profilePics = [profile, me1, me2, me3, me4, me5];

const carImages = [car1, car2, car3, car4, car5, car6, car7, car8, car9];

function Home({ isMobile }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  let [profilePicIndex, setProfilePicIndex] = useState(0);

  function updateProfilePic() {
    setProfilePicIndex((previous) => {
      const nextIndex = (previous + 1) % profilePics.length; // This will loop back to 0 after reaching the last index
      return nextIndex;
    });
  }
  
  useEffect(() => {
    const preloadImages = () => {
      carImages.forEach((image) => {
        const img = new Image();
        img.src = image;
      });
    };

    const timeoutId = setTimeout(preloadImages, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="Home Page">
      <div className='home-main-container'>
        <div className='home-text'>
          <h1 className="page-header home-headline">
            Looking for seamless web solutions? Let’s build them together.
          </h1>
          <p className='home-p main-paragraph'>
            Hey, thanks for visiting! I’m Alex, a software developer who enjoys tackling challenges and improving software. I’ve led projects to streamline development, boost reliability, and bridge the gap between dev and QA. I'm big on collaboration, Agile, and creating features that really drive growth.         
          </p>
        </div>
        {isMobile ? <div className='home-links-container'>
          <Link className='home-link' to={'/resume'}>Check out my full resume</Link>
          <Link className='home-link' to={'/tldr'}> See my professional tl;dr</Link>
        </div> : null }
        <div className='home-image-container'>
          <img className='profile-img-home' src={profilePics[profilePicIndex]} alt="Profile" onClick={updateProfilePic} />
          <span class="image-tooltip">See More</span>
        </div>
      </div>
      {isMobile ? null : <div className='home-links-container'>
        <Link className='home-link' to={'/resume'}>Check out my full resume</Link>
        <Link className='home-link' to={'/tldr'}> See my professional tl;dr</Link>
      </div> }
      <div className='home-team-container'>
        <div className='home-team-headline home-headline'>What I find important in a team</div>
        <div className='home-p home-team-sub-headline'>Collaboration is at the heart of any great project. I thrive in an environment where:</div>
        <div className='home-p home-team-paragraph'>
          <ul>
            <li>
              <span className='team-li-big'>Open communication is a priority.</span> I appreciate a culture where asking questions and sharing ideas is encouraged, leading to better problem-solving and innovation.
            </li>
            <li>
              <span className='team-li-big'>Continuous learning is valued.</span> I believe in always growing, both personally and as a team, and I enjoy being in a place where learning together is part of the process.
            </li>
            <li>
              <span className='team-li-big'>Team camaraderie is important.</span> I enjoy team-building activities or even just informal get-togethers, as they build trust and help us work better together.
            </li>
            <li>
              <span className='team-li-big'>Shared goals keep me motivated.</span> I’m at my best when I’m contributing to a project where everyone is aligned and working toward something meaningful.
            </li>
            <li>
              <span className='team-li-big'>Mentorship is something I’m passionate about.</span> I’ve been fortunate enough to mentor others in the past, and it’s incredibly rewarding to help my teammates grow and succeed.
            </li>
          </ul>
        </div>
          <Link className='home-link home-link-contact' to={'/contact'}>Let's get in touch!</Link>
      </div>
      <div className='tech-container-background'>
        <div className='tech-container'>
          <h2>Technologies I've used</h2>
          <div className='tech-logo-container'>
            {icons.map((icon, index) => (
              <div key={index} className='logo-group'>
                <img src={icon.image} loading="lazy" className='tech-icon' alt={icon.name} />
                <p className='icon-name'>{icon.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div className='recommendations-container'>
        <div className='home-headline recommendations-headline'>
          What others have said
        </div>
        <div className='recommendations-sub-headline'>
          Recommendations from LinkedIn
        </div>
        <div className='recommendations'>
          {recommendations.map((rec) => (
            <div className='recommendation-box'>
              <div className='rec-top-row'>
                <div className='rec-name'>{rec.name}</div>
                <div className='rec-relationship'>{rec.relationship}</div>
              </div>
              <div className='rec-comment'>"{rec.comment}"</div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}

export default Home;
