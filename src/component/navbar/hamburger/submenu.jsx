import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './submenu.css';
const Submenu = ({ items, onClick}) => {
  const [isOpen, setIsOpen] = useState(false);
  

  const handleClick = () => {
 setIsOpen(!isOpen);
  };

  return (
    <ul className={`submenu ${isOpen ? 'open' : ''}`}>
      {items.map((item, index) => (
        <li key={index}>
          <button onClick={handleClick}>
            {isOpen ? '<-' : '+'}{item.label}
          </button>
          {isOpen && item.subcategories && (
            <Submenu items={item.subcategories} onClick={onClick} />
          )}
          {isOpen && item.link && (
            <NavLink to={item.link} onClick={onClick}>
              {item.label}
            </NavLink>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Submenu;

