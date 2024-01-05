import React from 'react';
import { NavLink } from 'react-router-dom';
import { LiaGreaterThanSolid } from "react-icons/lia";

const UserLinks = () => {
  return (
    <>
     <div className="user-links">
      <h3>Useful Links</h3>
      <ul>
        <li><NavLink to="/blog"><LiaGreaterThanSolid/>Blog</NavLink></li>
        <li><NavLink to="/view-cart"><LiaGreaterThanSolid/>Faq's</NavLink></li>
        <li><NavLink to="/contact"><LiaGreaterThanSolid/>Contact Us</NavLink></li>
        <li><NavLink to="/about"><LiaGreaterThanSolid/>About Us</NavLink></li>
     <li> <NavLink to="/size-charts"><LiaGreaterThanSolid/>Size Charts</NavLink></li>
    <li>  <NavLink to="/reviews"><LiaGreaterThanSolid/>Reviews</NavLink></li>
      </ul>
    </div>
    </>
  );
};

export default UserLinks;
