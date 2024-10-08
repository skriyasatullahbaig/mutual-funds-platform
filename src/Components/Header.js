// src/Components/Header.js
import React from 'react';
import './Header.css';  // CSS file to handle styles

const Header = () => {
  return (
    <header className="header">
      <div className="auth-buttons">
        <a href="/login" className="button">Login</a>
        <a href="/register" className="button">Register</a>
      </div>
      <h1>Welcome to the Mutual Funds Platform</h1>
      <p>Your gateway to smart investment decisions</p>
    </header>
  );
};

export default Header;
