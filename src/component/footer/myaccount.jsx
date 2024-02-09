import React from 'react';
import { NavLink } from 'react-router-dom';
import { LiaGreaterThanSolid } from 'react-icons/lia';

const MyAccount = () => {
  const handleNavLinkClick = () => {
    // Scroll to the top of the page when the NavLink is clicked
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="my-account">
        <h3>My Account</h3>
        <ul>
          <li><NavLink to="/sign-in" onClick={handleNavLinkClick}><LiaGreaterThanSolid/>Sign In</NavLink></li>
          <li><NavLink to="/view-cart" onClick={handleNavLinkClick}><LiaGreaterThanSolid/>View Cart</NavLink></li>
          <li><NavLink to="/wishlist" onClick={handleNavLinkClick}><LiaGreaterThanSolid/>My Wishlist</NavLink></li>
          <li><NavLink to="/return-center" onClick={handleNavLinkClick}><LiaGreaterThanSolid/>Return Center</NavLink></li>
        </ul>
      </div>
    </>
  );
};

export default MyAccount;
