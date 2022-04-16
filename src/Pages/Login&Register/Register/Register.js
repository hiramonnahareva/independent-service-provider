import React from 'react';
import './Register.css';
import image from '../../../images/Data_security_27-1.png' ;
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='register-container'>
            <div className='form-container'>
            <img src={image} alt="" />
            <div className='form-info'>
            <h2>Register</h2>
                <form>
                    <input className='input-field' type="text" placeholder='Enter Your Name'/>
                    <input className='input-field' type="text" placeholder='Enter Your Email'/>
                    <input className='input-field' type="text" placeholder='Enter Your Password'/>
                    <input className='input-field' type="text" placeholder='Enter Your Confirm Password'/>
                    <input className='submit-btn' type="submit" value="search" />
                    <p className='already-singUp'>Already Sign Up? <Link className='toggle-link' to='/login'>Please Login</Link></p>
                </form>
        <div className='or-part'>
            <hr className='hr-line' />
           <span> OR </span>
            <hr className='hr-line' />
        </div>
            </div>
        </div>
        </div>
    );
};

export default Register;