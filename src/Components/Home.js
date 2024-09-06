import React, { useEffect, useState } from 'react';
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

const profilePics = [profile, me1, me2, me3, me4, me5];

const carImages = [car1, car2, car3, car4, car5, car6, car7, car8, car9];

function Home() {
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
        // img.onload = () => console.log(`Image loaded: ${img.src}`);
      });
    };

    // Start preloading images after the Home component has fully rendered
    const timeoutId = setTimeout(preloadImages, 1000); // Delay to ensure Home page loads first

    return () => clearTimeout(timeoutId); // Cleanup if component unmounts
  }, []);

  return (
    <div className="Home Page">
      <div className='home-main-container'>
        <div className='home-text'>
          <h1 className="page-header home-headline">
            Looking for seamless web solutions? Let’s build them together.
          </h1>
          <p className='home-p main-paragraph'>
            Hey, thanks for checking out my site! I'm Alex! I'm a software developer who loves tackling challenges and making software better. I've led projects that streamline development and improve reliability, all while bridging the gap between development and QA. I'm big on collaboration, Agile, and creating features that really drive growth.
          </p>
        </div>
        <div className='home-image-container'>
          <img className='profile-img-home' src={profilePics[profilePicIndex]} alt="Profile" onClick={updateProfilePic} />
          <span class="image-tooltip">See More</span>
        </div>
      </div>
      <div className='home-team-container'>
        <div className='home-divider'></div>
        <div className='home-team-headline home-headline'>What I'm looking for in a team</div>
        <div className='home-p home-team-paragraph'>
          Collaboration is at the heart of any great project. I thrive in an environment where:
          <ul>
            <li>
              Open communication is a priority. I appreciate a culture where asking questions and sharing ideas is encouraged, leading to better problem-solving and innovation.
            </li>
            <li>
              Continuous learning is valued. I believe in always growing, both personally and as a team, and I enjoy being in a place where learning together is part of the process.
            </li>
            <li>
              Team camaraderie is important. I enjoy team-building activities or even just informal get-togethers, as they build trust and help us work better together.
            </li>
            <li>
              Shared goals keep me motivated. I’m at my best when I’m contributing to a project where everyone is aligned and working toward something meaningful.
            </li>
            <li>
              Mentorship is something I’m passionate about. I’ve been fortunate enough to mentor others in the past, and it’s incredibly rewarding to help my teammates grow and succeed.
            </li>
          </ul>

        </div>
      </div>
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
  );
}

export default Home;
