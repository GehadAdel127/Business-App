import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import HelloImage from '../Components/HelloImage';
import Pagination from '../Components/Pagination';
import image1 from '../Images/personal_gift-1.jpg';
import image4 from '../Images/portfolio10-1.jpg';
import image6 from '../Images/portfolio2-1.jpg';
import image5 from '../Images/portfolio3-1.jpg';
import image8 from '../Images/portfolio6-1-600x727.jpg';
import image3 from '../Images/portfolio7-1.jpg';
import image7 from '../Images/portfolio9-1.jpg';
import image2 from '../Images/tick_tock-1-1.jpg';
import './Projects.css';

const Projects = () => {
    const slides = [
        { id: 1, img: image1, title: "Personal gift", description: "Brand Design, Photography" },
        { id: 2, img: image2, title: "Tik Tok", description: "3D Design, Brand Design" },
        { id: 3, img: image3, title: "Chair Design", description: "3D Design, Photography" },
        { id: 4, img: image4, title: "Infinity Brand", description: "Brand Design, Catalog" },
        { id: 5, img: image5, title: "Personal gift", description: "Brand Design, Photography" },
        { id: 6, img: image6, title: "Project Stamp", description: "Brand Design" },
        { id: 7, img: image7, title: "Shilf Of Arts", description: "3D Design, Photography" },
        { id: 8, img: image8, title: "Shilf Of Arts", description: "3D Design, Photography" },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const slidesPerPage = 6;
    const indexOfLastSlide = currentPage * slidesPerPage;
    const indexOfFirstSlide = indexOfLastSlide - slidesPerPage;
    const currentSlides = slides.slice(indexOfFirstSlide, indexOfLastSlide);
    const totalPages = Math.ceil(slides.length / slidesPerPage);

    return (
        <div className='projectsPage'>
            <HelloImage text='Projects' />
            <div className="projectsSlider">
                {currentSlides.map((slide) => (
                    <Link to={`/projects/${slide.id}`} key={slide.id}>
                        <div className="projectsSlide">
                            <LazyLoadImage
                                src={slide.img}
                                alt={slide.title}
                                effect="blur"
                                className="lazy-image"
                            />
                            <div className="projectsSliderContent">
                                <h2>{slide.title}</h2>
                                <span className="material-icons-outlined">view_in_ar</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </div>
    );
};

export default Projects;
