import React from 'react';
import './Services.css' ;
import useServices from '../../../../Hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const [services] = useServices ()
    return (
        <div>
                <h2>Servicers</h2>
        <div className='services-conatiner'>
            {
                services.map (service => <Service key={service._id} service={service}></Service>)
            }
        </div>
        </div>
    );
};

export default Services;