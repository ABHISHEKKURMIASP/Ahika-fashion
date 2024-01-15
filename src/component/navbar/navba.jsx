import React from "react";
import EthenicDropdown from "./ethenic";
import { useState } from "react";
import Header from "../header/header";
import {
  Navbar,
  Nav,
  FormControl,
  InputGroup,
  Dropdown,
  
} from "react-bootstrap";
import { Link, NavLink, Outlet } from "react-router-dom";
import {
  FaSearch,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaTimes,
  FaBars,
  FaPinterest,
  FaFacebook,
} from "react-icons/fa";
import { CiUser, CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
const Navba = () => {
  const ahikaLogo = "/assets/ahika-logo.png";

  const [showNavItems, setShowNavItems] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

  const toggleNavItems = () => {
    setShowNavItems(!showNavItems);
    setShowSearchBar(false);
  };

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
    setShowNavItems(false);
  };

  return (
    <>
      {/*for toogle bar*/}
      <Header/>
      <Navbar bg="white" expand="lg"  >
        <div
          className="hamburger-icon d-lg-none"
          onClick={toggleNavItems}
          style={{ cursor: "pointer", marginTop: "10px" }}
        >
           {/* Hamburger icon */}
          {showNavItems ? (
            <FaTimes style={{ fontSize: "24px" }} />
          ) : (
            <FaBars style={{ fontSize: "24px" }} />
          )}
        </div>

        {/*for logo*/}
        <Navbar.Brand as={Link} to="/">
          <img
            src={ahikaLogo}
            width="160"
            height="30"
            className="d-inline-block align-top"
            alt="Ahika Logo"
          />
        </Navbar.Brand>

        {/* Small screen content for search icon and other icon  */}
        <div
          className="d-lg-none"  style={{ display: "flex", alignItems: "center" }}>
          <div
            className="d-lg-none search-bar"
            onClick={toggleSearchBar}
            style={{ cursor: "pointer", marginTop: "6px" }}
          >
            <FaSearch style={{ fontSize: "22px" }} />
          </div>

             {/* Heart and Bag icons */}
          <NavLink
            to="/"
            className="text-decoration-none"
            style={{ marginLeft: "10px" }}
          >
             {/* Heart icon */}
            <CiHeart style={{ color: "black", fontSize: "25px" }} />
          </NavLink>
          <NavLink
            to="/"
            className="text-decoration-none"
            style={{ marginLeft: "10px" }}
          >
            {/* Bag icon */}
            <IoBagOutline style={{ color: "black", fontSize: "25px" }} />
          </NavLink>
        </div>

        {/* Large screen menu items of navbar as well as small screen*/}

        <Navbar.Collapse
          id="basic-navbar-nav"
          className={`ml-auto ${showNavItems ? "show" : ""}`}
        >
          <Nav
            className=" ml-auto mr-auto flex-lg-row flex-column "
            style={{ paddingLeft: "20px" }}
          >
             <hr className="d-lg-none" />
            <Nav.Link as={Link} to="/new-launch" className="line-bar">
              NEW LAUNCH
            </Nav.Link>
            <hr className="d-lg-none" />
            
            {/* <Nav.Link as={Link} to="/ethenic-wear">ETHENIC WEAR</Nav.Link><hr/> */}



             <EthenicDropdown/> 
             <hr className="d-lg-none" />




            <Nav.Link as={Link} to="/ahika-plus" className="line-bar">
              AKHIKA PLUS
            </Nav.Link>
            <hr className="d-lg-none"/>
            <Nav.Link as={Link} to="/best-seller" className="line-bar">
              BEST SELLER
            </Nav.Link>
            <hr className="d-lg-none"/>
          </Nav>
          

          {/*for large screen search bar*/}
          <div className="ml-3 d-none d-lg-flex align-items-center">
            <InputGroup style={{ maxWidth: "120px", position: "relative" }}>
              <FormControl
                placeholder="Search.."
                className="rounded-pill"
                style={{ paddingRight: "2rem" }}
              />
              <NavLink to="/" className="text-decoration-none">
                <InputGroup.Text
                  style={{
                    position: "absolute",
                    right: "0px",
                    background: "white",
                    border: "none",
                  }}
                >
                  <FaSearch />
                </InputGroup.Text>
              </NavLink>
            </InputGroup>
          </div>

          {/* for large screen icons */}
          <div
            className="ml-3 d-none d-lg-flex"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className="user-icon">
              <NavLink to="/sign-in">
                <CiUser style={{ color: "black", fontSize: "25px" }} />
              </NavLink>
            </div>
            <div className="heart-icon">
              <NavLink to="/">
                <CiHeart style={{ color: "black", fontSize: "25px" }} />
              </NavLink>
            </div>

            <div className="bag-icons">
              <NavLink to="/">
                <IoBagOutline
                  style={{
                    color: "black",
                    fontSize: "25px",
                    marginRight: "10px",
                  }}
                />
              </NavLink>
            </div>
          </div>

          {/* for small screen usericon and social-media icon */}
          <div className="d-lg-none ml-auto mt-3 additional-user-icon">
            <div
              className="user-icon"
              style={{
                marginRight: "1px",
                marginBottom: "20px",
                marginTop: "90px",
              }}
            >
              <NavLink to="/sign-in" style={{ textDecoration: "none" }}>
                <CiUser style={{ color: "black", fontSize: "25px" }} />
                <span style={{ color: "black", fontSize: "20px" }}>Login</span>
              </NavLink>
            </div>
            <NavLink to="/" style={{ textDecoration: "none" }}>
              {" "}
              {/* Hide for large screens */}
              <FaFacebook
                style={{ color: "black", fontSize: "20px", marginLeft: "3px" }}
              />
            </NavLink>
            <NavLink to="/" style={{ textDecoration: "none" }}>
              {" "}
              {/* Hide for large screens */}
              <FaPinterest
                style={{ color: "black", fontSize: "20px", marginLeft: "3px" }}
              />
            </NavLink>
            <NavLink to="/" style={{ textDecoration: "none" }}>
              {" "}
              {/* Hide for large screens */}
              <FaInstagram
                style={{ color: "black", fontSize: "20px", marginLeft: "3px" }}
              />
            </NavLink>
            <NavLink to="/" style={{ textDecoration: "none" }}>
              {" "}
              {/* Hide for large screens */}
              <FaYoutube
                style={{ color: "black", fontSize: "20px", marginLeft: "10px" }}
              />
            </NavLink>
            <NavLink to="/" style={{ textDecoration: "none" }}>
              {" "}
              {/* Hide for large screens */}
              <FaTwitter
                style={{ color: "black", fontSize: "20px", marginLeft: "10px" }}
              />
            </NavLink>
          </div>
          <hr className="d-lg-flex"/>
         </Navbar.Collapse> 
         
      </Navbar>
    
    
      {/* for search bar on smaller screen */}
      {showSearchBar && (
        <div
          style={{
            maxWidth: "100%",
            background: "#f8f9fa",
            position: "fixed",
            top: "56px",
            width: "100%",
            zIndex: "1000",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <InputGroup style={{ maxWidth: "80%", margin: "0 auto" }}>
              <FormControl placeholder="Search.." className="rounded-pill" />
              <InputGroup.Text style={{ background: "white", border: "none" }}>
                <FaSearch />
              </InputGroup.Text>
            </InputGroup>
            <div style={{ cursor: "pointer" }} onClick={toggleSearchBar}>
              <FaTimes style={{ fontSize: "24px" }} />
            </div>
          </div>
        
        </div>
        
      )}
      <Outlet/>
    </>
  );
};

export default Navba;
