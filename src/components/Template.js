import React ,  { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import './Template.css';

export function MyComponent() {
    const [rating, setRating] = useState(0)
    const [lavel,setLavel]=useState(0)
  
    // Catch Rating value
    const handleRating = (rate: number) => {
      setRating(rate)
  
      // other logic
    }
    // Optinal callback functions
    const onPointerEnter = () => {
        setLavel(5)
    }


    const onPointerLeave = () => {}
    const onPointerMove = (value: number, index: number) => console.log(value, index)
  
    return (
      <div className='ClintReviews'>
        <Rating
          onClick={handleRating}
          onPointerEnter={onPointerEnter}
          onPointerLeave={onPointerLeave}
          onPointerMove={onPointerMove}
          /* Available Props */
        />
         <p className="rating">{rating}/{lavel}</p>
      </div>
    )
  }



const About = () => {
    return (
        <div className="head1">
            <h1 className='h1tag'>About Us</h1>
            <div className="">
                <img className='Rectangle1' src="./image/Rectangle 1.png" alt="" />
                <p className='container parra1'>Welcome to Just Gyde, your all-in-one platform for essential services in healthcare, education, finance, and entertainment. Our mission is to empower communities by making these services easily accessible and user-friendly.
                    Who We Are Just Gyde is dedicated to improving lives by bridging gaps in essential services. Our passionate team works tirelessly to bring you innovative solutions that simplify everyday life.
                    Our Vision We strive for a world where everyone has equal access to vital services, leading to healthier, more educated, financially stable, and enjoyable lives.
                </p>
            </div>
        </div>
    )
}

const Services = () => {
    return (
        <div className="container head2">
            <h1 className='h1tag'>Our Services</h1>
            <div className="ourServicesimg">
                <img className='educationImg' src="./image/panting.jpg" alt="" />
                <div className="ourServices">
                    <h3 className='serviceHeading'>Educational Service</h3>
                    <p className='parraEducational'>At Just Gyde, we believe in the Right to Education for all, ensuring every student has access to quality education. We help students secure free education opportunities, breaking down financial barriers to learning. Our platform facilitates mediation between schools and colleges, helping students find the best academic institutions. We provide resources and support to navigate the education system effectively. Our services aim to create a more equitable education landscape. By connecting students with scholarships and financial aid, we empower them to reach their full potential. Just Gyde is dedicated to fostering educational growth and opportunities for all. Join us in making education accessible and achievable for every learner.
                    </p>
                </div>
            </div>
        </div>
    )
}
const ClintReviews = () => {
    return (
        <div className="container head7">

            <div className="card">
                <div className="row">
                    <div className="clintReviews"><img src="./image/vinay.png" alt="" />
                        <div className="nameLocation">
                            <h3>Vinay</h3>
                            <p><img className='location' src="./image/location.png" alt="" /> Delhi</p>
                        </div>
                        <div className="reviews">
                            {/* <img className="review" src="./image/reviews.png" alt="" /> */}
                            <MyComponent/>
                           
                        </div>
                    </div>
                    <div className="clintReviews1">
                        <h3 className='cr1'>Laundry Service</h3>
                        <div className="d-flex justify-content-start m-0 p-0">
                            {/* <img className='lArrow' src="./image/lArrow.png" alt="" /> */}
                            <p className='dr1'> I recently had the pleasure of using Fresh & Clean Laundry Service, and I couldn't be happier with the experience. From start to finish, their service was impeccable and truly exceeded my expectations. The staff was incredibly friendly and helpful, making the entire process smooth </p>
                        </div>
                    </div>
                </div>
            </div>



            <div className="card">
                <div className="row">
                    <div className="clintReviews"><img src="./image/vinay.png" alt="" />
                        <div className="nameLocation">
                            <h3>Vinay</h3>
                            <p><img className='location' src="./image/location.png" alt="" /> Delhi</p>
                        </div>
                        <div className="reviews">
                        <MyComponent />
                            {/* <img className="review" src="./image/reviews.png" alt="" /> */}
                            {/* <p className="rating">4/5</p> */}
                        </div>
                    </div>
                    <div className="clintReviews1">
                        <h3 className='cr1'>Laundry Service</h3>
                        {/* <img className='lArrow' src="./image/rArrow.png" alt="" /> */}
                        <p className='dr1'> I recently had the pleasure of using Fresh & Clean Laundry Service, and I couldn't be happier with the experience. From start to finish, their service was impeccable and truly exceeded my expectations. The staff was incredibly friendly and helpful, making the entire process smooth </p>
                    </div>
                </div>
            </div>

        </div>

    )
}


const Template = () => {
    return (
        <div>
            <About />
            <Services />
            <div className="container head3">
                <div className="laundryServices">
                    <div className="ourServiceslaundry">
                        <h3 className='serviceHeading'>Entertainment Service</h3>
                        <p className='parra2'>Just Gyde brings excitement to your life with a wide array of entertainment services. We have partnerships with PVR and other entities to offer exclusive deals and rewards. Our platform allows users to earn and redeem coins for various entertainment activities. Enjoy movies, events, and more with our seamless booking and reward system. We aim to make entertainment accessible and affordable for everyone. Our services include discounts on movie tickets, event passes, and more. Just Gyde enhances your leisure time by providing curated entertainment experiences. Dive into a world of fun and relaxation with Just Gyde, where entertainment meets convenience.  </p>
                    </div>
                    <img className='Rectangle3' src="./image/entertenment.jpg" alt="" />
                </div>
            </div>
            <div className="container head4">
                <div className="ourCleansingimg">
                    <img className='Rectangle4' src="./image/finance.jpg" alt="" />
                    <div className="ourCleansing">
                        <h3 className='serviceHeading'> Financial Service</h3>
                        <p className='parraEducational'>Just Gyde is committed to helping individuals achieve their financial goals through comprehensive support and resources. We offer job placement services to connect the unemployed with meaningful employment opportunities. Our platform provides tools and advice for financial planning and goal setting. We work with various partners to create job opportunities for everyone, regardless of their background. By promoting financial literacy, we empower individuals to make informed financial decisions. Our services include resume building, interview preparation, and job matching. Just Gyde aims to reduce unemployment and promote economic stability within communities. Let us help you navigate your financial journey with confidence and success.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container head5">
                <div className="medcialServices">
                    <div className="ourmedcialServices">
                        <h3 className='serviceHeading'>Medical Service</h3>
                        <p className='parra2'>Just Gyde offers a robust range of medical services designed to cater to urgent and everyday health needs. We provide fast and reliable ambulance services, ensuring immediate assistance in emergencies. Our blood bank services make it easy to find and donate blood, helping to save lives. Comprehensive laboratory services are available for accurate and timely medical testing. Soon, we'll be launching a doctor consultation service, bringing expert medical advice right to your doorstep. We are committed to improving community health with accessible and efficient medical solutions. Our platform ensures that all health services are just a click away. Trust Just Gyde for your complete medical care needs.
                        </p>
                    </div>
                    <img className='Rectangle5' src="./image/Rectangle 5.png" alt="" />
                </div>
            </div>
            <div className=" head6">
                <h1 className='h1tag'>Reviews</h1>
            </div>
            <ClintReviews />
        </div>
    )
}

export default Template
