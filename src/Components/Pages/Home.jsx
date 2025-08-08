import React from 'react';
import './../Styles/Home.css';
import white_arrow from '../../assets/white-arrow.png';
import { Link } from 'react-router-dom';

const Home = () => {
  const handleExploreMore = () => {
    // Force a reload when navigating to the Services page
    window.location.href = '/services';
  };

  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Welcome to Thompson Legacy Hospitality & Consulting</h1>
        <Link to="/services" onClick={handleExploreMore}>
          <button className="hero-btn">Explore more <img src={white_arrow} alt="" /></button>
        </Link>
      </div>
    </div>
  );
};

export default Home;