import React from 'react'
import { Outlet, Link } from "react-router-dom";
import OnlyNav from './OnlyNav';
import Footer from './Footer';

const OurVision = () => {
    return (
        <div>
            <OnlyNav />
            {/* <Navbar /> */}
            <div className="container my-5">
                <h1 className='h1Tag' style={{ color: '#4e4250', fontSize: "40px", margin: "50px 0 50px 0" }}>Our Vision</h1>
                <p style={{ fontSize: "21px", fontWeight: "400", lineHeight: "1.5" }}>At Just Gyde, we envision a world where everyone has equal access to essential services in healthcare, education, finance, and entertainment. We strive to create an inclusive society where these vital resources are not only accessible but also affordable and user-friendly. Our goal is to bridge existing gaps, ensuring that every individual can lead a healthier, more educated, financially stable, and enriched life. By leveraging technology and innovative solutions, we aim to simplify and enhance daily living. Our vision extends to fostering communities that thrive on equality, opportunity, and empowerment. We are dedicated to driving positive change and making a lasting impact. By enhancing access to these fundamental services,
                    we believe we can create a world where everyone has the opportunity to reach their full potential and enjoy a high quality of life. Through our unwavering commitment and passion, we seek to transform lives and build a better future for all.</p>
            </div>
            <Footer />
        </div>
    )
}

export default OurVision
