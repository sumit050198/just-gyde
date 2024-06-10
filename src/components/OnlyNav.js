import React from 'react'
import { Outlet, Link } from "react-router-dom";
import './OnlyNav.css';

const OnlyNav = () => {
  return (
    <header className='head'>
    <nav className="container OnlyNav">
        <div className="navbar-logo">
            <img className='logo' src="../image/logoJustGyde.png" alt="Logo" />
        </div>
        <ul className="navbar-links">
            <li> <Link to="/">Home</Link></li>
            <li> <Link to="/OurMission">Our Mission</Link></li>
            <li> <Link to="/OurVision">Our Vision</Link></li>
            <li> <Link to="/">About</Link></li>
            <li> <Link to="/Services">Service</Link></li>
            <li> <Link to="/Reviews">Reviews</Link></li>
            <li> <Link to="/Bootsnav">Contact Us</Link></li>
            {/* <li> <Link to="/Services">All Services Page</Link></li> */}
        </ul>
    </nav>
    <Outlet />
</header>
  )
}

export default OnlyNav
