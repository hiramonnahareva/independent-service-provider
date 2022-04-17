import React, { useState } from 'react';
import './Header.css'
import logo from '../../../images/Tooth-Icon,-dental-care-icon-premium-vector-PNG (1).png';
import { FaTimes, FaBars } from 'react-icons/fa';
import CustomLink from '../../../CustomLink';

const Header = () => {
    const [click, setClick] = useState(true);
    const handleClick = () => setClick(!click);
    return (
        <>
            <nav className='navbar'>
                <div className="navbar-container">
                    <CustomLink to='/home' className='navbar-logo'>
                        <div className='logo-container'>
                            <img className='logo' src={logo} alt="" />
                            <span>Dentist</span>
                            </div>
                    </CustomLink>
                        <ul className={click ? 'menu-bar' : 'menu-display-none'}
                        onClick={() => setClick(true)}
                        >
                            <li className='nav-item'>
                        <CustomLink to='/home' className='customlink-btn'>
                               Home
                        </CustomLink>
                            </li>
                            <li className='nav-item'>
                        <CustomLink to='/login' className='customlink-btn'>
                                Login
                        </CustomLink>
                            </li>

                            <li className='nav-item'>
                        <CustomLink to='/about' className='customlink-btn'>
                               About
                        </CustomLink>
                            </li>
                            <li className='nav-item'>
                        <CustomLink to='/blogs' className='customlink-btn'>
                                Blogs
                        </CustomLink>
                            </li>

                            <li className='nav-item'>
                       <CustomLink to='/register'>
                            <button className='sign-up-btn'>Sign Up</button>
                        </CustomLink>
                        </li>
                        </ul>
                    </div>
                    <div className='menu-icon' onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
            </nav>
        </>
    );
};


export default Header;