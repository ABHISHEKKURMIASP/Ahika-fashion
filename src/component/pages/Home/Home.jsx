import React from 'react'
import Category2 from '../../category/category2/category2';
import Banner from '../../carousel/carousel';
import Category1 from '../../category/category1/category1';
import CategoryData from '../../category/cardslider/cardslider';
import Modal from './Modal';
import Category3 from '../../category/category3/category3';


const Home = () => {
  return (
    <>
  
 
  
  <Banner/>
  
  <CategoryData/>
  <Category1/>
  <Category2/>
  <Category3/>
  <Modal/>
 
  </>
  
  )
}

export default Home;
