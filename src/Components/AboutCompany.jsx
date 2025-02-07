import React, { useEffect, useState } from 'react';
import icon from '../Images/list.png';
import './AboutCompany.css';

const AboutCompany = ({ image }) => {
    const [prevScrollY, setPrevScrollY] = useState(0);
    const [imageOffset, setImageOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const direction = currentScrollY > prevScrollY ? 0.1 : -0.1;
            setImageOffset((prev) => prev + direction * 0.1);
            setPrevScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollY]);

    return (
        <div className='aboutCompany'>
            <div className="rightSide">
                <img
                    src={image}
                    alt="about_image"
                    style={{
                        transform: `translateY(${imageOffset}px)`,
                        transition: "transform 0.2s linear"
                    }}
                />
            </div>
            <div className="leftSide">
                <div className="heading">
                    <img src={icon} alt="about_icon" />
                    <p>about our company</p>
                </div>
                <h2>Our business process road</h2>
                <div className="lists">
                    <div className="list">
                        <span>01.</span>
                        <div className="content">
                            <h3>Create an Idea</h3>
                            <p>What’s hard is to develop the habits that enable us to come up with great ideas.</p>
                        </div>
                    </div>
                    <div className="list">
                        <span>02.</span>
                        <div className="content">
                            <h3>Complete the Project</h3>
                            <p>You can organize yourself and your team in endless ways.</p>
                        </div>
                    </div>
                    <div className="list">
                        <span>03.</span>
                        <div className="content">
                            <h3>Execution</h3>
                            <p>When it comes to motivating teams, awarding members for good performance.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutCompany;
