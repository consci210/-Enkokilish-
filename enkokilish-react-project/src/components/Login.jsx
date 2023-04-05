import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import googleIcon from "../assets/google.png";
import { auth, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    } ;
  }


  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <div style={{ minHeight: "85vh" }} className="forms">
      <div className="Info-container login-form">
        <div className="contactForm">
         
            <div className="head">
              <h3>LOG IN</h3>
              <h5>Welcome Back!</h5>
            </div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email e.g. abc@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              id="password"
              placeholder="Enter Password"
              required
              minLength={7}
            />

            <button onClick={handleSubmit} >LOG IN</button>
            <h4>New user?</h4>{" "}
            <Link
              to={"/signup"}
              style={{ textDecoration: "none" }}
              className="log-forms"
            >
              Sign Up Now
            </Link>

            <hr />

            <button className="google-btn" onClick={signInWithGoogle}>
              <img src={googleIcon}  alt="Google Icon" className="google-icon" />
              Continue with Google
            </button>
          
        </div>
      </div>
    </div>
  );
    
  
}

export default Login