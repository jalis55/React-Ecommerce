import React from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Signup</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Enter name' />
          <input type="email" placeholder='Enter email' />
          <input type="password" placeholder='Enter password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account <span>Login here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>Agree with the terms and contionds</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup;