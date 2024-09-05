import React, { useState, useEffect } from "react";
import "./Home.css";
import burger1 from "../assets/burger1.png";
import pizza from "../assets/pizza.png";
import shawarma from "../assets/shawarma.png";
import salad from "../assets/salad.png";
import mandi from "../assets/mandi-rice.png";
import drinks from '../assets/drinks.png';

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

const images = [burger1, pizza, shawarma];

const Home = () => {
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
          <button className="btn">Read More</button>
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
      <div className="second">
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
            <img src={drinks} alt="Item 1" className="box-image"></img>
            <div className="box-info">Drinks Starting from 299/-</div>
        </div>
        <div className="box box2" style={boxStyles.box_2}>
            <img src={salad} alt="Item 2" className="box-image"></img>
            <div className="box-info">Information about Item 2</div>
        </div>
        <div className="box box3" style={boxStyles.box_3}>
            <img src={mandi} alt="Item 3" className="box-image"></img>
            <div className="box-info">Information about Item 3</div>
        </div>
        <div className="box box4" style={boxStyles.box_4}>
            <img src={burger1} alt="Item 4" className="box-image"></img>
            <div className="box-info">Information about Item 4</div>
        </div>
        <div className="box box5" style={boxStyles.box_5}>
            <img src={shawarma} alt="Item 5" className="box-image"></img>
            <div className="box-info">Information about Item 5</div>
        </div>
        <div className="box box6" style={boxStyles.box_6}>
            <img src={pizza} alt="Item 6" className="box-image"></img>
            <div className="box-info">Information about Item 6</div>
        </div>
    </div>
  </div>
</div>


  );
};

export default Home;
