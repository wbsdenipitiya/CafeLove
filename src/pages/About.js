import React from 'react';
import Aboutbanner from '../assets/Aboutbanner.png';
import '../styles/About.css';

function About() {
  return (
    <div className='about'>
        <div className='aboutTop'
         style={{backgroundImage: `url(${Aboutbanner})`}}></div>
    </div>
  )
}

export default About;