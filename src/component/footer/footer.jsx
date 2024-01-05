import React from 'react'
import ContactInfo from './contact';
// import bellButton from '../images/Bell-Icon.png';
import CustomerSupport from './customer';
import MyAccount from './myaccount';
import UserLinks from './useful';
import Newsletter from './newsletter';
import './footer.css';
import { FaHeart } from 'react-icons/fa'; 




const Footer = () => {
  return (
    <>
    <footer className="footer-section">
      <div className="footer-content">
        <div className="row">

          <div className="col-lg-3 col-md-12 footer-content">
            <ContactInfo />
          </div>
          <div className="col-lg-3 col-md-12 footer-content">
            <CustomerSupport />
          </div>
          <div className="col-lg-3 col-md-12 footer-content">
            <MyAccount />
          </div>
          <div className="col-lg-3 col-md-12 footer-content">
            <UserLinks />
          </div>
         
          <div className="col-lg-6 col-md-12 footer-content">
            <Newsletter />
          </div>  

        </div>   
      </div>    
      </footer>

      
<div class="footer">
  <div class="copyright">
    <p>Copyright © 2023 Ahika</p>
  </div>
  <div class="made-in">
    <p>Made with <FaHeart style={{color:"white"}} /> in India</p>
  </div>
  

  <div className="footer-content">
  <a
    target="_blank"
    rel="noopener noreferrer"
    href="https://api.whatsapp.com/send?phone=919265844264"
    className="footer-whatsapp-button"
  >
    <img
      src="//ahika.in/cdn/shop/t/114/assets/whatsapp-logo_900x.png?v=6383436"
      alt="Whatsapp Icon"
    />
  </a>
   </div>

   <div className="sticky-bell">
    <button className="bell-icon">
    
     </button>
     </div>
   </div>
   
   
   
   
    </>
  )
}

export default Footer
