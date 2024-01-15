import React from 'react';
import './category2.css';

const CategoryItem2 = ({ id, src, alt, text }) => {
  return (
    <>
   
  
      <div className="cat2-container" key={id}>
        <img src={src} alt={alt} id={`source-${id}`} />
        <div className="text-box2" id={`text-box2-${id}`}>
          {text}
        </div>
      </div>
    
      
    </>
  );
};

export default CategoryItem2;