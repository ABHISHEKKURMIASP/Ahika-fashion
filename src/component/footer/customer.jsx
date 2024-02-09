import React from 'react';
import { NavLink } from 'react-router-dom';
import { LiaGreaterThanSolid } from "react-icons/lia";

const CustomerSupport = () => {
  const handleNavLinkClick = () => {
    // Scroll to the top of the page when the NavLink is clicked
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="customer-support">
        <h3>Customer Support</h3>
        <ul>
          <li><NavLink to="/payment-methods" onClick={handleNavLinkClick}><LiaGreaterThanSolid />Payment Methods</NavLink></li>
          <li><NavLink to="/shipping-policy" onClick={handleNavLinkClick}><LiaGreaterThanSolid />Shipping Policy</NavLink></li>
          <li><NavLink to="/return-exchange-policy" onClick={handleNavLinkClick}><LiaGreaterThanSolid />Return, Refund & Exchange Policy</NavLink></li>
          <li><NavLink to="/privacy-policy" onClick={handleNavLinkClick}><LiaGreaterThanSolid />Privacy Policy</NavLink></li>
          <li><NavLink to="/terms-conditions" onClick={handleNavLinkClick}><LiaGreaterThanSolid />Terms & Conditions</NavLink></li>
          <li><NavLink to="/terms-of-service" onClick={handleNavLinkClick}><LiaGreaterThanSolid />Terms Of Service</NavLink></li>
          <li><NavLink to="/color-disclaimer" onClick={handleNavLinkClick}><LiaGreaterThanSolid />Color Disclaimer</NavLink></li>
        </ul>
      </div>
    </>
  );
};

export default CustomerSupport;
