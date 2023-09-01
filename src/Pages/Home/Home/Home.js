import React from 'react';
import Banner from '../../Home/Banner/Banner';
import Services from '../../Home/Services/Servieces/Services';
import Overview from '../Overview/Overview';
// import Footer from '../Footer/Footer';
import Brand from '../Brand/Brand';
import GetOff from './GetOff/GetOff';
import Dentist from '../Dentist/Dentist';
import Footer from '../../Common/Footer/Footer';

const Home = () => {
    return (
        <div>
           <Banner/>
           <Brand/>
           <Services/>
           <Overview/>
           <Dentist/>
           <GetOff/>
           <Footer/>
        </div>
    );
};

export default Home;