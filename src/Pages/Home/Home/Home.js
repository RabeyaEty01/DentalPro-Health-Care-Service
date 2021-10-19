import React from 'react';
import Services from '../../Services/Services/Services';
import Footer from '../../Shared/Footer/Footer';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import FAQ from '../FAQ/FAQ';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Appointment></Appointment>
            <FAQ></FAQ>
            <Footer></Footer>
        </div>
    );
};

export default Home;