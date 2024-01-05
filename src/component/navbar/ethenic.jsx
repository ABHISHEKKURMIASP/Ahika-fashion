import React from 'react';
import { useState } from 'react';
import { Nav,Dropdown,Row,Col } from 'react-bootstrap';
import './dropdown.css';

const EthenicDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const checkScreenSize = () => {
    setIsLargeScreen(window.innerWidth >= 992); // Example breakpoint (adjust as needed)
   
  };

  React.useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, [isLargeScreen]);
  
  // Update the useEffect to include handling showDropdown when the screen is not large
  React.useEffect(() => {
    if (!isLargeScreen) {
      setShowDropdown(false);
    }
  }, [isLargeScreen]);
  const handleMouseEnter = () => {
    if (isLargeScreen) {
      setShowDropdown(true);
    }
  };

  const handleMouseLeave = () => {
    if (isLargeScreen) {
      setShowDropdown(false);
    }

  };
  return (
    <>

 
   <Dropdown 
   as={Nav.Item} 
   className="custom-dropdown" 
   show={isLargeScreen && showDropdown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>

      <Dropdown.Toggle as={Nav.Link} id="navbarDropdown"   className="ethenic-wear">
        ETHENIC WEAR
      </Dropdown.Toggle>
      {isLargeScreen && showDropdown && (
      <Dropdown.Menu className="mega-menu" style={{width:"600px" ,alignItems:"center"}}>
        <Row className="no-gutters">
          <Col className="categories-column">
            <h6>Category 1</h6>
            <ul className="category-items">
              <li><a href="#">Item 1</a></li>
              <li><a href="#">Item 2</a></li>
              {/* Add more items as needed */}
            </ul>
          </Col>
          <Col className="categories-column">
            <h6>Category 2</h6>
            <ul className="category-items">
              <li><a href="#">Item 1</a></li>
              <li><a href="#">Item 2</a></li>
              {/* Add more items as needed */}
            </ul>
          </Col>
          <Col className="categories-column">
            <h6>Category 2</h6>
            <ul className="category-items">
              <li><a href="#">Item 1</a></li>
              <li><a href="#">Item 2</a></li>
              {/* Add more items as needed */}
            </ul>
          </Col>
          <Col className="categories-column">
            <h6>Category 2</h6>
            <ul className="category-items">
              <li><a href="#">Item 1</a></li>
              <li><a href="#">Item 2</a></li>
              {/* Add more items as needed */}
            </ul>
          </Col>
          <Col className="categories-column">
            <h6>Category 2</h6>
            <ul className="category-items">
              <li><a href="#">Item 1</a></li>
              <li><a href="#">Item 2</a></li>
              {/* Add more items as needed */}
            </ul>
          </Col>
        </Row>
      </Dropdown.Menu>
      )}
     
    </Dropdown> 



    </>
  );
};

export default EthenicDropdown;