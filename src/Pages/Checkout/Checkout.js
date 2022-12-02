import React, { useState } from 'react';
import 'reactjs-popup/dist/index.css';
import swal from 'sweetalert';
const Checkout = () => {

    const [click, setClick] = useState(true);

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
            swal({
                title: "Good job!",
                text: "You are successfully add the information",
                icon: "success",
                button: "Aww yiss!",
              });
           }
           else{
            swal({
                title: "Something went wrong",
                text: "Some information is missing",
                icon: "error",
                button: "error!",
              });
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
                    <input className='submit-btn' type="submit" value="Submit" />
                </form>
            </div>
        </div>
        </div>
    );
};

export default Checkout;