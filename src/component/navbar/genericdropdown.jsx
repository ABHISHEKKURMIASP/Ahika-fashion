// GenericDropdown.js
import React from 'react';

import { Dropdown, Row, Col, Nav } from 'react-bootstrap';
import './dropdown.css';

const renderSubMenu = (subcategories, isActive) => {
   if (!isActive || !subcategories ) {
   return null;
   }

  return (
    <Col className="subcategories-row">
      {subcategories.map((subcategory, subcategoryIndex) => (
        <Row key={subcategoryIndex} className="subcategory-column" >
          <div className="subcategory-container" >
            <h6>{subcategory.label}</h6>
            {subcategory.items.map((item, itemIndex) => (
              <div key={itemIndex}>
                <a href={item.link}>{item.label}</a>
              </div>
            ))}
          </div>
        </Row>
      ))}
    </Col>
 
);
};



const GenericDropdown = ({ title, categories }) => {
//    const [showDropdown, setShowDropdown] = React.useState(false);
const [isLargeScreen, setIsLargeScreen] = React.useState(false);
const [activeLabel, setActiveLabel] = React.useState(null);
const [isHovered, setIsHovered] = React.useState(false);
const [dropdownShown, setDropdownShown] = React.useState(false);


const checkScreenSize = () => {
  setIsLargeScreen(window.innerWidth >= 992);
};

React.useEffect(() => {
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
  return () => window.removeEventListener('resize', checkScreenSize);
}, []);

React.useEffect(() => {
  if (isLargeScreen) {
    setDropdownShown(true);
  } else {
    setDropdownShown(false);
  }
}, [isLargeScreen]);

// React.useEffect(() => {
//  setIsHovered(isLargeScreen); // Update to show dropdown initially on large screens
// }, [isLargeScreen]);

const handleMouseEnter = () => {
  if (isLargeScreen) {
      setIsHovered(true);
     setDropdownShown(true);
  if (!activeLabel) {
    setActiveLabel(categories[0].items[0].label);
  }
  }
};

const handleMouseLeave = () => {
  if (isLargeScreen) {
      setIsHovered(false);
      setActiveLabel(null);
      setDropdownShown(false);
      //   setShowDropdown(false);
  }
};


const handleLabelHover = (label) => {
  if (categories[0].items[0].label === label) {
    setActiveLabel(label);
  } else {
    setActiveLabel((prevLabel) => (prevLabel === label ? null : label));
  }
};


return (
 
   
  <Dropdown   as={Nav.Item}
    className="custom-dropdown"
    show={isLargeScreen && isHovered && dropdownShown}
     
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
  
    <Dropdown.Toggle as={Nav.Link} id="navbarDropdown" className="dropdown-title " >
      {title}
    </Dropdown.Toggle> 
     {isLargeScreen && isHovered &&(
  
      <Dropdown.Menu
     // className={`mega-menu ${menuClassName}`} // Use the menuClassName prop
         className="mega-menu"
       // style={{ width:"1000px",
        
        //    left: "50%",
        //     transform: "translateX(-50%)",
        //    fontSize: "14px" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
     
      >
            <Row className="gutters">
          <Col className="categories-column">
            {categories.map((category, index) => (
              <React.Fragment key={index}>
                <h6>{category.categoryTitle}</h6>
                <ul className="category-items">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a
                        href={item.link}
                        onMouseEnter={() => handleLabelHover(item.label)}
                        className={activeLabel === item.label ? 'active' : ''}
                      >
                        {item.label}
                      </a>
                     

                      
                    </li>
                  ))}
                </ul>
              </React.Fragment>
            ))}
          </Col>
          
            {categories.map((category, index) => (
            <React.Fragment key={index}>
              {category.items.map((item, itemIndex) => (
                <React.Fragment key={itemIndex}> 
                  {item.subcategories && renderSubMenu(item.subcategories, activeLabel === item.label)}
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}  
        </Row> 
       
      </Dropdown.Menu>
    )}
  </Dropdown> 
 
);
};

export default GenericDropdown;