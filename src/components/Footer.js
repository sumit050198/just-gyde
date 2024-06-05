import React from 'react'
import { Outlet, Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {
    return (
        // <div>
        <div className="footer">
            <div className="container footerContainer">
                {/* <div className="row"> */}
                <div className="col-12 my-5">
                    <div className="footerLogo col-3 mx-5">
                        <img className='logo my-3' src="../image/logoJustGyde.png" alt="Logo" />
                        <p className='parrafooter'> Dependable solutions, tailored to your needs, ensuring quality and consistency. Exceptional support, exceeding expectations with personalized and attentive care.</p>
                        <div className="socialMedia">
                            <img className='icon' src="./image/Facebook.png" alt="" />
                            <img className='icon mx-4' src="./image/Instagram.png" alt="" />
                            <img className='icon ' src="./image/LinkedIn.png" alt="" />
                            <img className='icon mx-4' src="./image/Twitter.png" alt="" />
                            <img className='icon' src="./image/youtub.png" alt="" />
                        </div>
                    </div>
                    <div className="footerNav d-flex justify-content-center align-items-center">
                        <div className="Company mx-5">
                            <ul className="navbarLinks">
                                <h5 className='h5Tag'>Company</h5>
                                <li> <Link to="/">About</Link></li>
                                <li className='my-2'> <Link to="/">Contact Us</Link></li>
                                <li> <Link to="/">Services</Link></li>
                                <li className='my-2'> <Link to="/">Reviews</Link></li>
                            </ul>
                        </div>
                        <div className="Support">
                            <ul className="navbarLink">
                                <h5 className='h5Tag'>Support</h5>
                                <li > <Link to="/">Getting started</Link></li>
                                <li className='my-2'> <Link to="/">Help center</Link></li>
                                <li> <Link to="/">Server status</Link></li>
                                <li className='my-2'> <Link to="/">Report a bug</Link></li>
                            </ul>
                        </div>
                        <div className="ContactsUs mx-5">
                            <ul className="navbarLink">
                                <h5 className='h5Tag mx-2'>Contacts us</h5>
                                <li className=''> <Link className='d-flex' to="/"><img className='icon my-1 mx-2' src="./image/Email.png" alt="" /> contact@Justgyde.com </Link></li>
                                <li className='my-2'> <Link className='d-flex' to="/"><img className='icon mx-2' src="./image/Phone.png" alt="" /> (414) 687 - 5892</Link></li>
                                <li className=''> <Link className='d-flex' to="/"><img className='icon my-1 mx-2' src="./image/Mark.png" alt="" /> 794 ADC123 St <br /> Dummy Text, 94102</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </div>
            <hr class="horizantalLine border border-white border-1 opacity-50 my-4"></hr>
            <div className=" d-flex justify-content-center align-items-center">
                <li className='termAndCondi'> <Link to="/"> All Rights Reserved | </Link></li>
                <li className='termAndCondi'> <Link className='text-primary mx-1' to="/"> Terms and Conditions |</Link></li>
                <li className='termAndCondi'> <Link className='text-primary' to="/">Privacy Policy |</Link></li>
                <li className='termAndCondi'> <Link className='text-primary mx-1' to="/"> FAQ |</Link></li>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Footer
