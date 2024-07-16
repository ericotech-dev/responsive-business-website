import React, { useState } from "react";
import './Navbar.css';
import logo from '../assets/logo.png';
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = ({ onServicesClick }) => {
  const [menuopen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleServicesClick = () => {
    onServicesClick();
    navigate('/services');
    closeMenu();
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <a href="#">
        <Link to="/home" onClick={closeMenu}>
          <img src={logo} alt="logo" className='logo'/>
        </Link>
        <Link to="/home" onClick={closeMenu}>
        <div className='company-info'>
          <div className='company-name'>Thompson Legacy</div>
          <div className='company-description'>Hospitality & Consulting</div>
        </div>
        </Link>
      </a>

      <div className="menu" onClick={() => setMenuOpen(!menuopen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuopen ? "open" : "" }>
        <li><NavLink to="/home" onClick={closeMenu}>HOME</NavLink></li>
        <li><NavLink to="/services" onClick={handleServicesClick}>SERVICES</NavLink></li>
        <li><NavLink to="/about" onClick={closeMenu}>ABOUT</NavLink></li>
        <li><NavLink to="/contact" onClick={closeMenu}><button className="btn">CONTACT</button></NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;