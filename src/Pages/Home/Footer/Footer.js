import React from 'react';
import './Footer.css';
import {BsFacebook , BsTwitter , BsInstagram , BsTelephoneFill} from 'react-icons/bs';
const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="footer-info">
            <div>
                <h3> About </h3>
                <h3>Contact</h3>
               
            </div>
            <div className='contact'>
                <h4><BsFacebook/> https://www.facebook.com</h4>
                <h4><BsTelephoneFill/> +01799882200</h4>
                <h4><BsInstagram/> https://www.instagram.com</h4>
                <h4><BsTwitter/> https://www.twitter.com</h4>
            </div>
            </div>
            <span>&copy; 2022 CatFoodDB</span>
        </div>
    );
};

export default Footer;