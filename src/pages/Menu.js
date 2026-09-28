import React from 'react';
import { MenuList } from '../helpers/MenuList';
import '../styles/Menu.css';

function Menu() {
  return (
    <div className="menuPage">
      <h1 className="menuTitle">Our Menu</h1>

      {["Espresso", "Non-Coffee", "Snacks"].map((category) => (
        <div className="menuCategory" key={category}>
          <h2>{category}</h2>
          <div className="menuGrid">
            {MenuList.filter((item) => item.category === category).map((item, index) => (
              <div className="menuCard" key={index}>
                <img src={item.image} alt={item.name} className="menuCardImage" />
                <div className="menuCardInfo">
                  <h3 className="itemName">{item.name}</h3>
                  <p className="itemPrice">${item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menu;