import React from 'react'
import AboutCompany from '../Components/AboutCompany'
import HelloImage from '../Components/HelloImage'
import Test from '../Components/Test'
import man from '../Images/hip-man-1.jpg'
import like from '../Images/like.png'
import smartPhone from '../Images/smartphone.png'
import startup from '../Images/startup.png'
import logo from '../Images/strategy-150x150.png'
import user from '../Images/user.png'
import './Services.css'

const Services = () => {
  return (
    <div className='services'>
      <HelloImage text='Services' />
      <div className="packages firstPackages">
        <img src={logo} alt="" />
        <h5>POPULAR PACKAGES</h5>
        <h2>Our Business Services</h2>
        <div className="subCards">
          <div className="card">
            <img src={smartPhone} alt="smartPhone" />
            <h2>Social Marketing</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              In officiis obcaecati iusto
            </p>
          </div>
          <div className="card">
            <img src={startup} alt="smartPhone" />
            <h2>Startups</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              In officiis obcaecati iusto
            </p>
          </div>
          <div className="card">
            <img src={user} alt="smartPhone" />
            <h2>Business Ideas</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              In officiis obcaecati iusto
            </p>
          </div>
          <div className="card">
            <img src={like} alt="smartPhone" />
            <h2>Development</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              In officiis obcaecati iusto
            </p>
          </div>
        </div>
      </div>
      <div className="careMessage">
        <h5>WE CARE ABOUT YOUR BUSINESS</h5>
        <h2>We Will Help Your Business Growing</h2>
      </div>
      <div className="packages businessPackages">
        <img src={user} alt="" />
        <h5>OUR PACKAGES</h5>
        <h2>Our Business Packages</h2>
        <div className="subCards">
          <div className="card">
            <h1>$39</h1>
            <h3>Premium Package</h3>
            <p>Quisque velit nisi, pretium ut lacinia in, elementum id enim nulla quis lorem ut libero malesuada feugiat.</p>
            <button><span>Order Now</span></button>
          </div>
          <div className="card active">
            <h1>$49</h1>
            <h3>Standard Package</h3>
            <p>Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta business.</p>
            <button><span>Order Now</span></button>
          </div>
          <div className="card">
            <h1>$69</h1>
            <h3>PRO Package</h3>
            <p>Quisque velit nisi, pretium ut lacinia in, elementum id enim vivamus lacinia eget consectetur sed, convallis.</p>
            <button><span>Order Now</span></button>
          </div>
          <div className="card">
            <h1>$99</h1>
            <h3>Unlimited Package</h3>
            <p>Nulla porttitor accumsan tincidunt. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
            <button><span>Order Now</span></button>
          </div>
        </div>
      </div>
      <AboutCompany image = {man}/>
      <Test />
    </div>
  )
}

export default Services