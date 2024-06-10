// import React from 'react'
// import { Outlet, Link } from "react-router-dom";
// import './Footer.css';

// const Footer = () => {
//     return (
//         <div className="footer">
//             <div className="container footerContainer">
//                 <div className="row">
//                     <div className="col-12 my-5 d-flex justify-content-center align-items-center">
//                         <div className="footerLogo col-4 mx-5">
//                             <img className='logo my-3' src="../image/logoJustGyde.png" alt="Logo" />
//                             <p className='parrafooter'> Dependable solutions, tailored to your needs, ensuring quality and consistency. Exceptional support, exceeding expectations with personalized and attentive care.</p>
//                             <div className="socialMedia">
//                                 <img className='icon' src="./image/Facebook.png" alt="" />
//                                 <img className='icon mx-4' src="./image/Instagram.png" alt="" />
//                                 <img className='icon ' src="./image/LinkedIn.png" alt="" />
//                                 <img className='icon mx-4' src="./image/Twitter.png" alt="" />
//                                 <img className='icon' src="./image/youtub.png" alt="" />
//                             </div>
//                         </div>
//                         <div className="footerNav d-flex justify-content-center align-items-center">
//                             <div className="Support col-4 justify-content-center align-items-center">
//                                 <ul className="navbarLink">
//                                     <h5 className='h5Tag my-4'>Support</h5>
//                                     <li className='termAndCondi my-4'> <Link className='text' to="/TermCondition"> Terms and Conditions</Link></li>
//                                     <li className='termAndCondi'> <Link className='text' to="/Policy">Privacy Policy</Link></li>
//                                     <li className='termAndCondi'> <Link className='text' to="/FAQ"> FAQ</Link></li>
//                                 </ul>
//                             </div>
//                             <div className="ContactsUs mx-5">
//                                 <ul className="navbarLink">
//                                     <h5 className='h5Tag mx-2 my-4'>Contacts us</h5>
//                                     <li className='my-4 mx-'> <Link className='d-flex' to=""><img className='icon my-1 mx-2' src="./image/Email.png" alt="" /> contact@Justgyde.com </Link></li>
//                                     <li className=''> <Link className='d-flex' to=""><img className='icon my-1 mx-2' src="./image/Mark.png" alt="" />Forum DLF Cyber City, <br /> Phase III, DLF QE, Sector 24,
//                                     Gurugram, Haryana, 122002</Link></li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <hr class="horizantalLine border border-white border-1 opacity-50 my-4"></hr>
//             <div className=" d-flex justify-content-center align-items-center">
//                 <li className='termAndCondi'> <Link className="copyrights" to="">Copyrights 2024.</Link></li>
//                 <li className='termAndCondi'> <Link className="copyrights mx-1" to="">All Rights Reserved | Just Gyde</Link></li>
//             </div>
//         </div>
//     )
// }

// export default Footer;

import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container footerContainer">
                <div className="col-12 d-flex justify-content-center align-items-center">
                    <div className="footerLogo col-12 col-md-4 md-5 d-flex flex-column justify-content-center align-items-center">
                        <img className='logo my-4' src="../image/logoJustGyde.png" alt="Logo" />
                        <p className='parrafooter'> Dependable solutions, tailored to your needs, ensuring quality and consistency. Exceptional support, exceeding expectations with personalized and attentive care.</p>
                        <div className="socialMedia">
                            <img className='icon' src="./image/Facebook.png" alt="Facebook" />
                            <img className='icon mx-4' src="./image/Instagram.png" alt="Instagram" />
                            <img className='icon' src="./image/LinkedIn.png" alt="LinkedIn" />
                            <img className='icon mx-4' src="./image/Twitter.png" alt="Twitter" />
                            <img className='icon' src="./image/youtub.png" alt="YouTube" />
                        </div>
                    </div>
                    <div className="footerNav d-flex flex-column flex-md-row">
                        <div className="Support col-12 col-md-4 d-flex flex-column justify-content-center align-items-center md-5">
                            <h5 className='h5Tag my-4'>Support</h5>
                            <ul className="navbarLink d-flex flex-column justify-content-center align-items-center">
                                <li className='termAndCondi '> <Link className='text' to="/TermCondition"> Terms and Conditions</Link></li>
                                <li className='termAndCondi'> <Link className='text' to="/Policy">Privacy Policy</Link></li>
                                <li className='termAndCondi'> <Link className='text' to="/FAQ"> FAQ</Link></li>
                            </ul>
                        </div>
                        <div className="ContactsUs col-12 col-md-4 d-flex flex-column justify-content-center align-items-center text-center md-5">
                            <h5 className='h5Tag my-4'>Contacts us</h5>
                            <ul className="navbarLink d-flex flex-column justify-content-center align-items-center">
                                <li className=''> <img className='icon' src="./image/Email.png" alt="Email" /> contact@Justgyde.com </li>
                                <li className='Mark my-2 text-center'> <img className='icon' src="./image/Mark.png" alt="Address" />Forum DLF Cyber City, Phase III, DLF QE, Sector 24, Gurugram, Haryana, 122002</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="horizantalLine border border-white border-1 opacity-50 my-4"></hr>
            <div className="d-flex justify-content-center align-items-center">
                <li className='termAndCondi'> <Link className="copyrights" to="">Copyrights 2024.</Link></li>
                <li className='termAndCondi'> <Link className="copyrights mx-1" to="">All Rights Reserved | Just Gyde</Link></li>
            </div>
        </div>
    )
}

export default Footer;

