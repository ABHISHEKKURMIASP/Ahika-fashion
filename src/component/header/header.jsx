import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import './header.css';


const Header = () => {
  return (
    <header className="header">
      
      <div className="left-icons">
      <NavLink to="https://play.google.com/store/apps/details?id=app.ahikanewfeature.android"> <IoLogoGooglePlaystore style={{color: 'white', fontSize: '25px'}}/></NavLink>
      </div>
     <div div className="right-icons">
      <NavLink to="https://apps.apple.com/in/app/ahika/id6449972154"  > <FaApple style={{color: 'white', fontSize: '25px'}}/></NavLink>
      </div>
       
      
      <div className="center-text">FREE SHIPPING PAN INDIA</div>
     
    </header>
  );
};

export default Header;