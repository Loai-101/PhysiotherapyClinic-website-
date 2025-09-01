import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-logo">
          <Link to="/" className="header-logo-link">
                          <img 
                src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1756705328/360_F_292343751_BescUQoFdnvVkcXeWJRJsEwbvQ23zHU0_zjjcy7.jpg" 
                alt="Physiotherapy Clinic Logo" 
                className="header-logo-image"
              />
            <h1 className="header-title">Physiotherapy Clinic</h1>
          </Link>
        </div>
        <nav className="header-navigation">
          <ul className="header-nav-list">
            <li className="header-nav-item">
              <Link
                to="/"
                className={`header-nav-link ${location.pathname === '/' ? 'header-nav-link-active' : ''}`}
              >
                Home
              </Link>
            </li>
            <li className="header-nav-item">
              <Link
                to="/services"
                className={`header-nav-link ${location.pathname === '/services' ? 'header-nav-link-active' : ''}`}
              >
                Services
              </Link>
            </li>
            <li className="header-nav-item">
              <Link
                to="/insurance"
                className={`header-nav-link ${location.pathname === '/insurance' ? 'header-nav-link-active' : ''}`}
              >
                Insurance
              </Link>
            </li>
            <li className="header-nav-item">
              <Link
                to="/team"
                className={`header-nav-link ${location.pathname === '/team' ? 'header-nav-link-active' : ''}`}
              >
                Team
              </Link>
            </li>
            <li className="header-nav-item">
              <Link
                to="/contact"
                className={`header-nav-link ${location.pathname === '/contact' ? 'header-nav-link-active' : ''}`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
