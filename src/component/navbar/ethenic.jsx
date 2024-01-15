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
   // Prevent closing dropdown when the mouse is over the dropdown menu
   const handleDropdownMouseEnter = () => {
    if (isLargeScreen) {
      setShowDropdown(true);
    }
  };

  const handleDropdownMouseLeave = () => {
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

      <Dropdown.Toggle as={Nav.Link} id="navbarDropdown"  className="ethenic-wear" >
        ETHENIC WEAR
      </Dropdown.Toggle>
      {isLargeScreen && showDropdown && (
      <Dropdown.Menu className="mega-menu" style={{width:"1000px",left: "50%", transform: "translateX(-50%)",fontSize:"12px"}} onMouseEnter={handleDropdownMouseEnter}
      onMouseLeave={handleDropdownMouseLeave}>
        <Row className="no-gutters">
          <Col className="categories-column">
            <h6>COLLECTIONS</h6>
            <ul className="category-items" >
              <li id="link1"><a href="#">KURTAS</a></li>
             
              <li id="link2"><a href="#">KURTIS & TUNICS</a>

              <Dropdown.Menu className="mega-submenu">
        <Row className="no-gutters">
          <Col className="subcategories-column">
            <h5>FABRIC</h5>
            <ul>
              <li><a href="">COTTON</a></li>
              {/* Add more fabric items */}
            </ul>
          </Col>
          <Col className="subcategories-column">
            <h5>STYLE</h5>
            <ul>
              <li><a href="#">STRAIGHT</a></li>
              {/* Add more style items */}
            </ul>
          </Col>
          <Col className="subcategories-column">
            <h5>WORK</h5>
            <ul>
              
            </ul>
          </Col>
          <Col className="subcategories-column">
            <h5>PRINT & PATTERN</h5>
            <ul>
              <li><a href="">FLORAL PRINT</a></li>
              <li><a href="">ABSTRACT PRINT</a></li>
              <li><a href="">ETHNIC MOTIFS</a></li>
              {/* Add more print & pattern items */}
            </ul>
          </Col>
        </Row>
      </Dropdown.Menu>
              </li>
              <li id="link3"><a href="#">KURTA SETS</a></li>
              <li id="link4"><a href="#">SUIT SETS</a></li>
              <li id="link5"><a href="#">KAFTAN SETS</a></li>
              <li id="link6"><a href="#">SHOP ALL</a></li>
              {/* Add more items as needed */}
            </ul>
          </Col>
          <Col className="categories-column">
            <h6>FABRIC</h6>
            <ul className="category-items">
           

              <li><a href="#"> POLY CREPE </a></li>
              <li><a href="#">COTTON</a></li>
              <li><a href="#">SILK </a></li>
              <li><a href="#">RAYON</a></li>
              <li><a href="#"> GEORGETTE </a></li>
              <li><a href="#">CHIFFON</a></li>
              {/* Add more items as needed */}
            </ul>
          </Col>
          <Col className="categories-column">
            <h6>STYLE</h6>
            <ul className="category-items">
              <li><a href="#">ANARKALI</a></li>
              <li><a href="#">A-LINE</a></li>
              <li><a href="#">STRAIGHT</a></li>
              <li><a href="#">ANGRAKHA</a></li>
              {/* Add more items as needed */}
           
            </ul>
          </Col>
          <Col className="categories-column">
            <h6>WORK</h6>
            <ul className="category-items">

              <li><a href="#">MIRROR WORK</a></li>
              <li><a href="#">GOTA PATTI</a></li>
              <li><a href="#">SCHIFFLI</a></li>
              <li><a href="#">EMBROIDERY</a></li>
              {/* Add more items as needed */}
            </ul>
          </Col>
          <Col className="categories-column">
            <h6>PRINT & PATTERN</h6>
            <ul className="category-items">
            <li><a href="#">SOLID</a></li>
            <li><a href="#">FLORAL PRINT</a></li>
              <li><a href="#">GEOMETRIC PRINT</a></li>
              <li><a href="#">ABSTRACT PRINT</a></li>
              <li><a href="#">STRIPED</a></li>
              <li><a href="#">BANDHANI PRINT</a></li>
              <li><a href="#">LEHRIYA PRINT</a></li>
              <li><a href="#">CHECKS</a></li>
              <li><a href="#">ETHNIC MOTIFS</a></li>
              <li><a href="#">IKKAT</a></li>
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