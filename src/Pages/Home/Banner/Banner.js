import React from 'react';
import './Banner.css';
import banner from '../../../images/dental-surgery_hero.jpg'

const Banner = () => {
    return (
        <div className='banner-container'>
            <img className='banner-img' src={banner} alt="" />
           <div className='banner-info'> 
               <h3>WISDOM TEETH REMOVAL</h3>
            <p>For both tooth extraction and wisdom teeth removal, <br /> you want a skilled surgeon on your side. </p>
            </div>
        </div>
    );
};

export default Banner;