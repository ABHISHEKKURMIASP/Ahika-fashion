import React from "react";
 import "bootstrap/dist/css/bootstrap.min.css";
import './sign-in.css';



import "react-phone-input-2/lib/style.css";




import { FaFacebook, FaGoogle } from "react-icons/fa";
//import Login from "./login";

const SignIn = () => {
  

  
      
  
   

  return (
    <>
     <div className="container-fluid p-0">
      <div className="row no-gutters">
        <div className="col-12 text-center py-5 bg-light">
          <button className="btn btn-primary mx-2" style={{backgroundColor:'darkblue',border:'none',fontSize:'25px'}}>
            <FaFacebook /> 
          </button>
          <button className="btn btn-danger mx-2"  style={{backgroundColor:'darkblue',border:'none',fontSize:'25px'}}>
            <FaGoogle />  
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
