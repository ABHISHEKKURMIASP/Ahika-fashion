import React, { useState ,useEffect} from 'react';
import SubscriptionPopup from './subscribe';


const Popup = () => {
    const [isPopupOpen, setPopupOpen] = useState(false);

    useEffect(() => {
      // Show the popup after 5 seconds (adjust the time as needed)
      const popupTimer = setTimeout(() => {
        setPopupOpen(true);
      }, 5000);
  
      return () => clearTimeout(popupTimer);
    }, []);
  
    const closePopup = () => {
      setPopupOpen(false);
      requestNotificationPermission();
     
    };
    const requestNotificationPermission = () => {
      if ('Notification' in window) {
        Notification.requestPermission()
          .then((permission) => {
            if (permission === 'granted') {
              console.log('Notification permission granted!');
              // Now you can proceed to subscribe the user for push notifications or perform other actions
            } else {
              console.warn('Notification permission denied.');
              // Handle the case where the user denies permission
            }
          })
          .catch((error) => {
            console.error('Error requesting notification permission:', error);
          });
      } else {
        console.error('Notification API not supported in this browser.');
      }
    };
    const handleAllowClick = () => {
      // Additional logic when "Allow" is clicked
      requestNotificationPermission();
      setPopupOpen(false);
    };

    return (
      <div>
        
        <SubscriptionPopup isOpen={isPopupOpen} onRequestClose={closePopup} onAllowClick={handleAllowClick} />
      </div>
    );
  };

export default Popup;