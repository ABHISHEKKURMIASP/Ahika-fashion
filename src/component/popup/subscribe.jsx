import React from 'react';
import Modal from 'react-modal';
import logoImage from '../images/logoImage.png'; 
const SubscriptionPopup = ({ isOpen, onRequestClose , onAllowClick}) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    contentLabel="Subscription Popup"
    shouldCloseOnOverlayClick={false}
    style={{
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        zIndex: 1000,
      },
      content: {
        top: '10%', // Adjust the top position as needed
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, 0)',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#fff',
        padding: '30px',
        maxWidth: '500px',
      },
    }}
  >
     {/* Logo */}
     <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
      <div style={{ flex: '0 0 auto', marginRight: '10px' }}>
        <img src={logoImage} alt="Logo" style={{ width: '50px', height: '50px'}} />
      </div>

      <div style={{ flex: '1' }}>
     <h2 style={{ marginTop: 0 }}>Never miss a sale</h2>
    <p>Subscribe to get updates on our new products and exclusive promotions</p>
 </div>
    </div>
    <button onClick={onRequestClose} style={{ marginRight: '10px', backgroundColor: 'white', border: 'none',width:'65px' ,fontSize:'19px'}}>
      Later
    </button>
    <button onClick={onAllowClick} style={{ marginRight: '10px', backgroundColor: 'blue',borderRadius: '5px',border:'none' ,color:'white',width:'65px',height:'35px'}}>Allow</button>
  </Modal>
);

export default SubscriptionPopup;