import React, { useState, useEffect } from "react";
import { NavLink ,useNavigate} from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../component/pages/message";
import Loader from "../component/pages/loader";
import { login } from "../actions/userAction";
import FormContainer from "./formcontainer";
import SignIn from "./googlesign";


const LoginScreen = ({ location }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
 
  const { loading, error, userInfo } = userLogin;




  const navigate = useNavigate();
  
  const redirect = location && location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const goToRegister = () => {
    navigate(`/register${redirect ? `?redirect=${redirect}` : ""}`);
  };


  const submitHandler = (e) => {
    e.preventDefault();
    //dispatch
    dispatch(login(email, password));
  };

  return (
    <>
   
   
    
   
  
          <SignIn />
       
      <FormContainer>
     
     
        {error && <Message varient="danger" className="text-center mb-4">{error}</Message>}
        {loading && <Loader />}
        {Loader}
        <Form onSubmit={submitHandler} className="custom-form">
        <h2 className="text-center mb-4">LOGIN</h2>
          <Form.Group className="mb-3" controlId="email">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <FaEnvelope />
              </span>
            </div>
         {/* <Form.Label>Email Address</Form.Label> */}
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            >
            </Form.Control>
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <FaLock />
              </span>
            </div>
            {/* <Form.Label>Password</Form.Label> */}
            <Form.Control
             type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
             
            ></Form.Control>


           <div className="input-group-append">
              <span className="input-group-text" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          </Form.Group>
          
          <Row className="mb-3">
          <Col >
          <FaEnvelope />
            <NavLink to='/'className="forgot-password-link" >
           <span>  Forgot your Password?</span>
            </NavLink>
          </Col> </Row>


          <Row className="create-account">
          <Col >
          If you don't have an account, please  <span className="create-account-link" onClick={goToRegister}>
                 Create account
              </span>
{/*          
          <Link to={`${redirect ?` register?redirect=${redirect} `: "/register"}`}>
  <span className="create-account-link"> Create account</span>
</Link> */}
          </Col>
        </Row>
          <Button type="submit" variant="primary" className="btn-login w-35 mb-3">
            LOGIN
          </Button>
          </Form>



    
        
      </FormContainer>

      
    
  
    
    </>
  );
};

export default LoginScreen;