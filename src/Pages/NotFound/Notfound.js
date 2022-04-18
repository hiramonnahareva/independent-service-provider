import React from 'react';
import './Notfound.css';
import image from '../../images/404-img.jpg'

const Notfound = () => {
    return (
        <div className='not-found-container'>
            <img src={image} alt="" />
        </div>
    );
};

export default Notfound;