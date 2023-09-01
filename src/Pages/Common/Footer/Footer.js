import React from 'react';
import './Footer.css';

const Footer = () => {
    const date = new Date().getFullYear()
    return (
        <div className='footer-container'>
            <span>&copy; {date} Dental Service</span>
        </div>
       
    );
};

export default Footer;