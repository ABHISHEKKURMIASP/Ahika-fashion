import React from 'react';
import { images } from '../data';
import CategoryItem from './category1Item';

const Category1 = () => {
  return (
    <>
    <div>
     <div className="our-collection">
        <h2 className="collection-text">OUR COLLECTION</h2>
      </div>
      <div className="image-gallery">
        {images.map((image) => (
          <CategoryItem key={image.id} src={image.src} alt={image.alt} text={image.text} />
        ))}
      </div>
      </div>
    </>
  );
};

export default Category1;
