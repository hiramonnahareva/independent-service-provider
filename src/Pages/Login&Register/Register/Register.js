import React, { useEffect, useState } from 'react';
import './Register.css';
import image from '../../../images/Data_security_27-1.png' ;
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../../Hooks/Friebase.init';
import SignInGoogle from '../SignInGoogle/SignInGoogle';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [ createUserWithEmailAndPassword, user, loading, EmailAndPasswordError] = useCreateUserWithEmailAndPassword(auth , {sendPasswordResetEmail: true});
   
    const handleEmail = event => {
     setEmail(event.target.value) ;
    }
    const handlePassword = event => {
        setPassword (event.target.value) ;
    }
    useEffect(()=>{
      let from = location.state?.from?.pathname || "/";
      if (user) {
      navigate(from, { replace: true })
      }
      },[user])
  let navigate = useNavigate();
  let location = useLocation();
    const handleConfirmPassword = event => {
        setConfirmPassword (event.target.value) ;
    }
  
    const handleFormSubmit = event => {
        event.preventDefault();
        createUserWithEmailAndPassword(email, password); 
        if (!/(?=.*[!@#$%^&*])/.test(password)) {
          
          return alert('password should contain at lest one special character');
        }
      if (password !== confirmPassword) {
          alert ('password is not match');
      }
     
    if (error || EmailAndPasswordError) {
        return (
          <div>
            <p>Error: {EmailAndPasswordError.message || error}</p>
          </div>
        );
      }
      if (user) {
        return (
          <div>
            <p>Registered User: {user.email}</p>
          </div>
        );
      }
    }

    

    return (
        <div className='register-container'>
            <div className='form-container'>
            <img src={image} alt="" />
            <div className='form-info'>
            <h2>Register</h2>
                <form onSubmit={handleFormSubmit}>
                    <input  className='input-field' type="text" placeholder='Enter Your Name'/>
                    <input onBlur={handleEmail} className='input-field' type="email" placeholder='Enter Your Email' required/>
                    <input  onBlur={handlePassword} className='input-field' type="password" placeholder='Enter Your Password' required/>
                    <input  onBlur={handleConfirmPassword} className='input-field' type="password" placeholder='Enter Your Confirm Password' required/>
                    {loading &&  <p>Loading...</p>}
                    <input className='submit-btn' type="submit" value="Register" />
                    <p className='already-singUp'>Already Sign Up? <Link className='toggle-link' to='/login'>Please Login</Link></p>
                </form>
        <div className='or-part'>
            <hr className='hr-line' />
           <span> OR </span>
            <hr className='hr-line' />
            
        </div>
        <div className='google-signin-container'><SignInGoogle></SignInGoogle></div>
            </div>
        </div>
        </div>
    );
};

export default Register;