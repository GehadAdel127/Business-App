import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../Images/icon.png';
import './Footer.css';


const Footer = () => {
  return (
    <footer>
      <div className="content">
        <div className="left">
          <div className="logo">
            <div className="logoIcon">
              <img src={icon} alt="Logo" />
            </div>
            <div className="logoName">
              <h1>xtra</h1>
              <h5>business</h5>
            </div>
          </div>
          <div className="content">
            <p>A company is any entity that engages in business. Companies can be structured in different ways. For example, your company can be a sole proprietorship, a partnership, or a corporation.</p>
          </div>
          <div className="icons">
            <a href="your_facebook_link" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="your_twitter_link" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="your_linkedin_link" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="your_instagram_link" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="your_youtube_link" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
        <div className="right">
          <div className="usefulLinks">
            <h3>useful links</h3>
            <hr />
            <ul className="links">
              <Link to='#'><span className="material-icons-outlined">chevron_right</span><li>privacy policy</li></Link>
              <Link to='#'><span className="material-icons-outlined">chevron_right</span><li>our services</li></Link>
              <Link to='#'><span className="material-icons-outlined">chevron_right</span><li>about company</li></Link>
              <Link to='#'><span className="material-icons-outlined">chevron_right</span><li>forums</li></Link>
              <Link to='#'><span className="material-icons-outlined">chevron_right</span><li>categories</li></Link>
              <Link to='#'><span className="material-icons-outlined">chevron_right</span><li>latest products</li></Link>
            </ul>
          </div>
          <div className="quickAccess">
            <h3>quick access</h3>
            <hr />
            <ul className="links">
              <Link to='#'><span className="material-icons-outlined">chevron_right</span><li>privacy policy</li></Link>
              <Link to='#'><span className="material-icons-outlined">chevron_right</span><li>our services</li></Link>
              <Link to='#'><span className="material-icons-outlined">chevron_right</span><li>about company</li></Link>
              <Link to='#'><span className="material-icons-outlined">chevron_right</span><li>forums</li></Link>
              <Link to='#'><span className="material-icons-outlined">chevron_right</span><li>categories</li></Link>
              <Link to='#'><span className="material-icons-outlined">chevron_right</span><li>latest products</li></Link>
            </ul>
          </div>
          <div className="moreLinks">
            <h3>more links</h3>
            <hr />
            <ul className="links">
              <Link to='#'><span className="material-icons-outlined">chevron_right</span><li>privacy policy</li></Link>
              <Link to='#'><span className="material-icons-outlined">chevron_right</span><li>our services</li></Link>
              <Link to='#'><span className="material-icons-outlined">chevron_right</span><li>about company</li></Link>
              <Link to='#'><span className="material-icons-outlined">chevron_right</span><li>forums</li></Link>
              <Link to='#'><span className="material-icons-outlined">chevron_right</span><li>categories</li></Link>
              <Link to='#'><span className="material-icons-outlined">chevron_right</span><li>latest products</li></Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyRight">
        <p>© 2025 by XTRA Theme, Powered by Gehad</p>
      </div>
    </footer>
  );
}

export default Footer;
