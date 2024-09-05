import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './nav.css'; // Custom CSS for futuristic styling
import logo from '../assets/labneh.png';
const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="navbar">
      <button className={`toggle-button ${isSidebarOpen ? 'active' : ''}`} onClick={toggleSidebar}>
        ☰
      </button>
      <div className="navbar-brand">
        <span className="brand-glow"><img src={logo} alt="" /></span>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
      </ul>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={toggleSidebar}>
          &times;
        </button>
        <ul className="sidebar-links">
          <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
          <li><Link to="/menu" onClick={toggleSidebar}>Menu</Link></li>
          <li><Link to="/contact-us" onClick={toggleSidebar}>Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
