import { initializeApp } from "firebase/app";
import {getAuth,signInWithRedirect,GoogleAuthProvider,signInWithPopup} from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyAzyQod0Ti8P9eO_S8aYPNX3-RRBIgoexA",
    authDomain: "ahika-fashion-db.firebaseapp.com",
    projectId: "ahika-fashion-db",
    storageBucket: "ahika-fashion-db.appspot.com",
    messagingSenderId: "539744583959",
    appId: "1:539744583959:web:9e72997e3a5eb9d189b752"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const provider=new GoogleAuthProvider();
  provider.setCustomParameters({
      prompt:"select_account"
  });
  export const auth=getAuth();
  export const signInWithGooglePopup=()=>signInWithPopup(auth,provider);