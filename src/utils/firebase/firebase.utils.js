import { initializeApp } from "firebase/app";
import {getAuth } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyCUQK1cZIcxSKy_2dmma2UsbqYjoNxHLtk",
    authDomain: "ahika-website-db.firebaseapp.com",
    projectId: "ahika-website-db",
    storageBucket: "ahika-website-db.appspot.com",
    messagingSenderId: "1028459046375",
    appId: "1:1028459046375:web:15e396faf6a61f4aa78942"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);
  export default app;
  
  