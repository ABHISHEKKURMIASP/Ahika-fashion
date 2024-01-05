import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ paddingTop: '100px', textAlign: 'center' }}>
      <Container style={{ height: '60vh' }}>
        <Row className="align-items-center">
          <Col>
            <h1>404</h1>
            <p>The page you are looking for could not be found.</p>
            <Button
              variant="primary"
              onClick={() => navigate('/')}
              style={{ backgroundColor: 'black' }}
            >
              Go Home
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
};

export default Error
