import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './Navbar.css';
const About = () => {
    return (
        <div className="App">
            <Navbar />
        </div>
    )
}

const Navbar = () => {
    return (

        // style={{ backgroundImage:`url(${'./image/Vector1.png'})`, width: "100%", height: "672px" }}
        <header className='header'>
            <nav className="container navbar">
                <div className="navbar-logo">
                    <img className='logo' src="../image/logoJustGyde.png" alt="Logo" />
                </div>
                <ul className="navbar-links">
                    <li> <Link to="/">Home</Link></li>
                    <li> <Link to="/OurMission">Our Mission</Link></li>
                    <li> <Link to="/OurVision">Our Vision</Link></li>
                    <li> <Link to="/">About</Link></li>
                    <li> <Link to="/">Service</Link></li>
                    <li> <Link to="/">Reviews</Link></li>
                    <li> <Link to="/Services">Contact Us</Link></li>
                    {/* <li> <Link to="/Services">All Services Page</Link></li> */}
                </ul>
            </nav>
            <div className="container">
                <div className="container hero">
                    <div className="hero-text">
                        <h3 className='desc'>Reliable Solutions,<br /> Exceptional Service</h3>
                        <p className='parra'>At our company, we pride ourselves on delivering reliable <br />solutions coupled with exceptional service.
                            Our commitment <br />to excellence ensures that every project we undertake meets<br /> the highest standards of quality and
                            satisfaction. Trust us to <br />provide innovative and dependable solutions tailored to<br /> your needs, backed by a team dedicated
                            to outstanding customer service.</p>
                    </div>
                    <div className="hero-image"
                        style={{ backgroundImage: `url(${'./image/imgback.png'})`, height: "512px", width: "530px", marginLeft: "8px" }}>
                        {/* <div className='imgback' */}

                        <img className='mobileimage my' style={{ height: "400px", width: "400px", margin: "55px 0 0 75px" }} src="./image/img1.svg" alt="Hero" />
                        {/* </div> */}
                    </div>
                </div>
            </div>
            <Outlet />
        </header>
    );
};

export default Navbar;
