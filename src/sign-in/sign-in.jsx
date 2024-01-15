import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './sign-in.css';

import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";

import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { useUserAuth } from "../context/UserAuthContext";

import {Button} from "react-bootstrap";

import { FaFacebook, FaGoogle } from "react-icons/fa";
const SignIn = () => {
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const { setUpRecaptha } = useUserAuth();
  const navigate = useNavigate();

  const getOtp = async (e) => {
    e.preventDefault();
    console.log(number);
    setError("");
    if (number === "" || number === undefined)
      return setError("Please enter a valid phone number!");
    try {
      const response = await setUpRecaptha(number);
      setResult(response);
      setFlag(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (otp === "" || otp === null) return;
    try {
      await result.confirm(otp);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };
  
  // const [otp, setOtp] = useState("");
  // const [ph, setPh] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [showOTP, setShowOTP] = useState(false);
  // const [user, setUser] = useState(null);
  

  // const onSignup = () => {
  //   setLoading(true);

  //   const formatPh = "+" + ph;

  //   signInWithPhoneNumber(auth, formatPh)
  //     .then((confirmationResult) => {
  //       window.confirmationResult = confirmationResult;
  //       setLoading(false);
  //       setShowOTP(true);
  //       toast.success("OTP sent successfully!");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setLoading(false);
  //     });
  // };

  // const onOTPVerify = () => {
  //   setLoading(true);
  //   window.confirmationResult
  //     .confirm(otp)
  //     .then(async (res) => {
  //       console.log(res);
  //       setUser(res.user);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setLoading(false);
  //     });
  // };
 
  

  
      
  
   

  return (
    <>
     <div className="container-fluid p-0">
      <div className="row no-gutters">
        <div className="col-12 text-center py-5 bg-light">
          <button className="btn btn-primary mx-3" >
            <FaFacebook /> Login with facebook
          </button>
          <button className="btn btn-danger mx-3">
            <FaGoogle /> Login with Google 
          </button>
          <div className="login-block">
            <h4>WELCOME TO THE NEW WEBSITE!</h4>
            <p>
              Ahika is committed to providing a secure and reliable shopping
              experience to our customers. So, if you are an existing customer,
              please log in as per your preference and forget your password to
              enjoy the uninterrupted shopping experience.
            </p>
           
          </div>
        </div>
       



    
      
        <div className="p-4 box">
        <h2 className="mb-3">Firebase Phone Auth</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={getOtp} style={{ display: !flag ? "block" : "none" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <PhoneInput
              defaultCountry="IN"
              value={number}
              onChange={setNumber}
              placeholder="Enter Phone Number"
            />
            <div id="recaptcha-container"></div>
          </Form.Group>
          <div className="button-right">
            <Link to="/">
              <Button variant="secondary">Cancel</Button>
            </Link>
            &nbsp;
            <Button type="submit" variant="primary">
              Send Otp
            </Button>
          </div>
        </Form>

        <Form onSubmit={verifyOtp} style={{ display: flag ? "block" : "none" }}>
          <Form.Group className="mb-3" controlId="formBasicOtp">
            <Form.Control
              type="otp"
              placeholder="Enter OTP"
              onChange={(e) => setOtp(e.target.value)}
            />
          </Form.Group>
          <div className="button-right">
            <Link to="/">
              <Button variant="secondary">Cancel</Button>
            </Link>
            &nbsp;
            <Button type="submit" variant="primary">
              Verify
            </Button>
          </div>
        </Form>
      </div>
     

      {/* <section
        className="d-flex align-items-center justify-content-center vh-100"
        style={{ backgroundColor: "#FFF", color: "#000",marginTop: "-10rem ",}}
      >
        <div className="text-center">
          <Toaster toastOptions={{ duration: 4000 }} />
         
          
          {user ? (
            <h2 className=" font-medium text-2xl">
              👍Login Success
            </h2>
          ) : (
            <div className="w-80 mx-auto mt-5 p-4 rounded-lg bg-success text-center text-white">
              <h1 className="font-medium text-3xl mb-4">
                Login With OTP
              </h1>
              {showOTP ? (
                <>
                  <div className="bg-success rounded-circle mx-auto mb-4 p-3" style={{ width: "70px", height: "70px" }}>
                    <BsFillShieldLockFill size={30} color="#FFF"  />
                  </div>
                  <label htmlFor="otp" className=" text-center">
                    Enter your OTP
                  </label>
                  <OtpInput
                    value={otp}
                    onChange={setOtp}
                    OTPLength={6}
                    otpType="number"
                    disabled={false}
                    autoFocus
                    className="opt-container"
                  />
                  <Button
                    onClick={onOTPVerify}
                    className="bg-white w-100 d-flex align-items-center justify-content-center py-2.5 text-success rounded mt-3"
                  >
                    {loading && (
                      <CgSpinner size={20} className="animate-spin mr-2" />
                    )}
                    <span>Verify OTP</span>
                  </Button>
                </>
              ) : (
                <>
                  <div className="bg-success rounded-circle mx-auto mb-4 p-3" style={{ width: "100px", height: "100px" }}>
                    <BsTelephoneFill size={80} color="#000" style={{ padding: "20px", backgroundColor: "#FFF", borderRadius: "50%" }}/>
                  </div>
                  <label htmlFor="" className="text-center">
                    Enter your phone number
                  </label>
                  <PhoneInput country={"in"} value={ph} onChange= {setPh}  inputClass="w-100"

dropdownStyle={{
  textAlign: "left",
  backgroundColor: "white",
  color:"black",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
}}
/>
                  <Button
                    onClick={onSignup}
                    className="bg-black w-50 d-flex align-items-center justify-content-center py-2 text-success rounded mt-3 mx-auto"
                    style={{ color: "#000" }}
                  >
                    {loading && (
                      <CgSpinner size={20} className="animate-spin mr-2" />
                    )}
                    <span>Next</span>
                  </Button>
                </>
              )}
            </div>
          )}
        </div>
      </section> */}

      </div>
      </div>

    
  

    </>
  );
};

export default SignIn;
