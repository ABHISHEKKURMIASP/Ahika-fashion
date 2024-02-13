import React,{useState} from 'react'
import { useParams } from 'react-router-dom';
import { FaHeart, FaPhone, FaEnvelope ,FaWhatsapp} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SizePopup = ({ onClose }) => (
  <div className="size-popup-container">
    <button className="close-pop" onClick={onClose}>
  X
</button>
    <div className="size-popup">
      <div className="header-wrap">
        <div className="header-title">Size Guide</div>
      </div>
      <div className="size-chart-img">
        <img src="https://cdn.shopify.com/s/files/1/0673/4925/0337/t/1/assets/Cotton_900x.jpeg" alt="Size Guide" />
      </div>
    </div>
  </div>
);


const CategoryDetails3 = ({ cart }) => {
  const { id } = useParams();
  const selectedItem = cart.find(item => item.id === parseInt(id, 10));
  const [quantity, setQuantity] = useState(1);
  const [zipcode, setZipcode] = useState('');
  const [availabilityMessage, setAvailabilityMessage] = useState('');

  
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSpecifications, setIsOpenSpecifications] = useState(false);
  
  const [isSizeChartOpen, setIsSizeChartOpen] = useState(false);


  const handleWhatsappShare = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`Check out this product: ${description}`);
    window.open(`https://api.whatsapp.com/send?text=${text}&url=${url}`, '_blank');
  };

  const handleSizeChartClick = () => {
    setIsSizeChartOpen(true);
  };

  const handleSizeChartClose = () => {
    setIsSizeChartOpen(false);
  };



  
  if (!selectedItem) {
    return <div>Item not found</div>;
  }

  const { images, description, colors, size, title, price, cutPrice , material,addDesc ,materials,stylenote,sizefit,specifications} = selectedItem;
  
  


  

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };



  const handleAskQuestionClick = () => {
    // Implement your ask question functionality here
    alert('Asking question...');
  };
  

  const handleZipcodeChange = (event) => {
    setZipcode(event.target.value);
  };

  const handleCheckAvailability = () => {
    // Check if the zipcode is exactly six digits
    const isZipcodeValid = /^\d{6}$/.test(zipcode);

    if (!isZipcodeValid) {
      setAvailabilityMessage('This product is unavailable for the entered zipcode.');
      setTimeout(() => {
        setAvailabilityMessage('');
      }, 3000); // Hide the message after 3 seconds
      return;
    }
   // Calculate the delivery date (5 days from the current date)
   const currentDate = new Date();
   const deliveryDate = new Date(currentDate);
   deliveryDate.setDate(currentDate.getDate() + 5);

   // Format the delivery date
   const formattedDeliveryDate = `${deliveryDate.getDate()} ${
     deliveryDate.toLocaleString('default', { month: 'short' })
   }, ${deliveryDate.getFullYear()}`;

   // Set the availability message
   setAvailabilityMessage(
     `This product is available at your location. Get it by ${formattedDeliveryDate}`
   );

   // Hide the message after 3 seconds
   setTimeout(() => {
     setAvailabilityMessage('');
   }, 3000);
 };




return (
  <>

<div className="breadcrumbs">
        <Link to="/">Home/</Link>
        <span>{description}</span>
      </div>
    <div className="category-details">
        <div className="image-container">
        {images.map(({ image }, index) => (
  <img key={index} src={image} alt={`Product ${index + 1}`} />
))}
        </div>
        <div className="details-container">
          {/* Assuming you don't have a 'title' property in your Cart items */}
          <h2>{description}</h2>
          <span className="heart-icon">
              <FaHeart />
            </span>
          <p>{title}</p>
          <div className="price-details">
            <p className="cut-price">Rs. {cutPrice}.00</p>
            <p className="actual-price">RS. {price}.00</p>
          </div>


          <p>Tax included. Shipping calculated at checkout.</p>

          <div className="color-size">
            <p>Color:</p>
            <div className="selected-color">
              {colors[0]}
            </div>
            <ul>
              {colors.map((colors, index) => (
                <li key={index} style={{ backgroundColor: colors }}>
                  {colors}
                </li>
              ))}
            </ul>
          </div>



          <div className="selected-size">
            <p>Size</p>
            <div className="size-chart-link" onClick={handleSizeChartClick}>
            View Size Guide
          </div>
          <ul>
              {size.map((size, index) => (
                <li key={index} style={{ backgroundColor: size }}>
                  {size}
                </li>
              ))}
            </ul>
            </div>
            {isSizeChartOpen && <SizePopup onClose={handleSizeChartClose} />}
          
          <p>Material</p>
          <div><p>{material}</p></div>
        


          <div className="quantity-container">
            <p>Quantity:</p>
            <div className="quantity-controls">
              <button onClick={decreaseQuantity}>-</button>
              <span>{quantity}</span>
              <button onClick={increaseQuantity}>+</button>
            </div>
            <span className="whatsapp-icon" onClick={handleWhatsappShare}>
              <FaWhatsapp style={{ color: 'green' }} />
              Share
            </span>
          </div>
          <button>Add to Cart</button>


          <div>
      <label htmlFor="zipcode">Check Delivery</label>
  <div>
      <input className='zip'
        type="text"
        id="zipcode"
        placeholder='Enter your zip code'
        value={zipcode}
        onChange={handleZipcodeChange}
      />
      </div>
      <button onClick={handleCheckAvailability}>Check Availability</button>
      <p>{availabilityMessage}</p>
    </div>
          
          <button onClick={handleAskQuestionClick}>Ask Question</button>
          
          </div>


          <p>NO RETURN OFFER - Get Extra 5% off NORETURN Once you apply this coupon, items will be non-returnable. You can still exchange items.</p>
          <div>
      <div className="shipping-icon-wrap">
        <ul className="shipping-icon-list">
          <li className="shipping-icon">
            <img src="//cdn.shopify.com/s/files/1/0673/4925/0337/t/1/assets/New_Project.png" alt="Free Shipping" />
            <span>Free Shipping</span>
          </li>
          <li className="shipping-icon">
            <img src="//cdn.shopify.com/s/files/1/0673/4925/0337/t/1/assets/Fram_3.png" alt="COD" />
            <span>COD</span>
          </li>
          <li className="shipping-icon">
            <img src="//cdn.shopify.com/s/files/1/0673/4925/0337/t/1/assets/Frame_4.png" alt="Easy Returns" />
            <span>Easy Returns</span>
          </li>
          <li className="shipping-icon">
            <img src="//cdn.shopify.com/s/files/1/0673/4925/0337/t/1/assets/onetime_delivery.png" alt="Dispatched Within 24 Hr" />
            <span>Dispatches within 24 hr</span>
          </li>
        </ul>
      </div>
    </div>


   
     


            <div className="dropdown">
              <details>
                <summary> DESCRIPTION</summary>
                
                <h6>{description}</h6>
                <p>{addDesc}</p>
              </details>
            </div>
            <hr/>

       
            <div className="dropdown">
              <details>
                <summary>STYLE NOTE</summary>
                
                <h6>Style Note </h6>
                <h6 > Complete The Look</h6>        
                <p>{stylenote}</p>
              </details>
            </div>
            <hr/>




       

          <div className="dropdown">
  <details>
    <summary>Size Fit</summary>
    <h6>Size & Fit </h6>
              
    <p>{sizefit}</p>
  </details>
</div>
<hr/>




          <div className="dropdown">
      
      <details open={isOpen}>
        <summary onClick={() => setIsOpen(!isOpen)}>Materials</summary>
          <div className="dropdown-content">
           <h6>Materials & Care</h6>
            <p>
              {materials.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>
        </details>
        </div>
        <hr />

        <div className="dropdown">
      
      <details open={isOpenSpecifications}>
        <summary onClick={() => setIsOpenSpecifications(!isOpen)}>Specifications</summary>
          <div className="dropdown-content">
           <h6>Specification</h6>
            <p>
              {specifications.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
                
              ))}

            </p>
            <h6>Product Code: VCK9632</h6>
          </div>
        </details>
        </div>
        <hr />
       

        <div className="help-section">
            <p>Need Help?</p>
            <p>Monday - Saturday, 9:00 AM to 6:00 PM (IST)</p>
            <p>
              <span className="phone-icon">
                <FaPhone />
              </span>
              +91-9265844264
            </p>
            <p>
              <span className="email-icon">
                <FaEnvelope />
              </span>
              ahika@vivaanta.com
            </p>
          </div>



        </div>
      
    </>
  )
}

export default CategoryDetails3
