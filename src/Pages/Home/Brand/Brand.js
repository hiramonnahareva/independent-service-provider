import React from 'react';
import './Brand.css'
import image from '../../../images/Autodesk-Logo-2005.jpg'


const Brand = () => {
    return (
        <div className='brand-container wrapper'>
            <div className="brand-items">
                <img src={image} alt="" />
            </div>
            <div className="brand-items">
                <img src={image} alt="" />
            </div>
            <div className="brand-items">
                <img src={image} alt="" />
            </div>
            <div className="brand-items">
                <img src={image} alt="" />
            </div>
            <div className="brand-items">
                <img src={image} alt="" />
            </div>
            <div className="brand-items">
                <img src={image} alt="" />
            </div>
            <div className="brand-items">
                <img src={image} alt="" />
            </div>
            <div className="brand-items">
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default Brand;