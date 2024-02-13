import React from 'react';
import { Carousel} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './cardslider.css';
const CardSlider = ({ data}) => {
    const pairs = [];
    for (let i = 0; i < data.length - 2; i += 1) {
      const pair = data.slice(i, i + 3);
      pairs.push(pair);
    }

  return (
    <div className="best-seller-container">
    <h2 className="best-seller-heading">
      BESTSELLERS
      
    </h2>
    <span className="view-all-link">View All</span>
    <Carousel controls={false} indicators={false}>
    {pairs.map((pair, index) => (
      <Carousel.Item key={index}>
        <div className="d-flex justify-content-center">
          {pair.map(({ id, imageUrl}) => (
             <Link to={`/category/${id}`} key={id} className="card-link">
            <img
              key={id}
              src={imageUrl}
              alt={`Im ${id}`}
              className="mx-4 card-img-top"
              style={{ maxWidth: '100%', width: '30vw', height: 'auto' }}
            /></Link>
          ))}
        </div>
      </Carousel.Item>
    ))}
  </Carousel>
  </div>
  );
};

export default CardSlider;