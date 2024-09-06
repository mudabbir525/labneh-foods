import React from 'react';
import './Footer.css'; // Add styling here
import { Link } from 'react-router-dom';
import swiggyLogo from '../assets/swiggy.png'; // Swiggy logo image
import zomatoLogo from '../assets/zomato.png'; // Zomato logo image
import { FaPhone, FaEnvelope, FaStore, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
  <p>
    LABNEH: Bringing together the best of Levantine and Indian cuisines. Discover our diverse menu and enjoy a memorable dining experience.
  </p>
  <br />
</div>

      <div className="footer-top">
        

        <div className="footer-contact">
         
          <p><FaPhone /> Call Us On: +91 98107 01117</p>
          <p><FaEnvelope /> Mail Us: labneh.india@gmail.com</p>
          <a href="https://www.instagram.com/labnehindia/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} className="instagram-icon" />
          </a>
        </div>
      </div>

      <div className="footer-content">
        <div className="address-section">
          <h3>Our Addresses</h3>
          <p><FaStore /> Ambience Mall, Nelson Mandela Marg, New Delhi, Delhi 110074</p>
          <p><FaStore /> Floor 3, Ambience Mall, Sector 24, Gurugram, Haryana 122022</p>
        </div>

        <div className="nav-section nav-left">
          <h3>Navigation</h3>
          <ul>
             <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li> 
            <li><Link to="/contact-us">Contact Us</Link></li> 
          </ul>
        </div>
        {/*
        <div className="order-section">
          <span>Order Now</span>
          <div className="food-platforms">
            <a href="https://www.swiggy.com/city/gurgaon/labneh-metropolitan-mall-cyber-city-rest867340" target="_blank" rel="noopener noreferrer">
              <img src={swiggyLogo} alt="Swiggy" className="food-platform-logo" />
            </a>
            <a href="https://www.zomato.com/ncr/labneh-mg-road-gurgaon" target="_blank" rel="noopener noreferrer">
              <img src={zomatoLogo} alt="Zomato" className="food-platform-logo" />
            </a>
          </div>
        </div>
        */}
      </div>

     <div className="footer-bottom">
  <p>
    © 2024 Labneh. Designed by{" "}
    <a 
      href="https://wa.me/918328497607" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="ss-developers"
    >
      SS Developers
    </a>
  </p>
</div>
    </footer>
  );
}

export default Footer;
