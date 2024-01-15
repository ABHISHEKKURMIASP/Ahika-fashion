
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './carousel.css';

const Banner = () => {
  return (
    <div className="slider-container" >
    <Carousel interval={7000} pause={false} controls={false} indicators={false} >
      <Carousel.Item>
        <img
          className="d-block w-100 img-mobile-height"
          src="https://ahika.in/cdn/shop/files/banner_1_daf51cf2-093a-4eea-a8a5-bf84be00c808_2048x.png?v=1703593290"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-mobile-height"
          src="https://ahika.in/cdn/shop/files/Ahika_banner_2_1963efdd-d06c-4806-bf91-b5969f38d896_2048x.png?v=1703574854"
          alt="Second slide"
        />
      </Carousel.Item>
      {/* Add more Carousel.Item components for additional slides */}
    </Carousel>
  </div>
  );
};


export default Banner;
