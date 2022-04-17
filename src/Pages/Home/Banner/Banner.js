import React from 'react';
import './Banner.css';
import banner from '../../../images/dentist.jpg'

const Banner = () => {
    return (
        <div className='banner-container'>
            <img className='banner-img' src={banner} alt="" />
           <div className='banner-info'> 
               <h2>Dentist</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, optio.</p>
            </div>
        </div>
    );
};

export default Banner;