import React from "react";
import { NavLink } from "react-router-dom";
import { LiaGreaterThanSolid } from "react-icons/lia";

const UserLinks = () => {
  const handleNavLinkClick = () => {
    // Scroll to the top of the page when the NavLink is clicked
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="user-links">
        <h3>Useful Links</h3>
        <ul>
          <li>
            <NavLink to="/blog" onClick={handleNavLinkClick}>
              <LiaGreaterThanSolid />
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/faq" onClick={handleNavLinkClick}>
              <LiaGreaterThanSolid />
              Faq's
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={handleNavLinkClick}>
              <LiaGreaterThanSolid />
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={handleNavLinkClick}>
              <LiaGreaterThanSolid />
              About Us
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/size-charts" onClick={handleNavLinkClick}>
              <LiaGreaterThanSolid />
              Size Charts
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/reviews" onClick={handleNavLinkClick}>
              <LiaGreaterThanSolid />
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default UserLinks;
