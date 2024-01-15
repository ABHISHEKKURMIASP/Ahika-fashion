import React from 'react'
import './category3.css'
const CategoryItem3 = ({item}) => {
  return (
    <>
     <div className="item">
  <img src={item.image} alt="" />
  <p>{item.description}</p>
  <div className="item-prices">
   <div className="item-price-new">
    <p>RS. {item.price}.00</p>
    </div>
    <button>Add to Cart</button>
  </div>
</div>

    </>
  )
}

export default CategoryItem3
