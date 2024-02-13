import React from 'react'
import { NavLink } from 'react-bootstrap'
import { LiaGreaterThanSolid } from 'react-icons/lia'

const MyAccount = () => {
  
  return (
    <>
     <div className="my-account">
      <h3>My Account</h3>
      <ul>
        <li><NavLink to="/sign-in"><LiaGreaterThanSolid/>Sign In</NavLink></li>
        <li><NavLink to="/view-cart"><LiaGreaterThanSolid/>View Cart</NavLink></li>
        <li><NavLink to="/wishlist"><LiaGreaterThanSolid/>My Wishlist</NavLink></li>
        <li><NavLink to="/return-center"><LiaGreaterThanSolid/>Return Center</NavLink></li>
      </ul>
    </div>
    </>
  )
}

export default MyAccount
