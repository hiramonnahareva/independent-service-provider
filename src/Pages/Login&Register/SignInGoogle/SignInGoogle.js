import React from 'react';
import './SignInGoogle.css';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../../../Hooks/Friebase.init';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';

const SignInGoogle = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (loading) {
        return <p>Loading...</p>;
      }
      if (user) {
        navigate ('/checkout') ;
      }
    return (
        <div>
            <button className='google-signin-btn' onClick={() => signInWithGoogle()}><FcGoogle className='google-icon'/></button>
        </div>
    );
};

export default SignInGoogle;