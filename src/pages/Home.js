import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/Coffee6.png';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home" style={{backgroundImage: `url(${BannerImage})`}}>
      <div className='headerContainer' >
        

        <Link to="/menu">
          <button className="visitButton">VISIT US TODAY ♥</button>
        </Link>

      </div>
    </div>
  )
}

export default Home;