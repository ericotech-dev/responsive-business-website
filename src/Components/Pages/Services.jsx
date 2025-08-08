import React, { useEffect } from 'react';
import './../Styles/Services.css';
import './../Title/Title.css';
import './../Styles/Extra.css';

import service_1 from '../../assets/service-1.jpg';
import service_2 from '../../assets/service-2.jpg';

const Services = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.paypal.com/sdk/js?client-id=BAAFQJrUN7oABAPqiKHRsxaPrmUXvASxFHm6dityxbujs7zu0fEIOnofgxA9arqcmcJAD5stiAtzyIvMFc&components=hosted-buttons&enable-funding=venmo&currency=USD';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Render PayPal buttons
      window.paypal.HostedButtons({
        hostedButtonId: '6F3H32ZRVDZMW',
      }).render('#paypal-container-6F3H32ZRVDZMW');

      window.paypal.HostedButtons({
        hostedButtonId: 'RKCVP29DBXQNE',
      }).render('#paypal-container-RKCVP29DBXQNE');
    };

    return () => {
      // Clean up the script on component unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className='services'>
      <div className='service'>
        <img src={service_1} alt='Strategic Planning' />
        <br />
        <div className='S-heading'> 
        <h3>STRATEGIC PLANNING</h3>
         <p>A one hour consultation & follow-up calls to lay the 
          groundwork for your success. Whether you're new to the 
          world of investing or looking to expand your portfolio,
          our consultation provides you with essential knowledge 
          and strategies to start your journey.
          </p> 
          <p>Learn how to identify profitable properties for 
            short-term rentals. Understand pricing strategies,
             guest management, and property presentation. 
             Master the art of achieving optimal occupancy 
             rates and positive guest reviews.
             </p>
        </div>
        <div className='container1' id="paypal-container-RKCVP29DBXQNE"></div>
      </div>
      <div className="service">
        <img src={service_2} alt="Training & Development" />
        <br />
        <div className='S-heading'> 
        <h3>TRAINING & DEVELOPMENT</h3>
        <p>We kickstart your Airbnb for you by implementing our
           blueprint designed to enhance your business strategies
            and drive success. Dive deeper into property selection,
             location analysis, and lease negotiations.
        </p> 
        <p>Explore scalability options and how to build a rental
             arbitrage portfolio, eventually becoming fully automated!
              Our team of experts will guide you on resource allocation
               and offer strategies to mitigate potential risks. 
               Additionally, we provide post-planning support for months
                down the line.
         </p>
        </div>

        <div className='container1' id='paypal-container-6F3H32ZRVDZMW'></div>
      </div>
    </div>
  );
};

export default Services;