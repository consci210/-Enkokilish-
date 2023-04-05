import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import googleIcon from "../assets/google.png";
import { auth, googleProvider } from "../config/firebase";
import {signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";



const Login = () => {


  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  
  // handles login 
  const handleSubmit = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsSuccess(true);
      setIsError(false);
      navigate("/");
    } catch (err) {
      console.error(err);
      setIsSuccess(false);
      setIsError(true);
    }
  };


  // handles login with google 
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
            {isSuccess && (
            <div
              style={{
                backgroundColor: "green",
                color: "white",
                padding: "10px",
                marginTop: "10px",
              }}
            >
              Successfully logged in!
            </div>
          )}
          {isError && (
            <div style={{ backgroundColor: "red", color: "white", padding: "10px", marginTop: "10px" }}>
            Login failed!
           </div>
              )}
        </div>
      </div>
    </div>
  );
    
  
}

export default Login