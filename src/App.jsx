import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer/Footer';
import Services from './Components/Pages/Services';
import About from './Components/Pages/About';
import Extra from './Components/Pages/Extra';
import Contact from './Components/Pages/Contact';
import Home from './Components/Pages/Home';
import Title from './Components/Title/Title';
import ScrollToTop from './Components/ScrollToTop';

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [reloadServices, setReloadServices] = useState(false);

  const handleServicesClick = () => {
    setReloadServices(true);
    navigate('/services');
  };

  useEffect(() => {
    if (location.pathname === '/services' && reloadServices) {
      window.location.reload();
      setReloadServices(false);
    }
  }, [location.pathname, reloadServices]);

  return (
    <div className="App">
      <ScrollToTop />
      <Navbar onServicesClick={handleServicesClick} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/extra' element={<ExtraPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
      <div className="container">
        <Footer showBorder={location.pathname !== '/home'} />
      </div>
    </div>
  );
};

const ServicesPage = () => {
  return (
    <div className="container">
      <Title subTitle='Our Services' title='What We Offer' />
      <Services />
      <Title subTitle='Extra Services' title='Our Rental Services' />
      <Extra />
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="container">
      <Title subTitle='About Us' title='Who We Are' />
      <About />
    </div>
  );
};

const ExtraPage = () => {
  return (
    <div className="container">
      <Title subTitle='Extra Services' title='Our Rental Services' />
      <Extra />
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="container">
      <Title subTitle='Contact Us' title='Get In Touch' />
      <Contact />
    </div>
  );
};

export default App;