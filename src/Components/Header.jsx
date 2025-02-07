import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import icon from '../Images/icon.png';
import './Header.css';

const Header = () => {
    const [isPagesOpen, setIsPagesOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const isActive = (paths) => {
        if (Array.isArray(paths)) {
            return paths.includes(location.pathname) ? 'active' : '';
        }
        return location.pathname === paths ? 'active' : '';
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location.pathname]);

    const handleLinkClick = () => {
        setIsMenuOpen(false);
        setIsPagesOpen(false);
    };

    return (
        <header className={`${isScrolled ? 'sticky' : ''} ${isMenuOpen ? 'open' : ''}`}>
            {isMenuOpen && <div className="overlay" onClick={() => setIsMenuOpen(false)}></div>}
            <div className="logo">
                <div className="logoIcon">
                    <img src={icon} alt="logo" />
                </div>
                <div className="logoName">
                    <h1>xtra</h1>
                    <h5>business</h5>
                </div>
            </div>
            <button
                className="menuBtn"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-expanded={isMenuOpen}
            >
                {isMenuOpen ?
                    <span className="material-icons-outlined closeBtn">close</span> :
                    <span className="material-icons-outlined menuHeadBtn">menu</span>
                }
            </button>
            <nav className="links">
                <ul className="linksMenu">
                    <li><Link to="/" className={isActive('/')} onClick={handleLinkClick}>home</Link></li>
                    <li><Link to="/about" className={isActive('/about')} onClick={handleLinkClick}>about</Link></li>
                    <li><Link to="/services" className={isActive('/services')} onClick={handleLinkClick}>services</Link></li>
                    <li><Link to="/blog" className={isActive('/blog')} onClick={handleLinkClick}>blog</Link></li>
                    <li className={`dropdownEle ${isActive(['/faq', '/shop', '/cart', '/myaccount'])}`}
                        onClick={() => setIsPagesOpen(!isPagesOpen)}>
                        <span className={`text ${isActive(['/faq', '/shop', '/cart', '/myaccount'])}`}>pages
                            <span className="material-icons-outlined">keyboard_arrow_down</span>
                        </span>
                        {isPagesOpen && (
                            <ul className="dropdown subLinks">
                                <li><Link to="/faq" onClick={handleLinkClick}>faq</Link></li>
                                <li><Link to="/shop" onClick={handleLinkClick}>shop</Link></li>
                                <li><Link to="/cart" onClick={handleLinkClick}>cart</Link></li>
                                <li><Link to="/myaccount" onClick={handleLinkClick}>my account</Link></li>
                            </ul>
                        )}
                    </li>
                    <li><Link to="/contact" className={isActive('/contact')} onClick={handleLinkClick}>contact</Link></li>
                </ul>
            </nav>
            <div className="btn">
                <Link to="/contact"><button>free consultation</button></Link>
            </div>
        </header>
    );
};

export default Header;
