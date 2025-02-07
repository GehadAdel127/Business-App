import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../Images/personal_gift-1.jpg';
import image4 from '../Images/portfolio10-1.jpg';
import image6 from '../Images/portfolio2-1.jpg';
import image5 from '../Images/portfolio3-1.jpg';
import image3 from '../Images/portfolio7-1.jpg';
import image7 from '../Images/portfolio9-1.jpg';
import presentation from '../Images/presentation.png';
import image2 from '../Images/tick_tock-1-1.jpg';
import './RecentProjects.css';

const RecentProjects = () => {
    const [slidesToShow, setSlidesToShow] = useState(3);
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        { img: image1, title: "Personal gift", description: "Brand Design , Photography" },
        { img: image2, title: "Tik Tok", description: "3D Design , Brand Design" },
        { img: image3, title: "Chair Design", description: "3D Design , Photography" },
        { img: image4, title: "Infinity Brand", description: "Brand Design , Catalog" },
        { img: image5, title: "Personal gift", description: "Brand Design , Photography" },
        { img: image6, title: "Project Stamp", description: "Brand Design" },
        { img: image7, title: "Shilf Of Arts", description: "3D Design , Photography" },
    ];
    const maxIndex = slides.length - slidesToShow;
    const handleNextSlide = () => {
        if (currentSlide < maxIndex) {
            setCurrentSlide((prev) => prev + 1);
        }
    };
    const handlePrevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide((prev) => prev - 1);
        }
    };
    useEffect(() => {
        const updateSlidesToShow = () => {
            if (window.innerWidth < 600) {
                setSlidesToShow(1);
            } else if (window.innerWidth < 900) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(3);
            }
        };
        updateSlidesToShow();
        window.addEventListener("resize", updateSlidesToShow);
        return () => window.removeEventListener("resize", updateSlidesToShow);
    }, []);

    return (
        <div className="recentProjects">
            <div className="header">
                <img src={presentation} alt="presentationIcon" />
                <h5>PROJECTS WE DONE</h5>
                <h2>Our recent creative projects</h2>
                <h4>Let’s check some of our perfect projects.</h4>
            </div>
            <button
                className={`prev ${currentSlide === 0 ? "disabled" : ""}`}
                onClick={handlePrevSlide}
                disabled={currentSlide === 0}
            >
                <span className="material-icons-outlined">arrow_back_ios</span>
            </button>
            <div className="slider">
                <div
                    className="slidesContainer"
                    style={{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }}
                >
                    {slides.map((slide, index) => (
                        <div className="slide" key={index} style={{ width: `${100 / slidesToShow}%` }}>
                            <img src={slide.img} alt={`image${index}`} />
                            <div className="sliderContent">
                                <span className="material-icons-outlined">link</span>
                                <h2>{slide.title}</h2>
                                <p>{slide.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button
                className={`next ${currentSlide === maxIndex ? "disabled" : ""}`}
                onClick={handleNextSlide}
                disabled={currentSlide === maxIndex}
            >
                <span className="material-icons-outlined">arrow_forward_ios</span>
            </button>
            <div className="btn">
                <Link to='/projects'><button>View all recent projects</button></Link>
            </div>
        </div>
    );
};

export default RecentProjects;
