import React from 'react'
import {categories} from '../data';
import CardSlider from './cardsliderItem';
const CategoryData = () => {
    return (
      <>
        <CardSlider data={categories} />
      </>
    )
  }
  
  export default CategoryData;