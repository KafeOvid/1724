import React, { useState } from 'react';
import '../styles/TopHead.css';
import { FaFacebook, FaTwitter, FaInstagram, FaSun, FaMoon } from 'react-icons/fa';

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
        <button className="login-button">Login</button>
        <button className="signup-button">Signup</button>
      </div>
    </div>
  );
};

export default TopHead;
