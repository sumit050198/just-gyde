import React from 'react'
import { Outlet, Link } from "react-router-dom";
import './Navbar.css';
// import Navbar from './Navbar';
import OnlyNav from './OnlyNav';
import Footer from './Footer';

const OurMission = () => {
    return (
        <>
        <OnlyNav/>
         {/* <Navbar /> */}
         <div className="container my-5">
            <h1 className='h1Tag' style={{color: '#4e4250', fontSize: "40px", margin: "50px 0 50px 0"}}>Our Mission</h1>
            <p style={{fontSize: "21px", fontWeight: "400", lineHeight: "1.5" }}>At Just Gyde, our mission is to empower individuals and communities by providing seamless access to essential services in healthcare, education, finance, and entertainment. We are committed to creating user-friendly solutions that simplify daily life and promote equality. By bridging the gaps in these vital areas, we aim to foster healthier, more educated, financially secure, and enriched lives for everyone.</p>
            <p style={{fontSize: "20px", fontWeight: "400", lineHeight: "1.5", marginBottom: "100px"}}>At Just Gyde, our mission is to empower individuals and communities by providing seamless access to essential services in healthcare, education, finance, and entertainment. We are committed to creating user-friendly solutions that simplify daily life and promote equality. By bridging the gaps in these vital areas, we aim to foster healthier, more educated, financially secure, and enriched lives for everyone. Our dedicated team leverages technology and innovative approaches to ensure that these services are accessible, affordable, and efficient. We believe that by enhancing access to these fundamental services, we can drive positive change and create a more inclusive society where everyone has the opportunity to thrive and reach their full potential.</p>
         </div>
         <Footer/>
        </>
    );
};

export default OurMission
