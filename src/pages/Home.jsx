import React, { useState, useEffect } from "react";
import "./Home.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import grills from "../assets/GrillsGrid-min.jpg";
import kunaffa from "../assets/kunaffa.jpg";
import shawarma from "../assets/shawarmaGridmin.jpeg";
import shawarma1 from "../assets/shawarma.png";
import salad from "../assets/saladGridmin.jpg";
import mandi from "../assets/mandiGrid-min.jpg";
import platter from "../assets/platters.jpg";
import pizza from "../assets/pizza.png";
import burger1 from "../assets/burger1.png";



const Home = () => {
   
   const navigate = useNavigate();
    const handleMenuClick = () => {
    navigate('/Menu');
  };

   
  useEffect(() => {
    const boxes = document.querySelectorAll('.boxx');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Array.from(boxes).indexOf(entry.target);
          entry.target.classList.add('visible');
          entry.target.style.transitionDelay = `${index * 0.2}s`; // Staggered delay
        }
      });
    }, { threshold: 0.5 });

    boxes.forEach((box) => observer.observe(box));
    
    return () => {
      boxes.forEach((box) => observer.unobserve(box));
    };
  }, []);

  

  const boxStyles = {
    box_1: {
      background: 'linear-gradient(45deg, #ffcc00, #ff9900), url(./doodle.svg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundBlendMode: 'multiply',
      transition: 'background 0.3s ease',
    },
    box_2: {
      background: 'linear-gradient(45deg, #f96f5d, #f86d6f), url(./doodle.svg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundBlendMode: 'multiply',
    },
    box_3: {
      background: 'linear-gradient(45deg, #3498db, #2980b9), url(./doodle.svg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundBlendMode: 'multiply',
    },
    box_4: {
      background: 'linear-gradient(45deg, #2ecc71, #27ae60), url(./doodle.svg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundBlendMode: 'multiply',
    },
    box_5: {
      background: 'linear-gradient(45deg, #9b59b6, #8e44ad), url(./doodle.svg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundBlendMode: 'multiply',
    },
    box_6: {
      background: 'linear-gradient(45deg, #f1c40f, #f39c12), url(./doodle.svg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundBlendMode: 'multiply',
    },
  };

  const images = [pizza, shawarma];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);

      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsFading(false);
      }, 1000); // Match this with the transition duration in CSS
    }, 4000);

    return () => clearInterval(interval);
  }, []);

   const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="home">
      <div className="container">
        <div className="one">
          <h1>LABNEH</h1>
          <h2>Inspired by Levantine Cuisine with a Modern Indian Twist</h2>
    <p>
      LABNEH brings the best of Lebanon, Turkey, Arabia, and India into a fast-casual dining experience.
      Enjoy a variety of kebabs, shawarma, manakish, Arabic and Lebanese kebabs, sliders, and Middle Eastern desserts.
    </p>
    <p>
      Our motto is to ensure quality and consistency across all menu items, making every visit memorable.
    </p>
          <button className="btn" onClick={() => handleScrollToSection("about")}>Read More</button>
        </div>
        <div className="two">
          <img
            src={images[currentImageIndex]}
            alt="Food Image"
            width={400}
            className={isFading ? "fade-out" : "fade-in"}
          />
        </div>
      </div>
      <div className="second" id="about">
    <div className="about-us-content">
        <h1>About Us</h1>
        <p>
            Welcome to LABNEH, where the rich flavors of Middle Eastern cuisine 
            meet exceptional hospitality. We pride ourselves on offering an authentic 
            dining experience with dishes crafted from the finest ingredients, all in 
            a luxurious setting that reflects the vibrant culture of the region.
        </p>
        <p>
            Our chefs are masters in their craft, bringing traditional recipes to life 
            with a modern twist. Whether you're here for a family gathering or a romantic 
            dinner, our attentive service and warm ambiance will make you feel right at home.
        </p>
    </div>
</div>
     

<div className="third">
    <h1 className="thirdh1">Middle Eastern Feasts</h1>
    <div className="grid-container">
        <div className="box box1" style={boxStyles.box_1}>
            <img src={grills} alt="Item 1" className="box-image"></img>
            <div className="box-info">Grills</div>
        </div>
        <div className="box box2" style={boxStyles.box_2}>
            <img src={salad} alt="Item 2" className="box-image"></img>
            <div className="box-info">Salad's</div>
        </div>
        <div className="box box3" style={boxStyles.box_3}>
            <img src={mandi} alt="Item 3" className="box-image"></img>
            <div className="box-info">Mandi Rice Bowls</div>
        </div>
        <div className="box box4" style={boxStyles.box_4}>
            <img src={kunaffa} alt="Item 4" className="box-image"></img>
            <div className="box-info">kunaffa's</div>
        </div>
        <div className="box box5" style={boxStyles.box_5}>
            <img src={shawarma} alt="Item 5" className="box-image"></img>
            <div className="box-info">Shawarma's</div>
        </div>
        <div className="box box6" style={boxStyles.box_6}>
            <img src={platter} alt="Item 6" className="box-image"></img>
            <div className="box-info">platter's</div>
        </div>
    </div>
  <div className="one">
   <button className="btn"onClick={handleMenuClick} > MENU</button>
    </div>
  </div>
      <div className="fourth">
  <h1 className="fourthh1">Discover Labneh</h1>
  <div className="boxx">Levantine cuisine with a combination of Middle-Eastern and Indian Kebabs are the inspiration behind Labneh.</div>
  <div className="boxx">Labneh will offer the best of dishes from Lebanon, Turkey, Arabia and India keeping in mind the local food preferences, tastes and eating habits.</div>
  <div className="boxx">Set-up in a small format, Labneh is a casual fast food concept, best suited for food courts or small standalone spaces with limited seating or even a take-away option.</div>
  <div className="boxx">Labneh will introduce some never-tried before food experiences both from the point of view of the food itself and the way it’s prepared.</div>
  <div className="boxx">The customer experience shall include various preparations from the grill, a number of options of Shawarma and Doner wraps and rolls, Manakish (flatbread pizzas), Arabic and Lebanese kebabs, and Sliders along with Middle-Eastern desserts.</div>
  <div className="boxx">OUR MOTTO - ensure quality and consistency is maintained across all menu items at all times and locations, making the experience for the customer a memorable one and ensuring repeat visits.</div>
</div>
</div>


  );
};

export default Home;
