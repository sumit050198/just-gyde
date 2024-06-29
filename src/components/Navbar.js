// import React from 'react';
// import { Outlet, Link } from "react-router-dom";
// import './Navbar.css';

// const About = () => {
//     return (
//         <div className="App">
//             <Navbar />
//         </div>
//     )
// }

// const Navbar = () => {
//     return (

//         <header className='header'>
//             <nav className="container navbar">
//                 <div className="navbar-logo">
//                     <img className='logo' src="../image/logoJustGyde.png" alt="Logo" />
//                 </div>
//                 <ul className="navbar-links">
//                     <li> <Link to="/">Home</Link></li>
//                     <li> <Link to="/OurMission">Our Mission</Link></li>
//                     <li> <Link to="/OurVision">Our Vision</Link></li>
//                     <li> <Link to="/About">About</Link></li>
//                     <li> <Link to="/Services">Service</Link></li>
//                     <li> <Link to="/Reviews">Reviews</Link></li>
//                     <li> <Link to="/">Contact Us</Link></li>
//                 </ul>
//             </nav>
//             <div className="container">
//                 <div className="container hero">
//                     <div className="hero-text">
//                         <h3 className='desc'>Reliable Solutions,<br /> Exceptional Service</h3>
//                         <p className='parra'>At our company, we pride ourselves on delivering reliable <br />solutions coupled with exceptional service.
//                             Our commitment <br />to excellence ensures that every project we undertake meets<br /> the highest standards of quality and
//                             satisfaction. Trust us to <br />provide innovative and dependable solutions tailored to<br /> your needs, backed by a team dedicated
//                             to outstanding customer service.</p>
//                     </div>
//                     <div className="hero-image"
//                         style={{ backgroundImage: `url(${'./image/imgback.png'})`, height: "512px", width: "530px", marginLeft: "8px" }}>

//                         <img className='mobileimage my' style={{ height: "400px", width: "400px", margin: "55px 0 0 75px" }} src="./image/img1.svg" alt="Hero" />
//                     </div>
//                 </div>
//             </div>
//             <Outlet />
//         </header>
//     );
// };

// export default Navbar;

// import React, { useState } from 'react';
// import { Outlet, Link } from "react-router-dom";
// import './Navbar.css';

// const About = () => {
//     return (
//         <div className="App">
//             <Navbar />
//         </div>
//     )
// }

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     }

//     return (            
//         <header className="container-fluid header">
//             <nav className="container navbar">
//                 <div className="navbar-logo">
//                     <img className='logo' src="../image/logoJustGyde.png" alt="Logo" />
//                 </div>
//                 <div className="menu-icon" onClick={toggleMenu}>
//                     <div className={isOpen ? 'bar open' : 'bar'}></div>
//                     <div className={isOpen ? 'bar open' : 'bar'}></div>
//                     <div className={isOpen ? 'bar open' : 'bar'}></div>
//                 </div>
//                 <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
//                     <li> <Link to="/" onClick={toggleMenu}>Home</Link></li>
//                     <li> <Link to="/OurMission" onClick={toggleMenu}>Our Mission</Link></li>
//                     <li> <Link to="/OurVision" onClick={toggleMenu}>Our Vision</Link></li>
//                     <li> <Link to="/About" onClick={toggleMenu}>About</Link></li>
//                     <li> <Link to="/Services" onClick={toggleMenu}>Service</Link></li>
//                     <li> <Link to="/Reviews" onClick={toggleMenu}>Reviews</Link></li>
//                     <li> <Link to="/Bootsnav" onClick={toggleMenu}>Bootsnav</Link></li>
//                 </ul>
//             </nav>
//             <div className="container">
//                 <div className="container hero">
//                     <div className="hero-text">
//                         <h3 className='desc'>Reliable Solutions,<br /> Exceptional Service</h3>
//                         <p className='parra'>At our company, we pride ourselves on delivering reliable <br />solutions coupled with exceptional service.
//                             Our commitment <br />to excellence ensures that every project we undertake meets<br /> the highest standards of quality and
//                             satisfaction. Trust us to <br />provide innovative and dependable solutions tailored to<br /> your needs, backed by a team dedicated
//                             to outstanding customer service.</p>
//                     </div>
//                     <div className="hero-image"
//                         style={{ backgroundImage: `url(${'./image/imgback.png'})`, height: "512px", width: "530px", marginLeft: "35px", marginTop: "60px" }}>
//                         <img className='mobileimage my' style={{ height: "400px", width: "400px", margin: "55px 0 0 75px" }} src="./image/img1.svg" alt="Hero" />
//                     </div>
//                 </div>
//             </div>
//             <Outlet />
//         </header>
//     );
// };

// export default Navbar;

import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#4e4250" }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img className='logo' src="../image/logoJustGyde.png" alt="Logo" /></Link>
                    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" style={{ backgroundColor: "#4e4250", fontSize: "20px" }} tabIndex="1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title text-white" id="offcanvasNavbarLabel">Menu</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active text-white" aria-current="page" to="/OurMission">Our Mission</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active text-white" aria-current="page" to="/OurVision">Our Vision</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active text-white" aria-current="page" to="/About">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active text-white" aria-current="page" to="/Services">Service</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active text-white" aria-current="page" to="Reviews/">Reviews</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active text-white" aria-current="page" to="/ContactUs">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="container">
                <div className="container hero d-flex">
                    <div className="hero-text col-lg-6">
                        <h3 className='desc'>Reliable Solutions, Exceptional Service</h3>
                        <p className='parra'>At our company, we pride ourselves on delivering reliable solutions coupled with exceptional service.
                            Our commitment to excellence ensures that every project we undertake meets the highest standards of quality and
                            satisfaction. Trust us to provide innovative and dependable solutions tailored to your needs, backed by a team dedicated
                            to outstanding customer service.</p>
                    </div>
                    <div className="hero-image col-lg-6"
                        style={{ backgroundImage: `url(${'./image/imgback.png'})`, height: "512px", width: "530px" }}>
                        <img className='mobileimage' style={{ height: "400px", width: "500px", margin: "55px 0 0 20px" }} src="./image/img1.svg" alt="Hero" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;

