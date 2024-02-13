import React from 'react';
import { NavLink } from 'react-router-dom';
import { LiaGreaterThanSolid } from "react-icons/lia";



const CustomerSupport = () => {

  
  
  
  return (
    <>
   

  
    
     <div className="customer-support">
      <h3>Customer Support</h3>
      <ul>
        <li ><NavLink to="/payment-method"><LiaGreaterThanSolid />Payment Methods</NavLink></li>
        <li><NavLink to="/shipping-policy"><LiaGreaterThanSolid />Shipping Policy</NavLink></li>
        <li><NavLink to="/return-exchange-policy"><LiaGreaterThanSolid />Return, Refund & Exchange Policy</NavLink></li>
        <li><NavLink to="/privacy-policy"><LiaGreaterThanSolid />Privacy Policy</NavLink></li>
        <li><NavLink to="/terms-conditions"><LiaGreaterThanSolid />Terms & Conditions</NavLink></li>
        <li><NavLink to="/terms-of-service"><LiaGreaterThanSolid />Terms Of Service</NavLink></li>
        <li><NavLink to="/color-disclaimer"><LiaGreaterThanSolid />Color Disclaimer</NavLink></li>
      </ul>

   
        </div> 


        
    </>
  );
};

export default CustomerSupport;