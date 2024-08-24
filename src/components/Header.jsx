import React from 'react';
import '../styles/Header.css'; // Create a CSS file for styling
import logo from '../assets/logo.png'; // Corrected path

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="India Gov Logo" className="logo" />
      <div className="header-content">
        <h1>india.gov.in</h1>
        <p>national portal of india</p>
      </div>
    </header>
  );
};

export default Header;
