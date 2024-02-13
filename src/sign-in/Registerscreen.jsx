import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../component/pages/message";
import Loader from "../component/pages/loader";
import { register } from "../actions/userAction";
import FormContainer from "./formcontainer";
import SignIn from "./googlesign";


const RegisterScreen = ({  location ,history}) => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

 // const redirect = location.search ? location.search.split("=")[1] : "/";
 const redirect = location && location.search ? location.search.split("=")[1] : "/";

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  
  const { loading, error, userInfo } = userRegister;


  
  
  

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);


  const submitHandler = (e) => {
    e.preventDefault();
    //dispatch
    if (password !== confirmPassword) {
      setMessage("Password do not macth");
    } else {
      dispatch(register(name, email, password));
    }
  };

 
  return (
    <>
    <SignIn/> 
      <FormContainer >
        <h1 className="text-center mb-4">REGISTER</h1>
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}
        {message && <Message variant="danger">{message}</Message>}
        <Form onSubmit={submitHandler} className="custom-form">
        <Form.Group controlId="name" className=" name mb-3 mt-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="password" className=" pass mb-3 mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Re-enter Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>
          <Button type="submit" variant="primary" className="btn-signup  ">
            Sign Up
          </Button>


          <Row className="justify-content-center">
          <Col className="text-center mb-4 mt-3">
            Already have an account? <Link to="/login" className="login-link">Login here</Link>
          </Col>
        </Row>
        </Form>
       
      </FormContainer>
    </>
  );
};

export default RegisterScreen;