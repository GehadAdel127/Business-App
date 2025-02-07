import { faTwitter, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { faCube, faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import group from '../Images/group.png';
import woman from '../Images/woman-min.png';
import './About.css';

const About = () => {
    return (
        <div className='aboutHome'>
            <div className="leftSide">
                <img src={woman} alt="woman" />
            </div>
            <div className="rightSide">
                <div className="rightSideIcon">
                    <img src={group} alt="about" />
                    <p>about our company</p>
                </div>
                <div className="headAdd">
                    <h2>We are team of expert people with creativity ideas</h2>
                    <p>As an example, let’s take the content marketing process, It’s a process you’ll find in every Marketing Department out there.</p>
                </div>
                <div className="icons">
                    <div className="icon">
                        <FontAwesomeIcon icon={faPaintBrush} />
                        <div className="iconContent">
                            <h2>Designing</h2>
                            <p>Expert in photoshop</p>
                        </div>
                    </div>
                    <div className="icon">
                        <FontAwesomeIcon icon={faCube} />
                        <div className="iconContent">
                            <h2>Development</h2>
                            <p>Any CMS you want</p>
                        </div>
                    </div>
                    <div className="icon">
                        <FontAwesomeIcon icon={faTwitter} />
                        <div className="iconContent">
                            <h2>Social Media</h2>
                            <p>Increase your likes</p>
                        </div>
                    </div>
                    <div className="icon">
                        <FontAwesomeIcon icon={faWordpress} />
                        <div className="iconContent">
                            <h2>WordPress</h2>
                            <p>Themes and Plugins</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
