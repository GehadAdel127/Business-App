import React, { useState } from 'react';
import chat from '../Images/chat.png';
import logo1 from '../Images/logo-1.jpg';
import logo2 from '../Images/logo-2.jpg';
import logo3 from '../Images/logo-3.jpg';
import logo4 from '../Images/logo-4.jpg';
import logo5 from '../Images/logo-5.jpg';
import man1 from '../Images/man1.jpg';
import man2 from '../Images/man2.jpg';
import quote from '../Images/quote.png';
import woman from '../Images/woman.jpg';
import './Test.css';

const reviews = [
    {
        id: 1,
        name: "John Doe",
        image: man1,
        review: "This is an amazing product! Highly recommend it to everyone.",
    },
    {
        id: 2,
        name: "Jane Smith",
        image: man2,
        review: "Fantastic service and quality. Will definitely come back!",
    },
    {
        id: 3,
        name: "Alice Johnson",
        image: woman,
        review: "A wonderful experience from start to finish.",
    },
];

const Test = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const handleDotClick = (index) => {
        if (currentIndex !== index) {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentIndex(index);
                setIsAnimating(false);
            }, 100);
        }
    };
    return (
        <div className="test">
            <div className="testContent">
                <div className="left">
                    <img src={chat} alt="chat" />
                    <h5>Our Testimonials</h5>
                    <h2>Our happy customers</h2>
                    <p>
                        The testimonials feature lets you collect kudos from customers and clients
                        and display them on your site in different ways to add credibility and a
                        professional feel.
                    </p>
                </div>
                <div className="right">
                    <div className="customerRreviews">
                        <img className='quote' src={quote} alt="quote" />
                        <div className={`reviewCard ${isAnimating ? 'fade-out' : 'fade-in'}`}>
                            <p>{reviews[currentIndex].review}</p>
                            <h3>{reviews[currentIndex].name}</h3>
                            <img src={reviews[currentIndex].image} alt={reviews[currentIndex].name} className="customerImage" />
                        </div>
                    </div>
                    <div className="dots">
                        {reviews.map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => handleDotClick(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="bottom">
                <hr />
                <div className="logos">
                    <div className="logo logo1">
                        <img src={logo1} alt="Business Solutions" />
                    </div>
                    <div className="logo logo2">
                        <img src={logo2} alt="Speedy Business" />
                    </div>
                    <div className="logo logo3">
                        <img src={logo3} alt="Penguin Business" />
                    </div>
                    <div className="logo logo4">
                        <img src={logo4} alt="Live Talk" />
                    </div>
                    <div className="logo logo5">
                        <img src={logo5} alt="Enovo Business" />
                    </div>
                </div>
                <div className="readyBox">
                    <div className="content">
                        <h2><span>Ready? </span>Start your own business</h2>
                        <h3>We are here to start your new project and finish it soon</h3>
                    </div>
                    <div className="btn">
                        <button>contact us today</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Test;
