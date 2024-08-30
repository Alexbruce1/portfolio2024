import car1 from '../assets/car-images/car1.jpg';
import car2 from '../assets/car-images/car2.jpg';
import car3 from '../assets/car-images/car3.jpg';
// import car4 from '../assets/car-images/car4.jpg';
import car5 from '../assets/car-images/car5.jpg';
import car6 from '../assets/car-images/car6.jpg';
import car7 from '../assets/car-images/car7.jpg';
import car8 from '../assets/car-images/car8.jpg';
import car9 from '../assets/car-images/car9.jpg';
import car10 from '../assets/car-images/car10.jpg';
import React, { Component } from 'react';
import './Personal.css';

const carImages = [car1, car2, car3, car5, car6, car7, car8, car9, car10]

function Personal() {
  const enlargeImage = () => {
    console.log('hello')
  }


  return (
    <div className="Personal Page">
      <h1>
        When I'm Not Working
      </h1>
      <p className='personal-p main-paragraph'>
        Outside of work, I’m all about adventure, whether it’s hitting the trails and camping in my modified 4Runner, carving up winding canyon roads in a sports car, or exploring new places with my camera in hand. I’m also an avid cyclist, both on the road and the mountain, and I love spending time with my wife and our dogs. Life is all about balance, and I find mine through a mix of tech, travel, and the hobbies that make me feel alive.
      </p>
      <div className='photo-slider-title'>
        Here's a small collection of my automotive photography work.
      </div>
      <div className='image-container'>
        {carImages.map((image) => {
          return <img key={image} className='car-image' onClick={enlargeImage} loading="lazy" alt='car photograph' src={image} />
        })}
        {carImages.map((image) => {
          return <img key={image} className='car-image' onClick={enlargeImage} loading="lazy" alt='car photograph' src={image} />
        })}
      </div>
      <div className='shadow-container'>
        <div className='shadow-left shadow'></div>
        <div className='shadow-right shadow'></div>
      </div>
    </div>
  );
}

export default Personal;
