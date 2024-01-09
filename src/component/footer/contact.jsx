import React from 'react';
import {Link } from 'react-router-dom';

import { FaPhone, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const ContactInfo = () => {

    return (
        <>
        <div className="contact-info">
            <div className='logo-container'>
        <img
            src="/assets/ahika-logo.png"
            alt="Ahika Logo"
            style={{ width: '200px', height: 'auto' }}
          /></div>
    <p>
      With Ahika, Indulge In The Traditions With Pure Elegance And Grace With These Perfectly Tailored Dresses That Suit All The Frames.
       We  Manufacture Perfection For We Believe In Building Everlasting Bonds With You And Your Closet.
    </p>
    
    <div className="contact-details">
    <ul>
    <li><Link to=""><FaPhone/>+91 6355992235</Link></li>
    <li><Link to="https://api.whatsapp.com/send?phone=919265844264"><FaWhatsapp/>+91 9265844264</Link></li>
    <li>  <Link to=""><FaEnvelope/>sales@ahika.in</Link></li>
    </ul>
    </div>
  </div>
      </>
      );
};

export default ContactInfo;
