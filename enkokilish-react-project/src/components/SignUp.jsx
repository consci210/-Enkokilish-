import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import googleIcon from "../assets/google.png";
import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup} from "firebase/auth";


export default function SignUp() {
  


    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    


      // handles new account creation 
        const signUp = async () => {
          
            if (password !== confirmPassword) {
              alert("Passwords do not match!")
              throw Error("re-check passwords")   
          }
          try {
            await createUserWithEmailAndPassword(auth, email, password);  
            setIsSuccess(true);
            setIsError(false);
            navigate("/");
          } catch (err) {
            console.error(err);
            setIsSuccess(false);
            setIsError(true);
          }
      };

     // handles creating account with google 
     const signInWithGoogle = async () => {
      try {
        await signInWithPopup(auth, googleProvider);
        setIsSuccess(true);
        setIsError(false);
        navigate("/")
      } catch (err) {
        console.error(err);
        setIsSuccess(false);
        setIsError(true);
      }
    };
  
  

  return (
    <div style={{ minHeight: "85vh"}} className='forms'>
      <div className="Info-container">
        <div className="contactForm">
       
            <h3>SIGN UP</h3>
            <input
              type="email"
              name="email"
              id="email"
              placeholder='e.g. abc@domain.com' 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              placeholder="Enter Password, mininum of 7 characters"
              required
              minLength={7}
            />

            <input
              type="password"
              name="confirm-password"
              placeholder='Confirm Password' 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />


            <button onClick={signUp}>SIGN UP</button>
            <h4>Already a user?</h4> <Link to={"/login"} style={{textDecoration: "none"}} className='log-forms'>Log In</Link>
            <button className="google-btn" onClick={signInWithGoogle} >
              <img src={googleIcon} alt="Google Icon" className="google-icon" />
              Continue with Google
            </button>
            {isSuccess && (
              <div style={{ backgroundColor: "green", color: "white", padding: "10px", marginTop: "10px" }}>
                Account created Successfully !
              </div>
            )}
            {isError && (
          <div style={{ backgroundColor: "red", color: "white", padding: "10px", marginTop: "10px" }}>
            Sorry , SignUp failed!
          </div>
        )}
         
        </div>
    </div>
  </div>
  )
}
