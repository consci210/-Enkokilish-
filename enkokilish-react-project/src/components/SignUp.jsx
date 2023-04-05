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

    
      const signUp = async () => {
        console.log(email , password )
        if (password !== confirmPassword) {
          alert("Passwords do not match!")
          throw Error("re-check passwords")
        }
        try {
          await createUserWithEmailAndPassword(auth, email, password);  
          
        
       } catch (err) {
         console.error(err);
       }
     };

     const signInWithGoogle = async () => {
      try {
        await signInWithPopup(auth, googleProvider);
        navigate("/")
      } catch (err) {
        console.error(err);
      }
    };
  
   
  
    
    

  return (
    <div style={{ minHeight: "85vh"}} className='forms'>
      <div className="Info-container">
        <div className="contactForm">
          <form >
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
           
          </form>
        </div>
    </div>
  </div>
  )
}
