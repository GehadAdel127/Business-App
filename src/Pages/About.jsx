import React, { useEffect, useRef, useState } from 'react';
import HelloImage from '../Components/HelloImage';
import Test from '../Components/Test';
import about2 from '../Images/about (1).jpg';
import icon from '../Images/group.png';
import illustration from '../Images/illustration.png';
import like from '../Images/like.png';
import presentation from '../Images/presentation.png';
import smartPhone from '../Images/smartphone.png';
import user from '../Images/user.png';
import './About.css';

const About = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const openVideo = () => setIsVideoOpen(true);
  const closeVideo = () => setIsVideoOpen(false);
  const [imageOffset, setImageOffset] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setImageOffset(scrollY * 0.01);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const [years, setYears] = useState(0);
  const [members, setMembers] = useState(0);
  const [customers, setCustomers] = useState(0);
  const numberRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateNumbers();
        }
      },
      { threshold: 0.5 }
    );
    const numberElement = numberRef.current;
    if (numberElement) observer.observe(numberElement);

    return () => {
      if (numberElement) observer.unobserve(numberElement);
    };
  }, [isVisible]);

  const animateNumbers = () => {
    const duration = 1500;
    const startTime = performance.now();
    const targetValues = { years: 16, members: 30, customers: 520 };
    const updateNumbers = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      setYears(Math.floor(progress * targetValues.years));
      setMembers(Math.floor(progress * targetValues.members));
      setCustomers(Math.floor(progress * targetValues.customers));
      if (progress < 1) {
        requestAnimationFrame(updateNumbers);
      }
    };
    requestAnimationFrame(updateNumbers);
  };

  return (
    <div className='about'>
      <HelloImage text='About' />
      <div className="aboutContent">
        <div className="topRight">
          <img src={icon} alt=""/>
          <h5>ABOUT OUR COMPANY</h5>
          <h2>We are a team of expert people with creative ideas</h2>
          <p>
            Writers, designers, SEO experts, and web designers all work together
            to create a single piece of content.
          </p>
          <div className="count" ref={numberRef}>
            <div className="experience">
              <div className="oval">{years}+</div>
              Years of Experience
            </div>
            <div className="members">
              <div className="oval">{members}+</div>
              Expert Members
            </div>
            <div className="customers">
              <div className="oval">{customers}+</div>
              Customers
            </div>
          </div>
        </div>
        <div className="topLeft">
          <img
            src={illustration}
            alt=""
            style={{
              transform: `translateY(${imageOffset}px)`,
              transition: "transform 0.3s ease-out"
            }}
          />
        </div>
      </div>
      <div className="projects">
        <img src={presentation} alt="" />
        <h5>PROJECTS WE DONE</h5>
        <h2>Our recent creative projects</h2>
        <h4>Let’s check some of our perfect projects.</h4>
        {!isVideoOpen && (
          <div className="backgroundImageContainer">
            <img src={about2} alt="Background" className="background-image" />
            <button className="openVideoButton" onClick={openVideo}>
              <span className="material-icons-outlined icon">play_arrow</span>
              Watch Our Video
            </button>
          </div>
        )}
        {isVideoOpen && (
          <div className="videoPopup">
            <div className="videoPopupContent">
              <button className="closeButton" onClick={closeVideo}>X</button>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
        <div className="aboutCard">
          <div className="card">
            <img src={smartPhone} alt="smartPhone" />
            <div className="content">
              <h2>Conversations</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="card">
            <img src={user} alt="smartPhone" />
            <div className="content">
              <h2>Creative Ideas</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="card">
            <img src={like} alt="smartPhone" />
            <div className="content">
              <h2>Make it Possible!</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
        <div className="newProject">
          <div className="left">
            <h2>Start your project with 30% Off today!</h2>
            <h4>We have a limited-time offer on new projects ...</h4>
          </div>
          <div className="right">
            <button><span>Start your new project</span></button>
          </div>
        </div>
      </div>
      <Test />
    </div>
  );
};

export default About;
