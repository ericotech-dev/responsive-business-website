import React from "react";
import { useLocation } from "react-router-dom";
import './Footer.css';

function Footer() {
  const location = useLocation();
  const showBorder = location.pathname !== '/home'; // Condition to show border except on the homepage

  return (
    <div className="footer" style={{ borderTop: showBorder ? '1px solid #797979' : 'none' }}>
    </div>
  );
}

export default Footer;