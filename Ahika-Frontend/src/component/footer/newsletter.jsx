import React from 'react';
import { NavLink,Link } from 'react-router-dom';
import { FaFacebook, FaTwitter ,FaArrowRight, FaPinterest, FaInstagram, FaYoutube } from 'react-icons/fa';

const Newsletter = () => {
  return (
    <div className="newsletter" >
      <h3>Newsletter</h3>
     <p> COD Available Above 999/-</p>
     <div className="input-line" >
     
     <input type="text" placeholder="Email-Address" />
     <NavLink to="/subscribe" className="arrow-icon">
          <FaArrowRight />
        </NavLink>
      </div>
      



      <div className="social-media-icons" style={{ marginBottom: '20px' }}>
        <Link to=""><FaFacebook style={{ marginRight: '10px' }}/></Link>
        <Link to=""> <FaTwitter style={{ marginRight: '10px' }} /></Link>
        <Link to=""><FaPinterest style={{ marginRight: '10px' }}/></Link>
        <Link to=""><FaInstagram style={{ marginRight: '10px' }}/></Link>
        <Link to=""><FaYoutube /></Link>
      </div> 
      <div className="row-images" >
         <h5>Download The App </h5>
       <Link to="https://apps.apple.com/in/app/ahika/id6449972154">
          <img src="https://cdn.shopify.com/s/files/1/0604/0040/2685/files/png-clipart-app-store-apple-google-play-iphone-mid-autumn-lantern-text-logo_1_8299daea-55cb-4cc4-a224-e13c3a88c4b2.png?v=1703161395" alt="Im1" />
        </Link>
       <Link to="https://play.google.com/store/apps/details?id=app.ahikanewfeature.android">
          <img src="/assets/google-play.png" alt="Im2" />     
          </Link>
        
      </div>
      <h5>Safe & Secure Payment</h5>
      <div className="small-images">
       
          <img src="https://cdn.shopify.com/s/files/1/0604/0040/2685/files/360_F_455102361_RsJAeKOVlrrbvLLRtrFQ3K6VAuDg0b4b-removebg-preview_efeba2d8-ca33-40b2-87f3-40988349eabd.png?v=1703748229" alt="Small Im 1" />
                
      </div>

    </div>
  );
};

export default Newsletter;
