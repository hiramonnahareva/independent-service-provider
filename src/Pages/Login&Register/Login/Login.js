import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from '../../../Hooks/Friebase.init';
import image from '../../../images/Data_security_27-1.png';
import SignInGoogle from '../SignInGoogle/SignInGoogle';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);
    useEffect(()=>{
        let from = location.state?.from?.pathname || "/";
        if (user) {
        navigate(from, { replace: true })
        }
        },[user])
    let navigate = useNavigate();
    let location = useLocation();
    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const resetPassword = async () => {
        await sendPasswordResetEmail(email);
        toast('Sent email');
    }
   
    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    return (
        <div>
            <div className='register-container'>
                <ToastContainer />
                <div className='form-container'>
                    <img src={image} alt="" />
                    <div className='form-info'>
                        <h2>Login</h2>
                        <form onSubmit={handleUserSignIn}>
                            <input className='input-field' type="text" placeholder='Enter Your Name' />
                            <input onBlur={handleEmailBlur} className='input-field' type="email" placeholder='Enter Your Email' required />
                            <input onBlur={handlePasswordBlur} className='input-field' type="password" placeholder='Enter Your Password' required />
                            <input className='submit-btn' type="submit" value="Login" />
                            {loading && <p>Loading...</p>}
                            {sending && <p>Loading...</p>}
                            <p>{error?.message}</p>
                            <button className='forgot-pass' onClick={resetPassword}>forgot password</button>
                            <p className='already-singUp'>New To Here? <Link className='toggle-link' to='/register'>Please Sign Up</Link></p>
                        </form>
                        <div className='or-part'>
                            <hr className='hr-line' />
                            <span> OR </span>
                            <hr className='hr-line' />
                        </div>
                        <div className='google-signin-container'> <SignInGoogle></SignInGoogle></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;