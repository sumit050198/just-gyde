import React from 'react'
import './Footer.css';

const Footer = () => {
    return (
        // <div>
        <div className="footer">
            <div className="container">
                <div className="col-12">
                    <div className="footerLogo">
                        <img className='logo' src="../image/logoJustGyde.png" alt="Logo" />
                        <p className='parrafooter'>Lorem ipsum dolor sit amet <br /> consectetur adipiscing elit aliquam</p>
                        <div className="socialMedia">
                            <img className='icon' src="./image/Facebook.png" alt="" />
                            <img className='icon' src="./image/Instagram.png" alt="" />
                            <img className='icon' src="./image/LinkedIn.png" alt="" />
                            <img className='icon' src="./image/Twitter.png" alt="" />
                            <img className='icon' src="./image/Facebook.png" alt="" />
                        </div>
                    </div>

                    <div className="Company">
                        <h5>Company</h5>
                        <ul className="navbarLinks">
                            <li><a href="#home">About</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#reviews">Reviews</a></li>
                        </ul>
                    </div>
                    <div className="Support">
                        <h5>Support</h5>
                        <ul className="navbarLink">
                            <li><a href="#home">Getting started</a></li>
                            <li><a href="#contact">Help center</a></li>
                            <li><a href="#services">Server status</a></li>
                            <li><a href="#reviews">Report a bug</a></li>
                        </ul>
                    </div>
                    <div className="ContactsUs">
                        <h5>Contacts us</h5>
                        <ul className="navbarLink">
                            <li><a href="#home">contact@company.com</a></li>
                            <li><a href="#contact">(414) 687 - 5892</a></li>
                            <li><a href="#services">794 ADC123 St <br />
                                Dummy Text, 94102</a></li>
                        </ul>
                    </div>
                    {/* <hr style={{"height:2px ,border-width:0;color:gray;background-color:gray"}} /> */}
                    {/* <hr /> */}
                </div>
            </div>
        </div>
        // </div>
    )
}

export default Footer
