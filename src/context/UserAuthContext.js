import { createContext, useContext, useState ,useEffect} from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../utils/firebase/firebase.utils";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
 
        const setUpRecaptha=(number)=> {
            const recaptchaVerifier = new RecaptchaVerifier(
              "recaptcha-container",
              {},
              auth
            );
            recaptchaVerifier.render();
            return signInWithPhoneNumber(auth, number, recaptchaVerifier);
            
          }     
          
        
          return (
            <userAuthContext.Provider value={{  setUpRecaptha }}>
      {children}
    </userAuthContext.Provider>
  );
}

        
        export function useUserAuth() {
            return useContext(userAuthContext);
          }