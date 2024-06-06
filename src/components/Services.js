import React from 'react';
// import { Outlet, Link } from "react-router-dom";    
import './Services.css';
import OnlyNav from './OnlyNav';
import Footer from './Footer';

const Services = () => {
    const serviceList = [
        {
            id: 1,
            title: 'Web Development',
            description: 'Build modern and responsive web applications.',
        },
        {
            id: 2,
            title: 'Mobile Development',
            description: 'Create mobile applications for Android and iOS.',
        },
        {
            id: 3,
            title: 'SEO Optimization',
            description: 'Improve your website ranking on search engines.',
        },
        {
            id: 4,
            title: 'Graphic Design',
            description: 'Design stunning graphics and visuals.',
        },
    ];

    return (
        <div className="">
            <OnlyNav/>
        <div className="services-container">
            <h1>Our Services</h1>
            <div className="services-list">
                {serviceList.map(service => (
                    <div key={service.id} className="service-item">
                        <h2>{service.title}</h2>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
            {/* <Outlet /> */}
        </div>
        <Footer/>
        </div>
    );
};

export default Services;
