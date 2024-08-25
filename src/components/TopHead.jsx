import React, { useState } from 'react';
import '../styles/TopHead.css';
import { FaFacebook, FaTwitter, FaInstagram, FaSun, FaMoon } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const TopHead = () => {
  const [fontSize, setFontSize] = useState(16);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const increaseFontSize = () => {
    setFontSize(fontSize + 2);
    document.documentElement.style.fontSize = `${fontSize + 2}px`;
  };

  const decreaseFontSize = () => {
    setFontSize(fontSize - 2);
    document.documentElement.style.fontSize = `${fontSize - 2}px`;
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <div className="top-head">
      <div className="font-size-controls">
        <button onClick={increaseFontSize}>A+</button>
        <button onClick={decreaseFontSize}>A-</button>
      </div>
      <div className="dark-mode-toggle">
        <button onClick={toggleDarkMode}>
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
      <div className="auth-buttons">
        <Link to="/login"><button className="login-button">Login</button></Link>
        <Link to="/signup"><button className="signup-button">Signup</button></Link>
      </div>
    </div>
  );
};

export default TopHead;
