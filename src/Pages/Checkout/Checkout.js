import React, { useState } from 'react';
import 'reactjs-popup/dist/index.css';
const Checkout = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleEmail = event => {
        setEmail(event.target.value) ;
        console.log (event.target.value)
       }
       const handlePassword = event => {
           setPassword (event.target.value) ;
       }
       const handleFormSubmit = event => {
           if (email && password){
            alert ('Hello !! welcome to this website')
           }
           event.preventDefault()
       }
    return (
        
        <div>
             <div className='form-container'>
            <div className='form-info'>
            <h2>Checkout</h2>
                <form onSubmit={handleFormSubmit}>
                    <input  className='input-field' type="text" placeholder='Enter Your Name'/>
                    <input  className='input-field' type="text" placeholder='Enter Your Address'/>
                    <input  className='input-field' type="text" placeholder='Enter Your Phone number'/>
                    <input onBlur={handleEmail} className='input-field' type="email" placeholder='Enter Your Email' required/>
                    <input  onBlur={handlePassword} className='input-field' type="password" placeholder='Enter Your Password' required/>
                    <input className='submit-btn' type="submit" value="search" />
                </form>
            </div>
        </div>
        </div>
    );
};

export default Checkout;