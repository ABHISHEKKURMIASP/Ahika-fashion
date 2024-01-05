import React from 'react';
import {Routes, Route } from 'react-router-dom';
import './App.css';


import Navba from './component/navbar/navba';
import Home from './component/pages/Home/Home';
import Newlaunch from './component/pages/new-launch';
import Ethenic from './component/pages/ethenic-wear';
import Western from './component/pages/western-wear';
import AkhikaPlus from './component/pages/akhika-plus';
import Bestseller from './component/pages/best-seller';
import Lounge from './component/pages/lounge-wear';
import Footer from './component/footer/footer';


import Error from './component/pages/error';
import SignIn from './sign-in/sign-in';

const App=()=> {
  return (
    <>
      
    <Routes>
    
        {/* Your header component goes here */}
        {/* ... */}

        
      
        <Route path="/" element= {<Navba />}>
        <Route index element= {<Home />}/>
        <Route path="/new-launch" element={<Newlaunch />} />
  <Route path="/ethenic-wear" element={<Ethenic />} />
  <Route path="/western-wear" element={<Western />} />
  {/* Add more specific paths for each section */}
  <Route path="/akhika-plus" element={<AkhikaPlus />} />
  <Route path="/best-seller" element={<Bestseller />} />
  <Route path="/lounge-wear" element={<Lounge />} />
  <Route path="sign-in" element={<SignIn/>}/>
  <Route path="/*" element={<Error />} />
          </Route>
          {/* Other Routes */}
         
       
      
        
          {/* <Route path='/' element ={<Home/>} /> */}
          {/* <Route path="/men" component={Men} />
          <Route path="/women" component={Women} />
          <Route path="/accessories" component={Accessories} />
          <Route path="/sale" component={Sale} /> */}
        
      
    </Routes>
    <Footer/>
    </>
    
  );
}

export default App;
