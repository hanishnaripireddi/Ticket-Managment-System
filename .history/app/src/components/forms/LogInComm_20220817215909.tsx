import React from 'react'
import './LoginComm.css'
import { Link } from 'react-router-dom'

const LogInComm = () => {
  return (
    <form>
      <div className="details">
        <input type="text" placeholder='Email'/>
        <input type="password" placeholder='Password'/>
        <small>Resw</small>
      </div>
      <button>Log In</button>
      <p>Don't have an account?<Link to="/signup">Sign Up</Link></p>
    </form>
  )
}

export default LogInComm
