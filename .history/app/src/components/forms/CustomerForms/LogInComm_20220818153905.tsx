import React,{ useState } from 'react'
import './LoginComm.css'
import { Link } from 'react-router-dom'

const LogInComm = () => {
  const [email,setEmail]  = 
  return (
    <form>
      <div className="details">
        <h1>Log In (Comm)</h1>
        <input type="text" placeholder='Email' required/>
        <input type="password" placeholder='Password' required/>
        <small>forgot password?</small>
      </div>
      <button>Log In</button>
      <p>Don't have an account?<Link to="/signup">Sign Up</Link></p>
    </form>
  )
}

export default LogInComm
