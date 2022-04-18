import React, { useEffect } from 'react';
import './SignInGoogle.css';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../../../Hooks/Friebase.init';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../Common/Spinner/Spinner';

const SignInGoogle = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    useEffect(()=>{
      if (user) {
        navigate ('/checkout') ;
      }
      },[user])
    const navigate = useNavigate()
    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (loading) {
        return <Spinner></Spinner>;
      }
     
    return (
        <div>
            <button className='google-signin-btn' onClick={() => signInWithGoogle()}><FcGoogle className='google-icon'/></button>
        </div>
    );
};

export default SignInGoogle;