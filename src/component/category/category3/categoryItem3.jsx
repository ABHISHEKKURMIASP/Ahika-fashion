import React from 'react'
import './category3.css'
import { Link } from 'react-router-dom'
const CategoryItem3 = ({item}) => {
  return (
    <>
     <div className="item">
     <Link to={`/category/${item.id}`}>
          <img src={item.image} alt="" />
        </Link>
 
  <p>{item.description}</p>
  <div className="item-prices">
   <div className="item-price-new">
  
   <p className="cut-price">Rs. {item.cutPrice}.00</p>
          <p className="actual-price">RS. {item.price}.00</p>
    
    </div>
    <button>Add to Cart</button>
  </div>
</div>

    </>
  )
}

export default CategoryItem3
