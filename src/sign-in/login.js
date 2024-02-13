import { Box, Typography, TextField, Alert, Button, Paper } from '@mui/material'
import { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import SignIn from './googlesign';

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useLoginUserMutation,useVerifyOTPMutation } from '../services/otpauthapi'

const Login = () => {
  const [authid, setAuthId] = useState(null)
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: ""
  })

  //phone country code
  const [ph, setPh] = useState('');

  const [selectedCountry, setSelectedCountry] = useState('in');

  
  useEffect(() => {
    // Set default country india values when the component mounts
    setPh('');
    setSelectedCountry('in');
  }, []);


  const handleCountryChange = (value, country) => {
    setPh(value);
    setSelectedCountry(country.countryCode);
  };

  // RTK Query
  const [loginUser] = useLoginUserMutation()
  const [verifyOTP] = useVerifyOTPMutation()

  const handleSendOTPForm = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget)
    const actualData = {
      phonenumber: data.get('phonenumber'),
    }
    if (actualData.phonenumber) {
      const res = await loginUser(actualData)
      if (res.data.status === "success") {
        setAuthId(res.data.id)
        document.getElementById("login-form").reset()
        setError({ status: true, msg: res.data.message, type: 'success' })
      }
      if (res.data.status === "failed") {
        setError({ status: true, msg: res.data.message, type: 'error' })
      }
    } else {
      setError({ status: true, msg: "Enter Valid Number", type: 'error' })
    }
  }

  const handleVerifyOTPForm = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget)
    const actualData = {
      otpcode: data.get('otpcode'),
      id: authid
    }
    if (actualData.otpcode && actualData.id) {
      const res = await verifyOTP(actualData)
      if (res.data.status === "success") {
        setError({ status: true, msg: res.data.message, type: 'success' })
      }
      if (res.data.status === "failed") {
        setError({ status: true, msg: res.data.message, type: 'error' })
      }
    } else {
      setError({ status: true, msg: "OTP Required", type: 'error' })
    }
  }
  return (
    <>
   
       {/* <Box display="flex" justifyContent="center" >
        <Typography variant='h5' component="div" sx={{  color: 'black' }}>Login With OTP</Typography>
        <Typography variant="body1" gutterBottom>
                Please enter your phone number to receive OTP.
              </Typography>
      </Box>  */}
      <SignIn/>
      {authid === null ?
        <>
          <Box component="form"  sx={{ p: 3, width: '500px',height:'500px', margin: 'auto', textAlign: 'center' ,display: 'flex',flexDirection:'column'}} noValidate id="login-form" onSubmit={handleSendOTPForm}>
            <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" component="div" gutterBottom>
                Login With OTP
              </Typography>
              <Typography variant="body1" gutterBottom>
              Enter your contact number to login.
              </Typography>
              


              <Box sx={{ display: 'flex', flexDirection:'column',alignItems: 'center',marginTop:'30px'  }}>
                <PhoneInput
                  country={selectedCountry}
                  value={ph}
                  onChange={handleCountryChange}
                  inputClass="w-100"
                  defaultCountry="in"
                 
                  specialLabel={<TextField id="phonenumber" name="phonenumber" required fullWidth margin="normal" label="Phone Number" 
                   sx={{ ml: 2, width: '100%' }} />} 
                  dropdownStyle={{ textAlign: 'left', backgroundColor: 'white', color: 'black', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', }} /> </Box> 


              {/* <TextField id="phonenumber" name="phonenumber" required fullWidth margin='normal' label='Phone Number'  sx={{width:'400px'}}
        
        
        /> */}
              <br />
              <Box sx={{ m: 3, display: 'flex', justifyContent: 'center' }}>
                <Button type='submit' variant='contained'  sx={{
      color: 'white',  // Change the text color
      backgroundColor: 'black',  // Change the background color
      fontSize: '1.0rem',  // Change the font size
      padding: '7px 90px',  // Adjust padding for size
    }}>Next</Button>
              </Box>
              {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}

            {/*shopify link start*/}
              <Typography variant="body2" sx={{ mt: 4 }}>
                
              <Link to="/login" style={{ textDecoration: 'underline' ,color:'black'}}>
              Login with Shopify
            </Link>
            
          </Typography>
          {/*shopify link end*/}


            </Paper>

         
          </Box>
         
        </>
        :
        <>
          <Box component="form" sx={{ p: 3, display: 'flex', justifyContent: 'center' }} noValidate id="verify-otp-form" onSubmit={handleVerifyOTPForm}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <TextField id="otpcode" name="otpcode" required fullWidth margin='normal' label='Enter OTP' />
              <br />
              <Box sx={{ m: 2, display: 'flex', justifyContent: 'center' }}>
                <Button type='submit' variant='contained' color="info">Verify</Button>
              </Box>
              {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
            </Paper>
          </Box>
        </>
      }
    </>
  )
}

export default Login