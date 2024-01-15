import React from 'react';
import './category.css';

const CategoryItem = ({ id, src, alt, text }) => {
  return (
    <>
   
    
      <div className="cat-container" key={id}>
        <img src={src} alt={alt} id={`image-${id}`} />
        <div className="text-box" id={`text-box-${id}`}>
          {text}
        </div>
      </div>
      
    </>
  );
};

export default CategoryItem;