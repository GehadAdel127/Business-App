import { faFacebook, faInstagram, faLinkedin, faPinterest, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ProjectLinks = () => {
    return (
        <div className="projectLinks">
            <span className="iconWrapper">
                <FontAwesomeIcon icon={faFacebook} />
            </span>
            <span className="iconWrapper">
                <FontAwesomeIcon icon={faInstagram} />
            </span>
            <span className="iconWrapper">
                <FontAwesomeIcon icon={faPinterest} />
            </span>
            <span className="iconWrapper">
                <FontAwesomeIcon icon={faLinkedin} />
            </span>
            <span className="iconWrapper">
                <FontAwesomeIcon icon={faWhatsapp} />
            </span>
            <span className="iconWrapper">
                <FontAwesomeIcon icon={faTelegram} />
            </span>
        </div>
    );
};

export default ProjectLinks;
