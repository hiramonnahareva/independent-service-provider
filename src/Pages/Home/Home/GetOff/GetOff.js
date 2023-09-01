import React from 'react';
import './GetOff.css';
import dentist1 from '../../../../images/dentist1.jpg';

const GetOff = () => {
    return (
        <div className='get-off-container'>
            <div className='img-container'>
                <img src={dentist1} alt="" />
                <div className='get-off-info'>
                    <div>
                        <h2>Get 10%-Off Your First Visit</h2>
                        <p>If you are in need of high-quality, professional and friendly dental care, look no further than our clinic.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetOff;