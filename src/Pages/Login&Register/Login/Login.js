import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../../images/Data_security_27-1.png' ;

const Login = () => {
    return (
        <div>
              <div className='register-container'>
            <div className='form-container'>
            <img src={image} alt="" />
            <div className='form-info'>
            <h2>Register</h2>
                <form>
                    <input className='input-field' type="text" placeholder='Enter Your Name'/>
                    <input className='input-field' type="text" placeholder='Enter Your Email'/>
                    <input className='input-field' type="text" placeholder='Enter Your Password'/>
                    <input className='submit-btn' type="submit" value="search" />
                    <button className='forgot-pass'>forgot password</button>
                   <p className='already-singUp'>New To Here? <Link className='toggle-link' to='/register'>Please Sign Up</Link></p>
                </form>
        <div className='or-part'>
            <hr className='hr-line' />
           <span> OR </span>
            <hr className='hr-line' />
        </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Login;