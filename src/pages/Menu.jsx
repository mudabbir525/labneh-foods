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
        { name: 'PANEER SHAWARMA',  type: 'veg' },
        { name: 'MOCKMEAT SHAWARMA' , type: 'veg' },
        { name: 'FALAFEL ROLL', type: 'veg' },
        { name: 'HARISSA FALAFEL ROLL',  type: 'veg' },
        { name: 'LABNEH SPL. VEG SHAWARMA ROLL',  type: 'veg' },
        { name: 'CHICKEN SHAWARMA',  type: 'non-veg' },
        { name: 'SPICY CHICKEN SHAWARMA',  type: 'non-veg' },
        { name: 'TURKISH KEBAB ROLL',  type: 'non-veg' },
        { name: 'SHISH TAOUK ROLL',  type: 'non-veg' },
        { name: 'LAMB SHAWARMA',  type: 'non-veg' },
        { name: 'LAMB KAFTA ROLL',  type: 'non-veg' },
        { name: 'LABNEH SPL. SHAWARMA ROLL',  type: 'non-veg' },
      ],
      image: shawarmaImage,
    },
    'Arabic Mandi Rice': {
      items: [
        { name: 'PANEER MANDI RICE',  type: 'veg' },
        { name: 'MOCKMEAT MANDI RICE',  type: 'veg' },
        { name: 'FALAFEL MANDI RICE',  type: 'veg' },
        { name: 'CHICKEN SHAWARMA MANDI RICE', type: 'non-veg' },
        { name: 'MINED CHICKEN MANDI RICE', type: 'non-veg' },
        { name: 'CHICKEN SHISH TAOUK MANDI RICE', type: 'non-veg' },
        { name: 'CHICKEN MANDI RICE', type: 'non-veg' },
        { name: 'MINCED LAMB MANDI RICE', type: 'non-veg' },
      ],
      image: mandiRiceImage,
    },
    'Grill and Kebab': {
      items: [
        { name: 'PANEER SHISH TAOUK',  type: 'veg' },
        { name: 'LABNEH SPL. GRILLED CHICKEN (HALF)',  type: 'non-veg' },
        { name: 'LABNEH SPL. GRILLED CHICKEN (FULL)',type: 'non-veg' },
        { name: 'CHICKEN SHISH TAOUK', type: 'non-veg' },
        { name: 'TURKISH CHICKEN KEBAB',  type: 'non-veg' },
        { name: 'CHICKEN ADANA KEBAB',type: 'non-veg' },
      ],
      image: grillKebabImage,
    },
    Burgers: {
      items: [
        { name: 'VEG BURGER', type: 'veg' },
        { name: 'FALFEL BURGER',  type: 'veg' },
        { name: 'BBQ CHICKEN BURGER',type: 'non-veg' },
        { name: 'CHICKEN SHAWARMA BURGER',  type: 'non-veg' },
        { name: 'JUICY LAMB BURGER',, type: 'non-veg' },
      ],
      image: burgerImage,
    },
    'Cold Mezze': {
      items: [
        { name: 'CLASSIC HUMMUS', price: 229, type: 'veg' },
        { name: 'BEETROOT HUMMUS', price: 249, type: 'veg' },
        { name: 'SPICY PAPRIKA HUMMUS', price: 249, type: 'veg' },
        { name: 'BEIRUTI HUMMUS', price: 269, type: 'veg' },
        { name: 'SPICY CHICKEN HUMMUS', price: 329, type: 'non-veg' },
        { name: 'SPICY LAMB HUMMUS', price: 349, type: 'non-veg' },
        { name: 'TARIO HUMMUS', price: 359, type: 'veg' },
        { name: 'LABNAH SPECIAL', price: 325, type: 'veg' },
        
      ],
      image: coldMezzeImage,
    },
    'Mezze Platters': {
      items: [
        { name: 'VEG GRILL PLATTER', price: 449, type: 'veg' },
        { name: 'VEG JUMBO PLATTER', price: 599, type: 'veg' },
        { name: 'NON-VEG BAR-BE-QUE CHICKEN PLATTER', price: 689, type: 'non-veg' },
        { name: 'NON-VEG MEZZE PLATTER', price: 849, type: 'non-veg' },
        { name: 'NON-VEG JUMBO PLATTER', price: 1199, type: 'non-veg' },
        
      ],
      image: mezzePlatterImage,
    },
    Pizza: {
      items: [
        { name: 'MARGHERITA PIZZA', price: 399, type: 'veg' },
        { name: 'PANEER PIZZA', price: 499, type: 'non-veg' },
        { name: 'FARMHOUSE PIZZA', price: 539, type: 'veg' },
        { name: 'ZAATAR MANAKISH PIZZA', price: 549, type: 'veg' },
        { name: 'CHEESY ZAATAR MANAKISH PIZZA', price: 599, type: 'veg' },
        { name: 'SPICY AFFAIR PIZZA', price: 539, type: 'veg' },
        { name: 'HAWAIIAN PIZZA', price: 539, type: 'veg' },
        { name: 'PEPPY PANEER PIZZA', price: 549, type: 'veg' },
        { name: 'LABNEH SPECIAL VEG PIZZA', price: 599, type: 'veg' },
        { name: 'LABNEH OVERLOADED PIZZA', price: 649, type: 'veg' },
        { name: 'CHICKEN SHAWARMA PIZZA', price: 499, type: 'non-veg' },
        { name: 'PEPPERONI PIZZA', price: 499, type: 'non-veg' },
        { name: 'CHICKEN MANAKISH PIZZA', price: 549, type: 'non-veg' },
        { name: 'CHICKEN SHISH TAOUK PIZZA', price: 549, type: 'non-veg' },
        { name: 'MUTTON SEEKH PIZZA', price: 599, type: 'non-veg' },
        { name: 'TURKISH KEBAB PIZZA', price: 549, type: 'non-veg' },
        { name: 'CHICKEN SEEKH KEBAB PIZZA', price: 549, type: 'non-veg' },
        { name: 'LEBAB SPECIAL SEEKH PIZZA', price: 649, type: 'non-veg' },
        { name: 'CHICKEN TIKKA PIZZA', price: 549, type: 'non-veg' },
        { name: 'NONVEGOVERLOADED PIZZA', price: 699, type: 'non-veg' },
      ],
      image: pizzaImage,
    },
    Salad: {
      items: [
        { name: 'FATTOUSH SALAD VEG', price: 229, type: 'veg' },
        { name: 'FALAFEL SALAD', price: 229, type: 'veg' },
        { name: 'CHICKEN CEASER SALAD', price: 269, type: 'non-veg' },
        { name: 'CHICKEN SHAWARMA SALAD', price: 259, type: 'non-veg' },
      ],
      image: saladImage,
    },
    Drinks: {
      items: [
        { name: 'COLD DRINKS', price: 'MRP', type: 'veg' },
        { name: 'WATER', price: 'MRP', type: 'veg' },
        { name: 'MOJITO', price: 129, type: 'veg' },
        { name: 'ICE TEA LEMON / PEACH ICE TEA', price: 119, type: 'veg' },
        { name: 'ORANGE BANTA LEMON', price: 149, type: 'veg' },
        { name: 'POPCORN CARAMEL SHAKE', price: 189, type: 'veg' },
        { name: 'COLD COFFEE', price: 169, type: 'veg' },
        { name: 'TIRAMISU', price: 189, type: 'veg' },
        { name: 'BLUEBERRY SHAKE', price: 189, type: 'veg' },
      ],
      image: drinksImage,
    },
    Extras: {
      items: [
        { name: 'CLASSIC HUMMUS', price: 89, type: 'veg' },
        { name: 'GARLIC DIP', price: 69, type: 'veg' },
        { name: 'FRENCH FRIES', price: 119, type: 'veg' },
        { name: 'CHEESE FRIES', price: 149, type: 'veg' },
        { name: 'PERI PERI FRIES', price: 139, type: 'veg' },
        { name: 'PITA BREAD (2PCS)', price: 79, type: 'veg' },
        { name: 'WHOLE WHEAT PITA BREAD (2 PCS)', price: 79, type: 'veg' },
        { name: 'ZA’ATAR FRIES', price: 139, type: 'veg' },
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
