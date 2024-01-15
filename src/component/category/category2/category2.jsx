import React from 'react';
import { category2 } from '../data';
import CategoryItem2 from './category2-item';
import { Link } from 'react-router-dom';

const Category2 = () => {
  return (
    <>
    <div>
      <div className="shop-container">
        <h2 className="shop-heading">SHOP BY CATEGORY</h2>
      </div>
      <div className="image2-gallery">
      {category2.map((source) => (
          <CategoryItem2 key={source.id} src={source.src} alt={source.alt} text={source.text} />
        ))}
      </div>
      </div>
    </>
  );
};

export default Category2;
