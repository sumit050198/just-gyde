import React from 'react';
import { Outlet, Link } from "react-router-dom";    
import './Services.css';
import OnlyNav from './OnlyNav';
import Footer from './Footer';

const Services = () => {
    const serviceList = [
        {
            id: 1,
            title: 'Educational Service',
            description: 'At Just Gyde, we believe in the Right to Education for all, ensuring every student has access to quality education. We help students secure free education opportunities, breaking down financial barriers to learning. Our platform facilitates mediation between schools and colleges, helping students find the best academic institutions. We provide resources and support to navigate the education system effectively. Our services aim to create a more equitable education landscape. By connecting students with scholarships and financial aid, we empower them to reach their full potential. Just Gyde is dedicated to fostering educational growth and opportunities for all. Join us in making education accessible and achievable for every learner.',
        },
        {
            id: 2,
            title: 'Entertainment Service',
            description: 'Just Gyde brings excitement to your life with a wide array of entertainment services. We have partnerships with PVR and other entities to offer exclusive deals and rewards. Our platform allows users to earn and redeem coins for various entertainment activities. Enjoy movies, events, and more with our seamless booking and reward system. We aim to make entertainment accessible and affordable for everyone. Our services include discounts on movie tickets, event passes, and more. Just Gyde enhances your leisure time by providing curated entertainment experiences. Dive into a world of fun and relaxation with Just Gyde, where entertainment meets convenience.',
        },
        {
            id: 3,
            title: 'Financial Service',
            description: 'Just Gyde is committed to helping individuals achieve their financial goals through comprehensive support and resources. We offer job placement services to connect the unemployed with meaningful employment opportunities. Our platform provides tools and advice for financial planning and goal setting. We work with various partners to create job opportunities for everyone, regardless of their background. By promoting financial literacy, we empower individuals to make informed financial decisions. Our services include resume building, interview preparation, and job matching. Just Gyde aims to reduce unemployment and promote economic stability within communities. Let us help you navigate your financial journey with confidence and success.',
        },
        {
            id: 4,
            title: 'Medical Service',
            description: "Just Gyde offers a robust range of medical services designed to cater to urgent and everyday health needs. We provide fast and reliable ambulance services, ensuring immediate assistance in emergencies. Our blood bank services make it easy to find and donate blood, helping to save lives. Comprehensive laboratory services are available for accurate and timely medical testing. Soon, we'll be launching a doctor consultation service, bringing expert medical advice right to your doorstep. We are committed to improving community health with accessible and efficient medical solutions. Our platform ensures that all health services are just a click away. Trust Just Gyde for your complete medical care needs.",
        },
        {
            id: 5,
            title: 'E-commerce Service',
            description: 'Just Gyde is a versatile platform that caters to a wide range of services, including a robust E-commerce service dedicated to the sale of Fast-Moving Consumer Goods (FMCG). Our E-commerce service is designed to provide customers with a seamless and convenient shopping experience, offering a diverse array of high-quality FMCG products at competitive prices.',
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
