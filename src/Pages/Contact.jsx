import { faLocationDot, faMessage, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import HelloImage from '../Components/HelloImage';
import Test from '../Components/Test';
import './Contact.css';

const Contact = () => {

  return (
    <div className='contact'>
      <HelloImage text='contact' />
      <div className='contactForm'>
        <form className=' contactLeftSide'>
          <h3>Contact Us</h3>
          <label>Your Name (Required)</label>
          <input type="text" required />
          <label>Your Email (Required)</label>
          <input type="email" required />
          <label>Your Message</label>
          <textarea></textarea>
          <div className="btn">
            <button>Send</button>
          </div>
        </form>
        <div className="contactRightSide">
          <h3>Get in touch with us</h3>
          <div className="contactIcon">
            <FontAwesomeIcon icon={faPhone} />
            <div className="contactContent">
              <p>Call us now</p>
              <h3>+20 12345678910</h3>
            </div>
          </div>
          <div className="contactIcon">
            <FontAwesomeIcon icon={faMessage} />
            <div className="contactContent">
              <p>Support email</p>
              <h3>gehad@gmail.com</h3>
            </div>
          </div>
          <div className="contactIcon">
            <FontAwesomeIcon icon={faLocationDot} />
            <div className="contactContent">
              <p>Our address</p>
              <h3>1234,King Street,New York,USA</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="mapContainer">
      <iframe
          title="London Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.182370726!2d-0.10159865000000001!3d51.52864165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1698765432100!5m2!1sen!2sus"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Test/>
    </div>
  )
}

export default Contact