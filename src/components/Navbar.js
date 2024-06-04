import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        
        <header className='header'>
            <nav className="navbar">
                <div className="navbar-logo">
                    <img className='logo' src="../image/logoJustGyde.png" alt="Logo" />
                </div>
                <ul className="navbar-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#reviews">Reviews</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
            </nav>
            <div className="hero">
                <div className="hero-text">
                    <h3 className='desc'>Reliable Solutions,<br /> Exceptional Service</h3>
                    <p className='parra'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua</p>
                </div>
                <div className="hero-image">
                    <img  src="./image/img1.png" alt="Hero" />
                </div>
            </div>
        </header>
    );
};

export default Navbar;
