import React, { useState } from 'react';
import './Menu.css';
import shawarmaImage from '../assets/shawarma.png';
import mandiRiceImage from '../assets/mandi-rice.png';
import grillKebabImage from '../assets/grill-kebab.png';
import burgerImage from '../assets/burger1.png';
import coldMezzeImage from '../assets/cold-mezze.png';
import mezzePlatterImage from '../assets/mezze-platter.png';
import pizzaImage from '../assets/pizza.png';
import saladImage from '../assets/salad.png';
import drinksImage from '../assets/drinks.png';
import extrasImage from '../assets/extras.png';

const vegDot = '🟢'; // Green dot for veg
const nonVegDot = '🔴'; // Red dot for non-veg

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const menuItems = {
    Shawarma: {
      items: [
        { name: 'PANEER SHAWARMA', price: 249, type: 'veg' },
        { name: 'MOCKMEAT SHAWARMA', price: 249, type: 'veg' },
        { name: 'FALAFEL ROLL', price: 259, type: 'veg' },
        { name: 'HARISSA FALAFEL ROLL', price: 269, type: 'veg' },
        { name: 'LABNEH SPL. VEG SHAWARMA ROLL', price: 289, type: 'veg' },
        { name: 'CHICKEN SHAWARMA', price: 279, type: 'non-veg' },
        { name: 'SPICY CHICKEN SHAWARMA', price: 289, type: 'non-veg' },
        { name: 'TURKISH KEBAB ROLL', price: 289, type: 'non-veg' },
        { name: 'SHISH TAOUK ROLL', price: 299, type: 'non-veg' },
        { name: 'LAMB SHAWARMA', price: 319, type: 'non-veg' },
        { name: 'LAMB KAFTA ROLL', price: 319, type: 'non-veg' },
        { name: 'LABNEH SPL. SHAWARMA ROLL', price: 339, type: 'non-veg' },
      ],
      image: shawarmaImage,
    },
    'Arabic Mandi Rice': {
      items: [
        { name: 'PANEER MANDI RICE', price: 279, type: 'veg' },
        { name: 'MOCKMEAT MANDI RICE', price: 260, type: 'veg' },
        { name: 'FALAFEL MANDI RICE', price: 279, type: 'veg' },
        { name: 'CHICKEN SHAWARMA MANDI RICE', price: 339, type: 'non-veg' },
        { name: 'MINED CHICKEN MANDI RICE', price: 329, type: 'non-veg' },
        { name: 'CHICKEN SHISH TAOUK MANDI RICE', price: 329, type: 'non-veg' },
        { name: 'CHICKEN MANDI RICE', price: 359, type: 'non-veg' },
        { name: 'MINCED LAMB MANDI RICE', price: 389, type: 'non-veg' },
      ],
      image: mandiRiceImage,
    },
    'Grill and Kebab': {
      items: [
        { name: 'PANEER SHISH TAOUK', price: 299, type: 'veg' },
        { name: 'LABNEH SPL. GRILLED CHICKEN (HALF)', price: 459, type: 'non-veg' },
        { name: 'LABNEH SPL. GRILLED CHICKEN (FULL)', price: 799, type: 'non-veg' },
        { name: 'CHICKEN SHISH TAOUK', price: 349, type: 'non-veg' },
        { name: 'TURKISH CHICKEN KEBAB', price: 389, type: 'non-veg' },
        { name: 'CHICKEN ADANA KEBAB', price: 389, type: 'non-veg' },
      ],
      image: grillKebabImage,
    },
    Burgers: {
      items: [
        { name: 'Veg Burger', price: 100, type: 'veg' },
        { name: 'Chicken Burger', price: 150, type: 'non-veg' },
        { name: 'Double Cheese Burger', price: 200, type: 'non-veg' },
      ],
      image: burgerImage,
    },
    'Cold Mezze': {
      items: [
        { name: 'Hummus', price: 120, type: 'veg' },
        { name: 'Baba Ghanoush', price: 130, type: 'veg' },
        { name: 'Tabbouleh', price: 140, type: 'veg' },
      ],
      image: coldMezzeImage,
    },
    'Mezze Platters': {
      items: [
        { name: 'Veg Mezze Platter', price: 300, type: 'veg' },
        { name: 'Non-Veg Mezze Platter', price: 350, type: 'non-veg' },
      ],
      image: mezzePlatterImage,
    },
    Pizza: {
      items: [
        { name: 'Margherita Pizza', price: 250, type: 'veg' },
        { name: 'Pepperoni Pizza', price: 300, type: 'non-veg' },
        { name: 'Veggie Supreme Pizza', price: 280, type: 'veg' },
      ],
      image: pizzaImage,
    },
    Salad: {
      items: [
        { name: 'Greek Salad', price: 150, type: 'veg' },
        { name: 'Caesar Salad', price: 180, type: 'non-veg' },
        { name: 'Garden Salad', price: 140, type: 'veg' },
      ],
      image: saladImage,
    },
    Drinks: {
      items: [
        { name: 'Lemonade', price: 50, type: 'veg' },
        { name: 'Iced Tea', price: 60, type: 'veg' },
        { name: 'Mint Mojito', price: 70, type: 'veg' },
      ],
      image: drinksImage,
    },
    Extras: {
      items: [
        { name: 'Fries', price: 80, type: 'veg' },
        { name: 'Garlic Bread', price: 100, type: 'veg' },
        { name: 'Cheese Dip', price: 50, type: 'veg' },
      ],
      image: extrasImage,
    },
    'Open Shawarma Platter': {
      items: [
        { name: 'SPICY PANEER SHAWARMA', price: 349, type: 'veg' },
        { name: 'FALAFEL WITH HUMUS', price: 349, type: 'veg' },
        { name: 'CHICKEN SHAWARMA', price: 379, type: 'non-veg' },
        { name: 'SPICY CHICKEN SHAWARMA', price: 389, type: 'non-veg' },
        { name: 'LAMB SHAWARMA', price: 499, type: 'non-veg' },
        { name: 'CHICKEN AND LAMB', price: 489, type: 'non-veg' },
      ],
      image: shawarmaImage,
    },
  };

  const shouldDisplayNonVegTable = (category) => {
    return category !== 'Drinks' && category !== 'Extras';
  };

  return (
    <div className="menu">
      <div className="menu-heading">
        <h1>Explore our diverse menu inspired by Levantine and Indian cuisines.</h1>
      </div>
      <div className="menu-buttons">
        {Object.keys(menuItems).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className="category-button"
          >
            {category}
          </button>
        ))}
      </div>

      {selectedCategory && (
        <div className="menu-content">
          <div className="menu-details">
            <h2>{selectedCategory}</h2>
            <div className="table-container">
              <h3>Vegetarian</h3>
              <table className="table">
                <thead>
                  <tr>
                    <th>Item Name</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {menuItems[selectedCategory].items
                    .filter(item => item.type === 'veg')
                    .map((item, i) => (
                      <tr key={i}>
                        <td>{vegDot} {item.name}</td>
                        <td>₹{item.price}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            {shouldDisplayNonVegTable(selectedCategory) && (
              <div className="table-container">
                <h3>Non-Vegetarian</h3>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Item Name</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {menuItems[selectedCategory].items
                      .filter(item => item.type === 'non-veg')
                      .map((item, i) => (
                        <tr key={i}>
                          <td>{nonVegDot} {item.name}</td>
                          <td>₹{item.price}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
          <div className="menu-image">
            <img src={menuItems[selectedCategory].image} alt={selectedCategory} className="category-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
