import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {img, name, Price} = service ;

    return (
        <div className='service-container'>
           <div className="image-container">
            <img src={img} alt="" />
           </div>
            <div className="service-info">
            <h3>{name}</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <h4>Price: <span>{Price}</span></h4>
           <div className="checkout-container">
           <Link to='/checkout' className='checkout-btn'>Checkout</Link>
           </div>
            </div>
        </div>
    );
};

export default Service;