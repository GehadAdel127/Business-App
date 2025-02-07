import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import About from '../Components/About';
import AboutCompany from '../Components/AboutCompany';
import OurServices from '../Components/OurServices';
import RecentProjects from '../Components/RecentProjects';
import Test from '../Components/Test';
import about from '../Images/about.jpg';
import homeImage from '../Images/slider-layer-1.png';
import './Home.css';

const Home = () => {
    const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e; // Get mouse position
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect(); // Get image position and size

        // Calculate the relative position of the mouse within the image
        const x = (clientX - left) / width - 0.5; // Normalize to [-0.5, 0.5]
        const y = (clientY - top) / height - 0.5; // Normalize to [-0.5, 0.5]

        // Move the image in the opposite direction of the mouse
        setImagePosition({ x: -x * 10, y: -y * 10 }); // Adjust multiplier for sensitivity
    };

    const handleMouseLeave = () => {
        // Reset the image position when the mouse leaves
        setImagePosition({ x: 0, y: 0 });
    };

    return (
        <div className='home'>
            <div className="mainContent">
                <div className="right">
                    <img
                        src={homeImage}
                        alt="HomeImage"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            transform: `translate(${imagePosition.x}px, ${imagePosition.y}px)`,
                            transition: 'transform 0.1s ease-out', // Smooth transition
                        }}
                    />
                </div>
                <div className="left">
                    <h5>we are expert team</h5>
                    <h2>We create products that makes people's <span>lives </span>
                        easier & better.</h2>
                    <div className="btn">
                        <button>How it works?</button>
                        <Link to='/about'>Read the full story line</Link>
                    </div>
                </div>
            </div>
            <OurServices />
            <About />
            <AboutCompany image={about} />
            <RecentProjects />
            <Test />
        </div>
    );
};

export default Home;