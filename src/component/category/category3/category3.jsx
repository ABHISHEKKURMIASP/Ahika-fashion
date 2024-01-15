import React from 'react';

import { Cart } from '../data';
import CategoryItem3 from './categoryItem3';
const Category3 = () => {
  return (
    <>
    <div className='popular'>
    <div className="popular-header">
        <h1>NEW ARRIVALS</h1>
       
      </div>
      <span className="view-all-popular">View All</span>
   <div className="popular-item">
      {Cart.map((item) => (
       <CategoryItem3 key={item.id}   item={item} />
      ))}
    </div>
    </div>
        
    </>
  )
}

export default Category3
