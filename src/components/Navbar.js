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
        <header className='header'> ;
            <nav className="container navbar">
                <div className="navbar-logo">
                    <img className='logo' src="../image/logoJustGyde.png" alt="Logo" />
                </div>
                <ul className="navbar-links">
                    <li> <Link to="/Services">Home</Link></li>
                    <li> <Link to="/Services">About</Link></li>
                    <li> <Link to="/Services">Service</Link></li>
                    <li> <Link to="/Services">Reviews</Link></li>
                    <li> <Link to="/Services">Contact Us</Link></li>
                </ul>
            </nav>
            <div className="container">
                <div className="container hero">
                    <div className="hero-text">
                        <h3 className='desc'>Reliable Solutions,<br /> Exceptional Service</h3>
                        <p className='parra'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua</p>
                    </div>
                    <div className="hero-image"
                     style={{ backgroundImage: `url(${'./image/imgback.png'})`, height: "512px", width: "530px", marginLeft: "45px" }}>
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
