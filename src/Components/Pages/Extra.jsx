import React from 'react';
import './../Styles/Extra.css';
import white_arrow from '../../assets/white-arrow.png';

const Other = () => {
  return (
    <section className='extra'>
        <div className="extra-subtitle">
            <p>
              Beyond our consulting services, we’re also committed to providing a range
              of short-term rental properties throughout the Baltimore metropolitan area.
              Check out our listings.
            </p>
        </div>
        <a href="http://airbnb.com/h/budgetfriendlybnb" target="_blank" rel="noopener noreferrer">
          <button className='dark-btn' aria-label='Check our listings'>
            Here <img src={white_arrow} alt="White arrow pointing right" />
          </button>
        </a>
    </section>
  );
};

export default Other;