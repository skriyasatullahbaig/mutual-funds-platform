// src/Components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './NavBar.css'; // Ensure this CSS file is created

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><Link to="/investor">Investor Dashboard</Link></li>
        <li className="navbar-item"><Link to="/admin">Admin Panel</Link></li> {/* Updated to use Link */}
        <li className="navbar-item"><Link to="/advisor">Financial Advisor</Link></li>
        <li className="navbar-item"><Link to="/analyst">Data Analyst</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
