import React from 'react';
import './Banner.css';
import banner from '../../../images/dentist.jpg'

const Banner = () => {
    return (
        <div className='banner-container'>
            <img className='banner-img' src={banner} alt="" />
           <div className='banner-info'> 
               <h2>WISDOM TEETH REMOVAL</h2>
            <p>For both tooth extraction and wisdom teeth removal, you want a skilled surgeon on your side. </p>
            </div>
        </div>
    );
};

export default Banner;