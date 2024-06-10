// import React from 'react'
import { Outlet, Link } from "react-router-dom";
import './OnlyNav.css';

// const OnlyNav = () => {
//   return (
//     <header className='head'>
//     <nav className="container OnlyNav">
//         <div className="navbar-logo">
//             <img className='logo' src="../image/logoJustGyde.png" alt="Logo" />
//         </div>
//         <ul className="navbar-links">
//             <li> <Link to="/">Home</Link></li>
//             <li> <Link to="/OurMission">Our Mission</Link></li>
//             <li> <Link to="/OurVision">Our Vision</Link></li>
//             <li> <Link to="/">About</Link></li>
//             <li> <Link to="/Services">Service</Link></li>
//             <li> <Link to="/Reviews">Reviews</Link></li>
//             <li> <Link to="/Bootsnav">Contact Us</Link></li>
//             {/* <li> <Link to="/Services">All Services Page</Link></li> */}
//         </ul>
//     </nav>
//     <Outlet />
// </header>
//   )
// }

// export default OnlyNav

import React from 'react'

const OnlyNav = () => {
      return (
          <div className="head">
              <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#4e4250" }}>
                  <div className="container-fluid">
                      <Link className="navbar-brand" to="/"><img className='logo' src="../image/logoJustGyde.png" alt="Logo" /></Link>
                      <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarSupportedContent">
                          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-white">
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
                                  <Link className="nav-link active text-white" aria-current="page" to="/Service">Service</Link>
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
              </nav>
          </div>
  )
}

export default OnlyNav
