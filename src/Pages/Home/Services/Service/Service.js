import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';
import { AiFillPlusCircle } from 'react-icons/ai';

const Service = ({service}) => {
    const {img, name, Price} = service ;

    return (
        <div className='service-container'>
           <div className="image-container">
            <div id="zoom-in">
                <figure>
                <img src={img} alt="" />
                </figure>
            </div>
           <AiFillPlusCircle className='plus-icon'/>
           </div>
            <div className="service-info">
            <h3>{name}</h3>
            <p>At The Smile Specialists, removing a tooth is always the last resort.</p>
            <h4>Price: <span>{Price}</span></h4>
           <div className="checkout-container">
           <Link to='/checkout' className='btn'>Checkout</Link>
           </div>
            </div>
        </div>
    );
};

export default Service;