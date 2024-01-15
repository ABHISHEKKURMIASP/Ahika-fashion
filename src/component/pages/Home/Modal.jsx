import React from 'react'

import { Container ,Row,Col,Card,NavLink} from 'react-bootstrap'
import Test1 from '../../images/test1.jpg';
import Test2 from '../../images/test2.jpg';
import Test3 from '../../images/test3.jpg';
import Banner from '../../images/Ahika_banner.webp' ;
import './Modal.css'
const Modal = () => {
    const videoURL = "https://www.youtube.com/embed/SDBPdBBDO0g"
    
  return (
    <>





    
<NavLink to='/'>
<div className="Appa">
      <div className="image-container">
        <img src={Banner} alt="Full Screen " className="full-screen-image" />
      </div>
    </div>
    </NavLink>




   
<div className="d-flex flex-column justify-content-center align-items-center" style={{  color: 'greyblack', fontWeight: 'bold', fontSize: '30px' ,margin: '40px 0px'}}>AHIKA'S ARMY</div>
<div className="text-end mt-3">
  <NavLink to="/view-all" className="text-decoration-none">VIEW ALL...</NavLink>
</div> 

<Row xs={1} md={3} className="g-4">
  <Col>
    <Card className="position-relative">
    <div className="card-img-container">
      <Card.Img variant="top" src={Test1} alt="Image 1" className="card-img" style={{ height: '500px', objectFit: 'cover' }}  />
      <div className="card-text-overlay">
        <Card.Body className="card-text">
      
          <Card.Text className="small-text">
          <span role="img" aria-label="star">⭐️</span>
              <span role="img" aria-label="star">⭐️</span>
              <span role="img" aria-label="star">⭐️</span>
              <span role="img" aria-label="star">⭐️</span>
              <span role="img" aria-label="star">⭐️</span><br/>
              "I was a little hesitant to buy this salwar suit online, but I'm so glad I did. It's even more beautiful than I expected. 
              The colors are so vibrant, and the print is so unique. I've gotten so many compliments on it."<hr/>
         -Tarun Arya
          </Card.Text>
        </Card.Body>
      </div>
      </div>
    </Card>
  </Col>
  <Col>



    <Card className="position-relative">
      <Card.Img variant="top" src={Test2} alt="Image 2" className="card-img" style={{ height: '600px', objectFit: 'cover' }} />
      <div className="card-text-overlay">
        <Card.Body className="card-text">
        
          <Card.Text className="small-text">
          <span role="img" aria-label="star">⭐️</span>
              <span role="img" aria-label="star">⭐️</span>
              <span role="img" aria-label="star">⭐️</span>
              <span role="img" aria-label="star">⭐️</span>
              <span role="img" aria-label="star">⭐️</span><br/>
              "I've always loved salwar suits, but I've had trouble finding ones that fit me well and that are comfortable to wear. I finally found the perfect salwar suit at Ahika. 
              The fabric is so soft and the fit is perfect. I feel so confident and beautiful when I wear it."<hr/>-Sonu Negi
          </Card.Text>
        </Card.Body>
      </div>
    </Card>
  </Col>
  <Col>
    <Card className="position-relative">
      <Card.Img variant="top" src={Test3} alt="Image 3" className="card-img" style={{ height: '500px', objectFit: 'cover' }} />
      <div className="card-text-overlay">
        <Card.Body className="card-text">
       
          <Card.Text className="small-text">
          <span role="img" aria-label="star">⭐️</span>
              <span role="img" aria-label="star">⭐️</span>
              <span role="img" aria-label="star">⭐️</span>
              <span role="img" aria-label="star">⭐️</span>
              <span role="img" aria-label="star">⭐️</span><br/>
              "I'm not a big fan of shopping, but I love buying salwar suits. There are so many different styles and colors to choose from. I always find something that I love. I recently bought a salwar suit from 
              Ahika that is perfect for everyday wear. It is comfortable and stylish, and it fits me perfectly."<hr/>-Aditi Dadhich
          </Card.Text>
        </Card.Body>
      </div>
    </Card>
  </Col>
</Row>

<div className="d-flex flex-column justify-content-center align-items-center" style={{  color: 'greyblack', fontWeight: 'bold', fontSize: '30px' ,margin: '40px 0px'}}>FACTORY TOUR</div>
<div className="VideoContainer">
<div className="Video">
      <iframe
        width="100%"
        height="100%"
        src={videoURL}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
    </div>
      <Container className="d-flex flex-column justify-content-center align-items-center" style={{  color: 'greyblack', fontWeight: 'bold', fontSize: '30px' }}>
   
      <div style={{ margin: '40px 0px' }}>AHIKA'S PROMISE</div>

      <Row className="text-center">
        <Col xs={12} md={3}>
          <img src="https://ahika.in/cdn/shop/files/Group_38_200x.png?v=1703155021" alt="Im 1" />
        </Col>
        <Col xs={12} md={3}>
          <img src="https://ahika.in/cdn/shop/files/Group_37_1_200x.png?v=1703155095" alt="Im 2" />
        </Col>
        <Col xs={12} md={3}>
          <img src="https://ahika.in/cdn/shop/files/Group_36_200x.png?v=1703155095" alt="Im 3" />
        </Col>
         <Col xs={12} md={3}>
          <img src="https://ahika.in/cdn/shop/files/Group_35_3_200x.png?v=1703835923" alt="Im 4" />
        </Col> 
      </Row>
    
      <div style={{ margin: '70px 0' }}>FIND US ON SOCIALS</div>
    </Container>
</>
    
   
  )
}

export default Modal
