import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {
    const navigate = useNavigate()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
          alert("Passwords do not match!")
          throw Error("re-check passwords")
        }
        alert("Registered successfully")
        navigate("/")
    }

  return (
    <div style={{ minHeight: "85vh"}} className='forms'>
      <div className="Info-container">
        <div className="contactForm">
          <form
            onSubmit={handleSubmit}
          >
            <h3>SIGN UP</h3>
            <input
              type="text"
              name="name"
              placeholder='Enter Full Name e.g. John Doe' 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

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


            <button type="submit">SIGN UP</button>
            <h4>Already a user?</h4> <Link to={"/login"} style={{textDecoration: "none"}} className='log-forms'>Log In</Link>
          </form>
        </div>
    </div>
  </div>
  )
}
