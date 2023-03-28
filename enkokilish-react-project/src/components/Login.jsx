import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/`)
  }

  return (
    <div style={{ minHeight: "85vh"}} className='forms'>
      <div className="Info-container">
        <div className="contactForm">
          <form
            onSubmit={handleSubmit}
          >
            <div className='head'>
              <h3>LOG IN</h3>
              <h5>Welcome Back!</h5>
            </div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder='Email e.g. abc@domain.com' 
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


            <button type="submit">LOG IN</button>
            <h4>New user?</h4> <Link to={"/signup"} style={{textDecoration: "none"}} className='log-forms'>Sign Up Now</Link>
          </form>
        </div>
    </div>
  </div>
  )
}

export default Login