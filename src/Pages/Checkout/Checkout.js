import React, { useState } from 'react';
const Checkout = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleEmail = event => {
        setEmail(event.target.value) ;
       }
       const handlePassword = event => {
           setPassword (event.target.value) ;
       }
       const handleFormSubmit = event => {
        event.preventDefault();
        if (email && password) {

        }
       }
    return (
        
        <div>
             <div className='form-container'>
            <div className='form-info'>
            <h2>Checkout</h2>
                <form onSubmit={handleFormSubmit}>
                    <input  className='input-field' type="text" placeholder='Enter Your Name'/>
                    <input onBlur={handleEmail} className='input-field' type="email" placeholder='Enter Your Email' required/>
                    <input  onBlur={handlePassword} className='input-field' type="password" placeholder='Enter Your Password' required/>
                    <input className='submit-btn' type="submit" value="search" />
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

export default Checkout;