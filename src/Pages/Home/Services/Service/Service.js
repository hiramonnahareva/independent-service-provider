import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {img, name} = service ;

    return (
        <div className='service-container'>
            <img src={img} alt="" />
            <div className="service-info">
            <h3>{name}</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
           <div className="checkout-container">
           <Link to='checkout' className='checkout-btn'>Checkout</Link>
           </div>
            </div>
        </div>
    );
};

export default Service;