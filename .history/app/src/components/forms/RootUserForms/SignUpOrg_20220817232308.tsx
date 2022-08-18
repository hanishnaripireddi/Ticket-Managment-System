import React,{ useState } from 'react';
import './SignUpComm.css'
import { Link } from 'react-router-dom';

const SignUpComm = () => {

  const [userName,setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');


  const submitHandler = (e:any) => {
    e.preventDefault();
    if( password === confPassword){
      console.log('passed')
    }else{
      console.log('failed')

    }
  };


  return (
    <form onSubmit={submitHandler}>
        <div className='details'>
          <h1>Sign Up</h1>
          <input type="text" placeholder='Username' value={userName} required onChange={(e:any)=>{
            setUserName(e.target.value);
          }}/>
          <input type="text" placeholder='Organization ' required />
          <input type="email" placeholder='Email' required onChange={(e:any)=>{
            setEmail(e.target.value);
          }}/>
          <input type="password" placeholder='Password' required onChange={(e:any)=>{
            setPassword(e.target.value);
          }}/>
          <input type="password" placeholder='Confirm Password' required onChange={(e:any)=>{
            setConfPassword(e.target.value);
          }}/>
          <small>Didn't match the password</small>
        </div>
        <button type="submit">Sign Up</button>
        <p>already have an account?<Link to="/login">Log In</Link></p>
    
    </form>
  )
}

export default SignUpComm
