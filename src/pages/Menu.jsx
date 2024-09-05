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




const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  

  const menuItems = {
    Shawarma: {
      items: [
        { name: 'Veg Shawarma', price: 150, type: 'veg' },
        { name: 'Non-Veg Shawarma', price: 180, type: 'non-veg' },
        { name: 'Open Shawarma Platter', price: 220, type: 'non-veg' },
      ],
      image: shawarmaImage,
    },
    'Mandi Rice': {
      items: [
        { name: 'Veg Mandi Rice', price: 200, type: 'veg' },
        { name: 'Chicken Mandi Rice', price: 250, type: 'non-veg' },
        { name: 'Mutton Mandi Rice', price: 300, type: 'non-veg' },
        { name: 'Fish Mandi Rice', price: 400, type: 'veg' },
      ],
      image: mandiRiceImage,
    },
    'Grill and Kebab': {
      items: [
        { name: 'Paneer Tikka', price: 180, type: 'veg' },
        { name: 'Chicken Kebab', price: 220, type: 'non-veg' },
        { name: 'Seekh Kebab', price: 240, type: 'non-veg' },
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
  };

  return (
    <div className="menu">
     <div className="menu-heading">  <h3>Explore our diverse menu inspired by Levantine and Indian cuisines.</h3>  </div>
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
              <h3>Veg</h3>
              <table className="table">
                <thead>
                  <tr>
                    <th>Item Name</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {menuItems[selectedCategory].items
                    .filter((item) => item.type === 'veg')
                    .map((item, i) => (
                      <tr key={i}>
                        <td>{item.name}</td>
                        <td>₹{item.price}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div className="table-container">
              <h3>Non-Veg</h3>
              <table className="table">
                <thead>
                  <tr>
                    <th>Item Name</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {menuItems[selectedCategory].items
                    .filter((item) => item.type === 'non-veg')
                    .map((item, i) => (
                      <tr key={i}>
                        <td>{item.name}</td>
                        <td>₹{item.price}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="menu-image">
            <img
              src={menuItems[selectedCategory].image}
              alt={selectedCategory}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
