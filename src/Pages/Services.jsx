import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import AboutCompany from '../Components/AboutCompany';
import HelloImage from '../Components/HelloImage';
import Test from '../Components/Test';
import man from '../Images/hip-man-1.jpg';
import like from '../Images/like.png';
import smartPhone from '../Images/smartphone.png';
import startup from '../Images/startup.png';
import logo from '../Images/strategy-150x150.png';
import user from '../Images/user.png';
import './Services.css';

const Services = () => {
  return (
    <div className='services'>
      <HelloImage text='Services' />
      <div className="packages firstPackages">
        <LazyLoadImage src={logo} alt="Company Strategy Logo" effect="blur" />
        <h5>POPULAR PACKAGES</h5>
        <h2>Our Business Services</h2>
        <div className="subCards">
          {[
            { img: smartPhone, title: "Social Marketing" },
            { img: startup, title: "Startups" },
            { img: user, title: "Business Ideas" },
            { img: like, title: "Development" }
          ].map((service, index) => (
            <div className="card" key={index}>
              <LazyLoadImage src={service.img} alt={service.title} effect="blur" />
              <h2>{service.title}</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In officiis obcaecati iusto</p>
            </div>
          ))}
        </div>
      </div>
      <div className="careMessage">
        <h5>WE CARE ABOUT YOUR BUSINESS</h5>
        <h2>We Will Help Your Business Growing</h2>
      </div>
      <div className="packages businessPackages">
        <LazyLoadImage src={user} alt="User Icon" effect="blur" />
        <h5>OUR PACKAGES</h5>
        <h2>Our Business Packages</h2>
        <div className="subCards">
          {[
            { price: 39, name: "Premium Package" },
            { price: 49, name: "Standard Package", active: true },
            { price: 69, name: "PRO Package" },
            { price: 99, name: "Unlimited Package" }
          ].map((packageItem, index) => (
            <div className={`card ${packageItem.active ? 'active' : ''}`} key={index}>
              <h1>${packageItem.price}</h1>
              <h3>{packageItem.name}</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button><span>Order Now</span></button>
            </div>
          ))}
        </div>
      </div>
      <AboutCompany image={man} />
      <Test />
    </div>
  );
};

export default Services;
